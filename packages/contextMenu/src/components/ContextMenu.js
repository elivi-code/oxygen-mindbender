import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { Manager, Popper } from 'react-popper';
import PubSub from 'pubsub-js';
import noop from 'lodash.noop';

import { THEME_NAME, CONTEXT_MENU_SHOW, CONTEXT_MENU_HIDE } from '../constants';
import * as Styled from '../styled';
import VirtualReference from '../utils/VirtualReference';

const registerHandlers = handlers => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.addEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

const unregisterHandlers = handlers => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.removeEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

export class ContextMenu extends Component {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    testId: PropTypes.string,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    customCloseHandlers: PropTypes.array,
    onInsideClick: PropTypes.func,
  };
  static defaultProps = {
    testId: 'CONTEXT_MENU',
    onShow: noop,
    onHide: noop,
    customCloseHandlers: [],
    onInsideClick: noop,
  };
  constructor(props) {
    super(props);
    const { customCloseHandlers } = this.props;

    this.eventHandlers = [
      {
        target: document.body,
        eventName: 'click',
        callback: this.hide,
        capture: true,
      },
      {
        target: document.body,
        eventName: 'contextmenu',
        callback: this.hide,
        capture: true,
      },
      {
        target: window,
        eventName: 'resize',
        callback: this.hide,
        capture: false,
      },
      {
        target: window,
        eventName: 'scroll',
        callback: this.hide,
        capture: false,
      },
      ...customCloseHandlers,
    ];
  }
  state = {
    isVisible: false,
  };

  componentDidMount() {
    this.showToken = PubSub.subscribe(
      CONTEXT_MENU_SHOW,
      (event, { id: eventId, x, y }) => {
        const { id } = this.props;

        if (id !== eventId) {
          return;
        }
        this.show({ x, y });
      },
    );

    this.hideToken = PubSub.subscribe(
      CONTEXT_MENU_HIDE,
      (event, { id: eventId }) => {
        const { id } = this.props;

        if (id !== eventId) {
          return;
        }
        this.hide();
      },
    );
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.showToken);
    PubSub.unsubscribe(this.hideToken);
    unregisterHandlers(this.eventHandlers);

    this.virtualReference = undefined;
    this.showToken = undefined;
    this.hideToken = undefined;
  }

  show = ({ x, y }) => {
    const { onShow } = this.props;

    registerHandlers(this.eventHandlers);
    this.virtualReference = new VirtualReference(x, y);
    onShow();
    this.setState({ isVisible: true });
  };

  hide = () => {
    const { onHide } = this.props;
    const { isVisible } = this.state;

    unregisterHandlers(this.eventHandlers);

    if (isVisible) {
      this.wrapper(() => {
        onHide();
        this.setState({
          isVisible: false,
        });
      });
    }
  };

  virtualReference = undefined;
  showToken = undefined;
  hideToken = undefined;
  wrapper = (window.requestAnimationFrame || window.setTimeout).bind(window);

  render() {
    const {
      theme,
      children,
      onShow,
      onHide,
      onInsideClick,
      testId,
      ...otherProps
    } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }

    return (
      <Manager>
        <Popper
          referenceElement={this.virtualReference}
          placement="bottom-start"
          positionFixed
        >
          {({ ref, style }) => (
            <ThemeProvider theme={theme}>
              <Styled.ContextMenu
                onClick={onInsideClick}
                {...otherProps}
                ref={ref}
                style={style}
                {...getTestAttributes(testId)}
              >
                {children}
              </Styled.ContextMenu>
            </ThemeProvider>
          )}
        </Popper>
      </Manager>
    );
  }
}

export default withTheme(ContextMenu, THEME_NAME);

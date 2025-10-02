import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import PubSub from 'pubsub-js';
import { PoseGroup } from 'react-pose';
import { ToastStack, Toast } from '@8x8/oxygen-toast';
import { withTheme } from '@8x8/oxygen-config';

import ToasterWrapper from '../styled/ToasterWrapper';
import * as events from '../constants/events';
import { getConfig } from '../config';

class Toaster extends Component {
  static propTypes = {
    /**
     * Toast theme
     */
    theme: PropTypes.object,
  };

  state = {
    toasts: [],
  };

  componentDidMount() {
    this.addSubscriptionToken = PubSub.subscribe(
      events.ADD_TOAST,
      this.addToast.bind(this),
    );
    this.removeSubscriptionToken = PubSub.subscribe(
      events.REMOVE_TOAST,
      this.removeToast.bind(this),
    );
    this.removeAllSubscriptionToken = PubSub.subscribe(
      events.REMOVE_ALL,
      this.removeAllToasts.bind(this),
    );
    this.configUpdateSubscriptionToken = PubSub.subscribe(
      events.CONFIG_UPDATE,
      () => {
        this.stackSize = getConfig().stackSize;
      },
    );
    this.stackSize = getConfig().stackSize;
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.addSubscriptionToken);
    PubSub.unsubscribe(this.removeSubscriptionToken);
    PubSub.unsubscribe(this.removeAllSubscriptionToken);
    PubSub.unsubscribe(this.configUpdateSubscriptionToken);
  }

  addSubscriptionToken = undefined;
  removeSubscriptionToken = undefined;
  removeAllSubscriptionToken = undefined;
  configUpdateSubscriptionToken = undefined;
  stackSize = undefined;

  addToast(event, toast) {
    const { toasts } = this.state;
    const toastIndex = toasts.findIndex(t => toast.id === t.id);

    // remove toast when stack size limit is reached and it's not opened yet
    if (toasts.length === this.stackSize && toastIndex === -1) {
      this.removeToast(undefined, toasts[0].id);
    }

    if (toastIndex > -1) {
      // if toast is already opened
      toasts[toastIndex].expirationTimeout.clear(); // reset toast timer
      toasts[toastIndex] = { ...toasts[toastIndex], ...toast };
      this.setState({ toasts });
    } else {
      this.setState(prevState => ({
        toasts: [...prevState.toasts, toast],
      }));
    }
  }

  removeToast(event, toastId) {
    this.state.toasts.find(toast => toast.id === toastId)?.onClose?.();

    this.setState(prevState => ({
      toasts: prevState.toasts.filter(toast => toast.id !== toastId),
    }));
  }

  removeAllToasts() {
    this.state.toasts.forEach(toast => {
      toast.onClose?.();
    });

    this.setState({
      toasts: [],
    });
  }

  renderToasts() {
    return this.state.toasts.map(toast => (
      <Toast
        size={toast.size}
        type={toast.type}
        actions={toast.actions}
        hideCloseControl={toast.hideCloseControl}
        onCloseControlClick={() => toast.close()}
        onMouseEnter={() => toast.pauseExpirationTimeout()}
        onMouseLeave={() => toast.resumeExpirationTimeout()}
        key={toast.id}
        theme={toast.theme}
        title={toast.title}
        closeButtonLabel={toast.closeButtonLabel}
        description={toast.description}
      >
        {toast.content}
      </Toast>
    ));
  }

  render() {
    const { size, targetNode } = getConfig();
    const { theme } = this.props;

    return ReactDOM.createPortal(
      <ThemeProvider theme={theme}>
        <ToasterWrapper size={size}>
          <ToastStack>
            <PoseGroup>{this.renderToasts()}</PoseGroup>
          </ToastStack>
        </ToasterWrapper>
      </ThemeProvider>,
      targetNode,
    );
  }
}

export default withTheme(Toaster, 'toast');

export { Toaster };

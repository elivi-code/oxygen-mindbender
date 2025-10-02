import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { show } from '../utils';

export default class ContextMenuTrigger extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onContextMenu: PropTypes.func,
    testId: PropTypes.string,
  };

  static defaultProps = {
    onContextMenu: noop,
    testId: 'CONTEXT_MENU_TRIGGER',
  };

  onWrapperContextMenu = event => {
    const { id, onContextMenu } = this.props;

    event.preventDefault();

    const { clientX, clientY } = event;

    show(id, { x: clientX, y: clientY });

    onContextMenu();
  };

  render() {
    const { testId, children } = this.props;
    const newChild = React.cloneElement(children, {
      onContextMenu: this.onWrapperContextMenu,
      testId,
    });

    return newChild;
  }
}

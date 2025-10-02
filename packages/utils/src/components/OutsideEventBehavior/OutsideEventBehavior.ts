import * as React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

type Props = {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
};

class OutsideEventBehavior extends React.Component<Props> {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  };
  static defaultProps: Props = {
    children: undefined,
    onClick: undefined,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickEvent, {
      capture: true,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickEvent, {
      capture: true,
    });
  }

  handleClickEvent = (event: MouseEvent) => {
    const el = findDOMNode(this); // eslint-disable-line react/no-find-dom-node

    if (
      !this.props.onClick ||
      !el ||
      (event.target instanceof Node && el.contains(event.target)) // eslint-disable-line no-undef
    ) {
      return;
    }

    this.props.onClick(event);
  };

  render() {
    return this.props.children;
  }
}

export default OutsideEventBehavior;

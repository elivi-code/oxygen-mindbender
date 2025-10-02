import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { propTypes, defaultProps } from './Modal.props';
import ModalPortal from './ModalPortal';
import { MODAL_SIZE } from '../constants';

class Modal extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const { targetNode, ...props } = this.props;

    return ReactDOM.createPortal(<ModalPortal {...props} />, targetNode);
  }
}

export default Modal;

export { MODAL_SIZE };

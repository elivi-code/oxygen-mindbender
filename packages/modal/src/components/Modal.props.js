import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { MODAL_SIZE } from '../constants';

export const propTypes = {
  targetNode: PropTypes.oneOfType([
    PropTypes.instanceOf(window.Element),
    PropTypes.element,
  ]),
  isVisible: PropTypes.bool,
  hasShadow: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
  allowOutsideClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  disableAutoFocus: PropTypes.bool, // deprecated
  size: PropTypes.oneOf(Object.values(MODAL_SIZE)),
  width: PropTypes.string,
  height: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.any,
  testId: PropTypes.string,
  theme: PropTypes.object,
  modalProps: PropTypes.object,
};

export const defaultProps = {
  targetNode: window.document.body,
  isVisible: true,
  hasShadow: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: false,
  allowOutsideClick: undefined,
  disableAutoFocus: false, // deprecated
  size: MODAL_SIZE.MEDIUM,
  width: undefined,
  height: undefined,
  onClose: noop,
  children: null,
  testId: 'MODAL',
  theme: {},
  modalProps: {},
};

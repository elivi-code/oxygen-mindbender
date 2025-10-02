var _excluded = ["children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';
import FooterContainer from '../styled/FooterContainer';
import { MODAL_FOOTER_ALIGN } from '../constants';
var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children,
    passThroughProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(FooterContainer, passThroughProps, children);
};
ModalFooter.propTypes = {
  align: PropTypes.oneOf(Object.values(MODAL_FOOTER_ALIGN)),
  children: PropTypes.node,
  hasBorderTop: PropTypes.bool,
  hasButtonSpacing: PropTypes.bool,
  isSmall: PropTypes.bool,
  modalHasContent: PropTypes.bool,
  testId: PropTypes.string,
  theme: PropTypes.object,
  __TYPE: PropTypes.string
};
ModalFooter.defaultProps = {
  align: MODAL_FOOTER_ALIGN.RIGHT,
  children: null,
  hasBorderTop: false,
  hasButtonSpacing: true,
  isSmall: false,
  modalHasContent: true,
  testId: 'MODAL_FOOTER',
  __TYPE: 'ModalFooter'
};
export default withTheme(ModalFooter, 'modal');
export { ModalFooter, MODAL_FOOTER_ALIGN };
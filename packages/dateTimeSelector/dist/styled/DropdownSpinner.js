var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spinner } from '@8x8/oxygen-loaders';
export var OverlayCentered = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 100%;\n  min-width: 282px;\n  padding: 24px 0;\n"])));
export var DropdownSpinner = function DropdownSpinner(_ref) {
  var loadingMessage = _ref.loadingMessage;
  return /*#__PURE__*/React.createElement(OverlayCentered, null, /*#__PURE__*/React.createElement(Spinner, {
    size: "small",
    text: loadingMessage
  }));
};
DropdownSpinner.propTypes = {
  loadingMessage: PropTypes.string
};
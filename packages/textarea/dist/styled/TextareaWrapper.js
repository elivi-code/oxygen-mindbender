var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { getColor, getBorderColor, getFocusedBorderColor, getBackgroundColor, getTextareaBorderWidth, getTextareaBorderRadius, getPadding } from '../utils';
var TextareaWrapper = styled.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  font-style: ", ";\n  font-weight: ", ";\n  letter-spacing: ", ";\n  line-height: ", ";\n  color: ", ";\n  -webkit-text-fill-color: ", ";\n  background: ", ";\n  border: solid ", ";\n  border-width: ", ";\n  border-radius: ", ";\n  box-sizing: border-box;\n  width: 100%;\n  padding: ", ";\n  margin: ", ";\n  resize: ", ";\n  transition: border-color ease-in\n    ", ";\n\n  &:focus {\n    outline: 0;\n    border-color: ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n    -webkit-text-fill-color: ", ";\n  }\n  cursor: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.textareaFontFamily;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.textareaFontSize;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.textareaFontStyle;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.textareaFontWeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.textareaLetterSpacing;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.textareaLineHeight;
}, getColor, getColor, getBackgroundColor, getBorderColor, function (_ref7) {
  var theme = _ref7.theme,
    readOnly = _ref7.readOnly;
  return getTextareaBorderWidth({
    theme: theme,
    readOnly: readOnly
  });
}, function (_ref8) {
  var theme = _ref8.theme,
    readOnly = _ref8.readOnly;
  return getTextareaBorderRadius({
    theme: theme,
    readOnly: readOnly
  });
}, getPadding, function (_ref9) {
  var theme = _ref9.theme,
    readOnly = _ref9.readOnly;
  return readOnly ? "-".concat(theme.borderWidth) : 0;
}, function (_ref10) {
  var resize = _ref10.resize;
  return resize;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.textareaTransitionTiming;
}, getFocusedBorderColor, function (_ref12) {
  var theme = _ref12.theme,
    isDisabled = _ref12.isDisabled;
  return isDisabled ? theme.textareaColorDisabled : theme.textareaPlaceholderColor;
}, function (_ref13) {
  var theme = _ref13.theme,
    isDisabled = _ref13.isDisabled;
  return isDisabled ? theme.textareaColorDisabled : theme.textareaPlaceholderColor;
}, function (_ref14) {
  var isDisabled = _ref14.isDisabled;
  return isDisabled && 'not-allowed';
});
export default TextareaWrapper;
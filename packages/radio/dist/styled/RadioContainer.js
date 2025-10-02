var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var RadioContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: auto;\n  opacity: ", ";\n  label {\n    cursor: ", ";\n    color: ", ";\n\n    display: flex;\n    align-items: flex-start;\n    padding: 2px 2px 2px 0;\n    border-radius: 4px;\n\n    ", "\n  }\n"])), function (_ref) {
  var isDisabled = _ref.isDisabled,
    theme = _ref.theme;
  return isDisabled && theme.iconSet !== 'novo' ? '0.5' : '1';
}, function (_ref2) {
  var isDisabled = _ref2.isDisabled;
  return isDisabled ? 'not-allowed' : 'pointer';
}, function (_ref3) {
  var theme = _ref3.theme,
    isDisabled = _ref3.isDisabled;
  return isDisabled ? theme.labelDisabledColor : theme.labelColor;
}, function (_ref4) {
  var isFocused = _ref4.isFocused,
    theme = _ref4.theme;
  return isFocused && "box-shadow: 0 0 0 2px inset ".concat(theme.focusColor, ";");
});
export default RadioContainer;
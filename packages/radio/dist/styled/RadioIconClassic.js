var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { getIconColor, getIconSize } from '../utils';
var getRadioButtonDot = function getRadioButtonDot(_ref) {
  var isChecked = _ref.isChecked,
    theme = _ref.theme;
  if (isChecked) {
    return "\n      &::after {\n        min-width: ".concat(theme.iconDotSize, ";\n        min-height: ").concat(theme.iconDotSize, ";\n        border-radius: 100%;\n        background: currentColor;\n        visibility: visible;\n        content: '';\n    ");
  }
  return null;
};
var RadioIconClassic = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  border-radius: 100%;\n  border: ", ";\n  ", ";\n  ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme,
    isChecked = _ref2.isChecked,
    isFocused = _ref2.isFocused,
    isHovered = _ref2.isHovered;
  return getIconColor({
    theme: theme,
    isChecked: isChecked,
    isFocused: isFocused,
    isHovered: isHovered
  });
}, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.borderSize, " ").concat(theme.borderStyle, " currentColor");
}, function (_ref4) {
  var theme = _ref4.theme,
    hasLabel = _ref4.hasLabel;
  return getIconSize({
    theme: theme,
    hasLabel: hasLabel
  });
}, function (_ref5) {
  var theme = _ref5.theme,
    isChecked = _ref5.isChecked;
  return getRadioButtonDot({
    theme: theme,
    isChecked: isChecked
  });
});
export default RadioIconClassic;
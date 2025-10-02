var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import RadioContainer from './RadioContainer';
var getFlexDirection = function getFlexDirection(isHorizontal) {
  return isHorizontal ? 'row' : 'column';
};
var getMargin = function getMargin(isHorizontal, theme) {
  return isHorizontal ? "margin-left: ".concat(theme.horizontalGroupMargin) : "margin-top: ".concat(theme.verticalGroupMargin);
};
var RadioGroupWrapper = styled.fieldset(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: ", ";\n  ", " ~ ", " {\n    ", "\n  }\n  align-items: start;\n"])), function (_ref) {
  var isHorizontal = _ref.isHorizontal;
  return getFlexDirection(isHorizontal);
}, RadioContainer, RadioContainer, function (props) {
  return getMargin(props.isHorizontal, props.theme);
});
export default RadioGroupWrapper;
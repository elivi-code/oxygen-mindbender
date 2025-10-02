var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var RadioInputWrapper = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.lineHeight;
});
export default RadioInputWrapper;
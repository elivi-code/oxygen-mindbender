var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var LabelTextWrapper = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-self: center;\n  margin-left: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing04;
});
export default LabelTextWrapper;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var PortalNode = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex + 5;
});
export default PortalNode;
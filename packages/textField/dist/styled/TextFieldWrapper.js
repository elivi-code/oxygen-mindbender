var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var TextFieldWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: baseline;\n  width: ", ";\n"])), function (_ref) {
  var labelOrientation = _ref.labelOrientation;
  return labelOrientation;
}, function (_ref2) {
  var fullWidth = _ref2.fullWidth,
    theme = _ref2.theme;
  return fullWidth ? '100%' : theme.width;
});
export default TextFieldWrapper;
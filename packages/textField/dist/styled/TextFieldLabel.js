var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import Label from '@8x8/oxygen-label';
var TextFieldLabel = styled(Label)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-width: ", ";\n  padding: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.labelMinWidth;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.labelPadding;
});
export default TextFieldLabel;
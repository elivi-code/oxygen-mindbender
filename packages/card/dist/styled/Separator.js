var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var Separator = styled.div.attrs(function (_ref) {
  var testId = _ref.testId;
  return {
    'data-test-id': testId
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.cardSeparatorBackgroundColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.cardSeparatorHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.cardSeparatorWidth;
});
export default Separator;
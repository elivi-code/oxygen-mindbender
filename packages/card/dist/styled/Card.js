var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var Container = styled.div.attrs(function (_ref) {
  var testId = _ref.testId;
  return {
    'data-test-id': testId
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: ", ";\n  overflow: hidden;\n  text-align: center;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.cardHeight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.cardWidth;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.cardBackground;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.cardBoxShadow;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.cardBorder;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.cardBorderTop;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.cardBorderRadius;
});
export default Container;
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var Container = styled.div.attrs(function (_ref) {
  var testId = _ref.testId;
  return {
    'data-test-id': testId
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"])));
var StatisticsNumbers = styled.div.attrs(function () {
  return {
    'data-test-id': 'STATISTICS_NUMBERS'
  };
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.numbersFontWeight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.numbersFontSize;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.numbersLineHeight;
}, function (_ref5) {
  var theme = _ref5.theme,
    hasError = _ref5.hasError;
  return hasError ? theme.numbersColorError : theme.numbersColor;
});
var StatisticsText = styled.div.attrs(function () {
  return {
    'data-test-id': 'STATISTICS_TEXT'
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.textFontSize;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.textLineHeight;
}, function (_ref8) {
  var theme = _ref8.theme,
    hasError = _ref8.hasError;
  return hasError ? theme.textColorError : theme.textColor;
});
var StatisticsBox = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  margin: ", ";\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.boxWidth;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.boxMargin;
});
export { Container, StatisticsBox, StatisticsNumbers, StatisticsText };
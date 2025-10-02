var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var Content = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n"])));
var CalendarContainer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: min-content;\n"])));
var DateTimeInputs = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  padding: ", ";\n  margin-bottom: ", ";\n  border-bottom: ", ";\n  box-sizing: border-box;\n  justify-content: flex-start;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dateTimeInputsPadding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dateTimeInputsMarginBottom;
}, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.dateTimeInputsBorderSize, " solid\n    ").concat(theme.dateTimeInputsBorderColor);
});
var DateTimeInputContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-left: ", ";\n  flex: 1;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.timeInputContainerMarginLeft;
});
var DateInput = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-right: ", ";\n  box-sizing: border-box;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.dateInputMarginRight;
});
var TimeInput = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-right: ", ";\n  box-sizing: border-box;\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.timeInputMarginRight;
});
var EndTimeError = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  display: flex;\n  max-width: 75px;\n  align-items: flex-end;\n  color: ", ";\n  line-height: ", ";\n  font-size: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.endTimeErrorColor;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.endTimeErrorLineHeight;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.endTimeErrorFontSize;
});
var CalendarWrapper = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: ", ";\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return "0 ".concat(theme.calendarHorizontalMargin);
});
var TimeSelectorPortalNode = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  z-index: 1;\n"])));
export { Content, CalendarWrapper, CalendarContainer, DateTimeInputs, DateInput, TimeInput, EndTimeError, DateTimeInputContainer, TimeSelectorPortalNode };
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css } from 'styled-components';
var getHeadStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  letter-spacing: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-family: ", ";\n\n  color: ", ";\n  background-color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.tableCellHeadLetterSpacing;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tableCellHeadFontWeight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.tableCellHeadFontSize;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.tableCellHeadLineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.tableCellHeadFontFamily;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.tableCellHeadColor;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.tableCellHeadBackgroundColor;
});
var getDefaultStyles = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: ", ";\n  letter-spacing: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  font-family: ", ";\n\n  color: ", ";\n  background-color: ", ";\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.tableCellFontSize;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.tableCellLetterSpacing;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.tableCellFontWeight;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.tableCellLineHeight;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.tableCellFontFamily;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.tableCellColor;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.tableCellBackgroundColor;
});
export { getHeadStyles, getDefaultStyles };
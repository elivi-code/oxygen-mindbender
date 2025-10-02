var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled, { css } from 'styled-components';
import TableRowFlex from './TableRowFlex';
var TableFlex = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-family: ", ";\n  font-variant-numeric: ", ";\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.tableFontFamily;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontVariantNumeric;
}, function (_ref3) {
  var theme = _ref3.theme,
    zebra = _ref3.zebra;
  return zebra && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", ":nth-child(2n+3) {\n        background: ", ";\n      }\n    "])), TableRowFlex, theme.zebraRowBackgroundColor);
});
export default TableFlex;
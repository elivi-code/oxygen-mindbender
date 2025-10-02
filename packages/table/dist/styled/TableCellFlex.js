var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { getHeadStyles, getDefaultStyles } from './styles/tableCellStyles';
var TableCellFlex = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1 0 0%;\n\n  border-bottom: 1px solid ", ";\n  padding: ", ";\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.tableBorderColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tableCellPadding;
}, function (_ref3) {
  var isHead = _ref3.isHead;
  return isHead ? getHeadStyles : getDefaultStyles;
});
export default TableCellFlex;
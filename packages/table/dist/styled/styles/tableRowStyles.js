var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css } from 'styled-components';
import TableCell from '../TableCell';
import TableCellFlex from '../TableCellFlex';
var getHoverStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  &:hover > ", ", &:hover > ", " {\n    background-color: unset;\n    color: unset;\n  }\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), TableCell, TableCellFlex, function (_ref) {
  var isSelected = _ref.isSelected,
    theme = _ref.theme;
  return isSelected ? theme.tableRowSelectedBackgroundColor : theme.tableRowHoverBackgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tableRowHoverColor;
});
var getSelectedStyles = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  ", ", ", " {\n    color: ", ";\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.tableRowSelectedBackgroundColor;
}, TableCell, TableCellFlex, function (_ref4) {
  var theme = _ref4.theme;
  return theme.tableRowHoverColor;
});
export { getHoverStyles, getSelectedStyles };
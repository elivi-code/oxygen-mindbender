var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { getHoverStyles, getSelectedStyles } from './styles/tableRowStyles';
var TableRow = styled.tr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), function (_ref) {
  var enableHover = _ref.enableHover;
  return enableHover ? getHoverStyles : undefined;
}, function (_ref2) {
  var isSelected = _ref2.isSelected;
  return isSelected ? getSelectedStyles : undefined;
});
export default TableRow;
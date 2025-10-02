var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css } from 'styled-components';
var getIconSize = function getIconSize(_ref) {
  var theme = _ref.theme,
    hasLabel = _ref.hasLabel;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  min-height: ", ";\n  width: ", ";\n  min-width: ", ";\n  margin-right: ", ";\n"])), theme.iconSize, theme.iconSize, theme.iconSize, theme.iconSize, hasLabel && theme.iconSpacing);
};
export default getIconSize;
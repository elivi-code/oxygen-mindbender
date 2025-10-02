var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';
var novo = themes.novo;
var HeaderSubtitle = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: ", ";\n"])), novo.spacing03);
export default HeaderSubtitle;
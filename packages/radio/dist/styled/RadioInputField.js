var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var RadioInputField = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n\n  &[aria-disabled='true'] {\n    cursor: not-allowed;\n  }\n"])));
export default RadioInputField;
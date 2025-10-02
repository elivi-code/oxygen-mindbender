var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { rgba } from 'polished';
var Container = styled.div.attrs(function (_ref) {
  var isVisible = _ref.isVisible;
  return {
    'aria-hidden': !isVisible
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  position: relative;\n  ", ";\n  ", ";\n  margin-left: auto;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.boxShadowSize, " ").concat(rgba(theme.boxShadowColor, theme.boxShadowOpacity));
}, function (_ref4) {
  var isVisible = _ref4.isVisible;
  return isVisible ? '' : 'width: 0 !important';
}, function (_ref5) {
  var theme = _ref5.theme,
    hasAnimation = _ref5.hasAnimation,
    resizeInProgress = _ref5.resizeInProgress;
  return hasAnimation && !resizeInProgress ? "transition: width ".concat(theme.animationSpeed, " ease-in-out;") : '';
});
var Splitter = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  min-width: ", ";\n  cursor: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.splitterSize;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.splitterCursor;
});
var Content = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
export { Container, Content, Splitter };
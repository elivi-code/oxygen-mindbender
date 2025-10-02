var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
var StyledRoad = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: ", ";\n  min-width: ", ";\n  min-height: ", ";\n  background-color: ", ";\n  margin: 0 auto;\n  visibility: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.roadWidth;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.roadWidth;
}, function (_ref3) {
  var theme = _ref3.theme;
  return "calc(".concat(theme.roadMinHeight, " / 2)");
}, function (_ref4) {
  var isCompleted = _ref4.isCompleted,
    theme = _ref4.theme;
  return isCompleted ? theme.roadBackgroundColorCompleted : theme.roadBackgroundColorUncompleted;
}, function (_ref5) {
  var showRoads = _ref5.showRoads;
  return showRoads ? 'visible' : 'hidden';
});
var StyledBullet = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n  color: ", ";\n  ", "\n"])), function (_ref6) {
  var size = _ref6.size;
  return size;
}, function (_ref7) {
  var size = _ref7.size;
  return size;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.bulletBorderRadius;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.bulletColor;
}, function (_ref10) {
  var theme = _ref10.theme,
    isCompleted = _ref10.isCompleted;
  return isCompleted ? "background-color: ".concat(theme.bulletBackgroundColorCompleted) : "background-color: ".concat(theme.bulletBackgroundColorUncompleted, ";\n         border: ").concat(theme.bulletBorderSize, " solid ").concat(theme.bulletBorderColor, ";");
});
var StyledMilestoneTrackerContainer = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n"])), function (_ref11) {
  var theme = _ref11.theme;
  return theme.fontFamily;
});
var StyledMilestoneContainer = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var StyledRow = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  word-wrap: break-word;\n  text-align: start;\n  cursor: ", ";\n  align-items: stretch;\n"])), function (_ref12) {
  var onClick = _ref12.onClick;
  return onClick ? 'pointer' : 'default';
});
var StyledGraphicContainer = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: ", "px;\n  min-width: ", "px;\n  align-items: center;\n  margin-right: ", ";\n"])), function (_ref13) {
  var size = _ref13.size;
  return size;
}, function (_ref14) {
  var size = _ref14.size;
  return size;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.milestoneProgressBarMargin;
});
var StyledBulletContainer = styled(StyledGraphicContainer)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  position: relative;\n  justify-content: center;\n  ", " {\n    height: initial;\n    &:first-child {\n      top: 0;\n      bottom: 50%;\n    }\n    &:last-child {\n      top: 50%;\n      bottom: 0;\n    }\n    position: absolute;\n    left: ", "px;\n  }\n  ", " {\n    ", "\n    position: relative;\n    z-index: 1;\n  }\n"])), function (_ref16) {
  var hasInnerDescription = _ref16.hasInnerDescription;
  return hasInnerDescription ? 'width: auto;' : '';
}, StyledRoad, function (_ref17) {
  var theme = _ref17.theme,
    size = _ref17.size;
  return size / 2 - parseInt(theme.roadWidth, 10) / 2;
}, StyledBullet, function (_ref18) {
  var theme = _ref18.theme,
    hasInnerDescription = _ref18.hasInnerDescription;
  return hasInnerDescription ? "width: auto;\n           height: auto;\n           padding:\n            ".concat(theme.bulletInnerDescriptionPaddingVertical, "\n            ").concat(theme.bulletInnerDescriptionPaddingHorizontal, ";") : '';
});
var StyledTitle = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  align-self: center;\n"])), function (_ref19) {
  var theme = _ref19.theme,
    isCompleted = _ref19.isCompleted;
  return isCompleted ? theme.milestoneTitleColorCompleted : theme.milestoneTitleColorUncompleted;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.milestoneTitleFontWeight;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.milestoneTitleFontSize;
});
var StyledDescription = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-self: flex-start;\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref22) {
  var theme = _ref22.theme;
  return theme.milestoneDescriptionFontColor;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.milestoneDescriptionFontSize;
});
export { StyledBullet, StyledRoad, StyledMilestoneTrackerContainer, StyledRow, StyledMilestoneContainer, StyledGraphicContainer, StyledBulletContainer, StyledTitle, StyledDescription };
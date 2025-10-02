var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from 'styled-components';
import { ellipsis } from 'polished';
import PropTypes from 'prop-types';
var getInputContainerBorderColor = function getInputContainerBorderColor(_ref) {
  var theme = _ref.theme,
    isOpen = _ref.isOpen,
    hasError = _ref.hasError;
  if (hasError) {
    return theme.borderColorError;
  }
  return isOpen ? theme.borderColorOpen : theme.borderColor;
};
var getInputContainerHeight = function getInputContainerHeight(_ref2) {
  var theme = _ref2.theme,
    size = _ref2.size;
  return size === 'large' ? theme.heightLarge : theme.heightSmall;
};
var getInputContainerPadding = function getInputContainerPadding(_ref3) {
  var size = _ref3.size,
    theme = _ref3.theme;
  if (size === 'large') {
    return "padding:\n      ".concat(theme.paddingVerticalLarge, "\n      ").concat(theme.paddingHorizontal, "\n    ");
  }
  return "padding:\n    ".concat(theme.paddingVerticalSmall, "\n    ").concat(theme.paddingHorizontal, "\n  ");
};
var getInputCursorStyle = function getInputCursorStyle(_ref4) {
  var isDisabled = _ref4.isDisabled;
  if (isDisabled) {
    return "\n      pointer-events: none;\n    ";
  }
  return 'cursor: pointer;';
};
var getBackgroundColor = function getBackgroundColor(_ref5) {
  var isDisabled = _ref5.isDisabled,
    theme = _ref5.theme;
  if (isDisabled) {
    return theme.isClassic ? theme.backgroundColorDisabled : theme.backgroundColor;
  }
  return theme.backgroundColor;
};
var getInputColor = function getInputColor(_ref6) {
  var isDisabled = _ref6.isDisabled,
    isPlaceholder = _ref6.isPlaceholder,
    theme = _ref6.theme;
  if (isDisabled) {
    return theme.colorDisabled;
  }
  if (isPlaceholder) {
    return theme.placeholderColor;
  }
  return theme.color;
};
var InputContainer = styled.div.attrs(function (_ref7) {
  var title = _ref7.title;
  return {
    title: title
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  ", ";\n  border: ", ";\n  border-color: ", ";\n  border-radius: ", ";\n  width: ", ";\n  min-height: ", ";\n  background: ", ";\n  color: ", ";\n  ", ";\n  transition: ", ";\n\n  font-size: ", ";\n  line-height: ", ";\n  font-family: ", ";\n  letter-spacing: ", ";\n  font-weight: ", ";\n  box-sizing: border-box;\n  display: inline-flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n"])), getInputContainerPadding, function (_ref8) {
  var theme = _ref8.theme;
  return "".concat(theme.borderSize, " solid");
}, getInputContainerBorderColor, function (_ref9) {
  var theme = _ref9.theme;
  return theme.borderRadius;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.width;
}, getInputContainerHeight, getBackgroundColor, getInputColor, getInputCursorStyle, function (_ref11) {
  var theme = _ref11.theme;
  return "border-color ".concat(theme.transitionTiming, " ease-in-out, background\n    ").concat(theme.transitionTiming, " linear");
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSize;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.lineHeight;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.fontFamily;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.letterSpacing;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.fontWeight;
});
var InputTitle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", ";\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n"])), ellipsis());
var InputIcon = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  ", ";\n  min-width: ", ";\n  ", ";\n"])), function (_ref17) {
  var theme = _ref17.theme;
  return theme.iconColor;
}, getInputCursorStyle, function (_ref18) {
  var theme = _ref18.theme;
  return theme.iconMinSize;
}, function (_ref19) {
  var theme = _ref19.theme,
    reversed = _ref19.reversed;
  return theme.isClassic && reversed && "\n    transform: rotate(180deg);\n    transform-origin: 50%;\n  ";
});
var InputIconLeft = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-right: ", ";\n"])), function (_ref20) {
  var theme = _ref20.theme;
  return theme.iconMargin;
});
InputContainer.propTypes = {
  hasError: PropTypes.bool,
  isOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};
InputIcon.propTypes = {
  color: PropTypes.string,
  reversed: PropTypes.bool
};
export { InputContainer, InputIcon, InputIconLeft, InputTitle };
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import clone from 'clone';
import setHours from 'date-fns/setHours';
import getHours from 'date-fns/getHours';
import setMinutes from 'date-fns/setMinutes';
import getMinutes from 'date-fns/getMinutes';
import setSeconds from 'date-fns/setSeconds';
import getSeconds from 'date-fns/getSeconds';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isValid from 'date-fns/isValid';
import { flip, FloatingFocusManager, FloatingPortal, useFloating, useClick, useDismiss, useRole, useInteractions, useListNavigation } from '@floating-ui/react';
import Input from '@8x8/oxygen-input';
import { ClockIcon } from '@8x8/oxygen-icon';
import { keyCode } from '@8x8/oxygen-constants';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { ThemeProvider } from 'styled-components';
import { TIME_PARSE_FORMATS, getTimeListItems } from './utils';
import * as Styled from '../styled';
function TimeSelector(_ref) {
  var _portalRef$current;
  var hasError = _ref.hasError,
    isDisabled = _ref.isDisabled,
    isLeftIconVisible = _ref.isLeftIconVisible,
    timeDisplayFormat = _ref.timeDisplayFormat,
    size = _ref.size,
    iconLeft = _ref.iconLeft,
    placeholder = _ref.placeholder,
    value = _ref.value,
    id = _ref.id,
    testId = _ref.testId,
    onChange = _ref.onChange,
    onOpen = _ref.onOpen,
    onClose = _ref.onClose,
    theme = _ref.theme,
    portalRef = _ref.portalRef;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedTimeValue = _useState4[0],
    setSelectedTimeValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasInputError = _useState6[0],
    setHasInputError = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDropdownVisible = _useState8[0],
    setIsDropdownVisible = _useState8[1];
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    activeIndex = _useState10[0],
    setActiveIndex = _useState10[1];
  var timeListItems = getTimeListItems(timeDisplayFormat);
  var inputRef = useRef(null);
  var listRef = useRef([]);
  var virtualItemRef = useRef(null);
  var inputMaxLength = timeDisplayFormat.length + 10;
  var getTimeListIndex = function getTimeListIndex(query) {
    return timeListItems.indexOf(timeListItems.find(function (item) {
      return item.formatted.startsWith(query);
    }));
  };

  // Floating-UI's scrollIntoView feature seems to be exclusive to useListNavigation (keyboard).
  // More info: https://floating-ui.com/docs/useListNavigation#scrollitemintoview
  useEffect(function () {
    if (isDropdownVisible) {
      setTimeout(function () {
        var _document$getElementB;
        (_document$getElementB = document.getElementById("option_".concat(activeIndex))) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }, 0);
    }
  }, [isDropdownVisible]);
  var _useFloating = useFloating({
      open: isDropdownVisible,
      strategy: 'fixed',
      placement: 'bottom-start',
      middleware: [flip()],
      onOpenChange: function onOpenChange(isOpen, event) {
        if (isOpen) {
          var listIndex = getTimeListIndex(event.target.value);
          if (listIndex >= 0) {
            setActiveIndex(listIndex);
          }
        }
        setIsDropdownVisible(isOpen);
      }
    }),
    refs = _useFloating.refs,
    floatingStyles = _useFloating.floatingStyles,
    context = _useFloating.context;
  var role = useRole(context, {
    role: 'listbox'
  });
  var click = useClick(context, {
    event: 'click',
    keyboardHandlers: false
  });
  var dismiss = useDismiss(context, {
    ancestorScroll: true
  });
  var listNav = useListNavigation(context, {
    listRef: listRef,
    activeIndex: activeIndex,
    virtual: true,
    virtualItemRef: virtualItemRef,
    onNavigate: setActiveIndex,
    loop: true,
    focusItemOnOpen: false,
    focusItemOnHover: false
  });
  var _useInteractions = useInteractions([click, dismiss, role, listNav]),
    getReferenceProps = _useInteractions.getReferenceProps,
    getFloatingProps = _useInteractions.getFloatingProps,
    getItemProps = _useInteractions.getItemProps;
  var referenceProps = getReferenceProps();
  var formatValue = function formatValue() {
    if (!value) {
      return '';
    }
    var _value$hours = value.hours,
      hours = _value$hours === void 0 ? 0 : _value$hours,
      _value$minutes = value.minutes,
      minutes = _value$minutes === void 0 ? 0 : _value$minutes,
      _value$seconds = value.seconds,
      seconds = _value$seconds === void 0 ? 0 : _value$seconds;
    return format(setHours(setMinutes(setSeconds(new Date(), seconds || 0), minutes), hours), timeDisplayFormat);
  };
  var parseInputValue = function parseInputValue(textValue) {
    for (var i = 0; i < TIME_PARSE_FORMATS.length; i += 1) {
      var timeParseFormat = TIME_PARSE_FORMATS[i];
      var result = parse(textValue, timeParseFormat, new Date());
      if (isValid(result)) {
        return result;
      }
    }
    return undefined;
  };
  var revertSelectedValues = function revertSelectedValues() {
    setInputValue(formatValue());
    setHasInputError(false);
    setSelectedTimeValue(clone(value));
  };
  var onInputValueChange = function onInputValueChange(event) {
    var newInputValue = event.target.value;
    setInputValue(newInputValue);
    if (!newInputValue) {
      setHasInputError(false);
      setSelectedTimeValue(undefined);
      return;
    }
    var parsedTimeValue = parseInputValue(newInputValue);
    if (!isValid(parsedTimeValue)) {
      setHasInputError(true);
      setSelectedTimeValue(undefined);
      return;
    }
    setHasInputError(false);
    setSelectedTimeValue({
      hours: getHours(parsedTimeValue),
      minutes: getMinutes(parsedTimeValue),
      seconds: getSeconds(parsedTimeValue)
    });
    var listIndex = getTimeListIndex(newInputValue);
    if (listIndex >= 0) {
      setIsDropdownVisible(true);
      setActiveIndex(listIndex);
    }
  };
  var onInputFocus = function onInputFocus(event) {
    onOpen();
    referenceProps.onFocus(event);
  };
  var onInputBlur = function onInputBlur() {
    onClose();
    if (!inputValue) {
      onChange(undefined);
      setIsDropdownVisible(false);
      return;
    }
    if (hasInputError) {
      revertSelectedValues();
      return;
    }
    onChange(clone(selectedTimeValue));
  };
  var onDropdownTimeSelect = function onDropdownTimeSelect(selectedTime) {
    setHasInputError(false);
    setSelectedTimeValue(clone(selectedTime));
    onChange(selectedTime);
    setIsDropdownVisible(false);
  };
  var onInputKeyDown = function onInputKeyDown(event) {
    if (virtualItemRef.current) {
      var listIndex = getTimeListIndex(virtualItemRef.current.textContent);
      if ([keyCode.ARROW_DOWN, keyCode.ARROW_UP].includes(event.keyCode)) {
        setActiveIndex(listIndex);
      }
      if (event.keyCode === keyCode.ENTER) {
        if (activeIndex >= 0) {
          onDropdownTimeSelect(timeListItems[activeIndex].time);
        }
      }
    }
    if (event.keyCode === keyCode.ESCAPE) {
      revertSelectedValues();
    }
    referenceProps.onKeyDown(event);
  };
  useEffect(function () {
    setInputValue(formatValue());
  }, [value, timeDisplayFormat]);
  useEffect(function () {
    setHasInputError(false);
    setSelectedTimeValue(clone(value));
  }, [value]);
  var portalRoot = (_portalRef$current = portalRef === null || portalRef === void 0 ? void 0 : portalRef.current) !== null && _portalRef$current !== void 0 ? _portalRef$current : document.body;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Input, _extends({
    id: id,
    ref: refs.setReference
  }, getReferenceProps(), {
    value: inputValue,
    maxLength: inputMaxLength,
    placeholder: placeholder,
    size: size,
    iconLeft: isLeftIconVisible ? iconLeft : null,
    hasError: hasInputError || hasError,
    isDisabled: isDisabled,
    autoComplete: "off",
    onChange: onInputValueChange,
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    onKeyDown: onInputKeyDown,
    theme: theme.input,
    inputRef: inputRef
  }, getTestAttributes("".concat(testId, "_INPUT")))), isDropdownVisible && !hasInputError && !!inputValue && /*#__PURE__*/React.createElement(FloatingPortal, {
    preserveTabOrder: false,
    root: portalRoot
  }, /*#__PURE__*/React.createElement(FloatingFocusManager, {
    context: context,
    modal: false,
    initialFocus: refs.reference
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: refs.setFloating,
    style: _objectSpread({}, floatingStyles)
  }, getFloatingProps(), {
    tabIndex: -1
  }), /*#__PURE__*/React.createElement(Styled.DropdownContainer, _extends({}, getTestAttributes(testId), {
    tabIndex: -1
  }), timeListItems.map(function (_ref2, index) {
    var time = _ref2.time,
      formatted = _ref2.formatted;
    var isSelected = index === activeIndex;
    return /*#__PURE__*/React.createElement(Styled.ListItem, _extends({
      id: "option_".concat(index),
      key: formatted,
      role: "option",
      tabIndex: index === activeIndex ? 0 : -1,
      "aria-selected": index === activeIndex,
      ref: function ref(node) {
        listRef.current[index] = node;
      }
    }, getItemProps({
      // Handle pointer select.
      onClick: function onClick() {
        onDropdownTimeSelect(time);
      }
    }), getTestAttributes("".concat(testId, "_ITEM_").concat(time.hours, "_").concat(time.minutes, "_").concat(time.seconds)), {
      isSelected: isSelected
    }), formatted);
  }))))));
}
TimeSelector.propTypes = {
  hasError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLeftIconVisible: PropTypes.bool,
  timeDisplayFormat: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default']),
  iconLeft: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.elementType]),
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }),
  id: PropTypes.string,
  testId: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  theme: PropTypes.object,
  portalRef: PropTypes.elementType
};
TimeSelector.defaultProps = {
  hasError: false,
  isDisabled: false,
  isLeftIconVisible: false,
  timeDisplayFormat: 'h:mm a',
  size: 'default',
  iconLeft: ClockIcon,
  placeholder: '',
  value: undefined,
  id: undefined,
  testId: 'TIME_SELECTOR',
  onChange: noop,
  onOpen: noop,
  onClose: noop
};
export default withTheme(TimeSelector, 'timeSelector');
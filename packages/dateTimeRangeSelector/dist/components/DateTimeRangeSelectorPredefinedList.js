function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { getTestAttributes } from '@8x8/oxygen-config';
import Input from '@8x8/oxygen-input';
import { PredefinedList, PredefinedListItem, PredefinedListInputWrapper } from '../styled/StyledDateTimeRangeSelectorPredefinedList';
import CUSTOM_RANGE_ID from '../utils/constants';
var getInputValueProperty = function getInputValueProperty(id) {
  return "inputValue[".concat(id, "]");
};
var getHasErrorProperty = function getHasErrorProperty(id) {
  return "hasError[".concat(id, "]");
};
var DateTimeRangeSelectorPredefinedList = /*#__PURE__*/function (_PureComponent) {
  function DateTimeRangeSelectorPredefinedList(props) {
    var _this;
    _classCallCheck(this, DateTimeRangeSelectorPredefinedList);
    _this = _callSuper(this, DateTimeRangeSelectorPredefinedList, [props]);
    _defineProperty(_this, "onChangePredefinedRangeInputValue", function (_ref) {
      var _ref$target = _ref.target,
        value = _ref$target.value,
        name = _ref$target.name;
      var _this$props = _this.props,
        onRangeSelect = _this$props.onRangeSelect,
        id = _this$props.selectedRange.id;
      var isNaN = Number.isNaN;
      var valueNumber = parseInt(value, 10);
      var hasError = !value || !valueNumber || isNaN(valueNumber) || valueNumber < 1 || valueNumber > 99;
      _this.setState(_defineProperty(_defineProperty({}, getInputValueProperty(name), "".concat(value)), getHasErrorProperty(name), hasError));
      if (!hasError) {
        onRangeSelect({
          id: id,
          value: valueNumber
        });
      }
    });
    _defineProperty(_this, "updateInputValue", function (value, id) {
      _this.setState(_defineProperty(_defineProperty({}, getInputValueProperty(id), "".concat(value)), getHasErrorProperty(id), false));
    });
    _defineProperty(_this, "selectRange", function (_ref2) {
      var id = _ref2.id,
        hasArgument = _ref2.hasArgument;
      var _this$props2 = _this.props,
        selectedId = _this$props2.selectedRange.id,
        onRangeSelect = _this$props2.onRangeSelect;
      var _this$state = _this.state,
        currentInputValue = _this$state[getInputValueProperty(id)],
        hasError = _this$state[getHasErrorProperty(id)];
      if (id === selectedId) {
        return;
      }
      var rangeValue;
      if (hasArgument) {
        if (currentInputValue && !hasError) {
          rangeValue = parseInt(currentInputValue, 10);
        } else {
          rangeValue = '1';
        }
      }
      onRangeSelect({
        id: id,
        value: rangeValue
      });
    });
    _defineProperty(_this, "renderListItem", function (range, isSelected) {
      var displayName = range.displayName,
        hasArgument = range.hasArgument,
        id = range.id;
      var _this$props3 = _this.props,
        _this$props3$theme = _this$props3.theme,
        listInputHorizontalSpacing = _this$props3$theme.listInputHorizontalSpacing,
        listInputMinWidth = _this$props3$theme.listInputMinWidth,
        listInputWidth = _this$props3$theme.listInputWidth,
        listInputVerticalSpacing = _this$props3$theme.listInputVerticalSpacing,
        testId = _this$props3.testId;
      var listInputTheme = {
        horizontalSpacing: listInputHorizontalSpacing,
        width: listInputWidth,
        minWidth: listInputMinWidth,
        verticalSpacing: listInputVerticalSpacing
      };
      if (isSelected && hasArgument) {
        var _this$state2 = _this.state,
          currentInputValue = _this$state2[getInputValueProperty(id)],
          hasError = _this$state2[getHasErrorProperty(id)];
        var selectedDisplayName = range.selectedDisplayName;
        var _selectedDisplayName = _slicedToArray(selectedDisplayName, 2),
          firstLabel = _selectedDisplayName[0],
          secondLabel = _selectedDisplayName[1];
        return /*#__PURE__*/React.createElement(React.Fragment, null, firstLabel, /*#__PURE__*/React.createElement(PredefinedListInputWrapper, getTestAttributes("".concat(testId, "_INPUT_CONTAINER")), /*#__PURE__*/React.createElement(Input, {
          testId: "".concat(testId, "_INPUT"),
          value: currentInputValue,
          name: id,
          maxLength: 2,
          theme: listInputTheme,
          onChange: _this.onChangePredefinedRangeInputValue,
          hasError: hasError,
          size: "small"
        })), secondLabel);
      }
      return displayName;
    });
    var ranges = props.ranges,
      selectedRange = props.selectedRange;
    var initialInputValues = _this.getInitialState(ranges, selectedRange);
    _this.state = _objectSpread({}, initialInputValues);
    return _this;
  }
  _inherits(DateTimeRangeSelectorPredefinedList, _PureComponent);
  return _createClass(DateTimeRangeSelectorPredefinedList, [{
    key: "getInitialState",
    value: function getInitialState(ranges, selectedRange) {
      var initialState = {};
      ranges.forEach(function (range) {
        var hasArgument = range.hasArgument,
          id = range.id;
        if (hasArgument) {
          Object.assign(initialState, _defineProperty(_defineProperty({}, getInputValueProperty(id), id === selectedRange.id && selectedRange.value ? "".concat(selectedRange.value) : ''), getHasErrorProperty(id), false));
        }
      });
      return initialState;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props$selectedR = this.props.selectedRange;
      _this$props$selectedR = _this$props$selectedR === void 0 ? {} : _this$props$selectedR;
      var id = _this$props$selectedR.id,
        value = _this$props$selectedR.value;
      var _prevProps$selectedRa = prevProps.selectedRange;
      _prevProps$selectedRa = _prevProps$selectedRa === void 0 ? {} : _prevProps$selectedRa;
      var previousValue = _prevProps$selectedRa.value;
      if (!value || previousValue === value) {
        return;
      }
      this.updateInputValue(value, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        ranges = _this$props4.ranges,
        selectedRange = _this$props4.selectedRange,
        testId = _this$props4.testId,
        hideCustomRange = _this$props4.hideCustomRange,
        customPredefinedRangeLabel = _this$props4.customPredefinedRangeLabel;
      return /*#__PURE__*/React.createElement(PredefinedList, getTestAttributes(testId), ranges.map(function (range) {
        var isSelected = "".concat(range.id) === "".concat(selectedRange.id);
        return /*#__PURE__*/React.createElement(PredefinedListItem, _extends({}, getTestAttributes("".concat(testId, "_ITEM")), {
          key: range.id,
          isSelected: isSelected,
          onClick: function onClick() {
            return _this2.selectRange(range);
          },
          tabIndex: 0
        }), _this2.renderListItem(range, isSelected));
      }), !hideCustomRange && /*#__PURE__*/React.createElement(PredefinedListItem, _extends({}, getTestAttributes("".concat(testId, "_ITEM")), {
        disabled: true,
        key: "Custom",
        tabIndex: 0,
        isSelected: selectedRange.id === CUSTOM_RANGE_ID
      }), customPredefinedRangeLabel));
    }
  }]);
}(PureComponent);
DateTimeRangeSelectorPredefinedList.propTypes = {
  theme: PropTypes.object,
  ranges: PropTypes.array.isRequired,
  selectedRange: PropTypes.object.isRequired,
  customPredefinedRangeLabel: PropTypes.string.isRequired,
  onRangeSelect: PropTypes.func,
  testId: PropTypes.string,
  hideCustomRange: PropTypes.bool
};
DateTimeRangeSelectorPredefinedList.defaultProps = {
  onRangeSelect: noop,
  testId: 'DATE_TIME_RANGE_SELECTOR_DROPDOWN_PREDEFINED_LIST',
  hideCustomRange: false
};
export default DateTimeRangeSelectorPredefinedList;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { withTheme } from '@8x8/oxygen-config';
import BreadcrumbsCollapsed from './BreadcrumbsCollapsed';
import { BreadcrumbsList, BreadcrumbsListItem, BreadcrumbsSeparator, BreadcrumbContent } from '../styled';
import { THEME_NAME } from '../constants/themeName';
var Breadcrumbs = /*#__PURE__*/function (_PureComponent) {
  function Breadcrumbs() {
    var _this;
    _classCallCheck(this, Breadcrumbs);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Breadcrumbs, [].concat(args));
    _defineProperty(_this, "state", {
      isExpanded: false
    });
    _defineProperty(_this, "handleOnExpand", function () {
      _this.setState(function (prevState) {
        return {
          isExpanded: !prevState.isExpanded
        };
      });
    });
    return _this;
  }
  _inherits(Breadcrumbs, _PureComponent);
  return _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        theme = _this$props.theme,
        children = _this$props.children,
        maxItems = _this$props.maxItems,
        itemsBeforeCollapse = _this$props.itemsBeforeCollapse,
        itemsAfterCollapse = _this$props.itemsAfterCollapse,
        separator = _this$props.separator,
        ariaLabel = _this$props.ariaLabel,
        collapsedTitle = _this$props.collapsedTitle;
      var isExpanded = this.state.isExpanded;
      var key = uuidv4();
      return /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement("nav", {
        "aria-label": ariaLabel
      }, /*#__PURE__*/React.createElement(BreadcrumbsList, null, React.Children.map(children, function (item, index) {
        var itemCount = React.Children.count(children);
        var isLastItem = index === itemCount - 1;
        var showCollapsedDots = !isExpanded && itemCount > maxItems && index === itemsBeforeCollapse && itemCount > itemsBeforeCollapse + itemsAfterCollapse;
        var shouldRenderChildren = itemCount <= maxItems || index < itemsBeforeCollapse || index > itemCount - itemsAfterCollapse - 1 || isExpanded;
        if (showCollapsedDots) {
          return /*#__PURE__*/React.createElement(BreadcrumbsCollapsed, {
            key: key,
            title: collapsedTitle,
            separator: separator,
            onClick: _this2.handleOnExpand
          });
        }
        return shouldRenderChildren && /*#__PURE__*/React.createElement(BreadcrumbsListItem, {
          key: key
        }, /*#__PURE__*/React.createElement(BreadcrumbContent, null, item, !isLastItem && /*#__PURE__*/React.createElement(BreadcrumbsSeparator, {
          role: "separator"
        }, separator)));
      }))));
    }
  }]);
}(PureComponent);
_defineProperty(Breadcrumbs, "propTypes", {
  /**
   * Breadcrumbs theme
   */
  theme: PropTypes.object,
  /**
   * Recommend to use Breadcrumb as a children but you can use Link component from React Router
   */
  children: PropTypes.node.isRequired,
  /**
   * Set the maximum number of breadcrumbs to display. When there are more than the maximum number,
   * only the first and last will be shown, with an ellipsis in between
   */
  maxItems: PropTypes.number,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis
   */
  itemsBeforeCollapse: PropTypes.number,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis
   */
  itemsAfterCollapse: PropTypes.number,
  /**
   * Text element displays between items
   */
  separator: PropTypes.node,
  /**
   * Pass aria-label to nav element
   */
  ariaLabel: PropTypes.string,
  /**
   * Shows HTML title text on ellipsis
   */
  collapsedTitle: PropTypes.string
});
_defineProperty(Breadcrumbs, "defaultProps", {
  maxItems: 4,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
  separator: '/',
  ariaLabel: 'Breadcrumbs',
  collapsedTitle: 'Show all links'
});
export default withTheme(Breadcrumbs, THEME_NAME);
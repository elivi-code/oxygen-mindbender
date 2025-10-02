import React from 'react';
import PropTypes from 'prop-types';
import TextLink from '@8x8/oxygen-text-link';
import BreadcrumbsListItem from '../styled/BreadcrumbsListItem';
import BreadcrumbsSeparator from '../styled/BreadcrumbsSeparator';
import BreadcrumbContent from '../styled/BreadcrumbContent';
var BreadcrumbsCollapsed = function BreadcrumbsCollapsed(_ref) {
  var title = _ref.title,
    separator = _ref.separator,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(BreadcrumbsListItem, null, /*#__PURE__*/React.createElement(BreadcrumbContent, null, /*#__PURE__*/React.createElement(TextLink, {
    size: "inherit",
    onClick: onClick,
    title: title
  }, "..."), /*#__PURE__*/React.createElement(BreadcrumbsSeparator, {
    role: "separator"
  }, separator)));
};
BreadcrumbsCollapsed.propTypes = {
  title: PropTypes.string.isRequired,
  separator: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
export default BreadcrumbsCollapsed;
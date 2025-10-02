var _excluded = ["theme", "children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import THEME_NAME from '../constants';
import * as Styled from '../styled';
var Table = function Table(_ref) {
  var theme = _ref.theme,
    children = _ref.children,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Styled.Table, otherProps, children));
};
Table.defaultProps = {
  zebra: false
};
Table.propTypes = {
  /** Theme object */
  theme: PropTypes.object,
  /** Content */
  children: PropTypes.node.isRequired,
  /** Controls wheter to style every other table row with an alternate background color */
  zebra: PropTypes.bool
};
export default withTheme(Table, THEME_NAME);
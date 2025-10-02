import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import { v4 as uuidv4 } from 'uuid';
import { Container, StatisticsBox, StatisticsText, StatisticsNumbers } from '../styled/Statistics';
function Statistics(_ref) {
  var data = _ref.data,
    testId = _ref.testId,
    theme = _ref.theme;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Container, {
    testId: testId
  }, data.map(function (item) {
    var statistics = item.statistics,
      label = item.label,
      hasError = item.hasError;
    return /*#__PURE__*/React.createElement(StatisticsBox, {
      key: uuidv4()
    }, /*#__PURE__*/React.createElement(StatisticsNumbers, {
      hasError: hasError
    }, statistics), /*#__PURE__*/React.createElement(StatisticsText, {
      hasError: hasError
    }, label));
  })));
}
Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    statistics: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hasError: PropTypes.bool
  })).isRequired,
  theme: PropTypes.object,
  testId: PropTypes.string
};
Statistics.defaultProps = {
  testId: 'CARD_STATISTICS'
};
export default withTheme(Statistics, 'statistics');
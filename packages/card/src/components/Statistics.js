import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  StatisticsBox,
  StatisticsText,
  StatisticsNumbers,
} from '../styled/Statistics';

function Statistics({ data, testId, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <Container testId={testId}>
        {data.map(item => {
          const { statistics, label, hasError } = item;

          return (
            <StatisticsBox key={uuidv4()}>
              <StatisticsNumbers hasError={hasError}>
                {statistics}
              </StatisticsNumbers>
              <StatisticsText hasError={hasError}>{label}</StatisticsText>
            </StatisticsBox>
          );
        })}
      </Container>
    </ThemeProvider>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      statistics: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      hasError: PropTypes.bool,
    }),
  ).isRequired,
  theme: PropTypes.object,
  testId: PropTypes.string,
};

Statistics.defaultProps = {
  testId: 'CARD_STATISTICS',
};

export default withTheme(Statistics, 'statistics');

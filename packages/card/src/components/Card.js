import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';

import Container from '../styled/Card';

function Card({ children, testId, theme, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme} testId={testId} {...props}>
        {children}
      </Container>
    </ThemeProvider>
  );
}

Card.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
  testId: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  testId: 'CARD',
};

export default withTheme(Card, 'card');

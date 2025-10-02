import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';

import Container from '../styled/Header';

function Header({ children, testId, theme, ...props }) {
  return (
    <Container testId={testId} theme={theme} {...props}>
      {children}
    </Container>
  );
}

Header.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};

Header.defaultProps = {
  testId: 'CARD_HEADER',
};

export default withTheme(Header, 'card');

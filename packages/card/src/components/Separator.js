import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';

import Container from '../styled/Separator';

function Separator({ testId, theme, ...props }) {
  return <Container theme={theme} testId={testId} {...props} />;
}

Separator.propTypes = {
  theme: PropTypes.object,
  testId: PropTypes.string,
};

Separator.defaultProps = {
  testId: 'CARD_SEPARATOR',
};

export default withTheme(Separator, 'card');

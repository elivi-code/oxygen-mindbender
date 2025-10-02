import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';

import { THEME_NAME } from '../constants';
import * as Styled from '../styled';

const ContextMenuItem = ({
  theme,
  children,
  testId,
  isDisabled,
  ...otherProps
}) => (
  <Styled.ContextMenuItem
    tabIndex={isDisabled ? undefined : '0'}
    isDisabled={isDisabled}
    {...getTestAttributes(testId)}
    {...otherProps}
  >
    {children}
  </Styled.ContextMenuItem>
);

ContextMenuItem.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  testId: PropTypes.string,
};

ContextMenuItem.defaultProps = {
  isDisabled: false,
  testId: 'CONTEXT_MENU_ITEM',
};

export default withTheme(ContextMenuItem, THEME_NAME);

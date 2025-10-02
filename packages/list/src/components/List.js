import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';

import THEME_NAME from '../constants/themeName';

import ListStyled from '../styled/ListStyled';

export const List = ({
  theme,
  children,
  isOrdered,
  isGroup,
  withBackground,
  ...otherProps
}) => (
  <ThemeProvider theme={theme}>
    <ListStyled
      isGroup={isGroup}
      isOrdered={isOrdered}
      withBackground={withBackground}
      {...otherProps}
    >
      {children}
    </ListStyled>
  </ThemeProvider>
);

List.propTypes = {
  /**
   * List theme
   */
  theme: PropTypes.object,
  /**
   * Rendered item content should be `ListItem` component
   */
  children: PropTypes.node.isRequired,
  /**
   * Tell when list is styled as a group
   */
  isGroup: PropTypes.bool,
  /**
   * Tell when list is ordered
   */
  isOrdered: PropTypes.bool,
  /**
   * Tell when list has background
   */
  withBackground: PropTypes.bool,
};

List.defaultProps = {
  isOrdered: false,
  isGroup: false,
  withBackground: false,
};

export default withTheme(List, THEME_NAME);

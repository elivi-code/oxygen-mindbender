import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';
import { ThemeProvider } from 'styled-components';
import THEME_NAME from '../constants';
import * as Styled from '../styled';

const TableRowFlex = ({
  theme,
  isSelectable,
  isSelected,
  children,
  ...otherProps
}) => (
  <ThemeProvider theme={theme}>
    <Styled.TableRowFlex
      enableHover={isSelectable}
      isSelected={isSelected}
      {...otherProps}
    >
      {children}
    </Styled.TableRowFlex>
  </ThemeProvider>
);

TableRowFlex.propTypes = {
  /** Theme object */
  theme: PropTypes.object,
  /** Set custom styling when hovering */
  isSelectable: PropTypes.bool,
  /** Set the selected custom styles */
  isSelected: PropTypes.bool,
  /** Content */
  children: PropTypes.node.isRequired,
};

TableRowFlex.defaultProps = {
  isSelectable: false,
  isSelected: false,
};

export default withTheme(TableRowFlex, THEME_NAME);

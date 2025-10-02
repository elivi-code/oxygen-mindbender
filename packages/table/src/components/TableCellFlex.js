import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import THEME_NAME from '../constants';
import * as Styled from '../styled';

const TableCellFlex = ({ theme, children, ...otherProps }) => (
  <ThemeProvider theme={theme}>
    <Styled.TableCellFlex {...otherProps}>{children}</Styled.TableCellFlex>
  </ThemeProvider>
);

TableCellFlex.propTypes = {
  /** Theme object */
  theme: PropTypes.object,
  /** Enable custom styling for table heading */
  isHead: PropTypes.bool,
  /** Content */
  children: PropTypes.node.isRequired,
};

TableCellFlex.defaultProps = {
  isHead: false,
};

export default withTheme(TableCellFlex, THEME_NAME);

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import THEME_NAME from '../constants';
import * as Styled from '../styled';

const TableFlex = ({ theme, children, ...otherProps }) => (
  <ThemeProvider theme={theme}>
    <Styled.TableFlex {...otherProps}>{children}</Styled.TableFlex>
  </ThemeProvider>
);

TableFlex.defaultProps = {
  zebra: false,
};

TableFlex.propTypes = {
  /** Theme object */
  theme: PropTypes.object,
  /** Content */
  children: PropTypes.node.isRequired,
  /** Controls wheter to style every other table row with an alternate background color */
  zebra: PropTypes.bool,
};

export default withTheme(TableFlex, THEME_NAME);

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { getTestAttributes, withTheme } from '@8x8/oxygen-config';

import { ButtonGroupStyled } from '../styled/ButtonGroupStyled';
import { THEME_NAME } from '../constants/themeName';

import { buttonGroupSpacing, buttonGroupAlignment } from '../types';
import type { ButtonGroupProps } from '../types';

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
  theme,
  testId,
  ...rest
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonGroupStyled {...rest} {...getTestAttributes(testId)} />
    </ThemeProvider>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(Object.values(buttonGroupSpacing)),
  align: PropTypes.oneOf(Object.values(buttonGroupAlignment)),
};

ButtonGroup.defaultProps = {
  spacing: buttonGroupSpacing.large,
  align: buttonGroupAlignment.center,
};

export default withTheme(ButtonGroup, THEME_NAME);

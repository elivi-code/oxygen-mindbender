import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useId } from '@8x8/oxygen-utils';

import { withTheme } from '@8x8/oxygen-config';
import { THEME_NAME } from '../constants/themeName';

import {
  Bar,
  ProgressBarText,
  ProgressBarContainer,
} from '../styled/ProgressBar';

import { progressBarSize } from '../types';
import type { ProgressBarProps } from '../types';

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  theme,
  value,
  text,
  ...rest
}) => {
  const uniqueId = useId();

  return (
    <ThemeProvider theme={theme}>
      <ProgressBarContainer
        {...(text && { 'aria-labelledby': uniqueId })}
        {...rest}
      >
        <Bar value={value} max={100} />
        {text && <ProgressBarText id={uniqueId}>{text}</ProgressBarText>}
      </ProgressBarContainer>
    </ThemeProvider>
  );
};

ProgressBar.propTypes = {
  /**
   * ProgressBar theme
   */
  theme: PropTypes.object,
  /**
   * Percentage of completed progress
   */
  value: PropTypes.number,
  /**
   * Define ProgressBar size
   */
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(Object.values(progressBarSize)),
  ]),
  text: PropTypes.string,
  /**
   * Tell when ProgressBar is stretched to width
   */
  fullWidth: PropTypes.bool,
};

ProgressBar.defaultProps = {
  value: 0,
  size: progressBarSize.default,
  text: '',
  fullWidth: false,
};

export default withTheme(ProgressBar, THEME_NAME);

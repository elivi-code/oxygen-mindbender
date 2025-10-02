import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';

import type { TabProps } from '../types';

import TabItem from '../styled/TabItem';

import THEME_NAME from '../constants/themeName';
import { DARK, LIGHT } from '../constants/colorTypes';
import { ARIA_CONTROLS_WARNING_MSG } from '../constants/messages';
import TabItemText from '../styled/TabItemText';

const Tab: React.FunctionComponent<TabProps> = ({
  theme,
  children,
  color,
  value,
  isActive,
  isDisabled,
  isStretched,
  onClick,
  testId,
  ...otherProps
}) => {
  if (!otherProps['aria-controls']) {
    console.warn(ARIA_CONTROLS_WARNING_MSG);
  }

  const handleOnClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
    }

    if (isDisabled) {
      return;
    }
    onClick?.(e, value);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabItem
        role="tab"
        color={color}
        isActive={isActive}
        isDisabled={isDisabled}
        isStretched={isStretched}
        {...getTestAttributes(`${testId}_TAB`)}
        {...otherProps}
        onClick={handleOnClick}
      >
        <TabItemText>{children}</TabItemText>
      </TabItem>
    </ThemeProvider>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([DARK, LIGHT]),
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isStretched: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  testId: PropTypes.string,
};

Tab.defaultProps = {
  color: LIGHT,
  value: undefined,
  isActive: false,
  isDisabled: false,
  isStretched: false,
  onClick: undefined,
  theme: {},
  testId: 'TABS',
};

export default withTheme(Tab, THEME_NAME);

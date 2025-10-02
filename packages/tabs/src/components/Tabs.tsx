import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { withTheme } from '@8x8/oxygen-config';

import THEME_NAME from '../constants/themeName';
import { DARK, LIGHT } from '../constants/colorTypes';

import TabsBar from '../styled/TabsBar';

import type { TabsProps } from '../types';

const Tabs: React.FunctionComponent<TabsProps> = ({
  theme,
  children,
  forwardedRef,
  ...otherProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <TabsBar role="tablist" ref={forwardedRef} {...otherProps}>
        {children}
      </TabsBar>
    </ThemeProvider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  color: PropTypes.oneOf([DARK, LIGHT]),
};

Tabs.defaultProps = {
  theme: {},
  color: LIGHT,
};

export default withTheme(Tabs, THEME_NAME);

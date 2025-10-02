import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';

import ToastStackStyled from '../styled/ToastStack';

import { ToastStackProps } from '../types';

const ToastStack: React.FunctionComponent<ToastStackProps> = ({
  theme,
  children,
}) => <ToastStackStyled theme={theme}>{children}</ToastStackStyled>;

ToastStack.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
};

ToastStack.defaultProps = {
  children: '',
  theme: {},
};

export default withTheme(ToastStack, 'toast');

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@8x8/oxygen-config';
import ToastStackStyled from '../styled/ToastStack';
const ToastStack = ({ theme, children, }) => React.createElement(ToastStackStyled, { theme: theme }, children);
ToastStack.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.node,
};
ToastStack.defaultProps = {
    children: '',
    theme: {},
};
export default withTheme(ToastStack, 'toast');

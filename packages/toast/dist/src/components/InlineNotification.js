import { withTheme } from '@8x8/oxygen-config';
import React from 'react';
import { ToastTemplate } from './Toast';
const InlineNotification = (props) => {
    return React.createElement(ToastTemplate, { ...props, isToast: false });
};
export default withTheme(InlineNotification, 'inlineNotification');

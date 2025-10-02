import { withTheme } from '@8x8/oxygen-config';
import React from 'react';
import { ToastTemplate } from './Toast';
import { ToastProps } from '../types';

const InlineNotification = (props: ToastProps) => {
  return <ToastTemplate {...props} isToast={false} />;
};

export default withTheme(InlineNotification, 'inlineNotification');

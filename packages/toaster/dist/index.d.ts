/* eslint-disable */
import React from 'react';
import { ToastType, ToastSize } from '@8x8/oxygen-constants';

interface Action {
  title: string;
  callback: string;
}

interface NotifyOptions {
  id?: string;
  content: React.ReactNode | string;
  actions?: Array<Action>;
  hideCloseControl?: boolean;
  onClose?: () => void;
  type?: ToastType;
  duration?: number;
  theme?: {
    [key: string]: string | number;
  };
  closeButtonLabel?: string;
}

interface Toast {
  id: string;
  content: React.ReactNode | string;
  actions: Array<Action>;
  hideCloseControl: boolean;
  onClose?: () => void;
  type: ToastType;
  duration: number;
  size: ToastSize;
  closeButtonLabel?: string;
  close(): void;
  pauseExpirationTimeout(): void;
  resumeExpirationTimeout(): void;
  clear(): void;
}

interface Durations {
  INFINITE: number;
}

declare function notify(options: NotifyOptions): Toast;
declare const DURATION: Durations;

interface ConfigureOptions {
  targetNode: HTMLElement;
  size: ToastSize;
  duration: number;
  stackSize: number;
}

interface ToasterProps {
  /**
   * Toast theme
   */
  theme?: object;
}

declare function configure(options: ConfigureOptions): void;
declare const SIZE: ToastSize;
declare const TYPE: ToastType;
declare function closeAll(): void;
declare class Toaster extends React.Component<ToasterProps, any> {};
declare const ADD_TOAST: 'Toaster:add';
declare const REMOVE_TOAST: 'Toaster:remove';
declare const UPDATE_TOAST: 'Toaster:configUpdate';
declare const REMOVE_ALL: 'Toaster:removeAll';

export { notify, DURATION, configure, SIZE, TYPE, Toaster, ADD_TOAST, REMOVE_TOAST, UPDATE_TOAST, REMOVE_ALL };

import { toastNovo } from '@8x8/oxygen-constants';

export const toastSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const toastTypes = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
  loading: 'loading',
} as const;

export type ToastSize = (typeof toastSizes)[keyof typeof toastSizes];
export type ToastType = (typeof toastTypes)[keyof typeof toastTypes];

export interface ActionType {
  title: string;
  id?: string;
  callback: () => void;
}
export type Theme = Partial<typeof toastNovo>;

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  actions?: Array<ActionType>;
  type?: ToastType;
  size?: ToastSize;
  hideCloseControl?: boolean;
  onCloseControlClick?: () => void;
  theme?: Partial<Theme>;
  isToast?: boolean;
  iconTitle?: string;
  closeButtonLabel?: string;
}

export interface ToastStackProps {
  children: React.ReactNode;
  theme?: Partial<Theme>;
}

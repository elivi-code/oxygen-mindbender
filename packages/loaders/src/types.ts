import { loadersNovo } from '@8x8/oxygen-constants';

export type Theme = Partial<typeof loadersNovo>;

/** @deprecated */
export const progressBarSize = {
  small: 'small',
  default: 'default',
  large: 'large',
} as const;

export interface ProgressBarProps {
  value?: number;
  text?: string;
  size?: number | string | keyof typeof progressBarSize;
  fullWidth?: boolean;
  testId?: string;
  theme?: Partial<Theme>;
}

export const spinnerSize = {
  small: 'small',
  default: 'default',
  large2x: 'large2x',
} as const;

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  size?: number | keyof typeof spinnerSize;
  strokeWidth?: number;
  hasAnimation?: boolean;
  testId?: string;
  theme?: Partial<Theme>;
  text?: string;
}

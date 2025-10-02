import { badgeNovo } from '@8x8/oxygen-constants';

export type BadgeTheme = Partial<typeof badgeNovo>;

export const badgeType = {
  primary: 'primary',
  secondary: 'secondary',
} as const;

export const badgeSize = {
  small: 'small',
  medium: 'medium',
  /** @deprecated */
  big: 'big',
} as const;

export const badgePosition = {
  /** @deprecated */
  topLeft: 'tl',
  /** @deprecated */
  topRight: 'tr',
  /** @deprecated */
  bottomLeft: 'bl',
  /** @deprecated */
  bottomRight: 'br',
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
} as const;

export interface BadgeProps {
  theme?: BadgeTheme;
  children?: React.ReactNode;
  type?: (typeof badgeType)[keyof typeof badgeType];
  size?: (typeof badgeSize)[keyof typeof badgeSize];
  position?: (typeof badgePosition)[keyof typeof badgePosition];
  isInner?: boolean;
  testId?: string;
}

export interface AIBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  testId?: string;
}

import React from 'react';
import { tabs } from '@8x8/oxygen-constants';

export type ColorType = 'light' | 'dark';

export type Theme = Partial<typeof tabs>;

export interface TabsProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
  color?: ColorType;
  theme?: Partial<Theme>;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

export interface TabProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'onClick'> {
  children: React.ReactNode;
  color?: ColorType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  isActive?: boolean;
  isDisabled?: boolean;
  isStretched?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (ev: React.MouseEvent, value: any) => void;
  theme?: Partial<Theme>;
  testId?: string;
}

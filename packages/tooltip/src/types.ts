import { OffsetOptions } from '@floating-ui/react';
import { staticTooltip } from '@8x8/oxygen-constants';

import { Handler } from './utils';

export type Theme = typeof staticTooltip;

export const orientation = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  'left-start': 'left-start',
  'left-end': 'left-end',
  'right-start': 'right-start',
  'right-end': 'right-end',
} as const;
export type Orientation = (typeof orientation)[keyof typeof orientation];

export const showOn = {
  hover: 'hover',
  click: 'click',
} as const;
export type ShowOn = (typeof showOn)[keyof typeof showOn];

export const defaultModifiers = {
  offset: {
    offset: '0, 7',
  },
};

export interface TooltipProps {
  children?: React.ReactNode;
  title: React.ReactNode;
  delay?: number;
  orientation?: Orientation;
  offset?: OffsetOptions;
  showOn?: 'hover' | 'click';
  disableInteractive?: boolean;
  enableArrow?: boolean;
  triggerRef?: HTMLElement;
  customCloseHandlers?: Handler[];
  renderContainer?: HTMLElement;
  renderContainerId?: string;
  includeWrapper?: boolean;
  modifiers?: { offset?: { offset?: number | string } };
  testId?: string;
  theme?: Partial<Theme>;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

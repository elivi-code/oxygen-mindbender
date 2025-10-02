import React from 'react';

export const expandTrigger = {
  header: 'header',
  arrow: 'arrow',
} as const;
export type ExpandTrigger = (typeof expandTrigger)[keyof typeof expandTrigger];

export interface Translations {
  expand?: string;
  collapse?: string;
}

export interface AccordionInterface
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  testId?: string;
  title: string;
  text?: string;
  iconLeft?: React.ReactNode;
  contentAfterTitle?: React.ReactNode;
  isExpanded?: boolean;
  id?: string;
  forcedHeight?: number;
  /** @deprecated */
  shouldCloseOnActiveClick?: boolean;
  isContentScrollable?: boolean;
  onChange?: (id: string, isExpanded: boolean) => void;
  hasPadding?: boolean;
  expandTrigger?: ExpandTrigger;
  translations?: Translations;
}

export interface AccordionGroupInterface
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children:
    | React.ReactElement<AccordionInterface>
    | React.ReactElement<AccordionInterface>[];
  initialActiveElementId?: string;
  testId?: string;
  /** @deprecated */
  shouldCloseOnActiveClick?: boolean;
  hasFixedHeight?: boolean;
  onChange?: (id: string) => boolean | void;
  expandTrigger?: ExpandTrigger;
  translations?: Translations;
}

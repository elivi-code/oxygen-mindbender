/* eslint-disable */
import React from 'react';
import { Targets } from '@8x8/oxygen-constants';

interface BreadcrumbsProps {
  /**
   * Breadcrumbs theme
   */
  theme?: object;
  /**
   * Recommend to use Breadcrumb as a children but you can use Link component from React Router
   */
  children: React.ReactNode;
  /**
   * Set the maximum number of breadcrumbs to display. When there are more than the maximum number,
   * only the first and last will be shown, with an ellipsis in between
   */
  maxItems?: number;
  /**
   * If max items is exceeded, the number of items to show before the ellipsis
   */
  itemsBeforeCollapse?: number;
  /**
   * If max items is exceeded, the number of items to show after the ellipsis
   */
  itemsAfterCollapse?: number;
  /**
   * Text element displays between items
   */
  separator?: React.ReactNode;
  /**
   * Pass aria-label to nav element
   */
  ariaLabel?: string;
  /**
   * Shows HTML title text on ellipsis
   */
  collapsedTitle?: string;
}

interface BreadcrumbProps {
  /**
   * Breadcrumbs theme
   */
  theme?: object;
  /**
   * Renders children element
   */
  children: React.ReactNode;
  /**
   * The url or path which the breadcrumb should act as a link to
   */
  href?: string;
  /**
   * Shows HTML title text
   */
  title?: string;
  /**
   * The target of the link
   */
  target?: Targets;
  /**
   * Tell when breadcrumb is active. Usually is the last element
   */
  isActive?: boolean;
  /**
   * Handler to be called on click
   */
  onClick?(): void;
}

declare class Breadcrumbs extends React.PureComponent<BreadcrumbsProps, any> {}
declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;

export default Breadcrumbs;
export { Breadcrumb };

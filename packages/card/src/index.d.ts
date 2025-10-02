/* eslint-disable */
import React from 'react';

interface CardProps {
  /**
   * Card theme
   */
  theme?: object;
  /**
   * Card test id
   */
  testId?: string;
  /**
   * Card content
   */
  children?: string | React.ReactNode;
}

interface HeaderProps {
  /**
   * Header theme
   */
  theme?: object;
  /**
   * Header test id
   */
  testId?: string;
  /**
   * Header content
   */
  children?: string | React.ReactNode;
}

interface SeparatorProps {
  /**
   * Separator theme
   */
  theme?: object;
  /**
   * Separator test id
   */
  testId?: string;
}

interface StatisticsProps {
  /**
   * Statistics theme
   */
  theme?: object;
  /**
   * Statistics test id
   */
  testId?: string;
  /**
   * Statistics data to be displayed
   */
  data?: {
    statistics: string;
    label: string;
  };
}

declare class Card extends React.PureComponent<CardProps, any> {}
declare class Header extends React.PureComponent<HeaderProps, any> {}
declare class Separator extends React.PureComponent<SeparatorProps, any> {}
declare class Statistics extends React.PureComponent<StatisticsProps, any> {}

export default Card;
export { Header, Separator, Statistics };

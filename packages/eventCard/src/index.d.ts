import React from 'react';
import { AvatarProps } from '@8x8/oxygen-avatar';

interface EventCardProps {
  avatars?: AvatarProps[];
  icon?: React.ReactElement;
  testId?: string;
  title?: string;
  text?: string;
  theme?: {
    background?: string;
    backgroundHover?: string;
    borderColor?: string;
    borderFocusColor?: string;
    gap?: string;
    iconBackground?: string;
    iconColor?: string;
    shadow?: string;
    text?: {
      fontFamily?: string;
      fontSize?: string;
      lineHeight?: string;
      fontWeight?: number;
      letterSpacing?: string;
    };
    textColor?: string;
    title?: {
      fontFamily?: string;
      fontSize?: string;
      lineHeight?: string;
      fontWeight?: number;
      letterSpacing?: string;
    };
    titleColor?: string;
  };
}
declare const EventCard: React.FunctionComponent<EventCardProps>;

export default EventCard;

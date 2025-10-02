import { GetIconColorProps } from '../types';

export const getColor = ({
  isChat,
  isHovered,
  isFocused,
  isActive,
  theme,
}: GetIconColorProps) => {
  if (isActive) {
    return isChat ? theme.action07 : theme.active07;
  }

  if (isHovered || isFocused) {
    return isChat ? theme.action07 : theme.hover01;
  }

  return isChat ? theme.action07 : theme.action01;
};

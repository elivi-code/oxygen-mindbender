import { AvatarSize, AvatarTheme } from '../types';

const getSizeInPx = ({
  theme,
  size,
}: {
  size: AvatarSize | number;
  theme: AvatarTheme;
}) => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  return theme[
    `size${size[0].toUpperCase() + size.slice(1)}` as keyof AvatarTheme
  ];
};

export default getSizeInPx;

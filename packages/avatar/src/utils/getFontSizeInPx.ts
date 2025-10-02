import { AvatarTheme, AvatarSize } from '../types';

const getFontSizeInPx = ({
  theme,
  size,
}: {
  theme: AvatarTheme;
  size: AvatarSize | number;
}) => {
  if (typeof size === 'number') return `${size / 2}px`;

  return theme[
    `font${size[0].toUpperCase() + size.slice(1)}` as keyof AvatarTheme
  ];
};

export default getFontSizeInPx;

import { AvatarSize, AvatarTheme } from '../types';

/**
 * Return the size of the icon in px from the theme props for standard sizes
 * Or calculate it based on the numerical size prop
 */
const getIconSizePx = ({
  size,
  theme,
}: {
  size: AvatarSize | number;
  theme: AvatarTheme;
}): number => {
  if (typeof size === 'number') {
    // 2px larger than half the size of the Avatar
    return size / 2 + 2;
  }

  return theme[
    `icon${size[0].toUpperCase() + size.slice(1)}` as keyof AvatarTheme
  ] as number;
};

export default getIconSizePx;

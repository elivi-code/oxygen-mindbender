import { AvatarSize, AvatarTheme } from '../types';
/**
 * Return the size of the icon in px from the theme props for standard sizes
 * Or calculate it based on the numerical size prop
 */
declare const getIconSizePx: ({ size, theme, }: {
    size: AvatarSize | number;
    theme: AvatarTheme;
}) => number;
export default getIconSizePx;
//# sourceMappingURL=getIconSizePx.d.ts.map
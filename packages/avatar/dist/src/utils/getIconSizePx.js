/**
 * Return the size of the icon in px from the theme props for standard sizes
 * Or calculate it based on the numerical size prop
 */
const getIconSizePx = ({ size, theme, }) => {
    if (typeof size === 'number') {
        // 2px larger than half the size of the Avatar
        return size / 2 + 2;
    }
    return theme[`icon${size[0].toUpperCase() + size.slice(1)}`];
};
export default getIconSizePx;

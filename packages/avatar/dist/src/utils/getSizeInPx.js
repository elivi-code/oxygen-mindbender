const getSizeInPx = ({ theme, size, }) => {
    if (typeof size === 'number') {
        return `${size}px`;
    }
    return theme[`size${size[0].toUpperCase() + size.slice(1)}`];
};
export default getSizeInPx;

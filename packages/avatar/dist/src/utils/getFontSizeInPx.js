const getFontSizeInPx = ({ theme, size, }) => {
    if (typeof size === 'number')
        return `${size / 2}px`;
    return theme[`font${size[0].toUpperCase() + size.slice(1)}`];
};
export default getFontSizeInPx;

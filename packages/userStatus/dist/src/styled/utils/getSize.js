export const getSize = ({ theme, $size }) => {
    switch ($size) {
        case 'small':
            return `
        height: ${theme.sizeSmall};
        width: ${theme.sizeSmall};
        min-width: ${theme.sizeSmall};
        min-height: ${theme.sizeSmall};
      `;
        case 'large':
        default:
            return `
        height: ${theme.sizeLarge};
        width: ${theme.sizeLarge};
        min-width: ${theme.sizeLarge};
        min-height: ${theme.sizeLarge};
      `;
    }
};
export default getSize;

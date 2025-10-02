export const getSize = ({ size, theme }) => {
    switch (size) {
        case 'large':
            return { ...theme.bodyBold02 };
        case 'small':
        default:
            return { ...theme.bodyBold01 };
    }
};

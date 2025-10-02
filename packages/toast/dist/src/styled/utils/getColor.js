import { toastTypes } from '../../types';
/**
 * TO BE DEPRECATED
 */
const getColor = ({ theme, type }) => type === toastTypes.error || type === toastTypes.warning
    ? theme.colorError
    : theme.color;
export default getColor;

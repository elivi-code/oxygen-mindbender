import { toastSizes } from '../../types';
const getWidth = ({ theme, size }) => ({
    [toastSizes.small]: theme.toastSmall,
    [toastSizes.medium]: theme.toastMedium,
    [toastSizes.large]: theme.toastLarge,
}[size]);
export default getWidth;

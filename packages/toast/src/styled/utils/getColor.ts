import type { Theme, ToastType } from '../../types';
import { toastTypes } from '../../types';

type getColorProps = {
  type: ToastType;
  theme: Theme;
};
/**
 * TO BE DEPRECATED
 */
const getColor = ({ theme, type }: getColorProps) =>
  type === toastTypes.error || type === toastTypes.warning
    ? theme.colorError
    : theme.color;

export default getColor;

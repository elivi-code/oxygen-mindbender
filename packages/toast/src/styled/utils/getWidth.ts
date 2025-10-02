import type { Theme, ToastSize } from '../../types';
import { toastSizes } from '../../types';

type getWidthProps = {
  size: ToastSize;
  theme: Theme;
};

const getWidth = ({ theme, size }: getWidthProps) =>
  ({
    [toastSizes.small]: theme.toastSmall,
    [toastSizes.medium]: theme.toastMedium,
    [toastSizes.large]: theme.toastLarge,
  }[size]);

export default getWidth;

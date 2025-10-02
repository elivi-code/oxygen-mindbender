import { GetSizeProps } from '../types';

export const getSize = ({ size, theme }: GetSizeProps) => {
  switch (size) {
    case 'large':
      return { ...theme.bodyBold02 };
    case 'small':
    default:
      return { ...theme.bodyBold01 };
  }
};

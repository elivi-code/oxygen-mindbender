import { InputWrapperProps } from '../InputWrapperProps';

type Props = Pick<InputWrapperProps, 'theme' | 'isSuffix' | 'isPrefix'>;

const getDecoratorBorderRadius = ({ theme, isSuffix, isPrefix }: Props) => {
  if (isSuffix) {
    return `0 ${theme.borderRadius} ${theme.borderRadius} 0`;
  }

  if (isPrefix) {
    return `${theme.borderRadius} 0 0 ${theme.borderRadius}`;
  }

  return theme.borderRadius;
};

export default getDecoratorBorderRadius;

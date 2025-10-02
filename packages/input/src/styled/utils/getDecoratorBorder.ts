import { InputDecoratorProps } from '../InputDecoratorProps';

type Props = Pick<InputDecoratorProps, 'theme' | 'isReadOnly'>;

const getDecoratorBorder = ({ theme, isReadOnly }: Props) => {
  if (isReadOnly && theme.prefixSuffixInsideInput) {
    return `0`;
  }

  return `${theme.borderWidthSemanticBlock} ${theme.borderStyleDefaultSemanticBlock} ${theme.borderColorSemanticBlock}`;
};

export default getDecoratorBorder;

import { InputDecoratorProps } from '../InputDecoratorProps';

type Props = Pick<InputDecoratorProps, 'theme' | 'isReadOnly'>;

const getDecoratorBackgroundColor = ({ theme, isReadOnly }: Props) => {
  if (isReadOnly) {
    return theme.backgroundColorReadOnly;
  }

  return theme.backgroundColorSemanticBlock;
};

export default getDecoratorBackgroundColor;

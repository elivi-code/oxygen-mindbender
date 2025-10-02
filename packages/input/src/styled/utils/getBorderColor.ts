import { InputDecoratorProps } from '../InputDecoratorProps';

export type GetBorderColorProps = Pick<
  InputDecoratorProps,
  'theme' | 'focused' | 'hasError' | 'isReadOnly'
> & {
  fixed?: boolean;
  defaultColor?: string;
};

const getBorderColor = ({
  theme,
  focused,
  hasError,
  isReadOnly,
  fixed,
  defaultColor,
}: GetBorderColorProps) => {
  if (isReadOnly && !focused) {
    return theme.borderColorReadOnly;
  }

  if (hasError) {
    return theme.borderColorError;
  }

  if (fixed) {
    return theme.borderColorFixed;
  }

  if (focused) {
    return theme.borderColorFocused;
  }

  return defaultColor || theme.borderColor;
};

export default getBorderColor;

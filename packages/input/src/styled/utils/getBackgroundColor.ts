import { InputWrapperProps } from '../InputWrapperProps';

type Props = Pick<
  InputWrapperProps,
  'theme' | 'fixed' | 'isDisabled' | 'isReadOnly'
>;

const getBackgroundColor = ({
  theme,
  fixed,
  isDisabled,
  isReadOnly,
}: Props) => {
  if (fixed) {
    return theme.backgroundColorFixed;
  }

  if (isReadOnly) {
    return theme.backgroundColorReadOnly;
  }

  if (isDisabled) {
    return theme.backgroundColorDisabled;
  }

  return theme.backgroundColor;
};

export default getBackgroundColor;

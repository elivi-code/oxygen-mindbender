import { InputProps } from '../components/InputProps';
import { InputTheme } from '../types';

export type InputFieldWrapperProps = Pick<
  InputProps,
  'fixed' | 'isReadOnly' | 'hasError' | 'isDisabled'
> & {
  theme: InputTheme;
  iconLeft: boolean;
  iconRight: boolean;
  withPrefix: boolean;
  withSuffix: boolean;
  focused: boolean;
};

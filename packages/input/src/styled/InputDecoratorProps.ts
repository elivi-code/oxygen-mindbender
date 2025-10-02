import { InputProps } from '../components/InputProps';
import { InputTheme } from '../types';

export type InputDecoratorProps = Pick<
  InputProps,
  'hasError' | 'isReadOnly'
> & {
  theme: InputTheme;
  focused: boolean;
  autoWidth?: boolean;
  isPrefix?: boolean;
  isSuffix?: boolean;
};

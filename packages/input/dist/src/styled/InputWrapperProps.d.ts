import { InputProps } from '../components/InputProps';
import { InputTheme } from '../types';
export type InputWrapperProps = Pick<InputProps, 'fullWidth' | 'isDisabled' | 'size' | 'fixed' | 'isReadOnly'> & {
    theme: InputTheme;
    isPrefix?: boolean;
    isSuffix?: boolean;
};
//# sourceMappingURL=InputWrapperProps.d.ts.map
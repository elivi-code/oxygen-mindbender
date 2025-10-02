import { SearchIcon } from '@8x8/oxygen-icon';
import { InputSize, InputTheme } from '../types';

type IconProps = React.ComponentProps<typeof SearchIcon>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  theme?: Partial<InputTheme>;

  size?: InputSize;

  /** Show text just after input */
  suffix?: string;

  /** Show icon inside input on the left side */
  iconLeft?: React.ComponentType<IconProps>;

  /** Show icon inside input on the right side */
  iconRight?: React.ComponentType<IconProps>;

  /** Tell when Input is focus */
  focus?: boolean;

  /** Render input as pure text */
  fixed?: boolean;

  /** Tell when Input has error */
  hasError?: boolean;

  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  fullWidth?: boolean;
  forwardedRef?: any;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  testId?: string;

  /** Allows suffix to auto resize */
  autoSuffixWidth?: boolean;

  /** Allows prefix to auto resize */
  autoPrefixWidth?: boolean;

  /** Rest of props pass into InputField component */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export type InputDefaultProps = Required<
  Pick<
    InputProps,
    | 'autoFocus'
    | 'autoPrefixWidth'
    | 'autoSuffixWidth'
    | 'fixed'
    | 'focus'
    | 'fullWidth'
    | 'hasError'
    | 'isDisabled'
    | 'isReadOnly'
    | 'isRequired'
    | 'placeholder'
    | 'prefix'
    | 'size'
    | 'suffix'
    | 'testId'
    | 'type'
  >
>;

import { InputValue } from '../types';

export interface SwitchBaseCommonProps<T extends InputValue> {
  testId?: string;
  name?: string;
  id?: string;
  icon?: React.ReactNode;
  isChecked?: boolean;
  isDisabled?: boolean;
  value?: T;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void;
  role?: string;
}

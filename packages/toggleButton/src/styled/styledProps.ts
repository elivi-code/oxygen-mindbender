import { ToggleButtonTheme } from '../types';

export type Props = {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  isFocused: boolean;
  isHovered: boolean;
  hasLabel: boolean;
};

export type PropsWithTheme = Props & {
  theme?: ToggleButtonTheme;
};

export type InternalPropsWithTheme = PropsWithTheme & {
  theme: ToggleButtonTheme;
};

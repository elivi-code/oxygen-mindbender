import * as inputType from './constants/types';
import { THEME_NAME as inputThemeName } from './constants/themeName';

export { InputSize } from './types';

// eslint-disable-next-line no-restricted-exports
export { default } from './components/Input';

export {
  /** @deprecated */
  inputType,
  inputThemeName,
};

export { type InputProps } from './components/InputProps';

import { GroupBase } from 'react-select';
import { SelectTheme } from './types';
import { CustomSelectProps } from './components/SelectProps';

/**
 * WARNING
 * DO NOT import this file in any files
 * It is enough to have this file in the 'files' section of tsconfig.json in order for tsc to see the augmentations
 *
 * The scope of these augmentations is the local package
 * If this file is imported in other files, there's a risk of leaking the augmentations outside the package, via index.d.ts
 */

declare module 'styled-components' {
  export interface DefaultTheme extends SelectTheme {}
}

// augment react-select props
declare module 'react-select/dist/declarations/src/Select' {
  /**
   * Augment original react-select Props by making CustomSelectProps required
   * All the optional members get default values = > it can be marked as Required<>
   */
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > extends Required<CustomSelectProps> {}
}

declare module 'react-select' {
  /** Augment original react-select Theme */
  export interface Theme extends Partial<SelectTheme> {}
}

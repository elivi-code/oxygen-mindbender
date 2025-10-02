import { SliderTheme } from './types';

/**
 * WARNING
 * DO NOT import this file in any files
 * It is enough to have this file in the 'files' section of tsconfig.json in order for tsc to see the augmentations
 *
 * The scope of these augmentations is the local package
 * If this file is imported in other files, there's a risk of leaking the augmentations outside the package, via index.d.ts
 */

declare module 'styled-components' {
  export interface DefaultTheme extends SliderTheme {}
}

import { Theme } from '@8x8/oxygen-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

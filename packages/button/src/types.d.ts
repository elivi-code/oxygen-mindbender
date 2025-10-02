import { MergedTheme } from './types';

declare module 'styled-components' {
  interface DefaultTheme extends MergedTheme {}
}

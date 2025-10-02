import 'styled-components';
import themes from '@8x8/oxygen-theme';

type Theme = typeof themes.novo;

declare module 'styled-components' {
  /* eslint-disable-next-line */
  export interface DefaultTheme extends Theme {}
}

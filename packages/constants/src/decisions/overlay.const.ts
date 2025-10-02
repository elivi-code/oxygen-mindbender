import { rgba } from 'polished';
import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components';
import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import timing from '../choices/timing.const';
import zIndex from '../choices/zIndex.const';

const { light, dark, neoLight, neoDark } = themes;

const animation = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const fadeInAnimation = css`
  animation: ${animation} ${timing.fast} ease-in;
`;

const fadeInAnimationNovo = css`
  animation: ${animation} 150ms ease-in;
`;

export interface OverlayTheme {
  backgroundColor: string;
  animation: string | FlattenSimpleInterpolation;
  zIndex: number;
}

const overlay: OverlayTheme = {
  backgroundColor: rgba(color.cloudyBlue100, 0.75),
  animation: fadeInAnimation,
  zIndex: zIndex.z1000,
};

const overlayNovo: OverlayTheme = {
  backgroundColor: light.overlay01,
  animation: fadeInAnimationNovo,
  zIndex: zIndex.z1000,
};

const overlayNovoDark: OverlayTheme = {
  ...overlayNovo,
  backgroundColor: dark.overlay01,
};

const overlayNeoLight: OverlayTheme = {
  ...overlayNovo,
  backgroundColor: neoLight.overlay01,
};

const overlayNeoDark: OverlayTheme = {
  ...overlayNovoDark,
  backgroundColor: neoDark.overlay01,
};

export {
  overlay,
  overlayNovo,
  overlayNovoDark,
  overlayNeoLight,
  overlayNeoDark,
};

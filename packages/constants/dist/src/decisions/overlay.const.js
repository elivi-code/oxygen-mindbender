import { rgba } from 'polished';
import { css, keyframes } from 'styled-components';
import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import timing from '../choices/timing.const';
import zIndex from '../choices/zIndex.const';
const { light, dark, neoLight, neoDark } = themes;
const animation = keyframes `from { opacity: 0; } to { opacity: 1; }`;
const fadeInAnimation = css `
  animation: ${animation} ${timing.fast} ease-in;
`;
const fadeInAnimationNovo = css `
  animation: ${animation} 150ms ease-in;
`;
const overlay = {
    backgroundColor: rgba(color.cloudyBlue100, 0.75),
    animation: fadeInAnimation,
    zIndex: zIndex.z1000,
};
const overlayNovo = {
    backgroundColor: light.overlay01,
    animation: fadeInAnimationNovo,
    zIndex: zIndex.z1000,
};
const overlayNovoDark = {
    ...overlayNovo,
    backgroundColor: dark.overlay01,
};
const overlayNeoLight = {
    ...overlayNovo,
    backgroundColor: neoLight.overlay01,
};
const overlayNeoDark = {
    ...overlayNovoDark,
    backgroundColor: neoDark.overlay01,
};
export { overlay, overlayNovo, overlayNovoDark, overlayNeoLight, overlayNeoDark, };

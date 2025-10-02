import { rgba } from 'polished';
import { css, keyframes, FlattenSimpleInterpolation } from 'styled-components';

import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import font from '../choices/font.const';
import size from '../choices/size.const';
import timing from '../choices/timing.const';
import zIndex from '../choices/zIndex.const';

const { light, dark, neoLight, neoDark } = themes;

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  70% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const fadeInAnimation = css`
  animation: ${animation} ${timing.fast} ease-in;
`;

export interface TooltipTheme {
  animation: string | FlattenSimpleInterpolation;
  backgroundColor: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  borderRadius: string;
  boxShadow: string;
  color: string;
  fontSize: string;
  fontFamily: string;
  lineHeight: string;
  fontWeight: string | number;
  margin: string;
  maxHeight: string;
  maxWidth: string;
  padding: string;
  zIndex: number;
  letterSpacing: string;
  textAlign: string;
  arrowSize: string;
  arrowBorderRadius: string;
  arrowMarginOffset: string;
  enableArrow: boolean;
}

// Classic
const staticTooltip: TooltipTheme = {
  animation: fadeInAnimation,
  backgroundColor: color.cloudyBlue100,
  borderWidth: size.borderSizeDefault,
  borderStyle: 'solid',
  borderColor: color.cloudyBlue300,
  borderRadius: size.borderRadiusSmall,
  boxShadow: `1px 1px 0 ${rgba(color.pickledBluewood800, 0.1)}`,
  color: color.pickledBluewood800,
  fontSize: font.sizeXs,
  fontFamily: font.family,
  lineHeight: font.lineHeightXs,
  fontWeight: font.weightDefault,
  margin: size.small,
  maxHeight: '126px',
  maxWidth: '256px',
  padding: size.default,
  zIndex: zIndex.z4000,
  letterSpacing: 'normal',
  textAlign: 'center',

  // theme prop which controls the rendering of the tooltip arrow
  // defaults as disabled for classic theme
  enableArrow: false,
  // 11.31px square has a diagonal of aprox 16px
  // rotated to 45deg we obtain a rombus with a height and width of 16px
  arrowSize: '11.31px',
  arrowBorderRadius: size.borderRadiusSmall,
  // used to properly place the arrow relative to the tooltip box - we compensate for border width as well
  arrowMarginOffset: '-6.8px',
};

// Novo
const staticTooltipNovo: TooltipTheme = {
  ...staticTooltip,
  // novo themes have tooltip arrow enabled
  enableArrow: true,
  borderStyle: 'none',
  borderRadius: '6px',
  arrowBorderRadius: '2px',
  arrowMarginOffset: '-5.5px',
  maxWidth: '240px',
  textAlign: 'left',

  // typography
  ...light.body01,

  backgroundColor: light.ui10,
  boxShadow: `0px 1px 2px ${rgba(light.ui04, 0.25)}`,
  color: light.textColor06,
  padding: `${light.spacing02} ${light.spacing03}`,
};

// Novo Dark
const staticTooltipNovoDark: TooltipTheme = {
  ...staticTooltipNovo,
  backgroundColor: dark.ui10,
  boxShadow: `0px 1px 2px ${rgba(dark.ui04, 0.25)}`,
  color: dark.textColor06,
};

const staticTooltipNeoLight: TooltipTheme = {
  ...staticTooltipNovo,
  backgroundColor: neoLight.ui10,
  boxShadow: `0px 1px 2px ${rgba(neoLight.ui04, 0.25)}`,
  color: neoLight.textColor06,
};

const staticTooltipNeoDark: TooltipTheme = {
  ...staticTooltipNovoDark,
  backgroundColor: neoDark.ui10,
  boxShadow: `0px 1px 2px ${rgba(neoDark.ui04, 0.25)}`,
  color: neoDark.textColor06,
};

export {
  staticTooltip,
  staticTooltipNovo,
  staticTooltipNovoDark,
  staticTooltipNeoLight,
  staticTooltipNeoDark,
};

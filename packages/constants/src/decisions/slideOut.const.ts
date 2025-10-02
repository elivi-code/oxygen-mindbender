import color from '../choices/color.const';
import size from '../choices/size.const';
import timing from '../choices/timing.const';

export interface SlideOutTheme {
  splitterSize: string;
  splitterCursor: string;
  animationSpeed: string;
  background: string;
  boxShadowColor: string;
  boxShadowOpacity: number;
  boxShadowSize: string;
}

const slideOut: SlideOutTheme = {
  splitterSize: size.default,
  splitterCursor: 'col-resize',
  animationSpeed: timing.fast,
  background: color.white,
  boxShadowColor: '#000',
  boxShadowOpacity: 0.25,
  boxShadowSize: size.shadowMedium,
};

export default slideOut;

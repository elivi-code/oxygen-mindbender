import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import size from '../choices/size.const';

const { light, dark, neoLight, neoDark } = themes;

export interface SliderTheme {
  sliderHeight: string;
  sliderBorder: string;
  sliderBorderRadius: string;
  sliderTrackBorderRadius: string;
  sliderTrackBackgroundColor: string;
  sliderActiveTrackBackgroundColor: string;
  sliderActiveTrackBackgroundColorActive: string;
  sliderActiveTrackBackgroundColorDisabled: string;
  sliderKnobSize: string;
  sliderKnobColor: string;
  sliderKnobColorActive: string;
  sliderKnobColorDisabled: string;
  sliderKnobBorderColor: string;
  sliderKnobBorderColorDisabled: string;
  sliderKnobBorderWidth: string | number;
  sliderKnobBorderRadius: string;
  sliderKnobShadow: string;
  sliderKnobPulse: boolean;
  sliderFocusedOuterBorderColor: string;
  sliderFocusedInnerBorderColor: string;
}

const slider: SliderTheme = {
  sliderHeight: '10px',
  sliderBorder: 'none',
  sliderBorderRadius: size.borderRadiusMedium,
  sliderTrackBorderRadius: size.borderRadiusMedium,
  sliderTrackBackgroundColor: color.cloudyBlue300,
  sliderActiveTrackBackgroundColor: color.pickledBluewood,
  sliderActiveTrackBackgroundColorActive: color.pickledBluewood,
  sliderActiveTrackBackgroundColorDisabled: color.steel700,
  sliderKnobSize: size.default2x,
  sliderKnobColor: color.white,
  sliderKnobColorActive: color.white,
  sliderKnobColorDisabled: color.white,
  sliderKnobBorderColor: color.pickledBluewood,
  sliderKnobBorderColorDisabled: color.steel700,
  sliderKnobBorderWidth: 1,
  sliderKnobBorderRadius: '50%',
  sliderKnobShadow: 'none',
  sliderKnobPulse: false,
  sliderFocusedOuterBorderColor: '#0056E0',
  sliderFocusedInnerBorderColor: color.white,
};

const sliderNovo: SliderTheme = {
  sliderHeight: light.spacing02,
  sliderBorder: 'none',
  sliderBorderRadius: light.spacing01,
  sliderTrackBorderRadius: light.spacing01,
  sliderTrackBackgroundColor: light.ui03,
  sliderActiveTrackBackgroundColor: light.ui04,
  sliderActiveTrackBackgroundColorActive: light.action04,
  sliderActiveTrackBackgroundColorDisabled: light.disabled02,
  sliderKnobSize: `16px`,
  sliderKnobColor: light.ui04,
  sliderKnobColorActive: light.action04,
  sliderKnobColorDisabled: light.disabled02,
  sliderKnobBorderColor: light.ui04,
  sliderKnobBorderColorDisabled: light.disabled02,
  sliderKnobBorderWidth: 0,
  sliderKnobBorderRadius: '50%',
  sliderKnobShadow: 'none',
  sliderKnobPulse: true,
  sliderFocusedOuterBorderColor: light.focus01,
  sliderFocusedInnerBorderColor: light.ui06,
};

const sliderNovoDark: SliderTheme = {
  ...sliderNovo,
  sliderTrackBackgroundColor: dark.ui03,
  sliderActiveTrackBackgroundColor: dark.ui04,
  sliderActiveTrackBackgroundColorActive: dark.action04,
  sliderActiveTrackBackgroundColorDisabled: dark.disabled02,
  sliderKnobColor: dark.ui04,
  sliderKnobColorActive: dark.action04,
  sliderKnobColorDisabled: dark.disabled02,
  sliderKnobBorderColor: dark.ui04,
  sliderKnobBorderColorDisabled: dark.disabled02,
  sliderFocusedOuterBorderColor: dark.focus01,
  sliderFocusedInnerBorderColor: dark.ui06,
};

const sliderNeoLight: SliderTheme = {
  ...sliderNovo,
  sliderTrackBackgroundColor: neoLight.ui03,
  sliderActiveTrackBackgroundColor: neoLight.ui04,
  sliderActiveTrackBackgroundColorActive: neoLight.action04,
  sliderActiveTrackBackgroundColorDisabled: neoLight.disabled02,
  sliderKnobColor: neoLight.ui04,
  sliderKnobColorActive: neoLight.action04,
  sliderKnobColorDisabled: neoLight.disabled02,
  sliderKnobBorderColor: neoLight.ui04,
  sliderKnobBorderColorDisabled: neoLight.disabled02,
  sliderFocusedOuterBorderColor: neoLight.focus01,
  sliderFocusedInnerBorderColor: neoLight.ui06,
};

const sliderNeoDark: SliderTheme = {
  ...sliderNovoDark,
  sliderTrackBackgroundColor: neoDark.ui03,
  sliderActiveTrackBackgroundColor: neoDark.ui04,
  sliderActiveTrackBackgroundColorActive: neoDark.action04,
  sliderActiveTrackBackgroundColorDisabled: neoDark.disabled02,
  sliderKnobColor: neoDark.ui04,
  sliderKnobColorActive: neoDark.action04,
  sliderKnobColorDisabled: neoDark.disabled02,
  sliderKnobBorderColor: neoDark.ui04,
  sliderKnobBorderColorDisabled: neoDark.disabled02,
  sliderFocusedOuterBorderColor: neoDark.focus01,
  sliderFocusedInnerBorderColor: neoDark.ui06,
};

export { slider, sliderNovo, sliderNovoDark, sliderNeoLight, sliderNeoDark };

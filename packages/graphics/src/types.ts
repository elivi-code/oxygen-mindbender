import { graphics } from '@8x8/oxygen-constants';

export interface SVGProps {
  forwardedRef?: React.Ref<SVGSVGElement>;
}

export interface SVGWithCustomColors extends SVGProps {
  background?: string;
  theme?: typeof graphics;
}

import { progressBarSize } from '@8x8/oxygen-constants';

export const argsConfig = {
  value: 80,
  size: progressBarSize.default,
  text: 'Loading data...',
  fullWidth: false,
};
export const argTypesConfig = {
  value: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
  },
};

import type { PopoverCommonProps } from '../types';

export const defaultProps: Pick<
  PopoverCommonProps,
  'placement' | 'isDisabled' | 'activeProp' | 'disabledProp'
> = {
  placement: 'bottom-start',
  isDisabled: false,
  activeProp: 'isActive',
  disabledProp: 'isDisabled',
};

import * as actionTargets from './constants/targets';
import { showOn } from './types';

// eslint-disable-next-line no-restricted-exports
export { default, LabelProps } from './components/Label';

export { ActionTarget } from './constants/targets';

export {
  /** @deprecated use exported type ActionTarget instead  */
  actionTargets,
  showOn,
};

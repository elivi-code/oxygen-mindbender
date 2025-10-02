import isFunction from 'lodash.isfunction';

import { weightsMap } from '../constants/mappings';

export default function getWeight(weight) {
  if (isFunction(weightsMap[weight])) {
    return weightsMap[weight]();
  }

  return `font-weight: ${weight}`;
}

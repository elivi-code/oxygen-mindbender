import isFunction from 'lodash.isfunction';

import { sizesMap } from '../constants/mappings';

export default function getSize(size) {
  if (isFunction(sizesMap[size])) {
    return sizesMap[size]();
  }

  return `font-size: ${size}`;
}

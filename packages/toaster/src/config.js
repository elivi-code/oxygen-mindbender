import { toastSizes } from '@8x8/oxygen-constants';
import PubSub from 'pubsub-js';

import closeAll from './close-all';
import * as events from './constants/events';

const DEFAULT_CONFIG = {
  targetNode: document.body,
  size: toastSizes.medium,
  duration: 5000,
  stackSize: 4,
};

let config = DEFAULT_CONFIG;

export const DURATION = {
  INFINITE: Infinity,
};

/**
 * @param {Object} options
 * @param {HTMLElement} [options.targetNode=document.body]
 * @param {String} [options.size=medium]
 * @param {Number} [options.duration=5]
 * @param {Number} [options.stackSize=4]
 */
function configure(options) {
  closeAll();

  config = {
    ...DEFAULT_CONFIG,
    ...options,
  };

  PubSub.publish(events.CONFIG_UPDATE);
}

const getConfig = () => config;

export { getConfig, configure };

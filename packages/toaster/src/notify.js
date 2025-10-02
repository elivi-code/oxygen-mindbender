import PubSub from 'pubsub-js';
import isUndefined from 'lodash.isundefined';

import * as events from './constants/events';
import Toast from './toast';
import { getConfig } from './config';

/**
 * @param {Object} options
 * @param {String} options.id
 * @param {Node|String} options.content
 * @param {Node|String} options.title
 * @param {String} [options.closeButtonLabel='Close']
 * @param {Node|String} options.description
 * @param {Array} options.actions
 * @param {Boolean} options.hideCloseControl
 * @param {Function} options.onClose
 * @param {String} options.type
 * @param {Number} options.duration
 * @param {Object} options.theme
 * @returns {Toast}
 */
export default function notify({
  id,
  content,
  title,
  closeButtonLabel,
  description,
  actions = [],
  hideCloseControl,
  onClose,
  type,
  duration,
  theme,
}) {
  const { duration: defaultDuration, size } = getConfig();
  const toast = new Toast(
    id,
    content,
    title,
    closeButtonLabel,
    description,
    actions,
    hideCloseControl,
    onClose,
    type,
    isUndefined(duration) ? defaultDuration : duration,
    size,
    theme,
  );

  PubSub.publish(events.ADD_TOAST, toast);

  return toast;
}

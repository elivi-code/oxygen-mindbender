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
export default function notify(_ref) {
  var id = _ref.id,
    content = _ref.content,
    title = _ref.title,
    closeButtonLabel = _ref.closeButtonLabel,
    description = _ref.description,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    hideCloseControl = _ref.hideCloseControl,
    onClose = _ref.onClose,
    type = _ref.type,
    duration = _ref.duration,
    theme = _ref.theme;
  var _getConfig = getConfig(),
    defaultDuration = _getConfig.duration,
    size = _getConfig.size;
  var toast = new Toast(id, content, title, closeButtonLabel, description, actions, hideCloseControl, onClose, type, isUndefined(duration) ? defaultDuration : duration, size, theme);
  PubSub.publish(events.ADD_TOAST, toast);
  return toast;
}
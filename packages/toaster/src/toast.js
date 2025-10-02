/* eslint-disable default-param-last */
import { v4 as uuidv4 } from 'uuid';
import { toastTypes } from '@8x8/oxygen-constants';
import { PausableTimeout } from '@8x8/oxygen-utils';
import PubSub from 'pubsub-js';
import isUndefined from 'lodash.isundefined';
import { getConfig } from './config';
import * as events from './constants/events';

/**
 * Toast DTO
 */
class Toast {
  id = undefined;
  content = undefined;
  title = undefined;
  closeButtonLabel = undefined;
  description = undefined;
  actions = [];
  hideCloseControl = undefined;
  onClose = undefined;
  type = undefined;
  duration = undefined;
  size = undefined;
  theme = {};

  expirationTimeout = undefined;

  /**
   * @param {String} id
   * @param {Node|String} content
   * @param {Node|String} title
   * @param {String} [closeButtonLabel='Close']
   * @param {Node|String} description
   * @param {Array} [actions=[]]
   * @param {Boolean} [hideCloseControl=false]
   * @param {Function} onClose
   * @param {String} [type=toastTypes.success]
   * @param {Number} duration
   * @param {String} size
   */
  constructor(
    id,
    content,
    title,
    closeButtonLabel,
    description,
    actions = [],
    hideCloseControl = false,
    onClose,
    type = toastTypes.success,
    duration,
    size,
    theme,
  ) {
    this.id = id || uuidv4();
    this.content = content;
    this.title = title;
    this.closeButtonLabel = closeButtonLabel;
    this.description = description;
    this.actions = actions.map(action => ({ ...action, id: uuidv4() }));
    this.hideCloseControl = hideCloseControl;
    this.onClose = onClose;
    this.type = type;
    this.duration = isUndefined(duration) ? getConfig().duration : duration;
    this.size = size;
    this.theme = theme;

    this.initExpirationTimeout(this.duration);
  }

  close() {
    PubSub.publish(events.REMOVE_TOAST, this.id);

    if (this.expirationTimeout) {
      this.expirationTimeout.clear();
    }
  }

  initExpirationTimeout(duration) {
    if (duration === Infinity) {
      return;
    }

    this.expirationTimeout = new PausableTimeout(() => this.close(), duration);
  }

  pauseExpirationTimeout() {
    if (this.expirationTimeout) {
      this.expirationTimeout.pause();
    }
  }

  resumeExpirationTimeout() {
    if (this.expirationTimeout) {
      this.expirationTimeout.resume();
    }
  }
}

export default Toast;

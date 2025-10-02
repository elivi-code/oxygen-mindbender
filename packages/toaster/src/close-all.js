import PubSub from 'pubsub-js';

import * as events from './constants/events';

export default function closeAll() {
  PubSub.publish(events.REMOVE_ALL);
}

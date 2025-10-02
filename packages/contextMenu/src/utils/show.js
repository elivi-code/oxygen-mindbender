import PubSub from 'pubsub-js';
import { CONTEXT_MENU_SHOW } from '../constants';

function show(id, { x, y }) {
  PubSub.publish(CONTEXT_MENU_SHOW, {
    id,
    x,
    y,
  });
}

export default show;

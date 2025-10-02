import PubSub from 'pubsub-js';
import { CONTEXT_MENU_HIDE } from '../constants';
function hide(id) {
  PubSub.publish(CONTEXT_MENU_HIDE, {
    id: id
  });
}
export default hide;
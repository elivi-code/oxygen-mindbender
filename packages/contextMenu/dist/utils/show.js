import PubSub from 'pubsub-js';
import { CONTEXT_MENU_SHOW } from '../constants';
function show(id, _ref) {
  var x = _ref.x,
    y = _ref.y;
  PubSub.publish(CONTEXT_MENU_SHOW, {
    id: id,
    x: x,
    y: y
  });
}
export default show;
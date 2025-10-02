import PubSub from 'pubsub-js';
import notify from './notify';
import * as events from './constants/events';
import Toast from './toast';

describe('Toaster notify', () => {
  it('should create a new toast, publish it and return the toast object', () => {
    const publishMock = jest.spyOn(PubSub, 'publish');

    const createdToast = notify({
      content: 'Text',
    });

    expect(publishMock).toHaveBeenCalledWith(events.ADD_TOAST, createdToast);
    expect(createdToast instanceof Toast).toBeTruthy();
  });
});

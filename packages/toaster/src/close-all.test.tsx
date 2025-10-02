import PubSub from 'pubsub-js';
import closeAll from './close-all';
import * as events from './constants/events';

describe('Toaster close all', () => {
  it('`closeAll` should publish event', () => {
    const publishMock = jest.spyOn(PubSub, 'publish');

    closeAll();

    expect(publishMock).toHaveBeenCalledWith(events.REMOVE_ALL);
  });
});

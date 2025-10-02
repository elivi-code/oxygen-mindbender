import { toastTypes, toastSizes } from '@8x8/oxygen-constants';
import { PausableTimeout } from '@8x8/oxygen-utils';
import PubSub from 'pubsub-js';

import Toast from './toast';
import * as events from './constants/events';

describe('Toaster toast', () => {
  it('check instance props', () => {
    const toast = new Toast(
      'toast-id',
      'Text',
      'Title',
      'Dismiss',
      'Description',
      [
        {
          title: 'Link',
          callback: () => {},
        },
      ],
      true,
      () => {},
      toastTypes.success,
      2500,
      toastSizes.small,
      {},
    );

    expect(toast.id).toEqual('toast-id');
    expect(toast.content).toEqual('Text');
    expect(toast.title).toEqual('Title');
    expect(toast.closeButtonLabel).toEqual('Dismiss');
    expect(toast.description).toEqual('Description');
    expect(toast.actions[0].id).toEqual(1);
    expect(toast.hideCloseControl).toEqual(true);
    expect(toast.onClose).toBeInstanceOf(Function);
    expect(toast.type).toEqual(toastTypes.success);
    expect(toast.duration).toEqual(2500);
    expect(toast.size).toEqual(toastSizes.small);
    expect(toast.theme).toEqual({});
    expect(toast.expirationTimeout instanceof PausableTimeout).toBeTruthy();
  });

  it('`close` should publish event and clear the timeout', () => {
    const toast = new Toast();
    const publishMock = jest.spyOn(PubSub, 'publish');
    const clearTimeoutMock = jest.spyOn(toast.expirationTimeout, 'clear');

    toast.close();
    expect(publishMock).toHaveBeenCalledWith(events.REMOVE_TOAST, toast.id);
    expect(clearTimeoutMock).toHaveBeenCalled();
  });
});

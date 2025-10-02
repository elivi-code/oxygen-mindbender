import { toastSizes } from '@8x8/oxygen-constants';

import { getConfig, configure } from './config';

describe('Toaster config', () => {
  it('`getConfig` should return the default config', () => {
    expect(getConfig()).toEqual({
      targetNode: document.body,
      size: toastSizes.medium,
      duration: 5000,
      stackSize: 4,
    });
  });

  it('`configure` should update the config', () => {
    configure({
      size: toastSizes.small,
      duration: 10000,
      stackSize: 10,
    });

    expect(getConfig()).toEqual({
      targetNode: document.body,
      size: toastSizes.small,
      duration: 10000,
      stackSize: 10,
    });
  });
});

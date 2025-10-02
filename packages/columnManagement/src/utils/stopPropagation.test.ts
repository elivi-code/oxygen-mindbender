import { stopPropagation } from './stopPropagation';

describe('stopPropagation', () => {
  it('should call stopPropagation on the provided event', () => {
    const event = {
      stopPropagation: jest.fn(),
    };

    stopPropagation(event);

    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
  });
});

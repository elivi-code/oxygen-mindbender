import {
  OutsideEventBehavior,
  getCssMedia,
  mediaMinC,
  mediaMaxC,
  calcMediaVal,
  getMediaVal,
  mediaMin,
  mediaFn,
  mediaSizes,
  media,
  PausableTimeout,
  isReactDevMode,
  isEnterEvent,
  isSpaceEvent,
  useFontSize,
  useId,
  useHasOverflow,
  useArrowKeyListIndex,
  useGlobalActionKeyHandler,
  focusNextElementHandler,
  getNextIndexElement,
  EventKey,
  useClickOutside,
} from './index';

describe('public exports', () => {
  it('exports OutsideEventBehavior', () => {
    expect(OutsideEventBehavior).toBeDefined();
  });
  it('exports getCssMedia', () => {
    expect(getCssMedia).toBeDefined();
  });
  it('exports mediaMinC', () => {
    expect(mediaMinC).toBeDefined();
  });
  it('exports mediaMaxC', () => {
    expect(mediaMaxC).toBeDefined();
  });
  it('exports calcMediaVal', () => {
    expect(calcMediaVal).toBeDefined();
  });
  it('exports getMediaVal', () => {
    expect(getMediaVal).toBeDefined();
  });
  it('exports mediaMin', () => {
    expect(mediaMin).toBeDefined();
  });
  it('exports mediaFn', () => {
    expect(mediaFn).toBeDefined();
  });
  it('exports mediaSizes', () => {
    expect(mediaSizes).toBeDefined();
  });
  it('exports media', () => {
    expect(media).toBeDefined();
  });
  it('exports PausableTimeout', () => {
    expect(PausableTimeout).toBeDefined();
  });
  it('exports isReactDevMode', () => {
    expect(isReactDevMode).toBeDefined();
  });
  it('exports isEnterEvent', () => {
    expect(isEnterEvent).toBeDefined();
  });
  it('exports isSpaceEvent', () => {
    expect(isSpaceEvent).toBeDefined();
  });
  it('exports useFontSize', () => {
    expect(useFontSize).toBeDefined();
  });

  it('exports useId', () => {
    expect(useId).toBeDefined();
  });

  it('exports useHasOverflow', () => {
    expect(useHasOverflow).toBeDefined();
  });

  it('exports useArrowKeyListIndex', () => {
    expect(useArrowKeyListIndex).toBeDefined();
  });

  it('exports useGlobalActionKeyHandler', () => {
    expect(useGlobalActionKeyHandler).toBeDefined();
  });

  it('exports focusNextElementHandler', () => {
    expect(focusNextElementHandler).toBeDefined();
  });

  it('exports getNextIndexElement', () => {
    expect(getNextIndexElement).toBeDefined();
  });

  it('exports EventKey', () => {
    expect(EventKey).toBeDefined();
  });

  it('exports useClickOutside', () => {
    expect(useClickOutside).toBeDefined();
  });
});

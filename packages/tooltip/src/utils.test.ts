import {
  parseModifiers,
  registerEventHandlers,
  unregisterEventHandlers,
} from './utils';

function testFunction() {
  // empty
}

describe('parseModifiers', () => {
  it('should return null', () => {
    expect(parseModifiers()).toBe(null);
  });
  it.each`
    offset          | expected
    ${undefined}    | ${null}
    ${''}           | ${null}
    ${'7'}          | ${7}
    ${7}            | ${7}
    ${'0, 7'}       | ${{ crossAxis: 0, mainAxis: 7 }}
    ${testFunction} | ${testFunction}
    ${true}         | ${null}
  `('should return $expected for $offset', ({ offset, expected }) => {
    expect(parseModifiers({ offset: { offset } })).toEqual(expected);
  });
});

describe('registerEventHandlers', () => {
  it('should not throw', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => registerEventHandlers()).not.toThrow();
  });
  it('should call addEventListener on the provided target', () => {
    const target = document.createElement('div');

    jest.spyOn(target, 'addEventListener');
    registerEventHandlers([
      {
        target,
        eventName: 'click',
        callback: testFunction,
        capture: false,
      },
    ]);
    expect(target.addEventListener).toHaveBeenCalledTimes(1);
  });
});

describe('unregisterEventHandlers', () => {
  it('should not throw', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => unregisterEventHandlers()).not.toThrow();
  });
  it('should call removeEventListener on the provided target', () => {
    const target = document.createElement('div');

    jest.spyOn(target, 'removeEventListener');
    unregisterEventHandlers([
      {
        target,
        eventName: 'click',
        callback: testFunction,
        capture: false,
      },
    ]);
    expect(target.removeEventListener).toHaveBeenCalledTimes(1);
  });
});

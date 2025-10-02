import media, {
  mediaMin,
  mediaFn,
  mediaSizes,
  getMediaVal,
  calcMediaVal,
  getCssMedia,
} from './media';

const cssTestRule = 'background: black;';

const emptyFunctionsObj = Object.keys(mediaSizes).reduce(
  (xs, x) => ({ ...xs, [x]: expect.any(Function) }),
  {},
);

type MediaRule = 'min' | 'max';

const styledCssMediaFormat = (mediaRule: MediaRule, size: number) =>
  getCssMedia(mediaRule)(size)(`${cssTestRule}`);

describe('Media', () => {
  describe('mediaFn', () => {
    it('returns an object with 3 functions with `min-width` rule', () => {
      const mediaObj = mediaFn(mediaSizes)('min');

      expect(mediaObj).toEqual(emptyFunctionsObj);

      (Object.keys(mediaSizes) as Array<keyof typeof mediaSizes>).forEach(
        mediaSize => {
          const cssMedia = styledCssMediaFormat('min', mediaSizes[mediaSize]);

          expect(mediaObj[mediaSize](cssTestRule)).toEqual(cssMedia);
        },
      );
    });
  });

  describe('mediaMin', () => {
    it('returns and object with 3 functions with corresponding media query', () => {
      expect(mediaMin).toEqual(emptyFunctionsObj);

      (Object.keys(mediaSizes) as Array<keyof typeof mediaSizes>).forEach(
        mediaSize => {
          const cssMedia = styledCssMediaFormat('min', mediaSizes[mediaSize]);

          expect(mediaMin[mediaSize](cssTestRule)).toEqual(cssMedia);
        },
      );
    });
  });

  describe('mediaMax', () => {
    it('returns and object with 3 functions', () => {
      expect(media).toEqual(emptyFunctionsObj);

      (Object.keys(mediaSizes) as Array<keyof typeof mediaSizes>).forEach(
        mediaSize => {
          const cssMedia = styledCssMediaFormat('max', mediaSizes[mediaSize]);

          expect(media[mediaSize](cssTestRule)).toEqual(cssMedia);
        },
      );
    });
  });

  describe('calcMediaVal', () => {
    it('calculates the correct value', () => {
      expect(calcMediaVal(1)).toEqual(0.0625);
      expect(calcMediaVal(10)).toEqual(0.625);
      expect(calcMediaVal(200)).toEqual(12.5);
      expect(calcMediaVal(200.2)).toEqual(12.5125);
    });
  });

  describe('getMediaVal', () => {
    it('returns the correct em format value', () => {
      expect(getMediaVal(1)).toEqual('0.0625em');
      expect(getMediaVal(10)).toEqual('0.625em');
      expect(getMediaVal(200)).toEqual('12.5em');
      expect(getMediaVal(200.2)).toEqual('12.5125em');
    });
  });
});

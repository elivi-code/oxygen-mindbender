import {
  toggleButton,
  toggleButtonNovo,
  toggleButtonNovoDark,
} from '@8x8/oxygen-constants';

import getBackgroundColor from './getBackgroundColor';

describe('<getBackgroundColor/>', () => {
  describe('Classic theme', () => {
    const theme = toggleButton;

    it('should return correct background when is disabled', () => {
      expect(getBackgroundColor({ theme, isDisabled: true })).toEqual(
        '#A4B8D1',
      );
    });

    it('should return correct background when is checked', () => {
      expect(getBackgroundColor({ theme, isChecked: true })).toEqual('#0376DA');
    });

    it('should return correct background when is indeterminate', () => {
      expect(getBackgroundColor({ theme, isIndeterminate: true })).toEqual(
        '#A4B8D1',
      );
    });
  });
  describe('Novo theme', () => {
    const theme = toggleButtonNovo;

    it('should return correct background when is disabled', () => {
      expect(getBackgroundColor({ theme, isDisabled: true })).toEqual(
        '#A3A3A3',
      );
    });

    it('should return correct background when is checked', () => {
      expect(getBackgroundColor({ theme, isChecked: true })).toEqual('#0056E0');
    });

    it('should return correct background when is indeterminate', () => {
      expect(getBackgroundColor({ theme, isIndeterminate: true })).toEqual(
        '#A3A3A3',
      );
    });
  });
  describe('Novo Dark theme', () => {
    const theme = toggleButtonNovoDark;

    it('should return correct background when is disabled', () => {
      expect(getBackgroundColor({ theme, isDisabled: true })).toEqual(
        '#858585',
      );
    });

    it('should return correct background when is checked', () => {
      expect(getBackgroundColor({ theme, isChecked: true })).toEqual('#246FE5');
    });

    it('should return correct background when is indeterminate', () => {
      expect(getBackgroundColor({ theme, isIndeterminate: true })).toEqual(
        '#858585',
      );
    });
  });
});

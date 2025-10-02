import {
  checkbox,
  checkboxNovo,
  checkboxNovoDark,
} from '@8x8/oxygen-constants';

import getIconColor from './getIconColor';

describe('<getIconColor/>', () => {
  describe('Classic theme', () => {
    const theme = checkbox;

    it('should return correct color when is disabled', () => {
      expect(getIconColor({ theme, isDisabled: true })).toEqual(
        'rgba(3,118,218,0.5)',
      );
    });

    it('should return correct color when is focus', () => {
      expect(getIconColor({ theme, isFocused: true })).toEqual('#A4B8D1');
    });

    it('should return correct color when is checked', () => {
      expect(getIconColor({ theme, isChecked: true })).toEqual('#0376DA');
    });

    it('should return correct color when is indeterminate', () => {
      expect(getIconColor({ theme, isIndeterminate: true })).toEqual('#0376DA');
    });
  });
  describe('Novo theme', () => {
    const theme = checkboxNovo;

    it('should return correct color when is disabled', () => {
      expect(getIconColor({ theme, isDisabled: true })).toEqual('#C2C2C2');
    });

    it('should return correct color when is focus', () => {
      expect(getIconColor({ theme, isFocused: true })).toEqual('#666666');
    });

    it('should return correct color when is checked', () => {
      expect(getIconColor({ theme, isChecked: true })).toEqual('#0056E0');
    });

    it('should return correct color when is indeterminate', () => {
      expect(getIconColor({ theme, isIndeterminate: true })).toEqual('#0056E0');
    });
  });
  describe('Novo Dark theme', () => {
    const theme = checkboxNovoDark;

    it('should return correct color when is disabled', () => {
      expect(getIconColor({ theme, isDisabled: true })).toEqual('#666666');
    });

    it('should return correct color when is focus', () => {
      expect(getIconColor({ theme, isFocused: true })).toEqual('#C2C2C2');
    });

    it('should return correct color when is checked', () => {
      expect(getIconColor({ theme, isChecked: true })).toEqual('#CCDDF9');
    });

    it('should return correct color when is indeterminate', () => {
      expect(getIconColor({ theme, isIndeterminate: true })).toEqual('#CCDDF9');
    });
  });
});

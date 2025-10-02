import themes from '@8x8/oxygen-theme';

import {
  input,
  inputNovo,
  inputNovoDark,
  inputNeoLight,
  inputNeoDark,
} from './input.const';
import font from '../choices/font.const';
import size from '../choices/size.const';

const { light, dark, neoLight, neoDark } = themes;

export interface TextFieldTheme {
  input: typeof input;
  label: {
    labelPadding: string;
    labelMinWidth: string;
  };
  descriptionFontFamily: string;
  descriptionFontSize: string;
  descriptionFontStyle: string;
  descriptionFontWeight: string | number;
  descriptionLineHeight: string;
  descriptionColor?: string;
}

const textField: TextFieldTheme = {
  input,
  label: {
    labelPadding: `0 ${size.default} 0 0`,
    labelMinWidth: 'initial',
  },
  descriptionFontFamily: font.family,
  descriptionFontSize: font.sizeXs,
  descriptionFontStyle: 'normal',
  descriptionFontWeight: font.weightDefault,
  descriptionLineHeight: font.lineHeightXs,
};

const textFieldNovo: TextFieldTheme = {
  ...textField,
  input: inputNovo,
  descriptionFontFamily: light.label01.fontFamily,
  descriptionFontSize: light.label01.fontSize,
  descriptionFontStyle: 'normal',
  descriptionFontWeight: light.label01.fontWeight,
  descriptionLineHeight: light.label01.lineHeight,
  descriptionColor: light.textColor02,
};

const textFieldNovoDark: TextFieldTheme = {
  ...textFieldNovo,
  input: inputNovoDark,
  descriptionColor: dark.textColor02,
};

const textFieldNeoLight: TextFieldTheme = {
  ...textFieldNovo,
  input: inputNeoLight,
  descriptionColor: neoLight.textColor02,
};

const textFieldNeoDark: TextFieldTheme = {
  ...textFieldNovoDark,
  input: inputNeoDark,
  descriptionColor: neoDark.textColor02,
};

export {
  textField,
  textFieldNovo,
  textFieldNovoDark,
  textFieldNeoLight,
  textFieldNeoDark,
};

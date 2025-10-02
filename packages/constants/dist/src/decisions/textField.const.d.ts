import { input } from './input.const';
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
declare const textField: TextFieldTheme;
declare const textFieldNovo: TextFieldTheme;
declare const textFieldNovoDark: TextFieldTheme;
declare const textFieldNeoLight: TextFieldTheme;
declare const textFieldNeoDark: TextFieldTheme;
export { textField, textFieldNovo, textFieldNovoDark, textFieldNeoLight, textFieldNeoDark, };
//# sourceMappingURL=textField.const.d.ts.map
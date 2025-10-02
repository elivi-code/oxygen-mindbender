import { AllComponentsThemes } from '@8x8/oxygen-constants';
import { InputHTMLAttributes } from 'react';
type CheckboxTheme = AllComponentsThemes['checkbox'];
type CheckboxGroupTheme = AllComponentsThemes['checkboxGroup'];
export type SwitchBaseTheme = Pick<CheckboxTheme, 'labelDisabledColor' | 'labelColor' | 'focusColor'> & CheckboxGroupTheme & {
    lineHeight: string;
};
/** Type of the value given to html input field */
export type InputValue = InputHTMLAttributes<HTMLInputElement>['value'];
export {};
//# sourceMappingURL=types.d.ts.map
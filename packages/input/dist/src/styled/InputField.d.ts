/// <reference types="react" />
declare const InputField: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, Pick<import("..").InputProps, "fixed" | "isReadOnly"> & {
    theme: import("@8x8/oxygen-constants/dist/src/decisions/input.const").InputTheme;
    isDisabled: boolean;
} & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "disabled">, never>;
export default InputField;
//# sourceMappingURL=InputField.d.ts.map
import { SliderProps } from '../types';
export declare const inputThumbOnFocus: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
type InputThumbProps = Pick<SliderProps, 'theme' | 'isDisabled' | 'isMultiple'> & {
    valueType?: string;
    isActive?: boolean;
};
export declare const inputThumbOnHover: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<InputThumbProps, any>>;
export declare const inputThumb: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<Pick<SliderProps, "theme" | "isMultiple" | "isDisabled"> & {
    valueType?: string;
    isActive?: boolean;
} & {
    isFocused?: boolean;
}, any>>;
export declare const inputThumbDisabled: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const inputThumbActive: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<InputThumbProps, any>>;
export {};
//# sourceMappingURL=styles.d.ts.map
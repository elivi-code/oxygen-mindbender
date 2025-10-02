import type { ButtonProps, StyledButtonProps } from '../types';
export declare const getSizeStyle: ({ size, isCircular, theme, }: Pick<ButtonProps, 'size' | 'isCircular' | 'theme'>) => {
    width: string;
    height: string;
    padding: string;
    minHeight?: undefined;
} | {
    minHeight: string;
    padding: string;
    width?: undefined;
    height?: undefined;
};
export declare const getTypographyStyle: ({ size, theme, }: Pick<ButtonProps, 'size' | 'theme'>) => {
    fontSize: string;
    fontFamily: string;
    fontWeight: string | number;
    lineHeight: string;
    letterSpacing: string;
};
export declare const getVariantStyle: ({ isDestructive, variant, theme, }: Pick<ButtonProps, 'isDestructive' | 'variant' | 'theme'>) => {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    backgroundColorDisabled: string;
    borderColor: string;
    borderColorHover: string;
    borderColorActive: string;
    borderColorDisabled: string;
    shadowColorFocus: string;
    shadowBackgroundColorFocus: string;
    fontColor: string;
    fontColorDisabled: string;
    fontColorActive: string;
    fontColorHover: string;
    borderSize?: undefined;
} | {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    backgroundColorDisabled: string;
    borderColor: string;
    borderColorHover: string;
    borderColorActive: string;
    borderColorDisabled: string;
    shadowColorFocus: string;
    shadowBackgroundColorFocus: string;
    fontColor: string;
    fontColorDisabled: string;
    fontColorActive?: undefined;
    fontColorHover?: undefined;
    borderSize?: undefined;
} | {
    backgroundColor: string;
    backgroundColorHover: string;
    backgroundColorActive: string;
    backgroundColorDisabled: string;
    borderColor: string;
    borderColorHover: string;
    borderColorActive: string;
    borderColorDisabled: string;
    borderSize: string;
    shadowColorFocus: string;
    shadowBackgroundColorFocus: string;
    fontColor: string;
    fontColorActive: string;
    fontColorHover: string;
    fontColorDisabled: string;
};
export declare const getIconStyle: ({ isDestructive, variant, theme, }: Pick<StyledButtonProps, 'isDestructive' | 'variant' | 'theme'>) => {
    fontColor: string;
    fontColorDisabled: string;
    fontColorActive?: undefined;
    fontColorHover?: undefined;
} | {
    fontColor: string;
    fontColorActive: string;
    fontColorHover: string;
    fontColorDisabled: string;
};
export declare const getColor: (props: Pick<StyledButtonProps, 'aria-disabled' | 'isHovered' | 'isActive'>, style: {
    fontColorDisabled: string;
    fontColorHover?: string;
    fontColorActive?: string;
    fontColor: string;
}) => string;
//# sourceMappingURL=button.utils.d.ts.map
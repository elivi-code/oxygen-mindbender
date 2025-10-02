import { buttonSize, buttonVariant } from '../types';
export const getSizeStyle = ({ size, isCircular, theme, }) => {
    if (isCircular) {
        switch (size) {
            case buttonSize.large: {
                return {
                    width: theme.heightLargeV2,
                    height: theme.heightLargeV2,
                    padding: theme.paddingLargeV2,
                };
            }
            case buttonSize.small:
                return {
                    width: theme.heightSmall,
                    height: theme.heightSmall,
                    padding: theme.paddingSmall,
                };
            case buttonSize.big:
                return {
                    width: theme.heightLarge,
                    height: theme.heightLarge,
                    padding: theme.paddingLarge,
                };
            case buttonSize.medium:
            default:
                return {
                    width: theme.heightMedium,
                    height: theme.heightMedium,
                    padding: theme.paddingMedium,
                };
        }
    }
    switch (size) {
        case buttonSize.large:
            return {
                minHeight: theme.heightLargeV2,
                padding: theme.paddingLargeV2,
            };
        case buttonSize.small:
            return {
                minHeight: theme.heightSmall,
                padding: theme.paddingSmall,
            };
        case buttonSize.big:
            return {
                minHeight: theme.heightLarge,
                padding: theme.paddingLarge,
            };
        case buttonSize.medium:
        default:
            return {
                minHeight: theme.heightMedium,
                padding: theme.paddingMedium,
            };
    }
};
export const getTypographyStyle = ({ size, theme, }) => {
    // TO BE DEPRECATED
    if (theme.isClassic) {
        return {
            fontSize: theme.fontSize,
            fontFamily: theme.fontFamily,
            fontWeight: theme.fontWeight,
            lineHeight: theme.lineHeight,
            letterSpacing: 'unset',
        };
    }
    switch (size) {
        case buttonSize.large:
            return {
                fontSize: theme.fontSizeLarge,
                fontFamily: theme.fontFamilyLarge,
                fontWeight: theme.fontWeightLarge,
                lineHeight: theme.lineHeightLarge,
                letterSpacing: theme.letterSpacingLarge,
            };
        case buttonSize.small:
            return {
                fontSize: theme.fontSizeSmall,
                fontFamily: theme.fontFamilySmall,
                fontWeight: theme.fontWeightSmall,
                lineHeight: theme.lineHeightSmall,
                letterSpacing: theme.letterSpacingSmall,
            };
        case buttonSize.medium:
        default:
            return {
                fontSize: theme.fontSizeMedium,
                fontFamily: theme.fontFamilyMedium,
                fontWeight: theme.fontWeightMedium,
                lineHeight: theme.lineHeightMedium,
                letterSpacing: theme.letterSpacingMedium,
            };
    }
};
export const getVariantStyle = ({ isDestructive, variant, theme, }) => {
    if (isDestructive) {
        return {
            backgroundColor: variant === buttonVariant.text
                ? 'transparent'
                : theme.backgroundColorDestructive,
            backgroundColorHover: variant === buttonVariant.text
                ? 'transparent'
                : theme.backgroundColorDestructiveHover,
            backgroundColorActive: variant === buttonVariant.text
                ? 'transparent'
                : theme.backgroundColorDestructiveActive,
            backgroundColorDisabled: variant === buttonVariant.text
                ? 'transparent'
                : theme.backgroundColorDestructiveDisabled,
            borderColor: theme.borderColorDestructive,
            borderColorHover: theme.borderColorDestructiveHover,
            borderColorActive: theme.borderColorDestructiveActive,
            borderColorDisabled: theme.borderColorDestructiveDisabled,
            shadowColorFocus: theme.shadowColorDestructiveFocus,
            shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
            fontColor: variant === buttonVariant.text
                ? theme.backgroundColorDestructive
                : theme.fontColorDestructive,
            fontColorDisabled: theme.fontColorDestructiveDisabled,
            fontColorActive: variant === buttonVariant.text
                ? theme.backgroundColorDestructiveActive
                : undefined,
            fontColorHover: variant === buttonVariant.text
                ? theme.backgroundColorDestructiveHover
                : undefined,
        };
    }
    switch (variant) {
        case buttonVariant.secondary: {
            return {
                backgroundColor: theme.backgroundColorSecondary,
                backgroundColorHover: theme.backgroundColorSecondaryHover,
                backgroundColorActive: theme.backgroundColorSecondaryActive,
                backgroundColorDisabled: theme.backgroundColorSecondaryDisabled,
                borderColor: theme.borderColorSecondary,
                borderColorHover: theme.borderColorSecondaryHover,
                borderColorActive: theme.borderColorSecondaryActive,
                borderColorDisabled: theme.borderColorSecondaryDisabled,
                shadowColorFocus: theme.shadowColorSecondaryFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.fontColorSecondary,
                fontColorDisabled: theme.fontColorSecondaryDisabled,
            };
        }
        case buttonVariant.tertiary: {
            return {
                backgroundColor: theme.backgroundColorTertiary,
                backgroundColorHover: theme.backgroundColorTertiaryHover,
                backgroundColorActive: theme.backgroundColorTertiaryActive,
                backgroundColorDisabled: theme.backgroundColorTertiaryDisabled,
                borderColor: theme.borderColorTertiary,
                borderColorHover: theme.borderColorTertiaryHover,
                borderColorActive: theme.borderColorTertiaryActive,
                borderColorDisabled: theme.borderColorTertiaryDisabled,
                borderSize: theme.borderSizeTertiary,
                shadowColorFocus: theme.shadowColorTertiaryFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.fontColorTertiary,
                fontColorActive: theme.fontColorTertiaryActive,
                fontColorHover: theme.fontColorTertiaryHover,
                fontColorDisabled: theme.fontColorTertiaryDisabled,
            };
        }
        case buttonVariant.tertiaryReversed: {
            return {
                backgroundColor: theme.backgroundColorTertiaryReversed,
                backgroundColorHover: theme.backgroundColorTertiaryReversedHover,
                backgroundColorActive: theme.backgroundColorTertiaryReversedActive,
                backgroundColorDisabled: theme.backgroundColorTertiaryReversedDisabled,
                borderColor: theme.borderColorTertiaryReversed,
                borderColorHover: theme.borderColorTertiaryReversedHover,
                borderColorActive: theme.borderColorTertiaryReversedActive,
                borderColorDisabled: theme.borderColorTertiaryReversedDisabled,
                borderSize: theme.borderSizeTertiary,
                shadowColorFocus: theme.shadowColorTertiaryFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.fontColorTertiaryReversed,
                fontColorActive: theme.fontColorTertiaryReversedActive,
                fontColorHover: theme.fontColorTertiaryReversedHover,
                fontColorDisabled: theme.fontColorTertiaryReversedDisabled,
            };
        }
        case buttonVariant.text: {
            return {
                backgroundColor: 'transparent',
                backgroundColorHover: 'transparent',
                backgroundColorActive: 'transparent',
                backgroundColorDisabled: 'transparent',
                borderColor: theme.borderColorPrimary,
                borderColorHover: theme.borderColorPrimaryHover,
                borderColorActive: theme.borderColorPrimaryActive,
                borderColorDisabled: theme.borderColorPrimaryDisabled,
                shadowColorFocus: theme.shadowColorPrimaryFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.backgroundColorPrimary,
                fontColorActive: theme.backgroundColorPrimaryActive,
                fontColorHover: theme.backgroundColorPrimaryHover,
                fontColorDisabled: theme.fontColorPrimaryDisabled,
            };
        }
        case buttonVariant.destructive: {
            return {
                backgroundColor: theme.backgroundColorDestructive,
                backgroundColorHover: theme.backgroundColorDestructiveHover,
                backgroundColorActive: theme.backgroundColorDestructiveActive,
                backgroundColorDisabled: theme.backgroundColorDestructiveDisabled,
                borderColor: theme.borderColorDestructive,
                borderColorHover: theme.borderColorDestructiveHover,
                borderColorActive: theme.borderColorDestructiveActive,
                borderColorDisabled: theme.borderColorDestructiveDisabled,
                shadowColorFocus: theme.shadowColorDestructiveFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.fontColorDestructive,
                fontColorDisabled: theme.fontColorDestructiveDisabled,
            };
        }
        case buttonVariant.success: {
            return {
                backgroundColor: theme.backgroundColorSuccess,
                backgroundColorHover: theme.backgroundColorSuccessHover,
                backgroundColorActive: theme.backgroundColorSuccessActive,
                backgroundColorDisabled: theme.backgroundColorSuccessDisabled,
                borderColor: theme.borderColorSuccess,
                borderColorHover: theme.borderColorSuccessHover,
                borderColorActive: theme.borderColorSuccessActive,
                borderColorDisabled: theme.borderColorSuccessDisabled,
                shadowColorFocus: theme.shadowColorSuccessFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.fontColorSuccess,
                fontColorDisabled: theme.fontColorSuccessDisabled,
            };
        }
        case buttonVariant.primary:
        default: {
            return {
                backgroundColor: theme.backgroundColorPrimary,
                backgroundColorHover: theme.backgroundColorPrimaryHover,
                backgroundColorActive: theme.backgroundColorPrimaryActive,
                backgroundColorDisabled: theme.backgroundColorPrimaryDisabled,
                borderColor: theme.borderColorPrimary,
                borderColorHover: theme.borderColorPrimaryHover,
                borderColorActive: theme.borderColorPrimaryActive,
                borderColorDisabled: theme.borderColorPrimaryDisabled,
                shadowColorFocus: theme.shadowColorPrimaryFocus,
                shadowBackgroundColorFocus: theme.shadowBackgroundColorFocus,
                fontColor: theme.fontColorPrimary,
                fontColorDisabled: theme.fontColorPrimaryDisabled,
            };
        }
    }
};
export const getIconStyle = ({ isDestructive, variant, theme, }) => {
    if (isDestructive) {
        return {
            fontColor: variant === buttonVariant.text
                ? theme.backgroundColorDestructive
                : theme.fontColorDestructive,
            fontColorDisabled: theme.fontColorDestructiveDisabled,
        };
    }
    switch (variant) {
        case buttonVariant.secondary:
            return {
                fontColor: theme.fontColorSecondary,
                fontColorDisabled: theme.fontColorSecondaryDisabled,
            };
        case buttonVariant.tertiary:
            return {
                fontColor: theme.fontColorTertiary,
                fontColorActive: theme.fontColorTertiaryActive,
                fontColorHover: theme.fontColorTertiaryHover,
                fontColorDisabled: theme.fontColorTertiaryDisabled,
            };
        case buttonVariant.tertiaryReversed:
            return {
                fontColor: theme.fontColorTertiaryReversed,
                fontColorActive: theme.fontColorTertiaryReversedActive,
                fontColorHover: theme.fontColorTertiaryReversedHover,
                fontColorDisabled: theme.fontColorTertiaryReversedDisabled,
            };
        case buttonVariant.success:
            return {
                fontColor: theme.fontColorSuccess,
                fontColorDisabled: theme.fontColorSuccessDisabled,
            };
        case buttonVariant.destructive:
            return {
                fontColor: theme.fontColorDestructive,
                fontColorDisabled: theme.fontColorDestructiveDisabled,
            };
        case buttonVariant.text:
            return {
                fontColor: theme.backgroundColorPrimary,
                fontColorActive: theme.backgroundColorPrimaryActive,
                fontColorHover: theme.backgroundColorPrimaryHover,
                fontColorDisabled: theme.fontColorPrimaryDisabled,
            };
        case buttonVariant.primary:
        default:
            return {
                fontColor: theme.fontColorPrimary,
                fontColorDisabled: theme.fontColorPrimaryDisabled,
            };
    }
};
export const getColor = (props, style) => {
    if (props['aria-disabled']) {
        return style.fontColorDisabled;
    }
    if (props.isHovered && style.fontColorHover) {
        return style.fontColorHover;
    }
    if (props.isActive && style.fontColorActive) {
        return style.fontColorActive;
    }
    return style.fontColor;
};

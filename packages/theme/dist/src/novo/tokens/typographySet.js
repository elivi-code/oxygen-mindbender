import typography from './typography';
// Letter Spacing
const letterSpacingLabel = 'normal';
const letterSpacingBody01 = '-0.006rem';
const letterSpacingBody02 = '-0.011rem';
const letterSpacingHeading01 = '-0.017rem';
const letterSpacingHeading02 = '-0.020rem';
// Line Height
const lineHeightLabel = '1rem';
const lineHeightBody01 = '1.25rem';
const lineHeightBody02 = '1.5rem';
const lineHeightBulletList01 = '1.5rem';
const lineHeightHeading01 = '1.75rem';
const lineHeightHeading02 = '2.5rem';
export const label01 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize4xs,
    lineHeight: lineHeightLabel,
    fontWeight: typography.fontWeightRegular,
    letterSpacing: letterSpacingLabel,
};
export const labelBold01 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize4xs,
    lineHeight: lineHeightLabel,
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: letterSpacingLabel,
};
export const body01 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize3xs,
    lineHeight: lineHeightBody01,
    fontWeight: typography.fontWeightRegular,
    letterSpacing: letterSpacingBody01,
};
export const bodyBold01 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize3xs,
    lineHeight: lineHeightBody01,
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: letterSpacingBody01,
};
export const body02 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize2xs,
    lineHeight: lineHeightBody02,
    fontWeight: typography.fontWeightRegular,
    letterSpacing: letterSpacingBody02,
};
export const bodyBold02 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize2xs,
    lineHeight: lineHeightBody02,
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: letterSpacingBody02,
};
export const bulletList01 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSize3xs,
    lineHeight: lineHeightBulletList01,
    fontWeight: typography.fontWeightRegular,
    letterSpacing: letterSpacingBody01,
};
export const heading01 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSizeSm,
    lineHeight: lineHeightHeading01,
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: letterSpacingHeading01,
};
export const heading02 = {
    fontFamily: typography.fontFamilyPrimary,
    fontSize: typography.fontSizeLg,
    lineHeight: lineHeightHeading02,
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: letterSpacingHeading02,
};

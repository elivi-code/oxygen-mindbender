import type { Theme } from '../../types';

type getTypographyProps = {
  structureType: 'title' | 'description';
  theme: Theme;
};

const getTypography = ({ structureType, theme }: getTypographyProps) => {
  // TO BE DEPRECATED
  if (theme.isClassic) {
    return {
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      letterSpacing: theme.letterSpacing,
      lineHeight: theme.lineHeight,
    };
  }
  switch (structureType) {
    case 'description':
      return {
        fontFamily: theme.fontFamilyDescription,
        fontSize: theme.fontSizeDescription,
        fontWeight: theme.fontWeightDescription,
        letterSpacing: theme.letterSpacingDescription,
        lineHeight: theme.lineHeightDescription,
      };
    case 'title':
    default:
      return {
        fontFamily: theme.fontFamilyTitle,
        fontSize: theme.fontSizeTitle,
        fontWeight: theme.fontWeightTitle,
        letterSpacing: theme.letterSpacingTitle,
        lineHeight: theme.lineHeightTitle,
      };
  }
};

export default getTypography;

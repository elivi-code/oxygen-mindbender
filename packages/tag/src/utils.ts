import { variants } from './constants';

import type { TagProps } from './types';

const selectTextColor = ({
  theme,
  variant,
}: Pick<TagProps, 'theme' | 'variant'>) => {
  switch (variant) {
    case variants.blue:
      return theme.textColorVariantBlue;
    case variants.dark:
      return theme.textColorVariantDark;
    case variants.yellow:
      return theme.textColorVariantYellow;
    case variants.red:
      return theme.textColorVariantRed;
    case variants.light:
    default:
      return theme.textColorVariantLight;
  }
};

const selectBackground = ({
  theme,
  variant,
}: Pick<TagProps, 'theme' | 'variant'>) => {
  switch (variant) {
    case variants.blue:
      return theme.backgroundVariantBlue;
    case variants.dark:
      return theme.backgroundVariantDark;
    case variants.yellow:
      return theme.backgroundVariantYellow;
    case variants.red:
      return theme.backgroundVariantRed;
    case variants.light:
    default:
      return theme.backgroundVariantLight;
  }
};

export { selectBackground, selectTextColor };

import { css } from 'styled-components';
import { badgeType } from '@8x8/oxygen-constants';
import { BadgeProps } from '../../types';

const getColors = ({ theme, type }: Pick<BadgeProps, 'theme' | 'type'>) => {
  switch (type) {
    // @deprecated
    case badgeType.secondary:
      return css`
        color: ${theme.fontColorSecondary};
        background-color: ${theme.backgroundColorSecondary};
      `;
    case badgeType.primary:
    default:
      return css`
        color: ${theme.fontColorPrimary};
        background-color: ${theme.backgroundColorPrimary};
      `;
  }
};

export default getColors;

import styled from 'styled-components';
import { buttonGroupSpacing } from '../types';
export const ButtonGroupStyled = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
  gap: ${({ theme, spacing = buttonGroupSpacing.large }) => {
    const { buttonGroupSpacingSmall, buttonGroupSpacingLarge, marginLeftSmall, marginLeftLarge, marginBottomSmall, marginBottomLarge, } = theme;
    /**
     * @description Temporary fallback to support deprecated theme properties
     */
    const spacingVerticalSmall = marginBottomSmall || buttonGroupSpacingSmall;
    const spacingVerticalLarge = marginBottomLarge || buttonGroupSpacingLarge;
    const spacingHorizontalSmall = marginLeftSmall || buttonGroupSpacingSmall;
    const spacingHorizontalLarge = marginLeftLarge || buttonGroupSpacingLarge;
    switch (spacing) {
        case buttonGroupSpacing.small:
            return `${spacingVerticalSmall} ${spacingHorizontalSmall}`;
        case buttonGroupSpacing.large:
        default:
            return `${spacingVerticalLarge} ${spacingHorizontalLarge}`;
    }
}};
`;

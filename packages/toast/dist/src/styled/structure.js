import styled, { css } from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';
import getTypography from './utils/getTypography';
const { novo } = themes;
const containerStyle = (structureType) => css `
  ${({ theme }) => {
    const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } = getTypography({ theme, structureType });
    return `
      font-family: ${fontFamily};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing};
      line-height: ${lineHeight};
    `;
}}
`;
const Title = styled.div.attrs(() => ({
    ...getTestAttributes('TOAST_TITLE'),
})) `
  flex: 1;
  ${containerStyle('title')};
`;
Title.displayName = 'Title';
const Description = styled.div.attrs(() => ({
    ...getTestAttributes('TOAST_DESCRIPTION'),
})) `
  flex: 1;
  ${containerStyle('description')};
`;
Description.displayName = 'Description';
// spacing is 8px total: 6px gap + 2px from internal padding on the ContentWrapper component
// the bottom margin is also 8px: 6px + 2px internal padding
const StructureWrapper = styled.div `
  display: flex;
  flex: 1;
  gap: 6px;
  ${({ theme }) => !theme.isClassic && `margin: 8px 0 6px`};
`;
StructureWrapper.displayName = 'StructureWrapper';
const IconButtonWrapper = styled.div `
  margin: -2px;
`;
const ContentWrapper = styled.div `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: ${({ theme }) => theme.maxHeight};
  overflow: auto;
  overflow-wrap: anywhere;
  padding: 0 2px 2px;
`;
ContentWrapper.displayName = 'ContentWrapper';
export { Title, Description, StructureWrapper, ContentWrapper, IconButtonWrapper, };

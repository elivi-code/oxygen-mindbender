import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';
const { novo } = themes;
export const AlertBannerContainer = styled.div `
  container-type: inline-size;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  ${{ ...novo.body01 }}
`;

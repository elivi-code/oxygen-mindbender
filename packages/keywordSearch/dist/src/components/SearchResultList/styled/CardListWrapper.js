import styled, { css } from 'styled-components';
import OxygenCard from '@8x8/oxygen-card';
export const CardStyles = css `
  position: absolute;
  width: 100%;
  top: 100%;
  border: ${({ theme }) => `1px solid ${theme.ui02}`};
  box-sizing: border-box;
  height: auto;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadowHigh};
  border-radius: 6px;
  margin-top: ${({ theme }) => theme.spacing03};
`;
const CardListWrapper = styled(OxygenCard) `
  ${CardStyles};
`;
export default CardListWrapper;

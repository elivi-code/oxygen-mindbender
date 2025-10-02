import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';
const { novo } = themes;
export const ActionsContainer = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${novo.spacing03} ${novo.spacing05};
`;

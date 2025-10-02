import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';

const { novo } = themes;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: top;
  flex-direction: row;
  gap: ${novo.spacing03};
`;

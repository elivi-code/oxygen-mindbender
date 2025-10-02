import styled from 'styled-components';
import { Theme } from '@8x8/oxygen-theme';

const Asterisk = styled.span`
  color: ${({ theme }) => theme.fontColorStarRequired};
  padding-left: ${({ theme }) => (theme as unknown as Theme).spacing02};
`;

export default Asterisk;

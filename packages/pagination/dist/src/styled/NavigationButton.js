import styled from 'styled-components';
import TextLink from '@8x8/oxygen-text-link';
const NavigationButton = styled(TextLink) `
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing04};
  ${({ theme }) => theme.body01};
`;
export default NavigationButton;

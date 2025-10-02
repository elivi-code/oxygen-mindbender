import { rem } from 'polished';
import styled from 'styled-components';

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing04};

  & div[class*='-container'] {
    min-width: ${rem('93px')};
  }
`;

export default ControlWrapper;

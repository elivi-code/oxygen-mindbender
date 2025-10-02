import styled from 'styled-components';
import { Spinner } from '@8x8/oxygen-loaders';
const StyledSpinner = styled(Spinner) `
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing05};
`;
export default StyledSpinner;

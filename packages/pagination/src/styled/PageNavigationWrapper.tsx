import styled from 'styled-components';
import ControlWrapper from './ControlWrapper';

const PageNavigationWrapper = styled(ControlWrapper)<{
  isCompactMode: boolean;
}>`
  gap: ${({ theme }) => theme.spacing06};
  color: ${({ theme }) => theme.textColor01};
  flex-flow: wrap;
  ${({ isCompactMode }) =>
    isCompactMode &&
    `
      flex-grow: 1;
      justify-content: space-between;
    `}
`;

export default PageNavigationWrapper;

import styled from 'styled-components';
const ScrollWrapper = styled.div `
  overflow: auto;
  max-height: ${({ theme }) => theme.dropdownMaxHeight};
  max-width: ${({ theme }) => theme.dropdownMaxWidth};
  min-width: 120px;
`;
ScrollWrapper.displayName = 'ScrollWrapper';
export default ScrollWrapper;

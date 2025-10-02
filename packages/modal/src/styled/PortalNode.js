import styled from 'styled-components';

const PortalNode = styled.div`
  z-index: ${({ theme }) => theme.zIndex + 5};
`;

export default PortalNode;

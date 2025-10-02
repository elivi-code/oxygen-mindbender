import styled from 'styled-components';

export const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: ${props => props.theme.spacing05};
  gap: 10px;
  flex-direction: column;
`;

export const ReducedWidth = styled.div`
  width: 55%;
  align-self: center;
`;

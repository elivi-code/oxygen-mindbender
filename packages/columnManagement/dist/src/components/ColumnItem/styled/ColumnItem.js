import styled from 'styled-components';
export const Item = styled.div `
  display: flex;
  flex: 1;
  gap: 8px;
`;
export const OrderNumber = styled.div `
  ${({ theme }) => ({ ...theme.body01 })};
  text-align: end;
`;
export const Label = styled.div `
  ${({ theme }) => ({ ...theme.body01 })};
  word-break: break-word;
`;
export const LockedIcon = styled.div `
  padding: 2px;
  display: flex;
`;
export const Wrapper = styled.div `
  flex: 1;
  display: flex;
  justify-content: end;
`;

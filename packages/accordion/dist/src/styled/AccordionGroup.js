import styled from 'styled-components';
const Container = styled.div `
  background: ${({ theme }) => theme.ui06};
  color: ${({ theme }) => theme.textColor01};
  ${({ theme }) => ({ ...theme.body01 })};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  ${({ hasFixedHeight }) => hasFixedHeight && 'height: 100%'};
`;
const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
`;
export { Container, Wrapper };

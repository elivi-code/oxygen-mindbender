import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListWrapper = styled.div`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.ui01};
  width: 100%;
  height: 440px;
  overflow-y: auto;
`;

export const Title = styled.h2`
  ${({ theme }) => ({ ...theme.bodyBold01 })};
  margin: 0 0 16px;
`;

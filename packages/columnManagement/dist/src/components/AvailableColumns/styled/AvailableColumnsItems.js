import styled from 'styled-components';
export const AvailableElement = styled.div ``;
export const AvailableContainerActions = styled.div `
  display: ${({ isRemovable }) => (isRemovable ? 'flex' : 'none')};
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  opacity: 0;
`;
export const AvailableContainerStyled = styled.div `
  position: relative;
  width: 100%;
  height: 100%;

  > ${AvailableContainerActions} {
    opacity: ${({ isRemovable }) => isRemovable && '1'};
  }

  > ${AvailableElement} {
    opacity: ${({ isRemovable }) => (isRemovable ? 0.3 : 1)};
  }
`;
export const AvailableContainerIconDiv = styled.div `
  align-self: center;
  align-items: flex-start;
  display: flex;
  background-color: ${({ theme }) => theme.ui06};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.ui01};
  padding: 11px;

  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.ui01};
  }
`;

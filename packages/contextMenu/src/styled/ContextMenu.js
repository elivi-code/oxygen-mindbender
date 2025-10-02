import styled from 'styled-components';

const ContextMenu = styled.div`
  ${({ isDisabled }) => isDisabled && 'cursor: not-allowed;'}
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.contextMenuZIndex};

  width: ${({ theme }) => theme.contextMenuWidth};
  padding: ${({ theme }) => theme.contextMenuPadding};
  border-radius: ${({ theme }) => theme.contextMenuBorderRadius};
  margin: 1px;
  border: ${({ theme }) => theme.contextMenuBorder};

  background-color: ${({ theme }) => theme.contextMenuBackground};
  box-shadow: ${({ theme }) => theme.contextMenuBoxShadow};
`;

export default ContextMenu;

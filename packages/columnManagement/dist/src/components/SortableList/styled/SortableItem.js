import { IconButton } from '@8x8/oxygen-button';
import styled from 'styled-components';
export const DraggableIconButton = styled(IconButton) `
  visibility: hidden;

  ${({ isActionFocused }) => isActionFocused && `visibility: visible;`}

  &:focus-visible {
    visibility: visible;
  }
`;
export const Wrapper = styled.div `
  ${({ theme, isGhost }) => isGhost && `background: ${theme.ui01};`}
`;
export const Item = styled.div `
  display: flex;
  padding: 12px 16px 12px 4px;

  cursor: ${({ isDraggable }) => (isDraggable ? 'pointer' : 'unset')};

  ${({ theme }) => `
    &:focus-visible {
      outline: 2px solid ${theme.focus01};
      outline-offset: -2px 
    }
    `}

  &:active
    > ${DraggableIconButton},
    &:focus-visible
    > ${DraggableIconButton},
    &:hover
    > ${DraggableIconButton} {
    visibility: ${({ isDraggable }) => isDraggable && 'visible'};
  }

  &:hover {
    background: ${({ theme }) => theme.ui02};
  }

  ${({ isOverlay, theme }) => isOverlay &&
    `
    border: 1px solid ${theme.focus01};
    opacity: 0.9;
    background: ${theme.ui06} !important;
    cursor: inherit;
    padding-left: 24px;
    `}

  ${({ transform }) => transform &&
    `
    transform: ${transform};`}

    ${({ transition }) => transition &&
    `
    transition: ${transition};
    `}
`;
export const ContainerWrapper = styled.div `
  width: 100%;
`;

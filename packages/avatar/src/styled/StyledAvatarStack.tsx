import styled, { css } from 'styled-components';

import { AvatarStackTheme } from '../types';

const commonStyles = css`
  align-items: center;
  background: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  display: flex;
  outline: none;
  padding: 2px;
  transition: 200ms ease-out;
`;

const StyledAvatarStackButton = styled.button<{
  theme: AvatarStackTheme;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}>`
  ${commonStyles};

  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.borderColorHover};
  }
  &:focus-visible {
    background: ${({ theme }) => theme.backgroundHover};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.borderColorFocus};
  }
`;

const StyledAvatarStackDiv = styled.div`
  ${commonStyles};
`;

export { StyledAvatarStackButton, StyledAvatarStackDiv };

import styled, { css } from 'styled-components';
import themes from '@8x8/oxygen-theme';
import { avatarSize } from '../constants';
import getSizeInPx from '../utils/getSizeInPx';
import getFontSizeInPx from '../utils/getFontSizeInPx';
const { colorPalette } = themes;
const statusBorderColor = {
    available: colorPalette.green04,
    away: colorPalette.orange06,
    busy: colorPalette.red05,
    doNotDisturb: colorPalette.red05,
    onBreak: colorPalette.gray05,
    onCall: colorPalette.red05,
    onDirectCall: colorPalette.green04,
    offline: colorPalette.gray05,
    workingOffline: colorPalette.orange06,
    wrapUp: colorPalette.violet05,
};
const inAvatarElement = `
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  content: '';
  z-index: 2;
`;
const active = css `
  &::after {
    ${inAvatarElement}
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.focusBorderColor},
      inset 0 0 0 4px ${({ theme }) => theme.innerBorderColor};
  }
`;
const interactable = css `
  cursor: pointer;
  &:focus-visible {
    outline: none;
    ${active}
  }
  &:hover {
    &::before {
      ${inAvatarElement}
      background: #292929; /* using a color directly as this is the same between themes, and we don't have a token for this. design agreed */
      opacity: 0.15;
    }
  }
`;
const getStatusBorder = (theme, size, userStatus) => {
    const borderSize = [avatarSize.size3xsmall, avatarSize.size2xsmall].includes(size)
        ? 1
        : 2;
    return css `
    box-shadow: inset 0 0 0 ${borderSize}px ${statusBorderColor[userStatus]},
      inset 0 0 0 ${borderSize * 2}px ${theme.innerBorderColor};
  `;
};
const statusBorder = css `
  &::after {
    ${inAvatarElement}
    ${({ theme, size, userStatus }) => getStatusBorder(theme, size, userStatus)}
  }
`;
const StyledAvatar = styled.div `
  ${({ hasBorder, theme }) => hasBorder && `border: 2px solid ${theme.borderColor};`}
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  ${({ theme, size }) => {
    const sizeInPx = getSizeInPx({ theme, size });
    return `
      height: ${sizeInPx};
      min-height: ${sizeInPx};
      width: ${sizeInPx};
      min-width: ${sizeInPx};
    `;
}}

  border-radius: 50%;
  background: ${({ theme }) => theme.avatarBackgroundColor};
  > svg {
    fill: ${({ theme }) => theme.initialsColor};
  }
  color: ${({ theme }) => theme.initialsColor};
  font-family: ${({ theme }) => theme.initialsFontFamily};
  font-size: ${getFontSizeInPx};
  ${({ hasStatusBorder }) => hasStatusBorder && statusBorder}
  ${({ onClick }) => onClick && interactable}
  ${({ isActive }) => isActive && active}
`;
const EditOverlay = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme, size }) => `calc(0.3 * ${theme[`size${size[0].toUpperCase() + size.slice(1)}`]})`};
  position: absolute;
  background: ${({ theme }) => theme.editOverlayColor};
  opacity: 0.85;
  svg {
    fill: ${({ theme }) => theme.editIconColor};
    width: ${({ theme }) => theme.editIconSmallSize};
    height: ${({ theme }) => theme.editIconSmallSize};
  }
  left: 0;
  right: 0;
  bottom: 0;
`;
const EditOverlayWrapper = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 50%;
`;
const StyledAvatarImage = styled.img `
  width: ${getSizeInPx};
  height: ${getSizeInPx};
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  opacity: ${({ opacity }) => opacity};
`;
const UserStatusWrapper = styled.div `
  display: flex;
  position: absolute;
  pointer-events: none;
  right: 0;
  bottom: 0;
  z-index: 3;
`;
export { StyledAvatarImage, StyledAvatar, EditOverlay, UserStatusWrapper, EditOverlayWrapper, };

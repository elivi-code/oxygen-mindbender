import styled, { css } from 'styled-components';
import { CloseCircleIcon } from '@8x8/oxygen-icon';
const SelectContainer = styled.div `
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
  margin-top: ${({ theme, hasLabel }) => (hasLabel ? theme.marginTop : '0')};
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;
SelectContainer.displayName = 'SelectContainer';
const IconLeftWrapper = styled.div `
  align-self: center;
  display: flex;
  align-items: center;
  padding-right: ${({ theme }) => theme.iconPaddingRight};
  margin: ${({ theme }) => theme.iconMargin};
`;
IconLeftWrapper.displayName = 'IconLeftWrapper';
const CloseNovoIcon = styled(CloseCircleIcon) `
  fill: ${({ theme }) => theme.icon01};
`;
CloseNovoIcon.displayName = 'CloseNovoIcon';
const CloseIcon = styled(CloseCircleIcon) `
  &:hover {
    fill: ${({ isFocused, theme }) => isFocused ? theme.clearIconFocusedHoverColor : theme.clearIconHoverColor};
  }
`;
CloseIcon.displayName = 'CloseIcon';
const AvatarIcon = styled.div `
  padding-right: ${({ theme }) => `${theme.avatarPaddingRight}`};
`;
AvatarIcon.displayName = 'AvatarIcon';
const CheckboxWrapper = styled.div `
  padding-right: ${({ theme }) => `${theme.checkboxPaddingRight}`};
  width: 100%;
`;
CheckboxWrapper.displayName = 'CheckboxWrapper';
const OptionWrapper = styled.div `
  flex-grow: 1;
  display: block;
  max-width: 100%;
  align-self: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;
OptionWrapper.displayName = 'OptionWrapper';
const OptionCheckboxLayer = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${({ isDisabled }) => !isDisabled && `cursor: pointer`};
`;
OptionCheckboxLayer.displayName = 'OptionCheckboxLayer';
const ValueWrapper = styled.div `
  align-items: center;
  display: flex;
  flex: 1;
  position: relative;
  ${({ size }) => {
    if (size === 'small') {
        return `
        margin: 2px 0;
        gap: 3px;
      `;
    }
    return `
      margin: 6px 0;
      gap: 6px;
    `;
}}
  overflow: auto;
  ${({ theme, size, multipleSelectMaxRows }) => {
    let padding = theme.multiValueChipPaddingVerticalDefault;
    let margin = '12px'; // margin top + bottom
    if (size === 'small') {
        padding = theme.multiValueChipPaddingVerticalSmall;
        // only small size has half the margin & gap
        margin = '6px';
    }
    if (size === 'large') {
        padding = theme.multiValueChipPaddingVerticalLarge;
    }
    // if single line, preserve no flex-wrapping
    if (multipleSelectMaxRows === 1) {
        return css `
        flex-wrap: nowrap;
        overflow: hidden;
      `;
    }
    // this calculates the height of the chip (Tag height + padding top&bottom) * max rows + top&bottom margins
    return css `
      flex-wrap: wrap;
      max-height: calc(
        ((1.5rem + (2 * ${padding})) * ${multipleSelectMaxRows}) + ${margin}
      );
    `;
}}
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;
ValueWrapper.displayName = 'ValueWrapper';
const ShortMultiDisplay = styled.div `
  color: ${({ theme }) => theme.selectedOptionTextColor};
  position: relative;
  padding-right: ${({ theme }) => theme.shortMultiDisplayPadding};
  max-width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
`;
ShortMultiDisplay.displayName = 'ShortMultiDisplay';
const Ellipsis = styled.div `
  min-width: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
Ellipsis.displayName = 'Ellipsis';
export { AvatarIcon, CheckboxWrapper, CloseIcon, CloseNovoIcon, Ellipsis, IconLeftWrapper, OptionWrapper, OptionCheckboxLayer, SelectContainer, ShortMultiDisplay, ValueWrapper, };

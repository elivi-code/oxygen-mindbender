import styled from 'styled-components';

import Button from '@8x8/oxygen-button';

export const StyledButton = styled(Button)<{ invertItems: boolean }>`
  display: inline-flex;
  align-items: center;
  ${({ invertItems }) => invertItems && 'flex-flow: row-reverse'}
`;

export const DropdownWrapper = styled.div`
  margin-top: ${({ theme }) => theme.dropdownOffset};

  padding: ${({ theme }) => theme.dropdownPadding};
  border: 1px solid ${({ theme }) => theme.dropdownBorderColor};
  border-radius: ${({ theme }) => theme.dropdownBorderRadius};

  box-shadow: ${({ theme }) => theme.dropdownShadowSize}
    ${({ theme }) => theme.dropdownShadowColor};
  background: ${({ theme }) => theme.dropdownBackgroundColor};

  overflow: hidden;
  z-index: ${({ theme }) => theme.dropdownZIndex};
`;

export default DropdownWrapper;

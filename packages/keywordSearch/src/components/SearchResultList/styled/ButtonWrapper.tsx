import styled, { CSSObject } from 'styled-components';
import textTruncate from '../../../utils/mixins/textTruncate';

const ButtonWrapper = styled.button<{ isActive: boolean; isInfo: boolean }>`
  display: flex;
  justify-content: flex-start;
  white-space: nowrap;
  width: 100%;
  border: none;
  cursor: pointer;
  color: ${({ theme, isInfo }) =>
    isInfo ? theme.action01 : theme.textColor01};
  border-radius: 6px;
  padding: ${({ theme }) => `${theme.spacing03} ${theme.spacing05}`};
  background: ${({ isActive, theme }) => (isActive ? theme.ui02 : theme.ui06)};
  ${({ theme }) => theme.body01 as CSSObject};

  &:hover {
    background: ${({ theme }) => theme.ui02};
  }

  ${({ isInfo }) =>
    !isInfo &&
    `
    > span:first-of-type {
      ${textTruncate}
    }
  `};
`;

export default ButtonWrapper;

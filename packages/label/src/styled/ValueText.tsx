import styled from 'styled-components';
import { ellipsis } from 'polished';

interface Props {
  shouldWrapText?: boolean;
  isDisabled?: boolean;
}

const ValueText = styled.label<Props>`
  font-style: normal;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize};
  font-stretch: ${({ theme }) => theme.fontStretch};
  font-weight: ${({ theme }) => theme.fontWeight};
  align-items: baseline;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  outline: none;
  color: ${({ theme }) => theme.fontColor};
  cursor: ${({ htmlFor, isDisabled }) => {
    if (isDisabled) {
      return 'not-allowed';
    }

    return htmlFor ? 'pointer' : 'default';
  }};
  ${({ shouldWrapText }) => (shouldWrapText ? 'display: flex;' : ellipsis())}
  overflow-wrap: anywhere;
`;

export default ValueText;

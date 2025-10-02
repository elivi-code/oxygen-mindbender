import styled from 'styled-components';

const ProgressBarText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  font-stretch: ${({ theme }) => theme.fontStretch};
  font-style: ${({ theme }) => theme.fontStyle};
  font-weight: ${({ theme }) => theme.fontWeight};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  line-height: ${({ theme }) => theme.lineHeight};
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.color};
`;

export default ProgressBarText;

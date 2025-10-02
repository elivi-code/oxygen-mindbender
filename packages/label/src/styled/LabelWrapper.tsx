import styled from 'styled-components';

interface Props {
  shouldWrapText?: boolean;
}

const LabelWrapper = styled.div<Props>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: ${({ theme, shouldWrapText }) =>
    shouldWrapText ? theme.height : 'auto '};
  width: 100%;
`;

export default LabelWrapper;

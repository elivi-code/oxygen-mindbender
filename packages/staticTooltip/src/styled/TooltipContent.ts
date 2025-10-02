import styled from 'styled-components';

const TooltipContent = styled.div`
  box-sizing: border-box;
  min-height: 0.8rem;
  min-width: 24px;
  max-height: ${({ theme }) =>
    parseInt(theme.maxHeight, 10) - parseInt(theme.padding, 10) * 2}px;
  overflow-x: auto;
  word-break: break-word;
`;

export default TooltipContent;

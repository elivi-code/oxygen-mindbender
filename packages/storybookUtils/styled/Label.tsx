import styled from 'styled-components';

const Label = styled.p.attrs(() => ({
  'data-test-id': 'STORYBOOK_LABEL',
}))`
  ${({ theme }) => ({ ...theme.label01 })};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.textColor01};
`;

export default Label;

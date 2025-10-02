import styled from 'styled-components';

const Headline = styled.h1.attrs(() => ({
  'data-test-id': 'STORYBOOK_HEADLINE',
}))`
  display: block;
  width: 100%;
  ${({ theme }) => ({ ...theme.heading01 })};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({ theme }) => theme.textColor01};
  margin: 0 0 ${({ theme }) => theme.spacing03};
`;

export default Headline;

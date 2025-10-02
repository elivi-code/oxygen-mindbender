import styled from 'styled-components';

const Section = styled.div.attrs(() => ({
  'data-test-id': 'STORYBOOK_SECTION',
}))`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.ui03};
  margin-bottom: ${({ theme }) => theme.spacing07};
  font-family: ${({ theme }) => theme.body01.fontFamily};
  box-sizing: border-box;
`;

export default Section;

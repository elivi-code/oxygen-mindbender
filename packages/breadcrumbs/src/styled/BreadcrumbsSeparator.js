import styled from 'styled-components';

const BreadcrumbsSeparator = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.separatorFontSize};
  font-weight: ${({ theme }) => theme.separatorFontWeight};
  padding: ${({ theme }) => theme.separatorPadding};
  color: ${({ theme }) => theme.separatorTextColor};
`;

export default BreadcrumbsSeparator;

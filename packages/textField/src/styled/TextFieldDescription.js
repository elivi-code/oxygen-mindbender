import styled from 'styled-components';

const TextFieldDescription = styled.div`
  color: ${({ theme }) => theme.descriptionColor};
  font-family: ${({ theme }) => theme.descriptionFontFamily};
  font-size: ${({ theme }) => theme.descriptionFontSize};
  font-style: ${({ theme }) => theme.descriptionFontStyle};
  font-weight: ${({ theme }) => theme.descriptionFontWeight};
  line-height: ${({ theme }) => theme.descriptionLineHeight};
  text-align: left;
`;

export default TextFieldDescription;

import styled from 'styled-components';
import Label from '@8x8/oxygen-label';

const TextFieldLabel = styled(Label)`
  min-width: ${({ theme }) => theme.labelMinWidth};
  padding: ${({ theme }) => theme.labelPadding};
`;

export default TextFieldLabel;

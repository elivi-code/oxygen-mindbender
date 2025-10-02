import styled from 'styled-components';
import { getBaseStyles } from './Row';

const HeaderRow = styled.tr`
  ${getBaseStyles};
  height: 48px;
  border-bottom: ${props => `2px solid ${props.theme.ui01}`};
`;

export { HeaderRow };

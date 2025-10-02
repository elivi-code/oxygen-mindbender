import React from 'react';
import styled from 'styled-components';

import { ellipsis } from '../styled/mixins/ellipsis';

interface Props {
  text: string | number;
  title?: string;
  textAlign?: string;
  isInactive?: boolean;
}

interface TextCellProps {
  title?: string;
  textAlign?: string;
  isInactive?: boolean;
}

const StyledPrimaryTextCell = styled.div<TextCellProps>`
  ${ellipsis};
  ${props => ({ ...props.theme.body01 })};
  color: ${props =>
    props.isInactive ? props.theme.textColor02 : props.theme.textColor01};
  text-align: ${props => props.textAlign || 'left'};
  width: 100%;
`;

const PrimaryTextCell: React.FC<Props> = ({
  text,
  title,
  isInactive,
  ...rest
}) => (
  <StyledPrimaryTextCell
    {...rest}
    title={title || `${text}`}
    isInactive={isInactive}
  >
    {text}
  </StyledPrimaryTextCell>
);

export { PrimaryTextCell };

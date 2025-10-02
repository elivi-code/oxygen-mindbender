import React from 'react';

import styled from 'styled-components';
import { PrimaryTextCell } from './PrimaryTextCell';
import { SecondaryTextCell } from './SecondaryTextCell';

interface Props {
  primaryText: string | number;
  secondaryText?: string | number;
  className?: string;
  isInactive?: boolean;
}

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing01};
`;

const TextCell: React.FC<Props> = ({
  primaryText,
  secondaryText,
  className,
  isInactive,
}) => (
  <TextContainer className={className}>
    {primaryText && (
      <PrimaryTextCell isInactive={isInactive} text={primaryText} />
    )}
    {secondaryText && <SecondaryTextCell text={secondaryText} />}
  </TextContainer>
);

export { TextCell };

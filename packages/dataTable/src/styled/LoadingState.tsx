import React from 'react';
import styled from 'styled-components';

import { Spinner } from '@8x8/oxygen-loaders';

const LoadingStateContainer = styled.tbody`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing03};
`;

const LoadingText = styled.span`
  ${props => ({ ...props.theme.body01 })};
  color: ${props => props.theme.textColor01};
`;

interface Props {
  loadingText?: string;
}

const LoadingState: React.FC<Props> = ({ loadingText }) => (
  <LoadingStateContainer>
    <tr>
      <ContentContainer>
        <Spinner size="small" strokeWidth={1.5} />
        <LoadingText>{loadingText}</LoadingText>
      </ContentContainer>
    </tr>
  </LoadingStateContainer>
);

export { LoadingState };

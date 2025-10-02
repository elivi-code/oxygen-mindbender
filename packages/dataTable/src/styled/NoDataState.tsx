import React from 'react';
import styled from 'styled-components';
import Button from '@8x8/oxygen-button';

interface Props {
  title: string;
  callToAction?: {
    text: string;
    onClick: (event: React.MouseEvent) => void;
  };
}

const Title = styled.span`
  ${props => ({ ...props.theme.heading01 })};
  color: ${props => props.theme.textColor01};
`;

const NoDataStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing05};
  height: 100%;
  width: 100%;
`;

const NoDataState: React.FC<Props> = ({ callToAction, title }) => (
  <NoDataStateContainer>
    <Title>{title}</Title>
    {callToAction && (
      <Button variant="text" onClick={callToAction.onClick}>
        {callToAction.text}
      </Button>
    )}
  </NoDataStateContainer>
);

export { NoDataState, Props as NoDataStateProps };

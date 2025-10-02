import React from 'react';
import styled from 'styled-components';
import { Spinner } from '@8x8/oxygen-loaders';
const LoadingStateContainer = styled.tbody `
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.td `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing03};
`;
const LoadingText = styled.span `
  ${props => ({ ...props.theme.body01 })};
  color: ${props => props.theme.textColor01};
`;
const LoadingState = ({ loadingText }) => (React.createElement(LoadingStateContainer, null,
    React.createElement("tr", null,
        React.createElement(ContentContainer, null,
            React.createElement(Spinner, { size: "small", strokeWidth: 1.5 }),
            React.createElement(LoadingText, null, loadingText)))));
export { LoadingState };

import React from 'react';
import styled from 'styled-components';
import { Spinner } from '@8x8/oxygen-loaders';
export const OverlayCentered = styled.div `
  max-width: 100%;
  min-width: 282px;
  padding: 24px 0;
`;
export const SelectSpinner = ({ children, }) => (React.createElement(OverlayCentered, null,
    React.createElement(Spinner, { size: "small", text: children })));

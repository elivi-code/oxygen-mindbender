import React from 'react';
import styled from 'styled-components';
import { ArrowDownIcon, ArrowUpIcon } from '@8x8/oxygen-icon';
import { useAddIconColor } from '../../../hooks/useAddIconColor';
const StyledArrowContainer = styled.div `
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
  padding: 6px;
`;
export const Arrow = ({ isUp }) => {
    const coloredIcon = useAddIconColor(isUp ? React.createElement(ArrowUpIcon, { size: 16 }) : React.createElement(ArrowDownIcon, { size: 16 }));
    return React.createElement(StyledArrowContainer, null, coloredIcon);
};

import React from 'react';
import styled from 'styled-components';
import { RowStatusType } from '../actions/ActionTypes';
const ERROR_INDICATOR_WIDTH = 4;
const getRowStatusColor = ({ rowStatusType, theme }) => {
    switch (rowStatusType) {
        case RowStatusType.WARNING: {
            return theme.warning01;
        }
        case RowStatusType.ERROR: {
            return theme.error01;
        }
        case RowStatusType.INFO:
        default: {
            return theme.ui10;
        }
    }
};
const Warning = styled.div `
  width: ${ERROR_INDICATOR_WIDTH}px;
  height: 48px;
  border-radius: 4px;
  background-color: ${getRowStatusColor};
`;
const WarningContainer = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  left: 0;
  z-index: 11;
`;
const WarningIndicator = ({ rowStatusType }) => (React.createElement(WarningContainer, null,
    React.createElement(Warning, { rowStatusType: rowStatusType })));
export { WarningIndicator, ERROR_INDICATOR_WIDTH, getRowStatusColor };

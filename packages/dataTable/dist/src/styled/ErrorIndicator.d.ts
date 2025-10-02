import React from 'react';
import { DefaultTheme } from 'styled-components';
import { RowStatusType } from '../actions/ActionTypes';
declare const ERROR_INDICATOR_WIDTH = 4;
type GetRowStatusColor = {
    theme: DefaultTheme;
    rowStatusType?: RowStatusType;
};
declare const getRowStatusColor: ({ rowStatusType, theme }: GetRowStatusColor) => `#${string}`;
interface Props {
    rowStatusType: RowStatusType;
}
declare const WarningIndicator: ({ rowStatusType }: Props) => React.JSX.Element;
export { WarningIndicator, ERROR_INDICATOR_WIDTH, getRowStatusColor };
//# sourceMappingURL=ErrorIndicator.d.ts.map
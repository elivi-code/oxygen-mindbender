import React, { MouseEvent } from 'react';
export type ActionTypes = 'default' | 'danger';
export interface ActionProps {
    testId?: string;
    label: string;
    onClick: (event?: MouseEvent) => void;
    disabled?: {
        isDisabled: boolean;
        reason: string;
    };
    icon?: React.ReactNode;
    key: string;
    type?: ActionTypes;
}
//# sourceMappingURL=types.d.ts.map
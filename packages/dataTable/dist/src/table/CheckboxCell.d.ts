import React from 'react';
import { CheckboxProps } from '@8x8/oxygen-checkbox';
type CheckboxCellProps = {
    checked: boolean;
    indeterminate?: boolean;
    onChange: (value: boolean) => void;
    isDisabled?: boolean;
    testId?: string;
} & Pick<CheckboxProps<string>, 'inputProps'>;
declare const CheckboxCell: React.FC<CheckboxCellProps>;
export { CheckboxCell };
//# sourceMappingURL=CheckboxCell.d.ts.map
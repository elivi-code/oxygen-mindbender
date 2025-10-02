import React from 'react';
import { CheckfilledIcon, CheckboxIcon as CheckboxIconUncheckedNovo, IndeterminatefilledIcon, CheckboxCheckedIcon, CheckboxUncheckedIcon, CheckboxIndeterminateIcon, } from '@8x8/oxygen-icon';
const Checked = ({ isNovo, ...rest }) => isNovo ? React.createElement(CheckfilledIcon, { ...rest }) : React.createElement(CheckboxCheckedIcon, { ...rest });
const Indeterminate = ({ isNovo, ...rest }) => isNovo ? (React.createElement(IndeterminatefilledIcon, { ...rest })) : (React.createElement(CheckboxIndeterminateIcon, { ...rest }));
const Unchecked = ({ isNovo, ...rest }) => isNovo ? (React.createElement(CheckboxIconUncheckedNovo, { ...rest })) : (React.createElement(CheckboxUncheckedIcon, { ...rest }));
const CheckboxIcon = ({ isNovo, isChecked, isIndeterminate, }) => {
    const props = {
        isNovo,
        color: 'currentColor',
        role: 'presentation',
    };
    if (isChecked) {
        return React.createElement(Checked, { ...props });
    }
    if (isIndeterminate) {
        return React.createElement(Indeterminate, { ...props });
    }
    return React.createElement(Unchecked, { ...props });
};
export default CheckboxIcon;

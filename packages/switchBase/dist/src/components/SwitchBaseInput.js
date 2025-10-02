import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { SwitchBaseInputField, SwitchBaseInputWrapper } from '../styled';
const SwitchBaseInput = ({ testId, id, value, name, icon, isChecked, isDisabled, onBlur, onChange, onFocus, onMouseEnter, onMouseLeave, onKeyPress, role, ...rest }) => {
    return (React.createElement(SwitchBaseInputWrapper, null,
        React.createElement(SwitchBaseInputField, { ...getTestAttributes(testId), id: id, value: value, type: "checkbox", name: name, checked: isChecked, "aria-disabled": isDisabled, onBlur: onBlur, onChange: onChange, onFocus: onFocus, onKeyPress: onKeyPress, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, role: role, ...rest }),
        icon));
};
export default SwitchBaseInput;

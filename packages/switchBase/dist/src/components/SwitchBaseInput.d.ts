import React, { ChangeEventHandler } from 'react';
import { SwitchBaseCommonProps } from './SwitchBaseCommonProps';
import { InputValue } from '../types';
export interface Props<T extends InputValue> extends SwitchBaseCommonProps<T> {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const SwitchBaseInput: <T extends string | number | readonly string[] | undefined>({ testId, id, value, name, icon, isChecked, isDisabled, onBlur, onChange, onFocus, onMouseEnter, onMouseLeave, onKeyPress, role, ...rest }: Props<T>) => React.JSX.Element;
export default SwitchBaseInput;
//# sourceMappingURL=SwitchBaseInput.d.ts.map
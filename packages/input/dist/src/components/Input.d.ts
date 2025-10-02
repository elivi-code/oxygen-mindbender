import React, { MutableRefObject, PureComponent } from 'react';
import { InputDefaultProps, InputProps } from './InputProps';
export interface InputState {
    focused: boolean;
}
declare class Input extends PureComponent<InputProps, InputState> {
    static defaultProps: InputDefaultProps;
    state: InputState;
    inputFieldRef: MutableRefObject<HTMLInputElement | null>;
    constructor(props: InputProps);
    componentDidMount(): void;
    setInputFieldRef: (element: HTMLInputElement | null) => void;
    handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Input & React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Input.d.ts.map
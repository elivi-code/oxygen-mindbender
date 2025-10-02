import React from 'react';
import { GroupBase, Props, SingleValue } from 'react-select';
import { SelectOption } from './SelectProps';
export declare const createCustomInput: ({ testId, isSelectableInput, }: {
    testId?: string | undefined;
    isSelectableInput: boolean;
}) => <Option_7, IsMulti_7 extends boolean, Group_7 extends GroupBase<Option_7>>(props: import("react-select").InputProps<Option_7, IsMulti_7, Group_7>) => import("@emotion/react").jsx.JSX.Element;
interface OwnProps {
    hasSelectableInput: boolean;
}
type UseInputProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Pick<Props<Option, IsMulti, Group>, 'testId' | 'value' | 'onChange' | 'onInputChange' | 'isMulti' | 'onFocus' | 'isDisabled' | 'filterOption'> & OwnProps;
/**
 * Renders a mouse (and keyboard)-selectable input field inside react-select dropdown
 *
 * to have few generic params, didn't propagate OptionValue, as it is not needed now
 */
declare const useInput: <Option extends SelectOption<unknown>, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: UseInputProps<Option, IsMulti, Group>) => {
    selectProps: {
        value?: undefined;
        inputValue?: undefined;
        onChange?: undefined;
        onInputChange?: undefined;
        onFocus?: undefined;
        filterOption?: undefined;
    };
    components: {
        Input: <Option_7, IsMulti_7 extends boolean, Group_7 extends GroupBase<Option_7>>(props: import("react-select").InputProps<Option_7, IsMulti_7, Group_7>) => import("@emotion/react").jsx.JSX.Element;
    };
} | {
    selectProps: {
        value: SingleValue<Option> | undefined;
        inputValue: string | undefined;
        onChange: (newValue: import("react-select").OnChangeValue<Option, IsMulti>, actionMeta: import("react-select").ActionMeta<Option>) => void;
        onInputChange: (newValue: string, actionMeta: import("react-select").InputActionMeta) => void;
        onFocus: React.FocusEventHandler<HTMLInputElement>;
        filterOption: (option: import("react-select/dist/declarations/src/filters").FilterOptionOption<Option>, inputValue: string) => boolean;
    };
    components: {
        Input: <Option_7, IsMulti_7 extends boolean, Group_7 extends GroupBase<Option_7>>(props: import("react-select").InputProps<Option_7, IsMulti_7, Group_7>) => import("@emotion/react").jsx.JSX.Element;
    };
};
export { useInput };
//# sourceMappingURL=useInput.d.ts.map
import React from 'react';
import { GroupBase, Props, SelectInstance } from 'react-select';
import { LabelPropsExtended, OwnProps, SelectOption, SelectProps } from './SelectProps';
declare const Select: <OptionValue, Option extends SelectOption<OptionValue>, IsAsync extends boolean = false, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Omit<Props<Option, IsMulti, Group>, "theme" | "loadingMessage"> & (IsAsync extends true ? Omit<import("react-select/async").AsyncProps<Option, IsMulti, Group>, "form" | "name" | "theme" | "size" | "testId" | "hasIcons" | "hasCheckbox" | "multipleSelectMaxRows" | "hasShortMultiDisplay" | "hasError" | "inputProps" | "iconLeft" | "isReadOnly" | "clearIconAriaLabel" | "aria-errormessage" | "aria-invalid" | "aria-label" | "aria-labelledby" | "aria-live" | "value" | "loadingMessage" | "noOptionsMessage" | "placeholder" | "className" | "id" | "autoFocus" | "tabIndex" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "options" | "isMulti" | "isRtl" | "isDisabled" | "menuIsOpen" | "ariaLiveMessages" | "backspaceRemovesValue" | "blurInputOnSelect" | "captureMenuScroll" | "classNamePrefix" | "classNames" | "closeMenuOnSelect" | "closeMenuOnScroll" | "components" | "controlShouldRenderValue" | "delimiter" | "escapeClearsValue" | "filterOption" | "formatGroupLabel" | "formatOptionLabel" | "getOptionLabel" | "getOptionValue" | "hideSelectedOptions" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isLoading" | "isOptionDisabled" | "isOptionSelected" | "isSearchable" | "minMenuHeight" | "maxMenuHeight" | "menuPlacement" | "menuPosition" | "menuPortalTarget" | "menuShouldBlockScroll" | "menuShouldScrollIntoView" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "openMenuOnFocus" | "openMenuOnClick" | "pageSize" | "screenReaderStatus" | "styles" | "tabSelectsValue" | "unstyled" | "required" | keyof import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<unknown>> : unknown) & LabelPropsExtended & Partial<{
    size?: import("./SelectProps").Size | undefined;
    testId?: string | undefined;
    hasIcons?: boolean | undefined;
    hasCheckbox?: boolean | undefined;
    multipleSelectMaxRows?: number | undefined;
    hasShortMultiDisplay?: boolean | undefined;
    hasError?: boolean | undefined;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> | undefined;
    iconLeft?: React.ComponentType<import("@8x8/oxygen-icon").IconProps> | undefined;
    clearIconAriaLabel: React.ReactNode;
}> & OwnProps<IsAsync> & React.RefAttributes<SelectInstance<unknown, false, GroupBase<unknown>>>) => React.JSX.Element;
export { Select };
declare const _default: <OptionValue, Option extends SelectOption<OptionValue>, IsAsync extends boolean = false, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Omit<Props<Option, IsMulti, Group>, "theme" | "loadingMessage"> & (IsAsync extends true ? Omit<import("react-select/async").AsyncProps<Option, IsMulti, Group>, "form" | "name" | "theme" | "size" | "testId" | "hasIcons" | "hasCheckbox" | "multipleSelectMaxRows" | "hasShortMultiDisplay" | "hasError" | "inputProps" | "iconLeft" | "isReadOnly" | "clearIconAriaLabel" | "aria-errormessage" | "aria-invalid" | "aria-label" | "aria-labelledby" | "aria-live" | "value" | "loadingMessage" | "noOptionsMessage" | "placeholder" | "className" | "id" | "autoFocus" | "tabIndex" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "options" | "isMulti" | "isRtl" | "isDisabled" | "menuIsOpen" | "ariaLiveMessages" | "backspaceRemovesValue" | "blurInputOnSelect" | "captureMenuScroll" | "classNamePrefix" | "classNames" | "closeMenuOnSelect" | "closeMenuOnScroll" | "components" | "controlShouldRenderValue" | "delimiter" | "escapeClearsValue" | "filterOption" | "formatGroupLabel" | "formatOptionLabel" | "getOptionLabel" | "getOptionValue" | "hideSelectedOptions" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isLoading" | "isOptionDisabled" | "isOptionSelected" | "isSearchable" | "minMenuHeight" | "maxMenuHeight" | "menuPlacement" | "menuPosition" | "menuPortalTarget" | "menuShouldBlockScroll" | "menuShouldScrollIntoView" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "openMenuOnFocus" | "openMenuOnClick" | "pageSize" | "screenReaderStatus" | "styles" | "tabSelectsValue" | "unstyled" | "required" | keyof import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<unknown>> : unknown) & LabelPropsExtended & Partial<{
    size?: import("./SelectProps").Size | undefined;
    testId?: string | undefined;
    hasIcons?: boolean | undefined;
    hasCheckbox?: boolean | undefined;
    multipleSelectMaxRows?: number | undefined;
    hasShortMultiDisplay?: boolean | undefined;
    hasError?: boolean | undefined;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> | undefined;
    iconLeft?: React.ComponentType<import("@8x8/oxygen-icon").IconProps> | undefined;
    clearIconAriaLabel: React.ReactNode;
}> & OwnProps<IsAsync> & React.RefAttributes<SelectInstance<unknown, false, GroupBase<unknown>>>) => React.JSX.Element;
export default _default;
//# sourceMappingURL=Select.d.ts.map
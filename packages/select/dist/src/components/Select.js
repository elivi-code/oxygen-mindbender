import React, { useImperativeHandle, useRef, useMemo } from 'react';
import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectCreatable from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import Label from '@8x8/oxygen-label';
import getCustomStyles from '../constants/customStyles';
import { ClearIndicator } from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import SingleValue from './SingleValue';
import MultiValue from './MultiValue';
import { Option } from './Option';
import { ValueContainer } from './ValueContainer';
import * as Styled from '../styled';
import { SelectSpinner } from '../styled/SelectSpinner';
import { useInput } from './useInput';
const defaultLabelProps = {
    action: '',
    actionLabel: '',
    isRequired: false,
    infoBoxText: undefined,
    labelValue: undefined,
    shouldWrapLabel: false,
    otherActionProps: {},
};
const defaultCustomSelectProps = {
    testId: 'SELECT',
    hasIcons: false,
    hasCheckbox: false,
    multipleSelectMaxRows: 1,
    size: 'default',
    hasShortMultiDisplay: false,
    hasError: false,
    inputProps: {},
};
const Select = (props) => {
    const defaultProps = {
        components: {},
        hideSelectedOptions: false,
        isClearable: true,
        isDisabled: false,
        noOptionsMessage: () => 'No options...',
        placeholder: 'Select...',
        menuPlacement: 'auto',
    };
    const defaultOwnProps = {
        isCreatable: false,
        hasSelectableInput: false,
        loadingMessage: 'Loading...',
    };
    const propsWithDefault = {
        ...defaultProps,
        ...defaultLabelProps,
        ...defaultCustomSelectProps,
        ...defaultOwnProps,
        ...props,
    };
    const { 
    // label props
    action, actionLabel, isRequired, infoBoxText, infoBoxButtonLabel, labelValue, shouldWrapLabel, otherActionProps, 
    // own props
    forwardedRef, isAsync, isCreatable, hasSelectableInput, loadingMessage, components, inputProps, 'aria-label': ariaLabel = labelValue, isDisabled, isClearable, onKeyDown, ...rest } = propsWithDefault;
    // withTheme injects this so it will always exist
    const theme = propsWithDefault.theme;
    const selectRef = useRef(null);
    useImperativeHandle(forwardedRef, () => ({
        ...selectRef.current,
        focus: () => {
            selectRef.current?.focus();
        },
    }));
    const getTheme = (defaultTheme) => {
        const { menuGutter, baseUnit } = theme;
        return {
            ...defaultTheme,
            ...theme,
            spacing: {
                ...defaultTheme.spacing,
                baseUnit,
                menuGutter,
            },
        };
    };
    const { testId, isMulti, hideSelectedOptions } = rest;
    const { labelFontWeight } = theme;
    const labelTheme = {
        fontWeight: labelFontWeight,
    };
    const labelProps = {
        action,
        actionLabel,
        isRequired,
        infoBoxText,
        infoBoxButtonLabel,
        shouldWrapLabel,
        value: labelValue,
        otherActionProps,
    };
    const SelectComponent = useMemo(() => {
        if (isAsync && isCreatable) {
            return AsyncCreatableSelect;
        }
        if (isAsync) {
            return ReactSelectAsync;
        }
        if (isCreatable) {
            return ReactSelectCreatable;
        }
        return ReactSelect;
    }, [isAsync, isCreatable]);
    const loading = React.useCallback(() => React.createElement(SelectSpinner, null, loadingMessage), [loadingMessage]);
    /** props not present in ReactSelect's props */
    const customSelectProps = {
        clearIconAriaLabel: labelValue || rest.placeholder,
        isReadOnly: isDisabled,
    };
    /** make input component readonly if isDisabled=true */
    const newInputProps = {
        ...inputProps,
        ...(isDisabled && { readOnly: true }),
    };
    /** don't allow menu to open when readOnly */
    const menuIsOpen = isDisabled ? false : props.menuIsOpen;
    /** selectable input field inside react-select */
    const input = useInput({
        testId,
        hasSelectableInput: hasSelectableInput,
        isMulti: props.isMulti,
        value: props.value,
        onChange: props.onChange,
        onInputChange: props.onInputChange,
        onFocus: props.onFocus,
    });
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(React.Fragment, null,
            labelValue && (React.createElement(Label, { testId: `${testId}_LABEL`, theme: labelTheme, showTooltipOnOverflow: true, isDisabled: isDisabled, shouldWrapText: shouldWrapLabel, ...labelProps })),
            React.createElement(Styled.SelectContainer, { hasLabel: Boolean(labelValue), "aria-hidden": false, ...getTestAttributes(`${testId}_CONTAINER`), isDisabled: !!isDisabled },
                React.createElement(SelectComponent, { onKeyDown: e => {
                        if (e.key === 'Backspace') {
                            isDisabled && e.preventDefault();
                        }
                        onKeyDown?.(e);
                    }, "aria-label": ariaLabel || rest.placeholder, isClearable: isClearable && !isDisabled, ...rest, ...customSelectProps, components: {
                        LoadingIndicator: undefined,
                        ClearIndicator,
                        DropdownIndicator,
                        MultiValue,
                        Option,
                        ValueContainer,
                        SingleValue,
                        ...components,
                        ...input.components,
                    }, theme: getTheme, styles: getCustomStyles(theme), hideSelectedOptions: hideSelectedOptions, isMulti: isMulti, closeMenuOnSelect: !isMulti, ref: selectRef, loadingMessage: loading, ...input.selectProps, inputProps: newInputProps, menuIsOpen: menuIsOpen })))));
};
export { Select };
export default withTheme(Select, 'select');

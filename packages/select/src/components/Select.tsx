import React, { useImperativeHandle, useRef, useMemo } from 'react';
import ReactSelect, {
  GroupBase,
  Props,
  SelectInstance,
  Theme,
} from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectCreatable from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import Label, { LabelProps } from '@8x8/oxygen-label';

import getCustomStyles from '../constants/customStyles';
import { ClearIndicator } from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import SingleValue from './SingleValue';
import MultiValue from './MultiValue';
import { Option } from './Option';
import { ValueContainer } from './ValueContainer';

import * as Styled from '../styled';
import { SelectSpinner } from '../styled/SelectSpinner';
import {
  CustomSelectProps,
  DefaultCustomSelectProps,
  LabelPropsExtended,
  OwnProps,
  SelectOption,
  SelectProps,
} from './SelectProps';
import { useInput } from './useInput';

const defaultLabelProps: LabelPropsExtended = {
  action: '',
  actionLabel: '',
  isRequired: false,
  infoBoxText: undefined,
  labelValue: undefined,
  shouldWrapLabel: false,
  otherActionProps: {},
};
const defaultCustomSelectProps: DefaultCustomSelectProps = {
  testId: 'SELECT',
  hasIcons: false,
  hasCheckbox: false,
  multipleSelectMaxRows: 1,
  size: 'default',
  hasShortMultiDisplay: false,
  hasError: false,
  inputProps: {},
};

const Select = <
  OptionValue,
  Option extends SelectOption<OptionValue>,
  IsAsync extends boolean = false,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: SelectProps<Option, IsAsync, IsMulti, Group> &
    React.RefAttributes<SelectInstance>,
) => {
  const defaultProps: Partial<Props<Option, IsMulti, Group>> = {
    components: {},
    hideSelectedOptions: false,
    isClearable: true,
    isDisabled: false,
    noOptionsMessage: () => 'No options...',
    placeholder: 'Select...',
    menuPlacement: 'auto',
  };
  const defaultOwnProps: Partial<OwnProps<IsAsync>> = {
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
  } as Required<
    typeof defaultProps &
      typeof defaultLabelProps &
      typeof defaultCustomSelectProps &
      typeof defaultOwnProps
  >;

  const {
    // label props
    action,
    actionLabel,
    isRequired,
    infoBoxText,
    infoBoxButtonLabel,
    labelValue,
    shouldWrapLabel,
    otherActionProps,

    // own props
    forwardedRef,
    isAsync,
    isCreatable,
    hasSelectableInput,
    loadingMessage,

    components,
    inputProps,
    'aria-label': ariaLabel = labelValue,
    isDisabled,
    isClearable,
    onKeyDown,
    ...rest
  } = propsWithDefault;
  // withTheme injects this so it will always exist
  const theme = propsWithDefault.theme as Theme;

  const selectRef = useRef<SelectInstance<Option, IsMulti, Group>>(null);

  useImperativeHandle(forwardedRef, () => ({
    ...selectRef.current,
    focus: () => {
      selectRef.current?.focus();
    },
  }));

  const getTheme = (defaultTheme: Theme) => {
    const { menuGutter, baseUnit } = theme;

    return {
      ...defaultTheme,
      ...theme,
      spacing: {
        ...defaultTheme.spacing,
        baseUnit,
        menuGutter,
      },
    } as Theme;
  };

  const { testId, isMulti, hideSelectedOptions } = rest;
  const { labelFontWeight } = theme;
  const labelTheme = {
    fontWeight: labelFontWeight,
  } as LabelProps['theme'];

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

  const loading = React.useCallback(
    () => <SelectSpinner>{loadingMessage as string}</SelectSpinner>,
    [loadingMessage],
  );

  /** props not present in ReactSelect's props */
  const customSelectProps: Pick<
    CustomSelectProps,
    'clearIconAriaLabel' | 'isReadOnly'
  > = {
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
  const input = useInput<Option, IsMulti, Group>({
    testId,
    hasSelectableInput: hasSelectableInput as boolean,
    isMulti: props.isMulti,
    value: props.value,
    onChange: props.onChange,
    onInputChange: props.onInputChange,
    onFocus: props.onFocus,
  });

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <>
        {labelValue && (
          <Label
            testId={`${testId}_LABEL`}
            theme={labelTheme}
            showTooltipOnOverflow
            isDisabled={isDisabled}
            shouldWrapText={shouldWrapLabel}
            {...labelProps}
          />
        )}
        <Styled.SelectContainer
          hasLabel={Boolean(labelValue)}
          aria-hidden={false}
          {...getTestAttributes(`${testId}_CONTAINER`)}
          isDisabled={!!isDisabled}
        >
          <SelectComponent
            onKeyDown={e => {
              if (e.key === 'Backspace') {
                isDisabled && e.preventDefault();
              }
              onKeyDown?.(e);
            }}
            aria-label={ariaLabel || (rest.placeholder as string)}
            isClearable={isClearable && !isDisabled}
            {...rest}
            {...customSelectProps}
            components={{
              LoadingIndicator: undefined,
              ClearIndicator,
              DropdownIndicator,
              MultiValue,
              Option,
              ValueContainer,
              SingleValue,
              ...components,
              ...input.components,
            }}
            theme={getTheme}
            styles={getCustomStyles<Option, IsMulti, Group>(theme)}
            hideSelectedOptions={hideSelectedOptions}
            isMulti={isMulti}
            closeMenuOnSelect={!isMulti}
            ref={selectRef}
            loadingMessage={loading}
            {...input.selectProps}
            inputProps={newInputProps}
            menuIsOpen={menuIsOpen}
          />
        </Styled.SelectContainer>
      </>
    </ThemeProvider>
  );
};

export { Select };

export default withTheme(Select, 'select') as typeof Select;

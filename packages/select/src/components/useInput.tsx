import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  components,
  createFilter,
  GroupBase,
  Props,
  SingleValue,
} from 'react-select';
import { getTestAttributes } from '@8x8/oxygen-config/dist/src';
import { SelectOption } from './SelectProps';

const stripNewlines = (str?: string) =>
  str && typeof str === 'string' ? str.replace(/[\r\n]/gm, '') : str;

export const createCustomInput = ({
  testId = '',
  isSelectableInput,
}: {
  testId?: string;
  isSelectableInput: boolean;
}) => {
  const CustomInput: typeof components.Input = inputProps => {
    // if selected option contains '\n', the height of the input will be proportional to the nr. of newlines in the string; which we don't want
    const val = stripNewlines(inputProps.value as string);

    return isSelectableInput ? (
      <components.Input
        {...getTestAttributes(`${testId}_INPUT`)}
        {...inputProps}
        {...inputProps?.selectProps?.inputProps}
        value={val}
        isHidden={false}
      />
    ) : (
      <components.Input
        {...inputProps}
        {...inputProps?.selectProps?.inputProps}
      />
    );
  };

  return CustomInput;
};

interface OwnProps {
  hasSelectableInput: boolean;
}

type UseInputProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Pick<
  Props<Option, IsMulti, Group>,
  | 'testId'
  | 'value'
  | 'onChange'
  | 'onInputChange'
  | 'isMulti'
  | 'onFocus'
  | 'isDisabled'
  | 'filterOption'
> &
  OwnProps;

/**
 * Renders a mouse (and keyboard)-selectable input field inside react-select dropdown
 *
 * to have few generic params, didn't propagate OptionValue, as it is not needed now
 */
const useInput = <
  Option extends SelectOption<unknown>,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: UseInputProps<Option, IsMulti, Group>,
) => {
  type PropsTyped = Props<Option, IsMulti, Group>;

  const {
    testId,
    value: valueProp,
    onChange: onChangeProp,
    onInputChange: onInputChangeProp,
    isMulti = false,
    hasSelectableInput,
  } = props;
  const [value, setValue] = useState<SingleValue<Option>>(); // selectable input should be used just for single-value select
  const [inputValue, setInputValue] = useState<string>();
  const [isEditing, setIsEditing] = useState(false);
  const isSelectableInput = !isMulti && hasSelectableInput;

  const setBoth = (option?: SingleValue<Option>) => {
    if (isSelectableInput) {
      setValue(option);
      setInputValue(option?.label);
    }
  };

  useEffect(() => {
    setBoth(valueProp as SingleValue<Option>);
  }, [valueProp]);

  const onChange: PropsTyped['onChange'] = (option, action) => {
    setIsEditing(false);
    setBoth(option as SingleValue<Option>);
    onChangeProp?.(option, action);
  };

  const onInputChange: PropsTyped['onInputChange'] = (newValue, actionMeta) => {
    const { action } = actionMeta;

    // onBlur => setInputValue to last selected value
    if (action === 'input-blur') {
      setInputValue(value ? value?.label : '');
      setIsEditing(false);
    }

    // onInputChange => update inputValue
    if (action === 'input-change') {
      setInputValue(newValue);
      setValue(null);
      setIsEditing(true);
    }

    onInputChangeProp?.(newValue, actionMeta);
  };

  type FilterOption = NonNullable<PropsTyped['filterOption']>;
  const filterOption: FilterOption = useCallback<FilterOption>(
    (candidate, input) => {
      if (!isEditing && input === value?.label) {
        return true;
      }

      return createFilter()(candidate, input);
    },
    [isEditing, value],
  );

  const onFocus: React.FocusEventHandler<HTMLInputElement> = event => {
    const { target } = event;

    setTimeout(() => target.select(), 100);
  };

  const Input = useMemo(
    () => createCustomInput({ testId, isSelectableInput }),
    [testId, isSelectableInput],
  );

  if (!isSelectableInput) {
    return {
      selectProps: {},
      components: { Input },
    };
  }

  return {
    selectProps: {
      value,
      inputValue: props.isDisabled ? undefined : inputValue,
      onChange,
      onInputChange,
      onFocus,
      filterOption,
    },
    components: { Input },
  };
};

export { useInput };

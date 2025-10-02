import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import { SelectOption } from './SelectProps';
import { createCustomInput, useInput } from './useInput';

jest.mock('react-select', () => ({
  components: {
    Input: 'Input',
  },
}));

const testId = 'SELECT';

describe('useInput', () => {
  it('should set both value and inputValue when value changes', async () => {
    const value: SelectOption = { label: 'foo', value: 'bar' };
    const newValue: SelectOption = { label: 'foo2', value: 'bar2' };

    const { result, rerender, waitFor } = renderHook(props => useInput(props), {
      initialProps: { value, hasSelectableInput: true, testId },
    });

    expect(result.current.selectProps.value).toEqual(value);
    expect(result.current.selectProps.inputValue).toEqual(value.label);

    rerender({ value: newValue, hasSelectableInput: true, testId });
    await waitFor(() => {
      expect(result.current.selectProps.value).toEqual(newValue);
      expect(result.current.selectProps.inputValue).toEqual(newValue.label);
    });
  });

  it('should call target.select() on onFocus()', async () => {
    const value: SelectOption = { label: 'foo', value: 'bar' };
    const { result, waitFor } = renderHook(props => useInput(props), {
      initialProps: { value, hasSelectableInput: true, testId },
    });

    const input = document.createElement('input');
    const select = jest.fn();

    input.select = select;

    if (result.current) {
      const { onFocus } = result.current.selectProps;

      onFocus?.({ target: input } as React.FocusEvent<HTMLInputElement>);
    }

    await waitFor(() => {
      expect(select).toHaveBeenCalled();
    });
  });

  it('should return custom component with hasSelectableInput', async () => {
    const value: SelectOption = { label: 'foo', value: 'bar' };

    const { result } = renderHook(props => useInput(props), {
      initialProps: { value, hasSelectableInput: true, testId },
    });

    expect(result.current).toMatchSnapshot();
  });

  it('should return default component if hasSelectableInput=false', async () => {
    const value: SelectOption = { label: 'foo', value: 'bar' };

    const { result } = renderHook(props => useInput(props), {
      initialProps: { value, hasSelectableInput: false, testId },
    });

    expect(result.current).toMatchSnapshot();
  });

  it('should return default component with isMulti', async () => {
    const value: SelectOption = { label: 'foo', value: 'bar' };

    const { result } = renderHook(props => useInput(props), {
      initialProps: { value, hasSelectableInput: true, isMulti: true, testId },
    });

    expect(result.current).toMatchSnapshot();
  });

  it('should reset label on input-blur action with input-change', async () => {
    const initialValue: SelectOption = {
      label: 'Label option 01',
      value: 'option-01',
    };
    const newValue = 'Option - 02';
    const { result } = renderHook(() =>
      useInput<SelectOption>({
        value: initialValue,
        hasSelectableInput: true,
        testId: 'test-input',
      }),
    );

    // Ensue the initial value is set up properly
    expect(result.current.selectProps.value).toBe(initialValue);
    expect(result.current.selectProps.inputValue).toBe(initialValue.label);

    // Simulate the input change action to update the inputValue
    act(() => {
      result.current.selectProps.onInputChange?.(newValue, {
        action: 'input-change',
      });
    });

    // Check if inputValue is updated and value is cleared (editing state)
    expect(result.current.selectProps.value).toBe(null);
    expect(result.current.selectProps.inputValue).toBe(newValue);

    // Simulate input blur event to reset the inputValue
    act(() => {
      result.current.selectProps.onInputChange?.('', { action: 'input-blur' });
    });

    // Expect the inputValue to reset to the last selected value
    expect(result.current.selectProps.inputValue).toBe('');
  });

  it('should reset label on input-blur action to initial values', async () => {
    const initialValue: SelectOption = {
      label: 'Label option 01',
      value: 'option-01',
    };
    const { result } = renderHook(() =>
      useInput<SelectOption>({
        value: initialValue,
        hasSelectableInput: true,
        testId: 'test-input',
      }),
    );

    // Ensue the initial value is set up properly
    expect(result.current.selectProps.value).toBe(initialValue);
    expect(result.current.selectProps.inputValue).toBe(initialValue.label);

    // Simulate input blur event to reset the inputValue
    act(() => {
      result.current.selectProps.onInputChange?.('', { action: 'input-blur' });
    });

    // Expect the inputValue to reset to the last selected value
    expect(result.current.selectProps.inputValue).toBe(initialValue.label);
  });
});

describe('useInput > createCustomInput', () => {
  it('should return custom component if isSelectableInput=true', () => {
    const ReturnedComponent = createCustomInput({
      testId,
      isSelectableInput: true,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    const { queryByTestId } = render(<ReturnedComponent />);

    expect(queryByTestId(`${testId}_INPUT`)).not.toBeNull();
  });

  it('should return default component if isSelectableInput=false', () => {
    const ReturnedComponent = createCustomInput({
      testId,
      isSelectableInput: false,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    const { queryByTestId } = render(<ReturnedComponent />);

    expect(queryByTestId(`${testId}_INPUT`)).toBeNull();
  });
});

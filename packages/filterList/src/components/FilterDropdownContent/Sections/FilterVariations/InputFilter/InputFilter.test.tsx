import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import InputFilter from './InputFilter';
import { FilterType } from '../../../../../types';

describe('InputFilter component', () => {
  it('should trigger onChange after debounce on input type', async () => {
    const filter: FilterType = {
      id: '1',
      label: 'Filter 1',
      operator: { value: 'contains', label: 'contains' },
      values: [{ label: 'value', value: 'value' }],
    };

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <InputFilter
          internalFilter={filter}
          internalOnChange={internalOnChange}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const input = screen.getByTestId('test-id_INPUT_FIELD');

    await act(async () => {
      await userEvent.type(input, 'A');
    });
    await act(async () => {
      await userEvent.type(input, 'B');
    });
    await act(async () => {
      await userEvent.type(input, 'C');
    });

    expect(internalOnChange).not.toHaveBeenCalled();

    await waitFor(() =>
      expect(internalOnChange).toHaveBeenCalledWith(
        expect.objectContaining({
          values: [{ value: 'valueABC' }],
        }),
      ),
    );

    expect(internalOnChange).toHaveBeenCalledTimes(1);
  });
});

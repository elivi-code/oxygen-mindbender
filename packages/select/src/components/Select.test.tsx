import React from 'react';
import { screen, render } from '@testing-library/react';
import Select from './Select';

describe('Select with input', () => {
  const testId = 'SELECT';

  describe('Select with hasSelectableInput=false', () => {
    it('should NOT render custom <input />', () => {
      const value = { label: 'foo', value: 'bar' };
      const options = [value];
      const { getByRole, queryByTestId } = render(
        <Select options={options} value={value} />,
      );

      expect(getByRole('combobox')).not.toBeNull();
      expect(queryByTestId(`${testId}_INPUT`)).toBeNull();
    });

    it('should render default <input /> with inputProps', () => {
      const value = { label: 'foo', value: 'bar' };
      const options = [value];
      const { getByRole, queryByTestId } = render(
        <Select
          options={options}
          value={value}
          inputProps={{ autoComplete: 'country' }}
        />,
      );

      expect(getByRole('combobox').getAttribute('autocomplete')).toEqual(
        'country',
      );
      // Assert not a custom component with test-id
      expect(queryByTestId(`${testId}_INPUT`)).toBeNull();
    });
  });

  describe('Select with hasSelectableInput=true', () => {
    it('should render custom <input /> with correct value, when not isMulti', () => {
      const value = { label: 'foo', value: 'bar' };
      const options = [value];
      const { getByTestId } = render(
        <Select options={options} hasSelectableInput value={value} />,
      );
      const selectInput = getByTestId(`${testId}_INPUT`) as HTMLInputElement;

      expect(selectInput.value).toBe(value.label);
    });

    it('should NOT render custom <input /> when isMulti', () => {
      const value = [{ label: 'foo', value: 'bar' }];
      const options = value;
      const { queryByTestId } = render(
        <Select options={options} hasSelectableInput value={value} isMulti />,
      );

      expect(queryByTestId(`${testId}_INPUT`)).toBeNull();
    });

    it('should have custom <input /> value as set value, even when isDisabled', () => {
      const value = { label: 'foo', value: 'bar' };
      const options = [value];
      const { getByTestId } = render(
        <Select
          options={options}
          hasSelectableInput
          value={value}
          isDisabled
        />,
      );
      const selectInput = getByTestId(`${testId}_INPUT`) as HTMLInputElement;

      expect(selectInput.value).toBe('foo');
    });

    it('should render custom <input /> with inputProps', () => {
      const value = [{ label: 'foo', value: 'bar' }];
      const options = value;
      const { queryByTestId } = render(
        <Select
          options={options}
          hasSelectableInput
          value={value}
          inputProps={{ autoComplete: 'country' }}
        />,
      );

      expect(
        queryByTestId(`${testId}_INPUT`).getAttribute('autocomplete'),
      ).toEqual('country');
    });
  });

  describe('label cursor', () => {
    it.each`
      isDisabled | expectedCursor
      ${true}    | ${'not-allowed'}
      ${false}   | ${'default'}
    `(
      'renders $expectedCursor cursor when isDisabled=$isDisabled',
      ({ isDisabled, expectedCursor }) => {
        render(<Select labelValue="Custom Label" isDisabled={isDisabled} />);

        expect(screen.getByTestId('SELECT_LABEL_VALUE')).toHaveStyle(
          `cursor: ${expectedCursor}`,
        );
      },
    );
  });
});

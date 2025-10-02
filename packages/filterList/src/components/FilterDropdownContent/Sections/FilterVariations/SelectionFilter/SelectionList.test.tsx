import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectionList from './SelectionList';
import { FilterValueObjectType } from '../../../../../types';

describe('SelectionList component', () => {
  it('should render checkboxes if is MultiSelection', () => {
    const values: FilterValueObjectType[] = [
      { value: 'value1', label: 'Value 1' },
      { value: 'value2', label: 'Value 2' },
      { value: 'value3', label: 'Value 3' },
    ];

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <SelectionList
          options={values}
          selectedValues={[]}
          handleSelection={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const checkbox = screen.queryAllByTestId('test-id_CHECKBOX');

    expect(checkbox).toHaveLength(3);
  });

  it('should render radio buttons if is not MultiSelection', () => {
    const values: FilterValueObjectType[] = [
      { value: 'value1', label: 'Value 1' },
      { value: 'value2', label: 'Value 2' },
      { value: 'value3', label: 'Value 3' },
    ];

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <SelectionList
          options={values}
          selectedValues={[]}
          handleSelection={internalOnChange}
          isMultiSelection={false}
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const radio = screen.queryAllByTestId('test-id_RADIO_BUTTON');

    expect(radio).toHaveLength(3);
  });

  it('should render the checkbox as checked if the value is in the selectedValues', () => {
    const values: FilterValueObjectType[] = [
      { value: 'value1', label: 'Value 1' },
      { value: 'value2', label: 'Value 2' },
      { value: 'value3', label: 'Value 3' },
    ];

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <SelectionList
          options={values}
          selectedValues={[{ value: 'value1', label: 'Value 1' }]}
          handleSelection={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const checkbox = screen.queryAllByTestId('test-id_CHECKBOX');

    expect(checkbox[0]).toHaveAttribute('checked');
  });

  it('should trigger handleSelection with isChecked true if the clicked value is already selected', () => {
    const values: FilterValueObjectType[] = [
      { value: 'value1', label: 'Value 1' },
      { value: 'value2', label: 'Value 2' },
      { value: 'value3', label: 'Value 3' },
    ];

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <SelectionList
          options={values}
          selectedValues={[{ value: 'value1', label: 'Value 1' }]}
          handleSelection={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const checkbox = screen.queryAllByTestId('test-id_CHECKBOX');

    fireEvent.click(checkbox[0]);

    expect(internalOnChange).toHaveBeenCalledWith(
      { label: 'Value 1', value: 'value1' },
      true,
    );
  });

  it('should trigger handleSelection with isChecked false if the clicked value is not selected', () => {
    const values: FilterValueObjectType[] = [
      { value: 'value1', label: 'Value 1' },
      { value: 'value2', label: 'Value 2' },
      { value: 'value3', label: 'Value 3' },
    ];

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <SelectionList
          options={values}
          selectedValues={[{ value: 'value2', label: 'Value 2' }]}
          handleSelection={internalOnChange}
          isMultiSelection
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const checkbox = screen.queryAllByTestId('test-id_CHECKBOX');

    fireEvent.click(checkbox[0]);

    expect(internalOnChange).toHaveBeenCalledWith(
      { label: 'Value 1', value: 'value1' },
      false,
    );
  });

  it('should trigger handleSelection with the selected value if the radio button is clicked', () => {
    const values: FilterValueObjectType[] = [
      { value: 'value1', label: 'Value 1' },
      { value: 'value2', label: 'Value 2' },
      { value: 'value3', label: 'Value 3' },
    ];

    const internalOnChange = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <SelectionList
          options={values}
          selectedValues={[]}
          handleSelection={internalOnChange}
          isMultiSelection={false}
          translations={{}}
          testId="test-id"
        />
      </OxygenProvider>,
    );

    const radio = screen.queryAllByTestId('test-id_RADIO_BUTTON');

    fireEvent.click(radio[0]);

    expect(internalOnChange).toHaveBeenCalledWith({
      label: 'Value 1',
      value: 'value1',
    });
  });
});

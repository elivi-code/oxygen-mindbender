import React from 'react';
import Checkbox from '@8x8/oxygen-checkbox';
import Radio from '@8x8/oxygen-radio';
import { CheckboxWrapper, FreeformLabel } from './SelectionFilter.styled';
import { FilterValueObjectType, Translations } from '../../../../../types';

interface SelectionFilterInterface {
  options: FilterValueObjectType[];
  selectedValues: FilterValueObjectType[];
  handleSelection: (option: FilterValueObjectType, isChecked?: boolean) => void;
  isMultiSelection: boolean;
  translations: Partial<Translations>;
  testId: string;
}

function SelectionList({
  options,
  selectedValues,
  handleSelection,
  isMultiSelection,
  translations,
  testId,
}: SelectionFilterInterface) {
  if (isMultiSelection) {
    return (
      <>
        {options.map(option => {
          const isChecked =
            selectedValues.findIndex(val => val.value === option.value) !== -1;

          if (option.isFreeform) {
            return (
              <CheckboxWrapper key={option.value}>
                <Checkbox
                  isChecked={isChecked}
                  label={option.label || option.value}
                  onChange={() => handleSelection(option, isChecked)}
                  value={option.value}
                  testId={`${testId}_CHECKBOX`}
                />

                <FreeformLabel>({translations.freeformLabel})</FreeformLabel>
              </CheckboxWrapper>
            );
          }

          return (
            <Checkbox
              isChecked={isChecked}
              key={option.value}
              label={option.label || option.value}
              onChange={() => handleSelection(option, isChecked)}
              value={option.value}
              testId={`${testId}_CHECKBOX`}
            />
          );
        })}
      </>
    );
  }

  return (
    <>
      {options.map(option => {
        const isChecked = selectedValues?.[0]?.value === option.value;

        return (
          <Radio
            isChecked={isChecked}
            key={option.value}
            name={option.label || String(option.value)}
            label={option.label || option.value}
            onChange={() => handleSelection(option)}
            value={option.value}
            testId={`${testId}_RADIO_BUTTON`}
          />
        );
      })}
    </>
  );
}

export default SelectionList;

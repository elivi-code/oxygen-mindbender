import React from 'react';
import Checkbox from '@8x8/oxygen-checkbox';
import Radio from '@8x8/oxygen-radio';
import { CheckboxWrapper, FreeformLabel } from './SelectionFilter.styled';
function SelectionList({ options, selectedValues, handleSelection, isMultiSelection, translations, testId, }) {
    if (isMultiSelection) {
        return (React.createElement(React.Fragment, null, options.map(option => {
            const isChecked = selectedValues.findIndex(val => val.value === option.value) !== -1;
            if (option.isFreeform) {
                return (React.createElement(CheckboxWrapper, { key: option.value },
                    React.createElement(Checkbox, { isChecked: isChecked, label: option.label || option.value, onChange: () => handleSelection(option, isChecked), value: option.value, testId: `${testId}_CHECKBOX` }),
                    React.createElement(FreeformLabel, null,
                        "(",
                        translations.freeformLabel,
                        ")")));
            }
            return (React.createElement(Checkbox, { isChecked: isChecked, key: option.value, label: option.label || option.value, onChange: () => handleSelection(option, isChecked), value: option.value, testId: `${testId}_CHECKBOX` }));
        })));
    }
    return (React.createElement(React.Fragment, null, options.map(option => {
        const isChecked = selectedValues?.[0]?.value === option.value;
        return (React.createElement(Radio, { isChecked: isChecked, key: option.value, name: option.label || String(option.value), label: option.label || option.value, onChange: () => handleSelection(option), value: option.value, testId: `${testId}_RADIO_BUTTON` }));
    })));
}
export default SelectionList;

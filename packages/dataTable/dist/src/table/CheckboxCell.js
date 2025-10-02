import React from 'react';
import styled from 'styled-components';
import Checkbox from '@8x8/oxygen-checkbox';
const CheckboxWrapper = styled.div `
  margin: auto;
`;
const CheckboxCell = ({ checked, indeterminate, onChange, isDisabled, ...rest }) => {
    return (React.createElement(CheckboxWrapper, { onClick: event => event.stopPropagation() },
        React.createElement(Checkbox, { isDisabled: isDisabled, isChecked: checked, isIndeterminate: indeterminate, onChange: () => onChange(!checked), ...rest })));
};
export { CheckboxCell };

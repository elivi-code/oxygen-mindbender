import React, { useCallback, useEffect, useState } from 'react';
import Input from '@8x8/oxygen-input';
import debounce from 'lodash.debounce';
import { isNumberOperator } from '../../../../../utils/operatorDetails';
import { Container } from './InputFilter.styled';
function InputFilter({ internalFilter, internalOnChange, testId, }) {
    const [inputValue, setInputValue] = useState(internalFilter.values?.[0]?.value || '');
    useEffect(() => {
        setInputValue(internalFilter.values?.[0]?.value || '');
    }, [internalFilter]);
    const debouncedFn = useCallback(debounce(internalOnChange, 300), [
        internalOnChange,
    ]);
    const handleOnChange = (ev) => {
        setInputValue(ev?.target?.value);
        debouncedFn({ ...internalFilter, values: [{ value: ev.target.value }] });
    };
    return (React.createElement(Container, null,
        React.createElement(Input, { onChange: handleOnChange, theme: { verticalSpacing: '0px' }, value: inputValue, type: isNumberOperator(internalFilter.operator) ? 'number' : 'text', testId: `${testId}_INPUT` })));
}
export default InputFilter;

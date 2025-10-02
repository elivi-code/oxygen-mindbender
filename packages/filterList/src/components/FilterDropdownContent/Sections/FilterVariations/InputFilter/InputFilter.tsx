import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Input from '@8x8/oxygen-input';
import debounce from 'lodash.debounce';

import { FilterType } from '../../../../../types';
import { isNumberOperator } from '../../../../../utils/operatorDetails';
import { Container } from './InputFilter.styled';

interface InputFilterInterface {
  internalFilter: FilterType;
  internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
  testId: string;
}

function InputFilter({
  internalFilter,
  internalOnChange,
  testId,
}: InputFilterInterface) {
  const [inputValue, setInputValue] = useState(
    internalFilter.values?.[0]?.value || '',
  );

  useEffect(() => {
    setInputValue(internalFilter.values?.[0]?.value || '');
  }, [internalFilter]);

  const debouncedFn = useCallback(debounce(internalOnChange, 300), [
    internalOnChange,
  ]);

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(ev?.target?.value);

    debouncedFn({ ...internalFilter, values: [{ value: ev.target.value }] });
  };

  return (
    <Container>
      <Input
        onChange={handleOnChange}
        theme={{ verticalSpacing: '0px' }}
        value={inputValue}
        type={isNumberOperator(internalFilter.operator) ? 'number' : 'text'}
        testId={`${testId}_INPUT`}
      />
    </Container>
  );
}

export default InputFilter;

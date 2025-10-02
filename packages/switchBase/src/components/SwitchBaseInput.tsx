import React, { ChangeEventHandler } from 'react';

import { getTestAttributes } from '@8x8/oxygen-config';

import { SwitchBaseInputField, SwitchBaseInputWrapper } from '../styled';
import { SwitchBaseCommonProps } from './SwitchBaseCommonProps';
import { InputValue } from '../types';

export interface Props<T extends InputValue> extends SwitchBaseCommonProps<T> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SwitchBaseInput = <T extends InputValue>({
  testId,
  id,
  value,
  name,
  icon,
  isChecked,
  isDisabled,
  onBlur,
  onChange,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  onKeyPress,
  role,
  ...rest
}: Props<T>) => {
  return (
    <SwitchBaseInputWrapper>
      <SwitchBaseInputField
        {...getTestAttributes(testId as string)}
        id={id}
        value={value}
        type="checkbox"
        name={name}
        checked={isChecked}
        aria-disabled={isDisabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role={role}
        {...rest}
      />
      {icon}
    </SwitchBaseInputWrapper>
  );
};

export default SwitchBaseInput;

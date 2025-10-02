import React from 'react';

interface DateTimeSelectorInputProps {
  inputIcon?: React.ReactNode;
  iconLeft?: React.ReactNode | React.ElementType;
  isOpen?: boolean;
  size: string;
  isDisabled: boolean;
  isValueSelected: boolean;
  title?: string;
  onClick?(): void;
  theme?: object;
  popperAnchorRef?(node: React.Ref<any>): void;
  setInputRef?(node: React.Ref<any>): void;
  testId?: string;
}

declare const DateTimeSelectorInput: React.FunctionComponent<DateTimeSelectorInputProps>;

export default DateTimeSelectorInput;

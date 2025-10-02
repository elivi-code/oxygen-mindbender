import React from 'react';

type TimeSelectorSize = 'small' | 'default';

interface TimeSelectorProps {
  hasError?: boolean;
  isDisabled?: boolean;
  isLeftIconVisible?: boolean;
  timeDisplayFormat?: string;
  size?: TimeSelectorSize;
  iconLeft?: React.ReactNode | React.ElementType;
  placeholder?: string;
  value?: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
  id?: string;
  testId?: string;
  onChange?(): void;
  onOpen?(): void;
  onClose?(): void;
  theme?: object;
}

declare const TimeSelector: React.FunctionComponent<TimeSelectorProps>;

export default TimeSelector;

import React, { useState } from 'react';
import DateTimeSelector from '@8x8/oxygen-date-time-selector';

import { PlaygroundDecorator, iconSelect } from '@8x8/oxygen-storybook-utils';

export const PlaygroundDateTimeSelector = args => {
  const [value, setValue] = useState(undefined);

  return (
    <DateTimeSelector
      {...args}
      inputIcon={args.inputIcon && undefined}
      value={value}
      onDateChange={setValue}
    />
  );
};
PlaygroundDateTimeSelector.args = {
  iconLeft: 'None',
  inputIcon: true,
  hasError: false,
  id: 'id',
  closeOnDateChange: true,
  placeholder: 'Select a date',
  finishButtonLabel: 'Finish',
  isLoading: false,
  loadingMessage: 'Loading...',
  isDisabled: false,
  isClearable: false,
  size: 'large',
  titleFormatPattern: 'MM/dd/yyyy',
  testId: 'DATE_TIME_SELECTOR',
};
PlaygroundDateTimeSelector.argTypes = {
  iconLeft: iconSelect,
  size: {
    options: ['small', 'large'],
    control: {
      type: 'select',
    },
  },
};
PlaygroundDateTimeSelector.storyName = '10. Playground';

export default {
  title: 'Components/DateTimeSelector',
  component: DateTimeSelector,
  decorators: [PlaygroundDecorator],
};

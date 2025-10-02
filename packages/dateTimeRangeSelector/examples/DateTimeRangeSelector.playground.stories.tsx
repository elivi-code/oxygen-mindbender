import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

import DateTimeRangeSelector, {
  DateTimeRangePicker,
} from '@8x8/oxygen-date-time-range-selector';

import { argsConfig, argTypesConfig } from './config';

const defaultState = {
  selectedPredefinedRange: undefined,
  selectedDateTime: undefined,
};

export const PlaygroundDateTimeRangeSelector = args => {
  const [state, updateState] = useState(defaultState);

  const onRangeChange = ({ dateTime, predefinedRange } = {}) => {
    action('onRangeChange')({ dateTime, predefinedRange });

    if (predefinedRange) {
      const { id } = predefinedRange;

      if (id !== 'custom') {
        updateState({
          selectedDateTime: undefined,
          selectedPredefinedRange: predefinedRange,
        });
      } else {
        updateState({
          selectedDateTime: { startDate: new Date() },
          selectedPredefinedRange: predefinedRange,
        });
      }
    } else if (dateTime) {
      updateState({
        selectedDateTime: dateTime,
        selectedPredefinedRange: undefined,
      });
    } else {
      updateState(defaultState);
    }
  };

  return (
    <div>
      <h5>Full component</h5>
      <DateTimeRangeSelector
        {...args}
        inputIcon={args.inputIcon && undefined}
        predefinedRange={state.selectedPredefinedRange}
        dateTimeRange={state.selectedDateTime}
        onRangeChange={onRangeChange}
        onOpen={action('onOpen DateTimeRangeSelector')}
        onClose={action('onClose DateTimeRangeSelector')}
      />
      <h5>Calendar component isolated</h5>
      <DateTimeRangePicker
        {...args}
        predefinedRange={state.selectedPredefinedRange}
        dateTimeRange={state.selectedDateTime}
        onRangeChange={action('onRangeChange - isolated component')}
      />
    </div>
  );
};
PlaygroundDateTimeRangeSelector.args = argsConfig;
PlaygroundDateTimeRangeSelector.argTypes = argTypesConfig;
PlaygroundDateTimeRangeSelector.storyName = '10. Playground';

export default {
  title: 'Components/DateTimeRangeSelector',
  component: DateTimeRangeSelector,
  decorators: [PlaygroundDecorator],
};

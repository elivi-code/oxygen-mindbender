import React, { useState } from 'react';
import {
  Label as ComponentLabel,
  JSONViewer,
} from '@8x8/oxygen-storybook-utils';

import { DateTimeRangePicker } from '@8x8/oxygen-date-time-range-selector';

import { argsConfig, argTypesConfig } from './config';

const defaultState = {
  selectedPredefinedRange: undefined,
  selectedDateTime: undefined,
};

export const DateTimeRangePickerExample = args => {
  const [state, setState] = useState<any>(defaultState);

  return (
    <>
      <ComponentLabel>Date Time Range Picker Example</ComponentLabel>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <div style={{ height: 'min-content' }}>
          <DateTimeRangePicker
            {...args}
            predefinedRange={state.predefinedRange}
            dateTimeRange={state.dateRange}
            setOuterState={setState}
          />
        </div>

        <JSONViewer data={state} title="Date Time Value Object" />
      </div>
    </>
  );
};

DateTimeRangePickerExample.args = argsConfig;
DateTimeRangePickerExample.argTypes = argTypesConfig;
DateTimeRangePickerExample.storyName = 'DateTimeRangePicker';

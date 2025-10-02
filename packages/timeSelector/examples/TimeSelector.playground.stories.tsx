import React, { useState } from 'react';
import { action } from 'storybook/actions';
import TimeSelector from '@8x8/oxygen-time-selector';

import { PlaygroundDecorator, iconSelect } from '@8x8/oxygen-storybook-utils';

// eslint-disable-next-line react/prop-types
export const PlaygroundTimeSelector = ({ wrapperWidth, ...args }) => {
  const [value, setValue] = useState({ hours: 16, minutes: 30, seconds: 0 });

  const handleChangeValue = val => {
    setValue(val);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
      }}
    >
      <div style={{ flex: 1 }}>
        <div>Selected time:</div>
        {value ? (
          <>
            <div>
              hours: <b>{value.hours}</b>
            </div>
            <div>
              minutes: <b>{value.minutes}</b>
            </div>
            <div>
              seconds: <b>{value.seconds}</b>
            </div>
          </>
        ) : (
          <div>-</div>
        )}
      </div>

      <div style={{ width: wrapperWidth }}>
        <TimeSelector
          {...args}
          value={value}
          onChange={val => handleChangeValue(val)}
          onOpen={action('onOpen')}
          onClose={action('onClose')}
        />
      </div>
    </div>
  );
};

PlaygroundTimeSelector.args = {
  wrapperWidth: '100px',
  hasError: false,
  isDisabled: false,
  isLeftIconVisible: false,
  iconLeft: undefined,
  timeDisplayFormat: 'h:mm a',
  size: 'default',
  placeholder: 'Time is...',
  id: 'id',
  testId: 'TIME_SELECTOR',
};

PlaygroundTimeSelector.argTypes = {
  iconLeft: iconSelect,
  size: {
    control: {
      type: 'select',
    },
    options: ['default', 'small'],
  },
};

PlaygroundTimeSelector.storyName = '10. Playground';

export default {
  title: 'Components/TimeSelector',
  component: TimeSelector,
  decorators: [PlaygroundDecorator],
};

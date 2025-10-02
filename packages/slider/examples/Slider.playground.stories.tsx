import React, { useState, useEffect } from 'react';
import Slider from '@8x8/oxygen-slider';
import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { action } from 'storybook/actions';
import { argsConfig, argTypesConfig } from './config';

export const PlaygroundSlider = args => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Slider
      {...args}
      value={value}
      onChange={newValue => {
        setValue(newValue);
        action('onChange')(newValue);
      }}
    />
  );
};

PlaygroundSlider.args = {
  value: 2,
  isMultiple: false,
  ...argsConfig,
};
PlaygroundSlider.argTypes = {
  ...argTypesConfig,
  value: {
    control: {
      type: 'number',
    },
    description: 'Current value',
    table: {
      category: 'Props',
      type: {
        summary: `number`,
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

PlaygroundSlider.storyName = '10. Playground Slider';

export const PlaygroundSliderRange = args => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Slider
      {...args}
      value={value}
      onChange={newValue => {
        setValue(newValue);
        action('onChange')(newValue);
      }}
    />
  );
};

PlaygroundSliderRange.args = {
  value: { min: 2, max: 5 },
  isMultiple: true,
  isTrackDraggable: undefined,
  ...argsConfig,
};
PlaygroundSliderRange.argTypes = {
  ...argTypesConfig,
  value: {
    control: {
      type: 'object',
      properties: {
        min: { control: 'number' },
        max: { control: 'number' },
      },
    },
    description: 'Current value',
    table: {
      category: 'Props',
      type: {
        summary: `{
  min: number;
  max: number;
}`,
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  isTrackDraggable: {
    control: {
      type: 'boolean',
    },
    description:
      'Enable track dragging within the slider, only enabled when `isMultiple`',
    table: {
      category: 'Props',
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
};

PlaygroundSliderRange.storyName = '11. Playground Slider with range';

export default {
  title: 'Components/Slider',
  component: Slider,
  decorators: [PlaygroundDecorator],
};

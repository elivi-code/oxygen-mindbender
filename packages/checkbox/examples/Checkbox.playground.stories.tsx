import React, { useState } from 'react';
import { action } from 'storybook/actions';
import Checkbox, { CheckboxGroup } from '@8x8/oxygen-checkbox';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { StoryFn, Meta } from '@storybook/react';

// Playground Checkbox
// eslint-disable-next-line react/prop-types
export const PlaygroundCheckbox: StoryFn<typeof Checkbox> = ({
  isControlled,
  ...args
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = value => {
    action('onChange')(value);
    setIsChecked(!isChecked);
  };

  const passedDownProps = {
    ...args,
    ...(isControlled ? { isChecked, onChange: handleOnChange } : {}),
  };

  return <Checkbox {...passedDownProps} />;
};
PlaygroundCheckbox.args = {
  isControlled: true,
  isChecked: false,
  isIndeterminate: false,
  isDisabled: false,
  label: 'Example Label',
  value: 'Example value',
  name: 'Example name',
  infoBoxText: 'Example text in tooltip',
  infoBoxButtonLabel: 'Example Button label',
  id: 'example_id',
  testId: 'CUSTOM_TEST_ID',
};
PlaygroundCheckbox.argTypes = {
  isChecked: {
    if: { arg: 'isControlled', truthy: false },
  },
  isIndeterminate: {
    if: { arg: 'isControlled', truthy: false },
  },
};
PlaygroundCheckbox.storyName = '10. Playground Checkbox';

// Playground CheckboxGroup
export const PlaygroundCheckboxGroup = args => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const handleOnChange = (value?: string) => {
    action('onChange')(value);
    setChecked({
      ...checked,
      [value as string]: !checked[value as string],
    });
  };

  return (
    <CheckboxGroup {...args}>
      <legend>Checkbox group title</legend>
      {['1', '2', '3'].map(id => (
        <Checkbox
          key={id}
          isChecked={checked[id]}
          onChange={() => handleOnChange(id)}
          label={args[`label${id}`]}
        />
      ))}
    </CheckboxGroup>
  );
};
PlaygroundCheckboxGroup.args = {
  isHorizontal: false,
  label1: 'Example label 1',
  label2:
    'Example label 2 longer label to wrap longer label to wrap longer label to wrap',
  label3: 'Example label 3',
};
PlaygroundCheckboxGroup.storyName = '11. Playground CheckboxGroup';

type ComponentMetaCheckbox = Meta<typeof Checkbox>;

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: { CheckboxGroup },
  decorators: [PlaygroundDecorator],
} as ComponentMetaCheckbox;

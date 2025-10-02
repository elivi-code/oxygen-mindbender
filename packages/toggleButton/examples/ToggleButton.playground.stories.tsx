import React, { useState } from 'react';
import { action } from 'storybook/actions';
import ToggleButton, { ToggleButtonGroup } from '@8x8/oxygen-toggle-button';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line react/prop-types
export const PlaygroundToggleButton: StoryFn<typeof ToggleButton> = ({
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

  return <ToggleButton {...passedDownProps} />;
};
PlaygroundToggleButton.args = {
  isControlled: true,
  isChecked: false,
  isIndeterminate: false,
  isDisabled: false,
  label: 'Example Label',
  value: 'Example value',
  name: 'Example name',
  infoBoxText: 'Example text in tooltip',
  infoBoxButtonLabel: 'Example Button',
  id: 'example_id',
  testId: 'CUSTOM_TEST_ID',
};
PlaygroundToggleButton.argTypes = {
  isChecked: {
    if: { arg: 'isControlled', truthy: false },
  },
  isIndeterminate: {
    if: { arg: 'isControlled', truthy: false },
  },
};
PlaygroundToggleButton.storyName = '10. Playground ToggleButton';

export const PlaygroundToggleButtonGroup = args => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const handleOnChange = (value?: string) => {
    action('onChange')(value);
    setChecked({
      ...checked,
      [value as string]: !checked[value as string],
    });
  };

  return (
    <ToggleButtonGroup {...args}>
      <legend style={{ marginBottom: '8px' }}>ToggleButton group label</legend>
      {['1', '2', '3'].map(id => (
        <ToggleButton
          key={id}
          isChecked={checked[id]}
          onChange={() => handleOnChange(id)}
          label={args[`label${id}`]}
        />
      ))}
    </ToggleButtonGroup>
  );
};

PlaygroundToggleButtonGroup.args = {
  isHorizontal: false,
  label1: 'Example label 1',
  label2:
    'Example label 2 longer label to wrap longer label to wrap longer label to wrap',
  label3: 'Example label 3',
};
PlaygroundToggleButtonGroup.storyName = '11. Playground ToggleButtonGroup';

type ComponentMetaToggleButton = Meta<typeof ToggleButton>;

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  subcomponents: { ToggleButtonGroup },
  decorators: [PlaygroundDecorator],
} as ComponentMetaToggleButton;

import React from 'react';
import { action } from 'storybook/actions';
import Label, { showOn } from '@8x8/oxygen-label';
import Input from '@8x8/oxygen-input';
import { StoryFn, Meta } from '@storybook/react';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

const availableShowOn: (keyof typeof showOn)[] = ['hover', 'click'];

export const PlaygroundLabel: StoryFn<typeof Label> = args => (
  <>
    <Label {...args} action={action('onClick')} />
    <Input id="MY_FIELD_ID" />
  </>
);
PlaygroundLabel.args = {
  testId: 'CUSTOM_TEST_ID',
  value: 'Label text',
  actionLabel: 'Action text',
  actionTarget: '_blank',
  htmlFor: 'MY_FIELD_ID',
  infoBoxText: 'Icon text',
  infoBoxShowOn: 'hover',
  infoBoxButtonLabel: 'Icon Button',
  isRequired: false,
  isDisabled: false,
  shouldWrapText: false,
  showTooltipOnOverflow: true,
  children: '',
};
PlaygroundLabel.argTypes = {
  infoBoxShowOn: {
    control: {
      type: 'select',
    },
    options: availableShowOn,
  },
};
PlaygroundLabel.storyName = '10. Playground';

type ComponentMetaLabel = Meta<typeof Label>;

export default {
  title: 'Components/Label',
  component: Label,
  decorators: [PlaygroundDecorator],
} as ComponentMetaLabel;

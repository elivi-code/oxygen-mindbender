import React from 'react';
import Radio, { RadioGroup } from '@8x8/oxygen-radio';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundRadio = args => {
  const [selected, setSelectedRadio] = React.useState(args.r0Value);

  return (
    <RadioGroup
      {...args}
      value={selected}
      onChange={value => setSelectedRadio(value)}
    >
      <Radio
        name="radio0"
        testId={args.r0TestId}
        isDisabled={args.r0IsDisabled}
        label={args.r0Label}
        value={args.r0Value}
      />
      <Radio
        name="radio1"
        testId={args.r1TestId}
        isDisabled={args.r1IsDisabled}
        label={args.r1Label}
        value={args.r1Value}
      />
      <Radio
        name="radio2"
        testId={args.r2TestId}
        isDisabled={args.r2IsDisabled}
        label={args.r2Label}
        value={args.r2Value}
      />
      <Radio
        name="radio3"
        testId={args.r3TestId}
        isDisabled={args.r3IsDisabled}
        label={args.r3Label}
        value={args.r3Value}
        infoBoxText={args.r3InfoBoxText}
        infoBoxButtonLabel={args.r3InfoBoxButtonLabel}
      />
    </RadioGroup>
  );
};

PlaygroundRadio.args = {
  isHorizontal: false,
  name: 'exampleName',
  value: 'exampleValue1',
  r0IsDisabled: false,
  r0TestId: 'CUSTOM_TEST_ID',
  r0Label: 'Radio 0',
  r0Value: 'exampleValue0',
  r1IsDisabled: false,
  r1TestId: 'CUSTOM_TEST_ID',
  r1Label: 'Radio 1',
  r1Value: {
    id: 'exampleId1',
    value: 'exampleValue1',
  },
  r2IsDisabled: false,
  r2TestId: 'CUSTOM_TEST_ID',
  r2Label: 'Radio 2',
  r2Value: 'exampleValue2',
  r3IsDisabled: false,
  r3TestId: 'CUSTOM_TEST_ID',
  r3Label: 'Radio 3',
  r3Value: 'exampleValue3',
  r3InfoBoxText: 'Example tooltip text',
  r3InfoBoxButtonLabel: 'Example Button',
};
const R0 = {
  table: {
    category: 'Radio 0',
  },
};
const R1 = {
  table: {
    category: 'Radio 1',
  },
};
const R2 = {
  table: {
    category: 'Radio 2',
  },
};
const R3 = {
  table: {
    category: 'Radio 3',
  },
};

PlaygroundRadio.argTypes = {
  r0IsDisabled: { ...R0 },
  r0TestId: { ...R0 },
  r0Label: { ...R0 },
  r0Value: { ...R0 },
  r1IsDisabled: { ...R1 },
  r1TestId: { ...R1 },
  r1Label: { ...R1 },
  r1Value: { ...R1 },
  r2IsDisabled: { ...R2 },
  r2TestId: { ...R2 },
  r2Label: { ...R2 },
  r2Value: { ...R2 },
  r3IsDisabled: { ...R3 },
  r3TestId: { ...R3 },
  r3Label: { ...R3 },
  r3Value: { ...R3 },
  r3InfoBoxText: { ...R3 },
  r3InfoBoxButtonLabel: { ...R3 },
};
PlaygroundRadio.storyName = '10. Playground';

export default {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: { RadioGroup },
  decorators: [PlaygroundDecorator],
};

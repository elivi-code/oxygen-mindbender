import React from 'react';
import Select, { VirtualMenuList } from '@8x8/oxygen-select';

import {
  Doc,
  ComponentSection,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from '../config';

/* Performant option rendering */
let i = 0;
const options10k = Array.from({ length: 10000 }, () => {
  i += 1;

  return {
    value: i,
    label: `Option ${i}`,
  };
});

let j = 0;
let m = 0;
const options10kGroups = Array.from({ length: 1000 }, () => {
  j += 1;

  // create a group every 10 items
  if (j % 10 === 0) {
    m += 1;
    let k = 0;

    return {
      label: `Group ${m}`,
      options: Array.from({ length: 10 }, () => {
        k += 1;

        return {
          value: `${m}_${k}`,
          label: `G ${m} Option ${k}`,
        };
      }),
    };
  }

  return {
    value: j,
    label: `Option outside of a group ${j}`,
  };
});

export const VirtualMenu = args => (
  <>
    <Doc>
      <h1>
        Performance on large datasets with <code>VirtualMenuList</code>
      </h1>
      <p>
        To render large datasets Oxygen exports a <code>VirtualMenuList</code>{' '}
        which renders the list via <code>react-window</code>. You provide your
        own implementation, but for regular/simple use-cases this oen should be
        enough
      </p>
      <p>
        This example renders 10000 elements. These are generated for the sake of
        the example
      </p>
      <pre>
        {`
import Select, { VirtualMenuList } from '@8x8/oxygen-select';

let i = 0;
const options10k = Array.from({ length: 10000 }, () => {
  i += 1;
  return {
    value: i,
    label: \`Option ${i}\`,
  };
});

<Select
  options={options10k}
  components={{
    MenuList: VirtualMenuList,
  }}
/>
      `}
      </pre>
    </Doc>
    <ComponentSection block>
      <Select
        {...args}
        options={options10k}
        components={{
          MenuList: VirtualMenuList,
        }}
      />
    </ComponentSection>
    <Doc>
      <h2>An example with a list with groups</h2>
    </Doc>
    <ComponentSection block>
      <Select
        {...args}
        options={options10kGroups}
        components={{
          MenuList: VirtualMenuList,
        }}
      />
    </ComponentSection>
    <Doc>
      <p>
        Same dataset as above, but with regular rendering (this is really slow)
      </p>
    </Doc>
    <ComponentSection block>
      <Select {...args} options={options10kGroups} />
    </ComponentSection>
  </>
);
VirtualMenu.args = argsConfig;
VirtualMenu.argTypes = argTypesConfig;
VirtualMenu.storyName = 'Select with VirtualMenu';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [PlaygroundDecorator],
};

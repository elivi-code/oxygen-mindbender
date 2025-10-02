import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.filtered.component.tsx?raw';

import {
  DataTableFilteredComponent,
  Props,
} from './DataTable.filtered.component';

const meta: Meta<Props> = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableFilteredComponent,
  argTypes: {
    headerHasGlobalApplyButton: {
      control: {
        type: 'boolean',
      },
      description: 'Show global apply button in the header',
    },
  },
  args: {
    headerHasGlobalApplyButton: false,
  },
};

const DataTableFilteredExample: StoryFn<
  typeof DataTableFilteredComponent
> = args => <DataTableFilteredComponent {...args} />;

DataTableFilteredExample.storyName = 'Filtered';
DataTableFilteredExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableFilteredExample };
export default meta;

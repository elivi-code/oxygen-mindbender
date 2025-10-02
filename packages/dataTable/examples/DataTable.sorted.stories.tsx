import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.sorted.component.tsx?raw';

import { DataTableSortedComponent } from './DataTable.sorted.component';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableSortedComponent,
};

const DataTableSortedExample: StoryFn<
  typeof DataTableSortedComponent
> = args => <DataTableSortedComponent {...args} />;

DataTableSortedExample.storyName = 'Sorted rows';
DataTableSortedExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableSortedExample };
export default meta;

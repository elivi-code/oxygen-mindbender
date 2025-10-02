import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.search.component.tsx?raw';

import { DataTableSearchComponent } from './DataTable.search.component';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableSearchComponent,
};

const DataTableSearchExample: StoryFn<
  typeof DataTableSearchComponent
> = args => <DataTableSearchComponent {...args} />;

DataTableSearchExample.storyName = 'Search';
DataTableSearchExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableSearchExample };
export default meta;

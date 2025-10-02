import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.paginated.component.tsx?raw';

import { DataTablePaginatedComponent } from './DataTable.paginated.component';
import { argTypes } from './config';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTablePaginatedComponent,
  argTypes: {
    blurOnTab: argTypes.blurOnTab,
  },
  args: {
    blurOnTab: false,
  },
};

const DataTablePaginatedExample: StoryFn<
  typeof DataTablePaginatedComponent
> = args => <DataTablePaginatedComponent {...args} />;

DataTablePaginatedExample.storyName = 'Paginated';
DataTablePaginatedExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTablePaginatedExample };
export default meta;

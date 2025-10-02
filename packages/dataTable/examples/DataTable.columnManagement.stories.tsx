import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.columnManagement.component.tsx?raw';

import { DataTableColumnManagementComponent } from './DataTable.columnManagement.component';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableColumnManagementComponent,
};

const DataTableColumnManagementExample: StoryFn<
  typeof DataTableColumnManagementComponent
> = args => <DataTableColumnManagementComponent {...args} />;

DataTableColumnManagementExample.storyName = 'Column Management';
DataTableColumnManagementExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableColumnManagementExample };
export default meta;

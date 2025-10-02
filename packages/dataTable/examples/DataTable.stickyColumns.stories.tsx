import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.stickyColumns.component.tsx?raw';

import {
  DataTableStickyColumnsComponent,
  Props,
} from './DataTable.stickyColumns.component';

const meta: Meta<Props> = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableStickyColumnsComponent,
  argTypes: {
    firstNamePinned: {
      control: {
        type: 'boolean',
      },
    },
    lastNamePinned: {
      control: {
        type: 'boolean',
      },
    },
    agePinned: {
      control: {
        type: 'boolean',
      },
    },
    visitsPinned: {
      control: {
        type: 'boolean',
      },
    },
    statusPinned: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    firstNamePinned: true,
    lastNamePinned: true,
    agePinned: false,
    visitsPinned: false,
    statusPinned: false,
  },
};

const DataTableStickyColumnsExample: StoryFn<
  typeof DataTableStickyColumnsComponent
> = args => <DataTableStickyColumnsComponent {...args} />;

DataTableStickyColumnsExample.storyName = 'Sticky columns';
DataTableStickyColumnsExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableStickyColumnsExample };
export default meta;

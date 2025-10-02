import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.virtualized.component.tsx?raw';

import { DataTableVirtualizedComponent } from './DataTable.virtualized.component';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableVirtualizedComponent,
  argTypes: {
    enableVirtualization: {
      control: {
        type: 'boolean',
      },
    },
    showRowActions: {
      control: {
        type: 'boolean',
      },
    },
    isPaginated: {
      control: {
        type: 'boolean',
      },
    },
    blurOnTab: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    enableVirtualization: true,
    showRowActions: false,
    isPaginated: false,
    blurOnTab: false,
  },
};

const DataTableVirtualizedExample: StoryFn<
  typeof DataTableVirtualizedComponent
> = args => <DataTableVirtualizedComponent {...args} />;

DataTableVirtualizedExample.storyName = 'Virtualized';
DataTableVirtualizedExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableVirtualizedExample };
export default meta;

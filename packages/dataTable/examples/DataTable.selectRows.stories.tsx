import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.selectRows.component.tsx?raw';

import {
  DataTableSelectRowsComponent,
  Props,
} from './DataTable.selectRows.component';

const meta: Meta<Props> = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableSelectRowsComponent,
  argTypes: {
    rowSelectionType: {
      options: ['single', 'multi'],
      control: {
        type: 'select',
      },
      description: 'Multiple selectable rows/Single selectable row',
    },
  },
  args: {
    rowSelectionType: 'multi',
  },
};

const DataTableSelectRowsExample: StoryFn<
  typeof DataTableSelectRowsComponent
> = args => <DataTableSelectRowsComponent {...args} />;

DataTableSelectRowsExample.storyName = 'Selectable rows';
DataTableSelectRowsExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableSelectRowsExample };
export default meta;

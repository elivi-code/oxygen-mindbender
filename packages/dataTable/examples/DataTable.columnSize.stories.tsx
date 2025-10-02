import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { CellTypes } from '@8x8/oxygen-data-table';

import sourceCode from './DataTable.columnSize.component.tsx?raw';

import {
  DataTableColumnSizeComponent,
  Props,
} from './DataTable.columnSize.component';

const options: CellTypes[] = ['small', 'medium', 'large'];

const meta: Meta<Props> = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableColumnSizeComponent,
  argTypes: {
    firstNameCellType: {
      options,
      control: {
        type: 'select',
      },
    },
    ageCellType: {
      options,
      control: {
        type: 'select',
      },
    },
    lastNameCellType: {
      options,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    firstNameCellType: 'large',
    ageCellType: 'small',
    lastNameCellType: 'medium',
  },
};

const DataTableColumnSizeExample: StoryFn<
  typeof DataTableColumnSizeComponent
> = args => <DataTableColumnSizeComponent {...args} />;

DataTableColumnSizeExample.storyName = 'Set column size demonstration';
DataTableColumnSizeExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableColumnSizeExample };
export default meta;

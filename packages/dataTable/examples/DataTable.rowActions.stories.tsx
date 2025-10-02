import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import sourceCode from './DataTable.rowActions.component.tsx?raw';

import { DataTableRowActionsComponent } from './DataTable.rowActions.component';
import { argTypes } from './config';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableRowActionsComponent,
  argTypes: {
    blurOnTab: argTypes.blurOnTab,
  },
  args: {
    blurOnTab: false,
  },
};

const DataTableRowActionsExample: StoryFn<
  typeof DataTableRowActionsComponent
> = args => <DataTableRowActionsComponent {...args} />;

DataTableRowActionsExample.storyName = 'Row actions';
DataTableRowActionsExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableRowActionsExample };
export default meta;

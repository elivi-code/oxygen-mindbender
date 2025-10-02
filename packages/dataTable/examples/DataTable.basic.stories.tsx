import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { DataTableBasicComponent } from './DataTable.basic.component';

import sourceCode from './DataTable.basic.component.tsx?raw';

const meta: Meta = {
  title: 'Components/DataTable [alpha]/Examples',
  component: DataTableBasicComponent,
};

const DataTableBasicExample: StoryFn<typeof DataTableBasicComponent> = args => (
  <DataTableBasicComponent {...args} />
);

DataTableBasicExample.storyName = 'Basic bare bones';
DataTableBasicExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
    },
  },
};

export { DataTableBasicExample };
export default meta;

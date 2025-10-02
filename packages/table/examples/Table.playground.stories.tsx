import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableFlex,
  TableRowFlex,
  TableCellFlex,
} from '@8x8/oxygen-table';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundTable = args => (
  <Table {...args}>
    <TableRow>
      <TableCell isHead>Dessert (100g serving)</TableCell>
      <TableCell isHead>Calories</TableCell>
      <TableCell isHead>Fat (g)</TableCell>
      <TableCell isHead>Carbs (g)</TableCell>
      <TableCell isHead>Protein (g)</TableCell>
    </TableRow>
    {[...Array.from(Array(5))].map((_, index) => (
      <TableRow
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        {...args}
        {...(index === args.selectedRow && { isSelected: true })}
      >
        <TableCell>Frozen yoghurt</TableCell>
        <TableCell>159</TableCell>
        <TableCell>6</TableCell>
        <TableCell>24</TableCell>
        <TableCell>4</TableCell>
      </TableRow>
    ))}
  </Table>
);
PlaygroundTable.args = {
  zebra: false,
  isSelectable: false,
  selectedRow: 0,
};
PlaygroundTable.storyName = '11. Playground Table';

export const PlaygroundTableFlex = args => (
  <TableFlex {...args}>
    <TableRowFlex>
      <TableCellFlex isHead>Dessert (100g serving)</TableCellFlex>
      <TableCellFlex isHead>Calories</TableCellFlex>
      <TableCellFlex isHead>Fat (g)</TableCellFlex>
      <TableCellFlex isHead>Carbs (g)</TableCellFlex>
      <TableCellFlex isHead>Protein (g)</TableCellFlex>
    </TableRowFlex>
    {[...Array.from(Array(5))].map((_, index) => (
      <TableRowFlex
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        {...args}
        {...(index === args.selectedRow && { isSelected: true })}
      >
        <TableCellFlex>Frozen yoghurt</TableCellFlex>
        <TableCellFlex>159</TableCellFlex>
        <TableCellFlex>6</TableCellFlex>
        <TableCellFlex>24</TableCellFlex>
        <TableCellFlex>4</TableCellFlex>
      </TableRowFlex>
    ))}
  </TableFlex>
);
PlaygroundTableFlex.args = PlaygroundTable.args;
PlaygroundTableFlex.storyName = '11. Playground TableFlex';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableFlex },
  decorators: [PlaygroundDecorator],
};

import React from 'react';

import {
  Table,
  TableFlex,
  TableBody,
  TableRow,
  TableRowFlex,
  TableHead,
  TableCell,
  TableCellFlex,
} from '@8x8/oxygen-table';

import {
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Table',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Table - Guidelines</Headline>
      <ComponentSection>
        <Table zebra>
          <TableHead>
            <TableRow>
              <TableCell isHead>Dessert (100g serving)</TableCell>
              <TableCell isHead>Calories</TableCell>
              <TableCell isHead>Fat (g)</TableCell>
              <TableCell isHead>Carbs (g)</TableCell>
              <TableCell isHead>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow isSelectable isSelected>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow isSelectable>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell>237</TableCell>
              <TableCell>9</TableCell>
              <TableCell>37</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
            <TableRow isSelectable>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
            <TableRow isSelectable>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>TableFlex - Guideline</Headline>
      <ComponentSection>
        <TableFlex>
          <TableRowFlex>
            <TableCellFlex isHead>Dessert (100g serving)</TableCellFlex>
            <TableCellFlex isHead>Calories</TableCellFlex>
            <TableCellFlex isHead>Fat (g)</TableCellFlex>
            <TableCellFlex isHead>Carbs (g)</TableCellFlex>
            <TableCellFlex isHead>Protein (g)</TableCellFlex>
          </TableRowFlex>
          <TableRowFlex isSelectable isSelected>
            <TableCellFlex>Frozen yoghurt</TableCellFlex>
            <TableCellFlex>159</TableCellFlex>
            <TableCellFlex>6</TableCellFlex>
            <TableCellFlex>24</TableCellFlex>
            <TableCellFlex>4</TableCellFlex>
          </TableRowFlex>
          <TableRowFlex isSelectable>
            <TableCellFlex>Ice cream sandwich</TableCellFlex>
            <TableCellFlex>237</TableCellFlex>
            <TableCellFlex>9</TableCellFlex>
            <TableCellFlex>37</TableCellFlex>
            <TableCellFlex>4.3</TableCellFlex>
          </TableRowFlex>
          <TableRowFlex isSelectable>
            <TableCellFlex>Ice cream sandwich</TableCellFlex>
            <TableCellFlex>237</TableCellFlex>
            <TableCellFlex>9</TableCellFlex>
            <TableCellFlex>37</TableCellFlex>
            <TableCellFlex>4.3</TableCellFlex>
          </TableRowFlex>
          <TableRowFlex isSelectable>
            <TableCellFlex>Ice cream sandwich</TableCellFlex>
            <TableCellFlex>237</TableCellFlex>
            <TableCellFlex>9</TableCellFlex>
            <TableCellFlex>37</TableCellFlex>
            <TableCellFlex>4.3</TableCellFlex>
          </TableRowFlex>
        </TableFlex>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';

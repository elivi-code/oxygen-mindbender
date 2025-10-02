# 8x8 Oxygen - Table


## Installation

```sh
$ yarn add @8x8/oxygen-table
```

```sh
$ npm install @8x8/oxygen-table
```

## Usage
### Import
```js
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@8x8/oxygen-table';
```

### Define some data
```js
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
```

### Create a simple table

```jsx
function SimpleTable() {
  return (
    <Table>
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
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.calories}</TableCell>
            <TableCell>{row.fat}</TableCell>
            <TableCell>{row.carbs}</TableCell>
            <TableCell>{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

### Set TableRow as selectable (enables hover styles)
```jsx
<TableRow isSelectable></TableRow>
```

### Set TableRow as selected
```jsx
<TableRow isSelected></TableRow>
```

### Create a table using flexbox
These flex components help when using [react-virtualized](https://github.com/bvaughn/react-virtualized) or for more flexibility.

```jsx
import { TableFlex, TableRowFlex, TableCellFlex } from '@8x8/oxygen-table';
```

```jsx
function FlexTable() {
  return (
    <TableFlex>
      <TableRowFlex>
        <TableCellFlex isHead>Dessert (100g serving)</TableCellFlex>
        <TableCellFlex isHead>Calories</TableCellFlex>
        <TableCellFlex isHead>Fat (g)</TableCellFlex>
        <TableCellFlex isHead>Carbs (g)</TableCellFlex>
        <TableCellFlex isHead>Protein (g)</TableCellFlex>
      </TableRowFlex>
      {rows.map(row => (
        <TableRowFlex key={row.name}>
          <TableCellFlex>{row.name}</TableCellFlex>
          <TableCellFlex>{row.calories}</TableCellFlex>
          <TableCellFlex>{row.fat}</TableCellFlex>
          <TableCellFlex>{row.carbs}</TableCellFlex>
          <TableCellFlex>{row.protein}</TableCellFlex>
        </TableRowFlex>
      ))}
    </TableFlex>
  );
}
```

## Available styled components
* Table
* TableBody
* TableRow
* TableHead
* TableCell
* TableFlex
* TableRowFlex
* TableCellFlex

### Extend styling
You can extend/override any of the styles by importing the styled components directly.

```js
import { Styled } from '@8x8/oxygen-table';
import styled from 'styled-components';
const BlueTableCell = styled(Styled.TableCell)`
  color: blue;
`;
```

## Props
### Table
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object|
|children*|node||Content|
|zebra|boolean|false|Controls wheter to style every other table row with an alternate background color|

### TableBody
|Name|Type|Default|Description|
|---|---|---|---|
|children*|node||Content|

### TableCell
|Name|Type|Default|Description|
|---|---|---|---|
|isHead|bool|false|Enable custom styling for table heading|
|children*|node||Content|

### TableCellFlex
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object
|isHead|bool|false|Enable custom styling for table heading|
|children*|node||Content|

### TableFlex
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object|
|children*|node||Content|
|zebra|boolean|false|Controls wheter to style every other table row with an alternate background color|

### TableHead
|Name|Type|Default|Description|
|---|---|---|---|
|children*|node||Content|

### TableRow
|Name|Type|Default|Description|
|---|---|---|---|
|isSelectable|bool|false|Set custom styling when hovering|
|isSelected|bool|false|Set the selected custom styles|
|children*|node||Content|

### TableRowFlex
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||Theme object|
|isSelectable|bool|false|Set custom styling when hovering|
|isSelected|bool|false|Set the selected custom styles|
|children*|node||Content|

>Props marked with \* are required

## Theme

### Classic

```json
{
  "tableFontFamily": "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  "tableBorderColor": "#D1DBE8",
  "fontVariantNumeric": "unset",
  "tableRowHoverColor": "#1C2025",
  "tableRowHoverBackgroundColor": "#F0F3F7",
  "tableRowSelectedBackgroundColor": "#D1DBE8",
  "zebraRowBackgroundColor": "#F0F3F7",
  "tableCellFontSize": "15px",
  "tableCellLineHeight": "24px",
  "tableCellPadding": "16px 8px",
  "tableCellColor": "#1C2025",
  "tableCellBackgroundColor": "unset",
  "tableCellFontWeight": "unset",
  "tableCellLetterSpacing": "unset",
  "tableCellFontFamily": "unset",
  "tableCellHeadFontSize": "15px",
  "tableCellHeadLineHeight": "24px",
  "tableCellHeadFontWeight": 600,
  "tableCellHeadColor": "#5E6D7A",
  "tableCellHeadBackgroundColor": "unset",
  "tableCellHeadLetterSpacing": "unset",
  "tableCellHeadFontFamily": "unset"
}
```

### Novo

```json
{
  "tableFontFamily": "Inter, sans-serif",
  "tableBorderColor": "#F1F1F1",
  "fontVariantNumeric": "tabular-nums",
  "tableRowHoverColor": "#292929",
  "tableRowHoverBackgroundColor": "#F1F1F1",
  "tableRowSelectedBackgroundColor": "#E0E0E0",
  "zebraRowBackgroundColor": "#F1F1F1",
  "tableCellFontSize": "16px",
  "tableCellLineHeight": "22px",
  "tableCellPadding": "12px 16px",
  "tableCellColor": "#525252",
  "tableCellBackgroundColor": "unset",
  "tableCellFontWeight": 400,
  "tableCellLetterSpacing": "-0.011em",
  "tableCellFontFamily": "Inter, sans-serif",
  "tableCellHeadFontSize": "16px",
  "tableCellHeadLineHeight": "24px",
  "tableCellHeadFontWeight": 600,
  "tableCellHeadColor": "#292929",
  "tableCellHeadBackgroundColor": "unset",
  "tableCellHeadLetterSpacing": "-0.011em",
  "tableCellHeadFontFamily": "Inter, sans-serif"
}
```

### Novo Dark

```json
{
  "tableFontFamily": "Inter, sans-serif",
  "tableBorderColor": "#3D3D3D",
  "fontVariantNumeric": "tabular-nums",
  "tableRowHoverColor": "#FFFFFF",
  "tableRowHoverBackgroundColor": "#2F2E32",
  "tableRowSelectedBackgroundColor": "#525252",
  "zebraRowBackgroundColor": "#2F2E32",
  "tableCellFontSize": "16px",
  "tableCellLineHeight": "22px",
  "tableCellPadding": "12px 16px",
  "tableCellColor": "#C2C2C2",
  "tableCellBackgroundColor": "unset",
  "tableCellFontWeight": 400,
  "tableCellLetterSpacing": "-0.011em",
  "tableCellFontFamily": "Inter, sans-serif",
  "tableCellHeadFontSize": "16px",
  "tableCellHeadLineHeight": "24px",
  "tableCellHeadFontWeight": 600,
  "tableCellHeadColor": "#FFFFFF",
  "tableCellHeadBackgroundColor": "unset",
  "tableCellHeadLetterSpacing": "-0.011em",
  "tableCellHeadFontFamily": "Inter, sans-serif"
}
```

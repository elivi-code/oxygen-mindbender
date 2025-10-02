import React from 'react';

interface TableProps {
  /** Theme object */
  theme?: object;
  /** Content */
  children: React.ReactNode;
}

interface TableBodyProps {
  /** Content */
  children: React.ReactNode;
}

interface TableRowProps {
  /** Theme object */
  theme?: object;
  /** Set custom styling when hovering */
  isSelectable?: boolean;
  /** Set the selected custom styles */
  isSelected?: boolean;
  /** Content */
  children: React.ReactNode;
}

interface TableCellProps {
  /** Theme object */
  theme?: object;
  /** Enable custom styling for table heading */
  isHead?: boolean;
  /** Content */
  children: React.ReactNode;
}

declare const Table: React.FunctionComponent<TableProps>;
declare const TableFlex: React.FunctionComponent<TableProps>;
declare const TableBody: React.FunctionComponent<TableBodyProps>;
declare const TableRow: React.FunctionComponent<TableRowProps>;
declare const TableRowFlex: React.FunctionComponent<TableRowProps>;
declare const TableHead: React.FunctionComponent;
declare const TableCell: React.FunctionComponent<TableCellProps>;
declare const TableCellFlex: React.FunctionComponent<TableCellProps>;

export {
  Table,
  TableFlex,
  TableBody,
  TableRow,
  TableRowFlex,
  TableHead,
  TableCell,
  TableCellFlex,
};

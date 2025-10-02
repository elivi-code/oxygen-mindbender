import { ColumnMeta, RowData } from '@tanstack/react-table';
import { AlignTypes, CellTypes } from '../table/utils';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    pinned?: boolean;
    flexible?: boolean;
    type?: CellTypes;
    columnManagement?: {
      locked?: boolean;
      visibleByDefault?: boolean;
      label: string;
    };
    align?: AlignTypes;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HeaderContext<TData, TValue> {
    isLoading?: boolean;
  }
}

// Dummy usage to ensure tsc generates the declaration files
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dummyColumnMeta: ColumnMeta<any, any> = {
  pinned: true,
  flexible: true,
  type: 'large',
  columnManagement: {
    locked: true,
    visibleByDefault: true,
    label: 'Dummy Column',
  },
  align: 'center',
};

export default dummyColumnMeta;

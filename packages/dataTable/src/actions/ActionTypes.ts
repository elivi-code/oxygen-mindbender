import { ActionProps } from '../actionsDropdown/types';

export enum RowStatusType {
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
}

export type GetRowActions<TData> = (rowData: TData) => ActionProps[];
export type GetRowStatus<TData> = (rowData: TData) => RowStatusType | undefined;

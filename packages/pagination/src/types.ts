export const PAGINATION_SIZE = {
  small: 'small',
  default: 'default',
} as const;

export interface Translations {
  rowsPerPage: string;
  prevPage: string;
  numberOfPages: string;
  nextPage: string;
}

export type PaginationSize = keyof typeof PAGINATION_SIZE;

export interface PaginationState {
  pageNumber: number;
  rowsPerPage: number;
}

export interface PaginationHookProps {
  canGoBack: boolean;
  canGoNext: boolean;
  numberOfPages: number;
  pageNumber: number;
  rowsPerPage: number;
}

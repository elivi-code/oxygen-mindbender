import { type DateTimeRangePickerProps } from '@8x8/oxygen-date-time-range-selector';

// TODO Remove these when DateTimeRange is migrated to TS
export type PredefinedRangeType = {
  id: string;
  displayName: string;
  selectedDisplayName?: string[];
  dateTimeRange(): { startDate: Date; endDate: Date };
  hasArgument?: boolean;
  value?: string;
};

export type DateTimeType = {
  startDate: Date;
  endDate: Date;
};

export type DateTimeStringType = {
  startDate: string;
  endDate: string;
};

/// /////////////////////

export type OperatorValueType =
  | 'is'
  | 'isNot'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'notStartsWith'
  | 'notEndsWith'
  | 'equals'
  | 'notEquals'
  | 'lessThan'
  | 'lessThanOrEqual'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'dateRange'
  | 'boolean';

export const OPERATOR_TYPES_STRING: { [key: string]: OperatorValueType } = {
  IS: 'is',
  IS_NOT: 'isNot',
  CONTAINS: 'contains',
  NOT_CONTAINS: 'notContains',
  STARTS_WITH: 'startsWith',
  ENDS_WITH: 'endsWith',
  NOT_STARTS_WITH: 'notStartsWith',
  NOT_ENDS_WITH: 'notEndsWith',
} as const;

export const OPERATOR_TYPES_NUMBER: { [key: string]: OperatorValueType } = {
  EQUALS: 'equals',
  NOT_EQUALS: 'notEquals',
  LESS_THAN: 'lessThan',
  LESS_THAN_OR_EQUAL: 'lessThanOrEqual',
  GREATER_THAN: 'greaterThan',
  GREATER_THAN_OR_EQUAL: 'greaterThanOrEqual',
} as const;

export const OPERATOR_TYPES_DATE: { [key: string]: OperatorValueType } = {
  DATE_RANGE: 'dateRange',
};

export const OPERATOR_TYPES_BOOLEAN: { [key: string]: OperatorValueType } = {
  BOOLEAN: 'boolean',
};

export const OPERATOR_TYPES = {
  ...OPERATOR_TYPES_STRING,
  ...OPERATOR_TYPES_NUMBER,
  ...OPERATOR_TYPES_DATE,
  ...OPERATOR_TYPES_BOOLEAN,
} as const;

export type OperatorType = {
  value: OperatorValueType;
  label?: string;
};

export const multiSelectionOperators: OperatorValueType[] = [
  OPERATOR_TYPES_STRING.IS,
  OPERATOR_TYPES_STRING.IS_NOT,
];

export type FilterValueType = string | number;

export type FilterValueObjectType = {
  dateRange?: DateTimeStringType;
  predefinedRange?: Partial<PredefinedRangeType>;
  label?: string;
  value?: FilterValueType;
  isEndTimeValid?: boolean;
  isFreeform?: boolean;
};

export interface FilterType {
  id: string;
  subFilterId?: string;
  name?: string;
  label?: string;
  operator?: OperatorType;
  values?: FilterValueObjectType[] | null;
  isLoading?: boolean;
}

type DateTimeRangeProps = Omit<
  DateTimeRangePickerProps,
  | 'setOuterState'
  | 'id'
  | 'onRangeChange'
  | 'theme'
  | 'predefinedRange'
  | 'dateTimeRange'
  | 'testId'
  | 'headerRenderer'
>;

export interface BaseFilterDefinitionType {
  id: string;
  name?: string;
  label?: string;
  title?: string;
  values?: FilterValueObjectType[];
  showSearchInput?: boolean;
  isAlwaysVisible?: boolean;
  allowFreeformSuggestions?: boolean;
  dateTimeRangeProps?: Partial<DateTimeRangeProps>;
}

export interface FilterDefinitionType extends BaseFilterDefinitionType {
  operators?: OperatorType[];
}

export interface GroupFilterDefinitionType extends BaseFilterDefinitionType {
  subFilterOperators: Record<string, OperatorType[]>;
  subFilters: Record<string, FilterType>;
}

export interface Translations {
  searchNewFilterLabel: string;
  searchValueLabel: string;
  addNewFilterLabel: string;
  applyFilterLabel: string;
  resetAllLabel: string;
  resetAllSuccessLabel: string;
  clearAllLabel: string;
  clearAllSuccessLabel: string;
  deleteFilterlabel: string;
  resetLabel: string;
  resetSuccessLabel: string;
  clearLabel: string;
  noSuggestionsFoundLabel: string;
  selectedLabel: string;
  freeformLabel: string;
}

export interface FilterListInterface {
  currentFilters: FilterType[];
  defaultFilters?: FilterType[];
  filterDefinitions: (FilterDefinitionType | GroupFilterDefinitionType)[];
  getSearchSuggestions?(
    filterId: FilterType['id'],
    filterSearch: FilterValueType,
    pageKeyOffset: number,
  ):
    | Promise<never>
    | Promise<{
        content: FilterValueObjectType[];
        lastPage: boolean;
      }>;
  searchSuggestionKeyOffset?: number;
  onChange(newFilters: FilterType[]): void;
  onFilterToggle?(filterId: FilterType['id'] | null): void;
  hasGlobalApplyButton?: boolean;
  emptyFilterAllowed?: boolean;
  currentFiltersSortFunction?(f1: FilterType, f2: FilterType): number;
  popoverPortalRef?: React.RefObject<HTMLElement>;
  translations?: Translations;
  testId?: string;
  telemetryProps?: Record<string, string>;
  showOperatorInFilterButton?: boolean;
}

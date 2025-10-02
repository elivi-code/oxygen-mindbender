# @8x8/oxygen-filter-list

## Filter list

Filter list supports two main modes: simple filters and group filters.

- A simple filter represents a single, flat condition applied to a specific data field. The data used here should follow the `FilterDefinitionType`.

- A group filter categorize multiple related conditions under a shared context. This is especially useful when filters represent questions or topics. The data used here should follow the `GroupFilterDefinitionType`.

1. `Deletable Filter` - the standard filter - has `Delete` and `Apply` buttons - `Clear All` will remove the filter (it is assumed that the filter without values is invalid)
2. `Defaulted Filter `- It has a default value provided into `defaultFilters` prop - has `Delete`, `Apply` and `Reset` button - `Clear All` now becomes `Reset All` (When clicking the `Reset`, filters with not default will be removed)
3. `Always visible` - not deleteable filter - has `Apply` and `Clear` buttons - this filter remains valid even if there are no values selected - `Clear All` will keep the filter, just clear the values, if there are filter which are not always visible they will be removed.
4. `Always Visible & Defaulted` - has `Apply` and `Reset` buttons - `Clear All` now becomes `Reset All` (filters with not default or not Always Visible will be removed)

## Props

| Name                       | Type                                                                                                                                                   | Default             | Description                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| currentFilters\*           | `FilterType[]`                                                                                                                                         |                     | Filters active inside the FilterList                                                                          |
| filterDefinitions\*        | `FilterDefinitionType[]`                                                                                                                               |                     | List of definitions for filters                                                                               |
| onChange\*                 | `(newFilters: FilterType[]): void`                                                                                                                     |                     | Callback for filter updates - called when apply/delete/reset button is clicked                                |
| onFilterToggle             | `(filterId: FilterType['id'] \| null): void`                                                                                                           | undefined           | Returns the filter ID corresponding to the opened popover and null when popover is closed                     |
| defaultFilters             | `FilterType[]`                                                                                                                                         | undefined           | Default to currentFilters - if not empty, `Clear` buttons become `Reset` Buttons                              |
| getSearchSuggestions       | `(filterId: FilterType['id'], filterSearch: FilterValueType, pageKeyOffset: number): Promise<{ content: FilterValueObjectType[]; lastPage: boolean }>` | undefined           | Used for multi/single selection filters to fetch suggestions                                                  |
| searchSuggestionKeyOffset  | `number`                                                                                                                                               | 20                  | Pagination config for `getSearchSuggestions` - the function will be called with a multiple of `pageKeyOffset` |
| hasGlobalApplyButton       | `boolean`                                                                                                                                              | false               | If true, the Apply button will be available at list level, not filter level                                   |
| emptyFilterAllowed         | `boolean`                                                                                                                                              | false               | If true, selected filter can be added without first setting a value in it                                    |

| translations               | `Translations`                                                                                                                                         | defaultTranslations | Labels to be used inside the component                                                                        |
| currentFiltersSortFunction | `(f1: FilterType, f2: FilterType): number`                                                                                                             | undefined           | Function to sort filters                                                                                      |
| testId                     | `string`                                                                                                                                               | 'FILTER_LIST'       | FilterList test id                                                                                            |
| showOperatorInFilterButton | `boolean`                                                                                                                                              | true                | If false only the filter tag and total number of selected values will be shown                                |

> Props marked with \* are required

## Types

- `FilterValueObjectType`

| Name            | Type               | Default | Description                                                                    |
| --------------- | ------------------ | ------- | ------------------------------------------------------------------------------ |
| dateRange       | `any`              |         | Object returned by DateTimeRangeSelector                                       |
| predefinedRange | `any`              |         | Object returned by DateTimeRangeSelector                                       |
| label           | `string`           |         | Label of the value - either the provided one, or computed for DateTime filters |
| value           | `string \| number` |         | value property got from filterDefinition                                       |
| isEndTimeValid  | `boolean`          |         | Boolean returned by DateTimeRangeSelector                                      |
| isFreeform      | `boolean`          |         | If the options was generated trough freeform feature                           |

- `OperatorType`

| Name    | Type                                | Default | Description                               |
| ------- | ----------------------------------- | ------- | ----------------------------------------- |
| value\* | one of exported `OperatorValueType` |         | Unique identifier for operator            |
| label\* | `string`                            |         | Label displayed for the selected operator |

- `FilterType`

| Name        | Type                      | Default | Description                                                                                                                           |
| ----------- | ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| id\*        | `string`                  |         | Unique identifier for filter                                                                                                          |
| subFilterId | `string`                  |         | Selected subFilter, only useful if using group filter mode                                                                            |
| name        | `string`                  |         | Artifact from UnrealSearch style filters                                                                                              |
| label       | `string`                  |         | Label displayed for the filter                                                                                                        |
| operator    | `OperatorType`            |         | Selected Operator                                                                                                                     |
| values      | `FilterValueObjectType[]` |         | Selected Filter Values                                                                                                                |
| isLoading   | `boolean`                 |         | Filter loading state, useful to allow full control of loading state from the parent component. Do not use with `getSearchSuggestions` |

- `FilterDefinitionType`

| Name                     | Type                       | Default   | Description                                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | -------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                     | `string`                   |           | Unique identifier for filter                                                                                                                                                                                                                                                                                                                  |
| name                     | `string`                   | undefined | Artifact from UnrealSearch style filters                                                                                                                                                                                                                                                                                                      |
| label                    | `string`                   | undefined | Label displayed for the filter                                                                                                                                                                                                                                                                                                                |
| title                    | `string`                   | undefined | Addition title to be displayed on FilterTag on hover - defaults to label                                                                                                                                                                                                                                                                      |
| operators                | `OperatorType[]`           | undefined | List of available operators                                                                                                                                                                                                                                                                                                                   |
| values                   | `FilterValueObjectType[]`  | undefined | List of available values                                                                                                                                                                                                                                                                                                                      |
| isAlwaysVisible          | `boolean`                  | undefined | If true, filter becomes not-deletable                                                                                                                                                                                                                                                                                                         |
| allowFreeformSuggestions | `boolean`                  | undefined | If true, selection filter will create option with value and label equal to searchValue. Also forces the search input to be visible.                                                                                                                                                                                                           |
| showSearchInput          | `boolean`                  | undefined | If undefined, standard rules apply (show search input when more than 10 filter, when `getSearchSuggestions` prop is available or when `allowFreeformSuggestions` is defined). It has precedence over all other rules except `allowFreeformSuggestions`. When `true` it will show the search input, when `false` it will hide the search input |
| dateTimeRangeProps       | `DateTimeRangePickerProps` | undefined | Used currently in the context of DateTimeRangeSelector - destructured over the DateTimeRangePicker, ignored for other types of filters                                                                                                                                                                                                        |

- `GroupFilterDefinitionType`

| Name                     | Type                             | Default   | Description                                                                                                                            |
| ------------------------ | -------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| id\*                     | `string`                         |           | Unique identifier for filter                                                                                                           |
| name                     | `string`                         | undefined | Artifact from UnrealSearch style filters                                                                                               |
| label                    | `string`                         | undefined | Label displayed for the filter                                                                                                         |
| title                    | `string`                         | undefined | Addition title to be displayed on FilterTag on hover - defaults to label                                                               |
| values                   | `FilterValueObjectType[]`        | undefined | List of available values                                                                                                               |
| isAlwaysVisible          | `boolean`                        | undefined | If true, filter becomes not-deletable                                                                                                  |
| allowFreeformSuggestions | `boolean`                        | undefined | If true, selection filter will create option with value and label equal to searchValue                                                 |
| dateTimeRangeProps       | `DateTimeRangePickerProps`       | undefined | Used currently in the context of DateTimeRangeSelector - destructured over the DateTimeRangePicker, ignored for other types of filters |
| subFilters\*             | `Record<string, FilterType>`     |           | Map of available subFilters/conditions by subFilterId, with all the information related with that subFilterId                          |
| subFilterOperators\*     | `Record<string, OperatorType[]>` |           | Map of available operators by subFilterId, so we can enchance the operator select component                                            |

- `Translations`

| Name                    | Default                         |
| ----------------------- | ------------------------------- |
| searchNewFilterLabel    | 'Search filter'                 |
| addNewFilterLabel       | 'Add filter'                    |
| applyFilterLabel        | 'Apply'                         |
| resetAllLabel           | 'Reset All'                     |
| clearAllLabel           | 'Clear All'                     |
| resetAllSuccessLabel    | 'All filters have been reset'   |
| clearAllSuccessLabel    | 'All filters have been cleared' |
| deleteFilterlabel       | 'Delete'                        |
| resetLabel              | 'Reset'                         |
| clearLabel              | 'Clear'                         |
| noSuggestionsFoundLabel | 'No suggestions found'          |
| selectedLabel           | 'Selected'                      |
| freeformLabel           | 'Freeform'                      |

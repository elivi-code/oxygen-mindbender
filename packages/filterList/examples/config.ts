import {
  FilterDefinitionType,
  FilterValueObjectType,
  GroupFilterDefinitionType,
  OperatorType,
  FilterType,
  predefinedRanges,
} from '@8x8/oxygen-filter-list';

const dateTimeRangeFilter: FilterDefinitionType = {
  id: 'DATE_RANGE',
  label: 'Date Range',
  operators: [{ value: 'dateRange', label: 'is' }],
  dateTimeRangeProps: {
    predefinedRanges,
    fromLabel: 'From',
    startTimeLabel: 'Start Time',
    toLabel: 'To',
    endTimeLabel: 'End Time',
    customPredefinedRangeLabel: 'Custom',
    endTimeErrorMessage: 'Cannot be before start time',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm a',
  },
};

const BooleanFilter: FilterDefinitionType = {
  id: 'BOOLEAN_FILTER',
  label: 'Boolean Atribute',
  operators: [{ value: 'boolean', label: 'is' }],
  values: [
    { value: 'true', label: 'True' },
    { value: 'false', label: 'False' },
  ],
};

const stringOperators: OperatorType[] = [
  {
    value: 'is',
    label: 'is',
  },
  {
    value: 'isNot',
    label: "isn't",
  },
  {
    value: 'contains',
    label: 'contains',
  },
  {
    value: 'notContains',
    label: "doesn't contain",
  },
  {
    value: 'startsWith',
    label: 'starts with',
  },
  {
    value: 'endsWith',
    label: 'ends with',
  },
  {
    value: 'notStartsWith',
    label: "doesn't start with",
  },
  {
    value: 'notEndsWith',
    label: "doesn't end with",
  },
];

const numberOperators: OperatorType[] = [
  {
    value: 'equals',
    label: 'equals',
  },
  {
    value: 'notEquals',
    label: "doesn't equal",
  },
  {
    value: 'lessThan',
    label: 'less than',
  },
  {
    value: 'lessThanOrEqual',
    label: 'less than or equal',
  },
  {
    value: 'greaterThan',
    label: 'greater than',
  },
  {
    value: 'greaterThanOrEqual',
    label: 'greater than or equal',
  },
];

function generateFilterDefinitions(
  startIndex: number,
  numberOfFilters: number,
  numberOfValues: number,
  operators: OperatorType[],
  isAlwaysVisible = false,
): FilterDefinitionType[] {
  const filters: FilterDefinitionType[] = [];

  for (let i = startIndex; i <= startIndex + numberOfFilters - 1; i += 1) {
    const filter: FilterDefinitionType = {
      id: `FILTER_${i}`,
      name: `FILTER_${i}`,
      label: `Filter ${i}`,
      isAlwaysVisible,
      operators,
      values: [],
    };

    // generate a long name for id=2 for testing ellipsis
    if (i === 2) {
      filter.label = 'Filter_2_with_a_very_long_name_to_test_ellipsis';
    }

    for (let j = 1; j <= numberOfValues; j += 1) {
      filter.values?.push({ value: `${i}_${j}`, label: `${i}_${j}` });
    }

    filters.push(filter);
  }

  return filters;
}

function generateGroupFilterDefinitions(
  startIndex: number,
  numberOfGroupFilters: number,
  numberOfSubFilterValues: number,
  numberOfValues: number,
  operators: OperatorType[],
  isAlwaysVisible = false,
): GroupFilterDefinitionType[] {
  const subFilters: GroupFilterDefinitionType[] = [];

  for (let i = startIndex; i <= startIndex + numberOfGroupFilters - 1; i += 1) {
    const rootValues: { value: string; label: string }[] = [];
    const subFilterMap: Record<string, FilterType> = {};
    const subFilterOperatorsMap: Record<string, OperatorType[]> = {};

    for (let j = 1; j <= numberOfSubFilterValues; j += 1) {
      const key = `Filter${j}`;

      rootValues.push({ value: key, label: key });

      const subFilterValues: { value: string; label: string }[] = [];

      for (let k = 1; k <= numberOfValues; k += 1) {
        subFilterValues.push({
          value: `${key}_${k}`,
          label: `${key}_${k}`,
        });
      }

      subFilterMap[key] = {
        id: `${key}_1`,
        label: `${key} Option 1`,
        name: `${key}_1`,
        values: subFilterValues,
      };

      subFilterOperatorsMap[key] = operators;
    }

    const subFilter: GroupFilterDefinitionType = {
      id: `Group_Filter${i}`,
      name: `Group_Filter${i}`,
      label: `Group_Filter ${i}`,
      isAlwaysVisible,
      values: rootValues,
      subFilters: subFilterMap,
      subFilterOperators: subFilterOperatorsMap,
    };

    subFilters.push(subFilter);
  }

  return subFilters;
}

function generateSelectedFilters(
  filterDefinitions,
  numberOfFilters,
  numberOfValues,
) {
  const currentFilters: FilterType[] = [];
  const usedFilters: number[] = [];

  for (let i = 0; i < numberOfFilters; i += 1) {
    let index = Math.floor(Math.random() * filterDefinitions.length);

    while (usedFilters.includes(index)) {
      index = Math.floor(Math.random() * filterDefinitions.length);
    }

    usedFilters.push(index);
    const filter = filterDefinitions[index];

    const currentFilter = {
      id: filter.id,
      label: filter.label,
      name: filter.name,
      operator: filter.operators[0],
      values: filter.values?.slice(0, numberOfValues),
    };

    currentFilters.push(currentFilter);
  }

  return currentFilters;
}

async function wait(time: number) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
}

const fillArray = (
  filterId: string,
  arrayLength = 1000,
): FilterValueObjectType[] => {
  return Array.from({ length: arrayLength }, (_, i) => {
    return {
      value: `${filterId}_${i}`,
      label: `${filterId}_${i}`,
    };
  });
};

export const argsConfig = {
  hasGlobalApplyButton: false,
  emptyFilterAllowed: false,
};

export {
  stringOperators,
  numberOperators,
  generateFilterDefinitions,
  generateGroupFilterDefinitions,
  dateTimeRangeFilter,
  BooleanFilter,
  generateSelectedFilters,
  wait,
  fillArray,
};

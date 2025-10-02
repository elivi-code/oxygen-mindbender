import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterType,
  GroupFilterDefinitionType,
} from '@8x8/oxygen-filter-list';
import { generateGroupFilterDefinitions, stringOperators } from './config';
import prettyPrint from './prettyPrint';

export function FilterListGroupFilter(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);
  const definitions: GroupFilterDefinitionType[] = args.filterDefinitions.map(
    def => ({
      ...def,
      allowFreeformSuggestions: args.allowFreeformSuggestions,
    }),
  );

  return (
    <>
      <Doc>
        <h2>Filter List Sub Filter example </h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  onChange={onChange}
  showOperatorInFilterButton={showOperatorInFilterButton}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={definitions}
          onChange={setCurrentFilters}
          showOperatorInFilterButton={args.showOperatorInFilterButton}
        />

        {prettyPrint(currentFilters, definitions, [])}
      </ComponentSection>
    </>
  );
}

const stringFilterDefinitions = generateGroupFilterDefinitions(
  1,
  3,
  3,
  3,
  stringOperators,
);

FilterListGroupFilter.args = {
  filterDefinitions: stringFilterDefinitions,
  allowFreeformSuggestions: false,
  showOperatorInFilterButton: true,
};

FilterListGroupFilter.storyName = 'GroupFilter';

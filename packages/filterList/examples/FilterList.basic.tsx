import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterDefinitionType,
  FilterType,
} from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions, stringOperators } from './config';
import prettyPrint from './prettyPrint';

export function FilterListBasic(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);
  const definitions: FilterDefinitionType[] = args.filterDefinitions.map(
    def => ({
      ...def,
      allowFreeformSuggestions: args.allowFreeformSuggestions,
    }),
  );

  return (
    <>
      <Doc>
        <h2>Filter List Basic example </h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  onChange={onChange}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={definitions}
          onChange={setCurrentFilters}
        />

        {prettyPrint(currentFilters, definitions, [])}
      </ComponentSection>
    </>
  );
}

const stringFilterDefinitions = generateFilterDefinitions(
  1,
  10,
  20,
  stringOperators,
);

FilterListBasic.args = {
  filterDefinitions: stringFilterDefinitions,
  allowFreeformSuggestions: false,
};

FilterListBasic.storyName = 'Basic';

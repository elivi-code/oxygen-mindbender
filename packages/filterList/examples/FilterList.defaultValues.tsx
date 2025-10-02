import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import {
  argsConfig,
  generateFilterDefinitions,
  generateSelectedFilters,
  stringOperators,
} from './config';
import prettyPrint from './prettyPrint';

export function FilterListWithDefaultValues(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>(
    args.defaultFilters,
  );

  return (
    <>
      <Doc>
        <h2>Filter List With Default Value example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

const [currentFilters, setCurrentFilters] = useState<FilterType[]>(baseFilters);

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={stringFilterDefinitions}
  defaultFilters={baseFilters}
  onChange={onChange}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          defaultFilters={args.defaultFilters}
          hasGlobalApplyButton={args.hasGlobalApplyButton}
          emptyFilterAllowed={args.emptyFilterAllowed}
          onChange={setCurrentFilters}
        />

        {prettyPrint(
          currentFilters,
          args.filterDefinitions,
          args.defaultFilters,
        )}
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

const defaultFilters = generateSelectedFilters(stringFilterDefinitions, 5, 10);

FilterListWithDefaultValues.args = {
  ...argsConfig,
  filterDefinitions: stringFilterDefinitions,
  defaultFilters,
};

FilterListWithDefaultValues.storyName = 'DefaultValues';

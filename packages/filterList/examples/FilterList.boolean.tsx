import React, { useEffect, useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterDefinitionType,
  FilterType,
} from '@8x8/oxygen-filter-list';
import { BooleanFilter } from './config';
import prettyPrint from './prettyPrint';

export function FilterListBoolean(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);
  const [filterDefinitions, setFilterDefinitions] = useState<
    FilterDefinitionType[]
  >([]);

  useEffect(() => {
    setFilterDefinitions([
      {
        ...args.filterDefinition,
      },
    ]);
  }, [args.filterDefinition]);

  return (
    <>
      <Doc>
        <h2>Filter list Boolean example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={[BooleanFilter]}
  onChange={setCurrentFilters}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={filterDefinitions}
          onChange={setCurrentFilters}
        />

        {prettyPrint(currentFilters, filterDefinitions, [])}
      </ComponentSection>
    </>
  );
}

FilterListBoolean.args = {
  filterDefinition: BooleanFilter,
};

FilterListBoolean.storyName = 'Boolean';

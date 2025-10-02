import React, { useRef, useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterDefinitionType,
  FilterType,
} from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions, stringOperators } from './config';
import prettyPrint from './prettyPrint';

export function FilterListTransformOnParent(args) {
  const popoverPortalRef = useRef<HTMLElement>(document.body);
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
        <h2>Filter List with transform applied on parent example </h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

const popoverPortalRef = useRef<HTMLElement>(document.body);

<div
  style={{
    transform: 'scale(1)',
  }}
>
  <FilterList
    currentFilters={currentFilters}
    filterDefinitions={definitions}
    onChange={setCurrentFilters}
    popoverPortalRef={popoverPortalRef}
  />
</div>
`}
        </pre>
      </Doc>

      <ComponentSection block>
        <div
          style={{
            transform: 'scale(1)',
          }}
        >
          <FilterList
            currentFilters={currentFilters}
            filterDefinitions={definitions}
            onChange={setCurrentFilters}
            popoverPortalRef={popoverPortalRef}
          />
        </div>

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

FilterListTransformOnParent.args = {
  filterDefinitions: stringFilterDefinitions,
  allowFreeformSuggestions: false,
};

FilterListTransformOnParent.storyName = 'transform applied on parent';

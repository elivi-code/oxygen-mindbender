import React, { useState, useRef } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions, stringOperators } from './config';

export function FilterListPopover(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);
  const popoverPortalRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Doc>
        <h1>
          <code>FilterList</code> with <code>Popover</code> z-index positioning
        </h1>
        <p>
          By default <code>FilterList</code> uses a local portal to render the{' '}
          <code>Popover</code>
        </p>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<div style={{ position: 'relative', zIndex: 1 }}>
  <FilterList
    currentFilters={currentFilters}
    filterDefinitions={filterDefinitions}
    onChange={onChange}
  />
</div>`}
        </pre>
      </Doc>

      <ComponentSection block style={{ position: 'relative', zIndex: 2 }}>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
        />
      </ComponentSection>

      <Doc>
        <h2>
          Custom <code>popoverPortalRef</code>
        </h2>
        <p>
          If you have some restrictions (for example when overflow is clipped
          around the <code>FilterList</code>) you can provide a custom reference
          for portaling through <code>popoverPortalRef</code>
        </p>
        <pre>{`import FilterList from '@8x8/oxygen-filter-list';

const popoverPortalRef = useRef<HTMLDivElement | null>(null);

<div style={{ overflow: 'hidden' }}>
  <FilterList
    currentFilters={currentFilters}
    filterDefinitions={args.filterDefinitions}
    onChange={setCurrentFilters}
    popoverPortalRef={popoverPortalRef}
  />
</div>
<div ref={popoverPortalRef} style={{ position: 'relative', zIndex: 5 }} />
`}</pre>
      </Doc>

      <ComponentSection block style={{ overflow: 'hidden' }}>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
          popoverPortalRef={popoverPortalRef}
        />
      </ComponentSection>
      <div ref={popoverPortalRef} style={{ position: 'relative', zIndex: 5 }} />
    </>
  );
}

const stringFilterDefinitions = generateFilterDefinitions(
  1,
  10,
  20,
  stringOperators,
);

FilterListPopover.args = {
  filterDefinitions: stringFilterDefinitions,
};

FilterListPopover.storyName = 'Popover & popoverPortalRef';

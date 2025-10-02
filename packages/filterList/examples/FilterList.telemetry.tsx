import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { OxygenProvider } from '@8x8/oxygen-config';
import { generateFilterDefinitions, stringOperators } from './config';
import prettyPrint from './prettyPrint';

export function FilterListWithTelemetry(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

  return (
    <>
      <Doc>
        <h2>
          Sends telemetry event on clicking Apply or Clear All button (Filter
          List With Global Apply Button)
        </h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';
import { OxygenProvider } from '@8x8/oxygen-config';

<OxygenProvider telemetryCallback={telemetryCallback}>
  <FilterList
    currentFilters={currentFilters}
    filterDefinitions={filterDefinitions}
    telemetryProps={telemetryProps}
    onChange={onChange}
    hasGlobalApplyButton
  />
</OxygenProvider>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <OxygenProvider telemetryCallback={action('telemetryCallback')}>
          <FilterList
            currentFilters={currentFilters}
            filterDefinitions={args.filterDefinitions}
            telemetryProps={args.telemetryProps}
            onChange={setCurrentFilters}
            hasGlobalApplyButton
          />
        </OxygenProvider>

        {prettyPrint(currentFilters, args.filterDefinitions, [])}
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

FilterListWithTelemetry.args = {
  filterDefinitions: stringFilterDefinitions,
  telemetryProps: { prop1: 'test' },
  telemetryCallback: action('telemetryCallback'),
};

FilterListWithTelemetry.storyName = 'FilterList with telemetry';

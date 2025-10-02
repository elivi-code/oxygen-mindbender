import React from 'react';
import { action } from 'storybook/actions';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import { ColumnManagement } from '@8x8/oxygen-column-management';
import { OxygenProvider, useOxygen } from '@8x8/oxygen-config';

export const ColumnManagementExample = args => {
  const { themeName } = useOxygen();

  return (
    <>
      <Doc>
        <h1>
          <code>Column Management</code> basic usage
        </h1>
        <p>
          Column Management component is meant to customise the columns
          according to user preferences. The component invokes a callback when
          some column has changed.
        </p>
        <pre>
          {`
import React, { useState } from 'react';
import { ColumnManagement } from '@8x8/oxygen-column-management';

return (
  <ColumnManagement currentColumns={currentColumns} availableColumns={availableColumns} onUpdate={onUpdate} />
)
`}
        </pre>
      </Doc>
      <div style={{ width: '800px' }}>
        <ComponentSection block>
          <OxygenProvider
            telemetryCallback={action('onTelemetry')}
            themeName={themeName}
          >
            <ColumnManagement
              {...args}
              onUpdate={action('onUpdate')}
              telemetryProps={{
                uiArea: 'uiAreaTest',
                reportName: 'report test',
              }}
            />
          </OxygenProvider>
        </ComponentSection>
      </div>
    </>
  );
};

ColumnManagementExample.storyName = 'ColumnManagement';
ColumnManagementExample.args = {
  currentColumns: [
    { id: '1', name: 'Queues', isLocked: true, tooltipText: 'Queues tooltip' },
    { id: '2', name: 'Channel', tooltipText: 'Channel tooltip' },
    { id: '3', name: 'Waiting', tooltipText: 'Waiting tooltip' },
    { id: '4', name: 'Completed', tooltipText: 'Completed tooltip' },
    { id: '5', name: 'Abandoned', tooltipText: 'Abandoned tooltip' },
    { id: '6', name: 'Agents', tooltipText: 'Agents tooltip' },
    { id: '7', name: 'Average Wait', tooltipText: 'Average Wait tooltip' },
    { id: '8', name: 'Longest Wait', tooltipText: 'Longest Wait tooltip' },
    { id: '9', name: 'SLA', tooltipText: 'SLA tooltip' },
    { id: '10', name: 'Overtime', tooltipText: 'Overtime tooltip' },
    {
      id: '11',
      name: 'Average Staffing',
      tooltipText: 'Average Staffing tooltip',
    },
    {
      id: '12',
      name: 'Busy',
      tooltipText: 'Busy tooltip',
    },
    {
      id: '13',
      name: 'Failed',
      tooltipText: 'Failed tooltip',
    },
    {
      id: '14',
      name: 'Hold',
      tooltipText: 'Hold tooltip',
    },
    {
      id: '15',
      name: 'Quickest wait',
      tooltipText: 'Quickest wait tooltip',
    },
    {
      id: '16',
      name: 'Longest in time',
      tooltipText: 'Longest in time tooltip',
    },
    { id: '17', name: 'Longest hold', tooltipText: 'Longest hold tooltip' },
    {
      id: '18',
      name: 'Blind',
      tooltipText: 'Blind transfers initiated tooltip',
    },
    {
      id: '19',
      name: 'Warm transfers completed',
      tooltipText: 'Warm transfers completed tooltip',
    },
    {
      id: '20',
      name: 'Working offline time',
      tooltipText: 'Working offline time tooltip',
    },
  ],
  availableColumns: [
    { id: '1', name: 'Queues', isLocked: true, tooltipText: 'Queues tooltip' },
    { id: '2', name: 'Channel', tooltipText: 'Channel tooltip' },
    { id: '3', name: 'Waiting', tooltipText: 'Waiting tooltip' },
    { id: '4', name: 'Completed', tooltipText: 'Completed tooltip' },
    { id: '5', name: 'Abandoned', tooltipText: 'Abandoned tooltip' },
    { id: '6', name: 'Agents', tooltipText: 'Agents tooltip' },
    { id: '7', name: 'Average Wait', tooltipText: 'Average Wait tooltip' },
    { id: '8', name: 'Longest Wait', tooltipText: 'Longest Wait tooltip' },
    { id: '9', name: 'SLA', tooltipText: 'SLA tooltip' },
    { id: '10', name: 'Overtime', tooltipText: 'Overtime tooltip' },
    {
      id: '11',
      name: 'Average Staffing',
      tooltipText: 'Average Staffing tooltip',
    },
    {
      id: '12',
      name: 'Busy',
      tooltipText: 'Busy tooltip',
    },
    {
      id: '13',
      name: 'Failed',
      tooltipText: 'Failed tooltip',
    },
    {
      id: '15',
      name: 'Quickest wait',
      tooltipText: 'Quickest wait tooltip',
    },
  ],
};
ColumnManagementExample.argTypes = {
  currentColumns: {
    type: 'array',
  },
  availableColumns: {
    type: 'array',
  },
};

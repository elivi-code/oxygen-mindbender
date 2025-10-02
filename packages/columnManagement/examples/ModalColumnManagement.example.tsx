import React, { useState } from 'react';
import { action } from 'storybook/actions';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import { ModalColumnManagement } from '@8x8/oxygen-column-management';
import Button from '@8x8/oxygen-button';
import { OxygenProvider } from '@8x8/oxygen-config';

export const ModalColumnManagementExample = args => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  return (
    <>
      <Doc>
        <h1>
          <code>Modal Column Management</code> basic usage
        </h1>
        <p>
          Modal Column Management component is meant to abstract the usage of
          the Column Management in a modal.
        </p>
        <pre>
          {`
import React, { useState } from 'react';
import { ModalColumnManagement } from '@8x8/oxygen-column-management';


return (
  <ModalColumnManagement
    currentColumns={currentColumns}
    availableColumns={availableColumns}
    defaultColumns={defaultColumns}
    onSave={onSave}
    onClose={onClose}
  />
)
          `}
        </pre>
      </Doc>
      <div style={{ width: '300px' }}>
        <ComponentSection block>
          <Button onClick={() => setIsBtnClicked(true)}>Edit Columns</Button>
          <OxygenProvider telemetryCallback={action('onTelemetry')}>
            {isBtnClicked && (
              <ModalColumnManagement
                {...args}
                onSave={action('onSave')}
                onClose={() => setIsBtnClicked(false)}
                telemetryProps={{ uiArea: 'uiAreaTest' }}
              />
            )}
          </OxygenProvider>
        </ComponentSection>
      </div>
    </>
  );
};

ModalColumnManagementExample.storyName = 'ModalColumnManagement';
ModalColumnManagementExample.args = {
  defaultColumns: [
    { id: '1', name: 'Queues', isLocked: true, tooltipText: 'Queues' },
    { id: '2', name: 'Channel', tooltipText: 'Channel' },
    { id: '3', name: 'Waiting', tooltipText: 'Waiting' },
  ],
  currentColumns: [
    { id: '1', name: 'Queues', isLocked: true, tooltipText: 'Queues' },
    { id: '2', name: 'Channel', tooltipText: 'Channel' },
    { id: '3', name: 'Waiting', tooltipText: 'Waiting' },
    { id: '4', name: 'Completed', tooltipText: 'Completed' },
    { id: '5', name: 'Abandoned', tooltipText: 'Abandoned' },
    { id: '6', name: 'Agents', tooltipText: 'Agents' },
    { id: '7', name: 'Average Wait', tooltipText: 'Average Wait' },
    { id: '8', name: 'Longest Wait', tooltipText: 'Longest Wait' },
    { id: '9', name: 'SLA', tooltipText: 'SLA' },
    { id: '10', name: 'Overtime', tooltipText: 'Overtime' },
  ],
  availableColumns: [
    { id: '1', name: 'Queues', isLocked: true, tooltipText: 'Queues' },
    { id: '2', name: 'Channel', tooltipText: 'Channel' },
    { id: '3', name: 'Waiting', tooltipText: 'Waiting' },
    { id: '4', name: 'Completed', tooltipText: 'Completed' },
    { id: '5', name: 'Abandoned', tooltipText: 'Abandoned' },
    { id: '6', name: 'Agents', tooltipText: 'Agents' },
    { id: '7', name: 'Average Wait', tooltipText: 'Average Wait' },
    { id: '8', name: 'Longest Wait', tooltipText: 'Longest Wait' },
    { id: '9', name: 'SLA', tooltipText: 'SLA' },
    { id: '10', name: 'Overtime', tooltipText: 'Overtime' },
    {
      id: '11',
      name: 'Average Staffing',
      tooltipText: 'Average Staffing',
    },
    {
      id: '12',
      name: 'Busy',
      tooltipText: 'Busy',
    },
    {
      id: '13',
      name: 'Failed',
      tooltipText: 'Failed',
    },
    {
      id: '15',
      name: 'Quickest wait',
      tooltipText: 'Quickest wait',
    },
  ],
};
ModalColumnManagementExample.argTypes = {
  currentColumns: {
    type: 'array',
  },
  availableColumns: {
    type: 'array',
  },
  defaultColumns: {
    type: 'array',
  },
};

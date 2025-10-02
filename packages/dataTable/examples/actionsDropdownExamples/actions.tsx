import { ActionProps } from '@8x8/oxygen-data-table';
import { PencilIcon, GearIcon, LeaveIcon } from '@8x8/oxygen-icon';
import { action } from 'storybook/actions';
import React from 'react';

export const actionProps: ActionProps[] = [
  {
    label: 'Edit',
    onClick: action('Action Edit'),
    icon: <PencilIcon />,
    key: 'edit',
    testId: 'edit-action',
  },
  {
    label: 'Delete',
    onClick: action('Action Delete'),
    icon: <LeaveIcon />,
    key: 'delete',
    type: 'danger',
    testId: 'delete-action',
  },
  {
    label: 'View',
    onClick: action('Action View'),
    icon: <GearIcon />,
    disabled: {
      isDisabled: true,
      reason: 'Disabled for certain criteria',
    },
    key: 'view',
    testId: 'view-action',
  },
];

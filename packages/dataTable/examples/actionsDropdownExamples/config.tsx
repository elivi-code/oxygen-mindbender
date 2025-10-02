import { DotsVerticalIcon } from '@8x8/oxygen-icon';
import React from 'react';
import { ActionsProps } from '@8x8/oxygen-data-table';

import { actionProps } from './actions';

export const argTypesConfig = {
  actions: {
    description: 'Array of actions to display in the dropdown',
    control: {
      type: 'object',
    },
  },
};

export const argsConfig: ActionsProps = {
  actions: actionProps,
  children: <DotsVerticalIcon />,
};

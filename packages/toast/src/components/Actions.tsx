import React from 'react';
import TextLink from '@8x8/oxygen-text-link';
import { getTestAttributes } from '@8x8/oxygen-config';

import { ToastProps } from '../types';
import { ActionsContainer } from '../styled/ActionsContainer';

const Actions: React.FunctionComponent<
  Pick<ToastProps, 'actions' | 'theme'>
> = ({ actions, theme }) => (
  <ActionsContainer>
    {actions.map(({ id, title, callback }) => (
      <TextLink
        as="button"
        onClick={callback}
        key={id}
        theme={theme.textLinkAsAction}
        color={theme.isClassic ? 'inherit' : 'primary'}
        underline={theme.isClassic ? 'always' : 'never'}
        {...getTestAttributes('TOAST_ACTION')}
      >
        {title}
      </TextLink>
    ))}
  </ActionsContainer>
);

export default Actions;

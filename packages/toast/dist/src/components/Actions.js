import React from 'react';
import TextLink from '@8x8/oxygen-text-link';
import { getTestAttributes } from '@8x8/oxygen-config';
import { ActionsContainer } from '../styled/ActionsContainer';
const Actions = ({ actions, theme }) => (React.createElement(ActionsContainer, null, actions.map(({ id, title, callback }) => (React.createElement(TextLink, { as: "button", onClick: callback, key: id, theme: theme.textLinkAsAction, color: theme.isClassic ? 'inherit' : 'primary', underline: theme.isClassic ? 'always' : 'never', ...getTestAttributes('TOAST_ACTION') }, title)))));
export default Actions;

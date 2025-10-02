import React from 'react';
import Breadcrumbs, { Breadcrumb } from '@8x8/oxygen-breadcrumbs';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundBreadcrumbs = args => (
  <Breadcrumbs {...args}>
    <Breadcrumb title="Page 1">Page 1</Breadcrumb>
    <Breadcrumb>Page 2</Breadcrumb>
    <Breadcrumb>Page 3</Breadcrumb>
    <Breadcrumb>Page 4</Breadcrumb>
    <Breadcrumb>Page 5</Breadcrumb>
    <Breadcrumb>Page 6</Breadcrumb>
    <Breadcrumb>Page 7</Breadcrumb>
    <Breadcrumb>Page 8</Breadcrumb>
    <Breadcrumb>Page 9</Breadcrumb>
    <Breadcrumb isActive={args.isActive}>Page 10</Breadcrumb>
  </Breadcrumbs>
);
PlaygroundBreadcrumbs.args = {
  maxItems: 4,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
  separator: '/',
  ariaLabel: 'Breadcrumbs',
  collapsedTitle: 'Show all links',
  isActive: true,
};
PlaygroundBreadcrumbs.storyName = '10. Playground';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [PlaygroundDecorator],
};

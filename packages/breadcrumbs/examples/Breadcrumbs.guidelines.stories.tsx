import React from 'react';

import Breadcrumbs, { Breadcrumb } from '@8x8/oxygen-breadcrumbs';
import {
  Section,
  Label,
  Headline,
  ComponentItem,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Breadcrumbs',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Breadcrumbs - Guidelines</Headline>
      <ComponentSection>
        <ComponentItem>
          <Label>Default</Label>
          <Breadcrumbs maxItems={5}>
            <Breadcrumb title="Home">Home</Breadcrumb>
            <Breadcrumb title="Page 1">Page 1</Breadcrumb>
            <Breadcrumb title="Page 2">Page 2</Breadcrumb>
            <Breadcrumb title="Page 3">Page 3</Breadcrumb>
            <Breadcrumb title="Page 4" isActive>
              Page 4
            </Breadcrumb>
          </Breadcrumbs>
        </ComponentItem>
        <ComponentItem>
          <Label>Collapsed</Label>
          <Breadcrumbs>
            <Breadcrumb title="Home">Home</Breadcrumb>
            <Breadcrumb title="Page 1">Page 1</Breadcrumb>
            <Breadcrumb title="Page 2">Page 2</Breadcrumb>
            <Breadcrumb title="Page 3">Page 3</Breadcrumb>
            <Breadcrumb title="Page 4" isActive>
              Page 4
            </Breadcrumb>
          </Breadcrumbs>
        </ComponentItem>
        <ComponentItem>
          <Label>With custom text separator</Label>
          <Breadcrumbs separator="»">
            <Breadcrumb title="Home">Home</Breadcrumb>
            <Breadcrumb title="Page 1">Page 1</Breadcrumb>
            <Breadcrumb title="Page 2">Page 2</Breadcrumb>
            <Breadcrumb title="Page 3">Page 3</Breadcrumb>
            <Breadcrumb title="Page 4" isActive>
              Page 4
            </Breadcrumb>
          </Breadcrumbs>
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Breadcrumbs - Custom collapse settings</Headline>
      <ComponentSection>
        <ComponentItem>
          <Label>With three items before collapse</Label>
          <Breadcrumbs itemsBeforeCollapse={3}>
            <Breadcrumb title="Home">Home</Breadcrumb>
            <Breadcrumb title="Page 1">Page 1</Breadcrumb>
            <Breadcrumb title="Page 2">Page 2</Breadcrumb>
            <Breadcrumb title="Page 3">Page 3</Breadcrumb>
            <Breadcrumb title="Page 4" isActive>
              Page 4
            </Breadcrumb>
          </Breadcrumbs>
        </ComponentItem>
        <ComponentItem>
          <Label>With three items after collapse</Label>
          <Breadcrumbs itemsAfterCollapse={3}>
            <Breadcrumb title="Home page">Home</Breadcrumb>
            <Breadcrumb title="Page 1">Page 1</Breadcrumb>
            <Breadcrumb title="Page 2">Page 2</Breadcrumb>
            <Breadcrumb title="Page 3">Page 3</Breadcrumb>
            <Breadcrumb title="Page 4" isActive>
              Page 4
            </Breadcrumb>
          </Breadcrumbs>
        </ComponentItem>
        <ComponentItem>
          <Label>With two items after and before collapse</Label>
          <Breadcrumbs itemsBeforeCollapse={2} itemsAfterCollapse={2}>
            <Breadcrumb title="Home">Home</Breadcrumb>
            <Breadcrumb title="Page 1">Page 1</Breadcrumb>
            <Breadcrumb title="Page 2">Page 2</Breadcrumb>
            <Breadcrumb title="Page 3">Page 3</Breadcrumb>
            <Breadcrumb title="Page 4" isActive>
              Page 4
            </Breadcrumb>
          </Breadcrumbs>
        </ComponentItem>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';

import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Section, Headline, ComponentSection } from './styled';

const decorator: DecoratorFn = (Story, context) => (
  <Section>
    <Headline>
      {context.component.displayName || context.component.name}
    </Headline>
    <ComponentSection>
      <Story />
    </ComponentSection>
  </Section>
);

export default decorator;

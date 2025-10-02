import React from 'react';
import styled from 'styled-components';
import { action as storybookAction } from 'storybook/actions';

import Tag, { variants } from '@8x8/oxygen-tag';

import {
  Section,
  Label,
  Headline,
  ComponentSection,
  avatarUrl,
} from '@8x8/oxygen-storybook-utils';

const action = storybookAction('action');

const Quarter = styled.div`
  width: 20%;
`;

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Different content props</Headline>
      <ComponentSection>
        <div>
          <Label>Default</Label>
          <Tag>Tag</Tag>
        </div>
        <div>
          <Label>With action</Label>
          <Tag action={action}>Tag</Tag>
        </div>
        <div>
          <Label>With avatar</Label>
          <Tag avatar={{ name: 'Josephine Lu' }}>Josephine Lu</Tag>
        </div>
        <div>
          <Label>With avatar & action</Label>
          <Tag avatar={{ src: avatarUrl }} action={action}>
            Tag
          </Tag>
        </div>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Variants</Headline>
      <ComponentSection>
        <Quarter>
          <Label>Light</Label>
          <Tag>Josephine Lu</Tag>
        </Quarter>
        <Quarter>
          <Label>Dark</Label>
          <Tag variant={variants.dark}>Josephine Lu</Tag>
        </Quarter>
        <Quarter>
          <Label>Blue</Label>
          <Tag variant={variants.blue}>Josephine Lu</Tag>
        </Quarter>
        <Quarter>
          <Label>Yellow</Label>
          <Tag variant={variants.yellow}>Josephine Lu</Tag>
        </Quarter>
        <Quarter>
          <Label>Red</Label>
          <Tag variant={variants.red}>Josephine Lu</Tag>
        </Quarter>
      </ComponentSection>

      <ComponentSection>
        <Quarter>
          <Label>Light</Label>
          <Tag action={action}>Josephine Lu</Tag>
        </Quarter>
        <Quarter>
          <Label>Dark</Label>
          <Tag variant={variants.dark} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Blue</Label>
          <Tag variant={variants.blue} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Yellow</Label>
          <Tag variant={variants.yellow} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Red</Label>
          <Tag variant={variants.red} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
      </ComponentSection>

      <ComponentSection>
        <Quarter>
          <Label>Light</Label>
          <Tag avatar={{ name: 'Josephine Lu' }}>Josephine Lu</Tag>
        </Quarter>
        <Quarter>
          <Label>Dark</Label>
          <Tag variant={variants.dark} avatar={{ name: 'Josephine Lu' }}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Blue</Label>
          <Tag variant={variants.blue} avatar={{ name: 'Josephine Lu' }}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Yellow</Label>
          <Tag variant={variants.yellow} avatar={{ name: 'Josephine Lu' }}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Red</Label>
          <Tag variant={variants.red} avatar={{ name: 'Josephine Lu' }}>
            Josephine Lu
          </Tag>
        </Quarter>
      </ComponentSection>

      <ComponentSection>
        <Quarter>
          <Label>Light</Label>
          <Tag avatar={{ name: 'Josephine Lu' }} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Dark</Label>
          <Tag variant="dark" avatar={{ name: 'Josephine Lu' }} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Blue</Label>
          <Tag variant="blue" avatar={{ name: 'Josephine Lu' }} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Yellow</Label>
          <Tag
            variant="yellow"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Red</Label>
          <Tag variant="red" avatar={{ name: 'Josephine Lu' }} action={action}>
            Josephine Lu
          </Tag>
        </Quarter>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>hasError</Headline>
      <ComponentSection>
        <Quarter>
          <Label>Light</Label>
          <Tag avatar={{ name: 'Josephine Lu' }} action={action} hasError>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Dark</Label>
          <Tag
            variant="dark"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            hasError
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Blue</Label>
          <Tag
            variant="blue"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            hasError
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Yellow</Label>
          <Tag
            variant="yellow"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            hasError
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Red</Label>
          <Tag
            variant="red"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            hasError
          >
            Josephine Lu
          </Tag>
        </Quarter>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>isFocused</Headline>
      <ComponentSection>
        <Quarter>
          <Label>Light</Label>
          <Tag avatar={{ name: 'Josephine Lu' }} action={action} isFocused>
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Dark</Label>
          <Tag
            variant="dark"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            isFocused
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Blue</Label>
          <Tag
            variant="blue"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            isFocused
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Yellow</Label>
          <Tag
            variant="yellow"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            isFocused
          >
            Josephine Lu
          </Tag>
        </Quarter>
        <Quarter>
          <Label>Red</Label>
          <Tag
            variant="red"
            avatar={{ name: 'Josephine Lu' }}
            action={action}
            isFocused
          >
            Josephine Lu
          </Tag>
        </Quarter>
      </ComponentSection>
    </Section>
  </>
);

export default {
  title: 'Components/Tag',
  component: Guidelines,
};

Guidelines.storyName = '01. Guidelines';

Guidelines.parameters = {
  chromatic: { disable: false },
};

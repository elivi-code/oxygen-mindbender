import React from 'react';
import styled from 'styled-components';

import Badge from '@8x8/oxygen-badge';
import {
  Section,
  Label,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

const BadgeExampleWrapper = styled.div`
  position: relative;
  width: 2.125rem;
  height: 2.125rem;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #a4b8d1;
`;

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Badge - Guidelines</Headline>
      <ComponentSection>
        <div>
          <Label>Standard Badge</Label>
          <Badge />
        </div>
        <div>
          <Label>
            <code>type=&quot;secondary&quot;</code>
            <br />
            <em>
              <strong>Deprecated</strong>, don&apos;t use <code>type</code>{' '}
              anymore
            </em>
          </Label>
          <Badge type="secondary" />
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Badge - Size</Headline>
      <ComponentSection>
        <div>
          <Label>
            <code>medium</code>(default) size
          </Label>
          <Badge />
        </div>
        <div>
          <Label>
            <code>small</code> size
          </Label>
          <Badge size="small" />
        </div>

        <div>
          <Label>
            <code>big</code> size
            <br />
            <em>
              <strong>Deprecated</strong>, don&apos;t use{' '}
              <code>size=&quot;big&quot;</code>
              anymore
            </em>
          </Label>
          <Badge size="big" />
          &nbsp;
          <Badge size="big" type="secondary" />
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Badge - with value</Headline>
      <ComponentSection>
        <div>
          <Label>
            <code>medium</code> (default) size
          </Label>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
            <>
              <Badge>{number}</Badge>&nbsp;
            </>
          ))}
          <Badge type="secondary">567</Badge>
        </div>
        <div>
          <Label>
            <code>small</code> size
          </Label>
          <Badge size="small" />
        </div>
        <div>
          <Label>
            <code>big</code> size
            <br />
            <em>
              <strong>Deprecated</strong>, don&apos;t use{' '}
              <code>size=&quot;big&quot;</code>
              anymore
            </em>
          </Label>
          <Badge size="big">2</Badge>
          &nbsp;
          <Badge size="big" type="secondary">
            34
          </Badge>
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Badge - Position</Headline>
      <ComponentSection>
        <div>
          <Label>Top-Left</Label>
          <BadgeExampleWrapper>
            <Badge position="top-start">2</Badge>
          </BadgeExampleWrapper>
        </div>
        <div>
          <Label>Top-Right</Label>
          <BadgeExampleWrapper>
            <Badge position="top-end">2</Badge>
          </BadgeExampleWrapper>
        </div>
        <div>
          <Label>Bottom-Right</Label>
          <BadgeExampleWrapper>
            <Badge position="bottom-end">2</Badge>
          </BadgeExampleWrapper>
        </div>
        <div>
          <Label>Bottom-Left</Label>
          <BadgeExampleWrapper>
            <Badge position="bottom-start">2</Badge>
          </BadgeExampleWrapper>
        </div>
      </ComponentSection>
      <ComponentSection>
        <div>
          <Label>Top-Left with inner option</Label>
          <BadgeExampleWrapper>
            <Badge position="top-start" isInner>
              2
            </Badge>
          </BadgeExampleWrapper>
        </div>
        <div>
          <Label>Top-Right with inner option</Label>
          <BadgeExampleWrapper>
            <Badge position="top-end" isInner>
              2
            </Badge>
          </BadgeExampleWrapper>
        </div>
        <div>
          <Label>Bottom-Right with inner option</Label>
          <BadgeExampleWrapper>
            <Badge position="bottom-end" isInner>
              2
            </Badge>
          </BadgeExampleWrapper>
        </div>
        <div>
          <Label>Bottom-Left with inner option</Label>
          <BadgeExampleWrapper>
            <Badge position="bottom-start" isInner>
              2
            </Badge>
          </BadgeExampleWrapper>
        </div>
      </ComponentSection>
    </Section>
  </>
);

export default {
  title: 'Components/Badge',
  component: Guidelines,
};

Guidelines.storyName = '01. Guidelines';

Guidelines.parameters = {
  chromatic: { disable: false },
};

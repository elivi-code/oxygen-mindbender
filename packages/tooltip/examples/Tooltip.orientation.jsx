import React from 'react';
import Tooltip, { orientation } from '@8x8/oxygen-tooltip';
import Button from '@8x8/oxygen-button';

import {
  Doc,
  ComponentSection,
  ComponentItem,
  Label,
} from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const Orientation = args => (
  <>
    <Doc>
      <h1>
        <code>Tooltip</code> orientation
      </h1>
      <p>Here&apos;s a showcase of all supported orienations</p>
      <p>
        The <code>Tooltip</code> component will adjust the position if the
        floating UI would be rendered outside of the visible viewing area
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip
  title="Lorem ipsum dolor sit amet"
  orientation="bottom"
  includeWrapper={false}
  >
  <Button>{orientationItem}</Button>
</Tooltip>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      {Object.values(orientation).map(orientationItem => (
        <ComponentItem width="25%" key={orientationItem}>
          <Label>{orientationItem}</Label>
          <Tooltip
            {...args}
            includeWrapper={false}
            orientation={orientationItem}
          >
            <Button>{orientationItem}</Button>
          </Tooltip>
        </ComponentItem>
      ))}
    </ComponentSection>
  </>
);
Orientation.storyName = 'Prop orientation';
Orientation.args = argsConfig;
Orientation.argTypes = argTypesConfig;

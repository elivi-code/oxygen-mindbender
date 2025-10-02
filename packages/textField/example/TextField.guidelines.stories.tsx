import React from 'react';

import TextField from '@8x8/oxygen-text-field';
import TextLink from '@8x8/oxygen-text-link';

import {
  Label as ComponentLabel,
  Doc,
  ComponentItem,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/TextField',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => {
  return (
    <>
      <Doc>
        <h1>TextField - Guidelines</h1>
        <p>
          It&apos;s important to understand that the TextField is a simple
          abstraction on top of the following components: Input, Label
        </p>
      </Doc>
      <ComponentSection>
        <ComponentItem width="50%">
          <ComponentLabel>Default</ComponentLabel>
          <TextField label="Label text" fullWidth testId="TextFieldTestId" />
        </ComponentItem>
        <ComponentItem width="50%">
          <ComponentLabel>With description</ComponentLabel>
          <TextField
            label="Label text"
            id="test-id"
            fullWidth
            inputProps={{
              inputProps: {
                'aria-describedby': 'aria-test-2',
              },
            }}
            description={
              <div id="aria-test-2">
                Description text with&nbsp;
                <TextLink size="inherit" href="http://www.8x8.com">
                  link
                </TextLink>
                &nbsp;to external page.
              </div>
            }
          />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem width="50%">
          <ComponentLabel>Required field</ComponentLabel>
          <TextField label="Label text" fullWidth isRequired />
        </ComponentItem>
        <ComponentItem width="50%">
          <ComponentLabel>Read only field</ComponentLabel>
          <TextField
            label="Label text"
            value="Read only value"
            fullWidth
            isReadOnly
          />
        </ComponentItem>
      </ComponentSection>
    </>
  );
};

Guidelines.storyName = '01. Guidelines';

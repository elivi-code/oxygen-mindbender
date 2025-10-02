import React, { useState } from 'react';
import styled from 'styled-components';

import { Popover } from '@8x8/oxygen-popover';
import Button from '@8x8/oxygen-button';
import Checkbox from '@8x8/oxygen-checkbox';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { popoverArgsConfig, popoverArgTypesConfig } from './config';

const Form = styled.form`
  padding: 0 8px;
`;

export const PopoverStory = args => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <Doc>
        <h1>
          <code>Popover</code>
        </h1>
        <p>
          The <code>Popover</code> component makes little assumptions on the
          content provided. You need to define your own <code>isOpen</code>{' '}
          state and provide that (and the update function) to the component.
        </p>
        <p>
          This can be used to open forms or other types of floating content when
          you need to be in control over the UX and when the floating UI state
          changes. This means that you control _when_ the floating ui closes
          programatically.
        </p>
        <p>
          The <code>Popover</code> will still close automatically (by calling
          into the <code>setIsOpen</code> function on:
        </p>
        <ul>
          <li>
            clicking the <code>children</code> element again
          </li>
          <li>clicking outside</li>
          <li>pressing Escape</li>
        </ul>
        <p>
          The example here is simialr to the one in the <code>FilterList</code>{' '}
          component
        </p>
        <pre>
          {`
import { Popover } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

const [isOpen, setIsOpen] = useState(false);

<Popover
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  floatingContent={
    <Form>
      <Checkbox label="Test" />
      <Button
        variant="text"
        size="small"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Submit
      </Button>
    </Form>
  }
>
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Popover
          {...args}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          floatingContent={
            <Form>
              <Checkbox label="Test" />
              <Button
                variant="text"
                size="small"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Submit
              </Button>
            </Form>
          }
        />
        <Popover
          {...args}
          isOpen={isOpen2}
          setIsOpen={setIsOpen2}
          floatingContent={<>lorem ipsum</>}
        />
      </ComponentSection>
    </>
  );
};
PopoverStory.storyName = 'Popover';
PopoverStory.args = popoverArgsConfig;
PopoverStory.argTypes = popoverArgTypesConfig;
PopoverStory.parameters = { controls: { sort: 'requiredFirst' } };

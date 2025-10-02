import React from 'react';

import Button from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from '../config';

export const ButtonAccesibility = args => (
  <>
    <Doc>
      <h1>
        <code>Button</code> accesibility
      </h1>
      <p>
        The examples below show that in a disabled button state, button is still
        focused, but the form submission is it not fired
      </p>
      <pre>
        {`
 <form onSubmit={() => alert('submit')}>
  <label htmlFor="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John" />
  <label htmlFor="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe" />
  <Button type="submit" isDisabled>
    Submit
  </Button>
</form>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        /* eslint-disable-next-line no-alert */
        onSubmit={() => alert('submit')}
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="fname">First name:</label>
        <input defaultValue="John" type="text" id="fname" name="fname" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" defaultValue="Doe" />
        <Button isDisabled {...args} type="submit">
          Submit
        </Button>
      </form>
    </ComponentSection>
  </>
);

ButtonAccesibility.storyName = 'Button accesibility';
ButtonAccesibility.args = argsConfig;
ButtonAccesibility.argTypes = argTypesConfig;

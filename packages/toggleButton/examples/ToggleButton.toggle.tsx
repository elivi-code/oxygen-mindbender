import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { action } from 'storybook/actions';

import ToggleButton from '@8x8/oxygen-toggle-button';
import Button from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

export const FormWithToggleButton = args => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = value => {
    action('onChange')(value);
    setIsChecked(!isChecked);
  };

  return (
    <form
      onSubmit={event => {
        action('formSubmit')(event);
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <ToggleButton
        {...args}
        isChecked={isChecked}
        onChange={handleOnChange}
        label="Enable/Disable me and press Enter while I am focused"
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const ToggleButtonToggle: StoryFn = args => (
  <>
    <Doc>
      <h1>
        <code>ToggleButton</code> toggle events test page
      </h1>
      <p>
        The <code>ToggleButton</code> component can be toggled via{' '}
        <code>Space</code> (it will not toggle via <code>Enter</code> as with{' '}
        <code>Enter</code> the form wraping the checkbox will trigger a
        submisstion). If the <code>ToggleButton</code> is disabled (via{' '}
        <code>isDisabled=&quot;true&quot;</code>)it will not trigger a form
        submission.
      </p>
      <p>
        Here&apos;s an example form with a <code>ToggleButton</code> (it also
        requires a submit button, otherwise the onSubmit event is not
        triggered). Pressing <code>Enter</code> will log a form submission event
        only when the <code>ToggleButton</code> is not disabled.
      </p>
      <pre>
        {`
import ToggleButton from '@8x8/oxygen-checkbox';

const FormWithToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = value => {
    action('onChange')(value);
    setIsChecked(!isChecked);
  };

  return (
    <form
      onSubmit={event => {
        action('formSubmit')(event);
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <ToggleButton
        label="Enable/Disable me and press Enter while I am focused"
        isChecked={isChecked}
        onChange={handleOnChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <FormWithToggleButton {...args} />
    </ComponentSection>
  </>
);
ToggleButtonToggle.storyName = 'ToggleButton toggle & form submition';
ToggleButtonToggle.args = {
  isDisabled: false,
  label: 'Enable/Disable me and press Enter while I am focused',
};
ToggleButtonToggle.argTypes = {
  label: { table: { disable: true } },
};

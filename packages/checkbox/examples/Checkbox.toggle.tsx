import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { action } from 'storybook/actions';

import Checkbox, { CheckboxProps } from '@8x8/oxygen-checkbox';
import Button from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

type Args = Pick<CheckboxProps<string>, 'label' | 'isDisabled'>;

const FormWithCheckbox = (args: Args) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (value?: string) => {
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
      <Checkbox
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

export const CheckboxToggle: StoryFn<Args> = args => (
  <>
    <Doc>
      <h1>
        <code>Checkbox</code> toggle events test page
      </h1>
      <p>
        The <code>Checkbox</code> component can be toggled via{' '}
        <code>Space</code> (it will not toggle via <code>Enter</code> as with{' '}
        <code>Enter</code> the form wraping the checkbox will trigger a
        submisstion). If the <code>Checkbox</code> is disabled (via{' '}
        <code>isDisabled=&quot;true&quot;</code>)it will not trigger a form
        submission.
      </p>
      <p>
        Here&apos;s an example form with a <code>Checkbox</code> (it also
        requires a submit button, otherwise the onSubmit event is not
        triggered). Pressing <code>Enter</code> will log a form submission event
        only when the
        <code>Checkbox</code> is not disabled.
      </p>
      <pre>
        {`
import Checkbox from '@8x8/oxygen-checkbox';

const FormWithCheckbox = () => {
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
      <Checkbox
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
      <FormWithCheckbox {...args} />
    </ComponentSection>
  </>
);

CheckboxToggle.storyName = 'Checkbox toggle & form submition';
CheckboxToggle.args = {
  isDisabled: false,
  label: 'Enable/Disable me and press Enter while I am focused',
};
CheckboxToggle.argTypes = {
  label: { table: { disable: true } },
};

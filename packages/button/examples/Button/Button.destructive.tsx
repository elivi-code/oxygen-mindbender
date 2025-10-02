import React from 'react';
import Button from '@8x8/oxygen-button';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { PlusIcon, LoginIcon } from '@8x8/oxygen-icon';
import { argsConfig, argTypesConfig } from '../config';

export const ButtonDestructive = args => (
  <>
    <Doc>
      <h1>
        <code>Button</code> with <code>isDestructive</code> property
      </h1>
      <p>
        The <code>Button</code> component can have a destructive style when the{' '}
        <code>isDestructive</code> property is set to true. This property can be
        combined with different variants like <code>primary</code>,{' '}
        <code>secondary</code>, and <code>text</code>.
      </p>
      <p>
        Use the <code>isDestructive</code> property for actions that require
        extra attention from the user, such as deleting or removing items.
      </p>
      <h2>
        variant <code>primary</code> with <code>isDestructive</code>
      </h2>
      <p>
        This example demonstrates the primary variant with the destructive style
        applied.
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="primary" isDestructive>Click me</Button>
<Button variant="primary" isDestructive isActive>Click me</Button>
<Button variant="primary" isDestructive isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="primary" isDestructive />
      <Button {...args} variant="primary" isDestructive isActive />
      <Button {...args} variant="primary" isDestructive isDisabled />
    </ComponentSection>

    <Doc>
      <h2>
        variant <code>secondary</code> with <code>isDestructive</code>
      </h2>
      <p>
        This example demonstrates the secondary variant with the destructive
        style applied.
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="secondary" isDestructive>Click me</Button>
<Button variant="secondary" isDestructive isActive>Click me</Button>
<Button variant="secondary" isDestructive isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="secondary" isDestructive />
      <Button {...args} variant="secondary" isDestructive isActive />
      <Button {...args} variant="secondary" isDestructive isDisabled />
    </ComponentSection>

    <Doc>
      <h2>
        variant <code>text</code> with <code>isDestructive</code>
      </h2>
      <p>
        This example demonstrates the text variant with the destructive style
        applied.
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="text" isDestructive>Click me</Button>
<Button variant="text" isDestructive isActive>Click me</Button>
<Button variant="text" isDestructive isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="text" isDestructive />
      <Button {...args} variant="text" isDestructive isActive />
      <Button {...args} variant="text" isDestructive isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        Button with icon and <code>isDestructive</code>
      </h2>
      <p>
        This example demonstrates the button with icon and destructive style
        applied.
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { PlusIcon, LoginIcon } from '@8x8/oxygen-icon';

<Button isDestructive iconLeft={<PlusIcon />} />
<Button isDestructive isActive iconLeft={<PlusIcon />} />
<Button isDestructive isDisabled iconLeft={<PlusIcon />} />
<Button isDestructive iconRight={<LoginIcon />} />
<Button isDestructive isActive iconRight={<LoginIcon />} />
<Button isDestructive isDisabled iconRight={<LoginIcon />} />

<Button
  variant="text"
  isDestructive
  isActive
  iconLeft={<PlusIcon />}
/>
<Button
  variant="text"
  isDestructive
  isDisabled
  iconLeft={<PlusIcon />}
/>
<Button
  variant="text"
  isDestructive
  iconRight={<LoginIcon />}
/>
<Button
  variant="text"
  isDestructive
  isActive
  iconRight={<LoginIcon />}
/>
<Button
  variant="text"
  isDestructive
  isDisabled
  iconRight={<LoginIcon />}
/>
`}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} isDestructive iconLeft={<PlusIcon />} />
      <Button {...args} isDestructive isActive iconLeft={<PlusIcon />} />
      <Button {...args} isDestructive isDisabled iconLeft={<PlusIcon />} />
      <Button {...args} isDestructive iconRight={<LoginIcon />} />
      <Button {...args} isDestructive isActive iconRight={<LoginIcon />} />
      <Button {...args} isDestructive isDisabled iconRight={<LoginIcon />} />
    </ComponentSection>
    <ComponentSection>
      <Button {...args} variant="text" isDestructive iconLeft={<PlusIcon />} />
      <Button
        {...args}
        variant="text"
        isDestructive
        isActive
        iconLeft={<PlusIcon />}
      />
      <Button
        {...args}
        variant="text"
        isDestructive
        isDisabled
        iconLeft={<PlusIcon />}
      />
      <Button
        {...args}
        variant="text"
        isDestructive
        iconRight={<LoginIcon />}
      />
      <Button
        {...args}
        variant="text"
        isDestructive
        isActive
        iconRight={<LoginIcon />}
      />
      <Button
        {...args}
        variant="text"
        isDestructive
        isDisabled
        iconRight={<LoginIcon />}
      />
    </ComponentSection>
  </>
);

ButtonDestructive.storyName = 'Button isDestructive';
ButtonDestructive.args = argsConfig;
ButtonDestructive.argTypes = argTypesConfig;

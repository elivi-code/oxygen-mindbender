import React from 'react';

import Label from '@8x8/oxygen-label';
import Textarea from '@8x8/oxygen-textarea';

import { Doc, Headline, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export const TextareaAccessibility = args => {
  const defaultId = 'textarea-accessible-id-1';

  return (
    <Doc>
      <Headline>
        <code>Textarea</code> accessibility
      </Headline>
      <p>
        Example using Label + Textarea comopnents together with the use of
        `htmlFor` and `id` to associate a specific textarea with a label
      </p>
      <pre>
        {`import Textarea from '@8x8/oxygen-textarea';
import Label from '@8x8/oxygen-label';

<Label htmlFor="textarea-accessible-1" value="Describe your work day" />
<Textarea id="textarea-accessible-1" />
        `}
      </pre>
      <ComponentSection block>
        <Label htmlFor={args?.id || defaultId} value="Describe your work day" />
        <Textarea {...args} id={args?.id || defaultId} />
      </ComponentSection>
    </Doc>
  );
};

TextareaAccessibility.storyName = 'Accessibility';
TextareaAccessibility.args = argsConfig;
TextareaAccessibility.argTypes = argTypesConfig;

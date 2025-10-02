import React from 'react';
import { StoryFn } from '@storybook/react';

import { useClickOutside } from '@8x8/oxygen-utils';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import { action } from 'storybook/actions';

const style = {
  width: '100px',
  padding: '10px',
  border: '1px solid black',
};

const Component = () => {
  const divRef = useClickOutside<HTMLDivElement>(
    action('clicked outside the div'),
  ); // false

  const div1props = {
    ref: divRef,
    style,
  };

  return <div {...div1props}>Click outside</div>;
};

export const utilsUseClickOutside: StoryFn = () => {
  return (
    <>
      <Doc>
        <h1>
          <code>useClickOutside</code>
        </h1>
        <p>Detects whether the user clicks outside the container element.</p>
        <p>Here&apos;s an example on how to use it:</p>
        <pre>{`
import { useClickOutside } from '@8x8/oxygen-utils';

const style = {
  width: '100px',
  padding: '10px',
  border: '1px solid black'
};

const Component = () => {
  const divRef = useClickOutside<HTMLDivElement>(action('clicked outside the div')); 

  const div1props = {
    ref: divRef,
    style
  };

  return (
    <>
      <div {...div1props}>Click outside</div>
    </>
  );
};
`}</pre>
      </Doc>
      <ComponentSection>
        <Component />
      </ComponentSection>
    </>
  );
};
utilsUseClickOutside.storyName = 'useClickOutside';

export default {
  title: 'Components/Utils/Examples',
};

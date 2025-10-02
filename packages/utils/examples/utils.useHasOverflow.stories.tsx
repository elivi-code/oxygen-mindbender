import React, { useRef } from 'react';
import { StoryFn } from '@storybook/react';

import { useHasOverflow } from '@8x8/oxygen-utils';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

const style = {
  width: '100px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const Component = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const hasOverflow1 = useHasOverflow(ref1); // false
  const hasOverflow2 = useHasOverflow(ref2); // true

  const div1props = {
    ref: ref1,
    style,
    ...(hasOverflow1 && { title: 'I have ellipsis' }),
  };
  const div2props = {
    ref: ref2,
    style,
    ...(hasOverflow2 && { title: 'I have ellipsis' }),
  };

  return (
    <>
      <div {...div1props}>Short text</div>
      <div {...div2props}>I am some long text that may be truncated</div>
    </>
  );
};

export const utilsUseHasOverflow: StoryFn = () => {
  return (
    <>
      <Doc>
        <h1>
          <code>useHasOverflow</code>
        </h1>
        <p>
          Detects whether the given element has overflowed its content. Useful
          for detentcting whether a container has truncated its text with an
          ellipsis.
        </p>
        <p>
          Here&apos;s an example where we set a title conditionally based on the
          text overflowing
        </p>
        <pre>{`
import { useHasOverflow } from '@8x8/oxygen-utils';

const style = {
  width: '100px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const Component = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const hasOverflow1 = useHasOverflow(ref1); // false
  const hasOverflow2 = useHasOverflow(ref2); // true

  const div1props = {
    ref: ref1,
    style,
    ...(hasOverflow1 && { title: 'I have ellipsis' }),
  };
  const div2props = {
    ref: ref2,
    style,
    ...(hasOverflow2 && { title: 'I have ellipsis' }),
  };

  return (
    <>
      <div {...div1props}>Short text</div>
      <div {...div2props}>I am some long text that may be truncated</div>
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
utilsUseHasOverflow.storyName = 'useHasOverflow';

export default {
  title: 'Components/Utils/Examples',
};

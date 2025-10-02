import React, { useEffect, useState } from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

function TooltipsRender({ tooltipsCount, rerenderTimeout, ...args }) {
  return Array.from({ length: tooltipsCount }, (_, i) => (
    <Tooltip key={i} {...args} />
  ));
}

export const TooltipPerf = args => {
  const [containerKey, setContainerKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContainerKey(prev => prev + 1);
    }, args.rerenderTimeout);

    return () => clearInterval(interval);
  }, [args.rerenderTimeout]);

  return (
    <>
      <Doc>
        <h1>
          <code>Tooltip</code> Performance Test
        </h1>
        <p>
          This will render a large amount of tooltips that are forced to
          re-mount every 10s - used to test how Tooltips behave in situations
          where polling is done on data or in virtualized tables
        </p>
        <p>Rerender count {containerKey}</p>
      </Doc>

      <ComponentSection>
        <TooltipsRender key={containerKey} {...args} />
      </ComponentSection>
    </>
  );
};
TooltipPerf.storyName = 'Performance Test';
TooltipPerf.args = { ...argsConfig, tooltipsCount: 200, rerenderTimeout: 5000 };
TooltipPerf.argTypes = {
  ...argTypesConfig,
  tooltipsCount: {
    control: { type: 'number' },
    description:
      'Number of tooltips to render - used just for this storybook example',
  },
  rerenderTimeout: {
    control: { type: 'number' },
    description: 'Timeout for rerendering tooltips - in ms',
  },
};

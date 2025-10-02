import React, { useState } from 'react';
import CopyButton from '@8x8/oxygen-copy-button';
import { ComponentSection } from '@8x8/oxygen-storybook-utils';

export const CopyButtonCallback = () => {
  const [copyCount, setCopyCount] = useState(0);

  return (
    <ComponentSection>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <CopyButton
          textToCopy="Custom callback example"
          onCopy={() => setCopyCount(prev => prev + 1)}
        />
        <span>Copied {copyCount} times</span>
      </div>
    </ComponentSection>
  );
};
CopyButtonCallback.storyName = 'With Callback';

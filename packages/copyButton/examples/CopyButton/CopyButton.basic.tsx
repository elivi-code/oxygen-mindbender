import React from 'react';
import CopyButton from '@8x8/oxygen-copy-button';
import { ComponentSection } from '@8x8/oxygen-storybook-utils';

export const BasicCopyButton = () => (
  <ComponentSection>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CopyButton textToCopy="Hello, World!" />
      <span>Hover to see tooltip, click to copy</span>
    </div>
  </ComponentSection>
);
BasicCopyButton.storyName = 'Basic Usage';

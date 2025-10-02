import React from 'react';
import CopyButton from '@8x8/oxygen-copy-button';
import { ComponentSection } from '@8x8/oxygen-storybook-utils';

export const CopyButtonCustomText = () => (
  <ComponentSection>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CopyButton
        textToCopy="https://example.com"
        tooltipText="Copy URL"
        copiedText="URL Copied!"
      />
      <span>Custom tooltip text</span>
    </div>
  </ComponentSection>
);
CopyButtonCustomText.storyName = 'Custom Tooltip Text';

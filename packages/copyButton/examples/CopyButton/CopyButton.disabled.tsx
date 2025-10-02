import React from 'react';
import CopyButton from '@8x8/oxygen-copy-button';
import { ComponentSection } from '@8x8/oxygen-storybook-utils';

export const CopyButtonDisabled = () => (
  <ComponentSection>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CopyButton textToCopy="Cannot copy this" isDisabled />
      <span>Disabled state</span>
    </div>
  </ComponentSection>
);
CopyButtonDisabled.storyName = 'Disabled State';

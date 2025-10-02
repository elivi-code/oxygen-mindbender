import React from 'react';
import CopyButton from '@8x8/oxygen-copy-button';
import { ComponentSection } from '@8x8/oxygen-storybook-utils';

interface CopyButtonDisabledProps {
  isDisabled: boolean;
}

export const CopyButtonDisabled = ({ isDisabled }: CopyButtonDisabledProps) => (
  <ComponentSection>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <CopyButton textToCopy="Cannot copy this" isDisabled={isDisabled} />
      <span>Disabled state</span>
    </div>
  </ComponentSection>
);
CopyButtonDisabled.storyName = 'Disabled State';
CopyButtonDisabled.args = {
  isDisabled: true,
};
CopyButtonDisabled.argTypes = {
  isDisabled: {
    control: 'boolean',
    description: 'Disable the button',
  },
};

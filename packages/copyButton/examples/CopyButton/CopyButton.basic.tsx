import React from 'react';
import CopyButton from '@8x8/oxygen-copy-button';
import { ComponentSection } from '@8x8/oxygen-storybook-utils';

interface BasicCopyButtonProps {
  isDisabled?: boolean;
}

export const BasicCopyButton = ({
  isDisabled = false,
}: BasicCopyButtonProps) => {
  const textToCopy = 'Hello, World!';

  return (
    <ComponentSection>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          minHeight: '40px',
        }}
      >
        <code
          style={{
            padding: '8px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
          }}
        >
          {textToCopy}
        </code>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <CopyButton textToCopy={textToCopy} isDisabled={isDisabled} />
        </div>
      </div>
    </ComponentSection>
  );
};
BasicCopyButton.storyName = 'Basic Usage';
BasicCopyButton.args = {
  isDisabled: false,
};
BasicCopyButton.argTypes = {
  isDisabled: {
    control: 'boolean',
    description: 'Disable the button',
  },
};

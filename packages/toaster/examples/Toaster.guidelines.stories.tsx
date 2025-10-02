import React from 'react';

import { linkTo } from '@storybook/addon-links';

import Button, { buttonVariant } from '@8x8/oxygen-button';

export default {
  title: 'Components/Toaster',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Button
      variant={buttonVariant.secondary}
      onClick={linkTo('Components/Toast', '01. Guidelines')}
    >
      Go to Toast Guidelines to see Toast design in detail
    </Button>
    <Button
      variant={buttonVariant.secondary}
      onClick={linkTo('Components/Toaster', '10. Playground')}
    >
      Go to Playground, to see Toaster in action
    </Button>
  </>
);

Guidelines.storyName = '01. Guidelines';

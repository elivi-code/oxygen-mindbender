import React from 'react';
import Overlay from '@8x8/oxygen-overlay';

import { Label, PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundOverlay = args => (
  <>
    <Label>Toggle the overlay visibility using the Control item</Label>
    {args.showOverlay && <Overlay />}
  </>
);
PlaygroundOverlay.args = {
  showOverlay: true,
};
PlaygroundOverlay.storyName = '10. Playground';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  decorators: [PlaygroundDecorator],
};

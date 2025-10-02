import React, { useState } from 'react';
import { action } from 'storybook/actions';
import Button from '@8x8/oxygen-button';
import SlideOut from '@8x8/oxygen-slide-out';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundSlideOut = args => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentWidth, setCurrentWidth] = useState(undefined);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = newWidth => {
    action('onResize')(newWidth);
    setCurrentWidth(newWidth);
  };

  return (
    <>
      <Button onClick={toggleIsOpen}>Toggle SlideOut</Button>
      <SlideOut {...args} isVisible={isOpen} onResize={handleResize}>
        <div>Content</div>
        <div>
          {currentWidth
            ? `Current width ${currentWidth}`
            : '<------ Drag left margin to resize'}
        </div>
      </SlideOut>
    </>
  );
};
PlaygroundSlideOut.args = {
  isResizable: true,
  hasAnimation: true,
  defaultWidth: 400,
  minWidth: 200,
  maxWidth: 600,
  testId: 'SLIDE_OUT',
};
PlaygroundSlideOut.storyName = '10. Playground';

export default {
  title: 'Components/SlideOut',
  component: SlideOut,
  decorators: [PlaygroundDecorator],
};

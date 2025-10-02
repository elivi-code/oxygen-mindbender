import React from 'react';
import { action } from 'storybook/actions';
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@8x8/oxygen-context-menu';
import { DownloadIcon, TrashIcon, PlayCircleIcon } from '@8x8/oxygen-icon';

import {
  ComponentItem,
  ComponentSection,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

export const PlaygroundContextMenu = args => (
  <>
    <ContextMenuTrigger id="test-id-2">
      <ComponentSection>
        <ComponentItem>
          <h1>Right Click Here</h1>
        </ComponentItem>
      </ComponentSection>
    </ContextMenuTrigger>

    <ContextMenu
      {...args}
      id="test-id-2"
      customEventHandlers={[
        {
          target: document.body,
          eventName: 'copy',
          callback: () => {},
          capture: false,
        },
      ]}
      onShow={action('onShow ContextMenu')}
      onHide={action('onHide ContextMenu')}
      onInsideClick={action('onInsideClick ContextMenu')}
    >
      <ContextMenuItem>
        <PlayCircleIcon />
        <span>Play audio</span>
      </ContextMenuItem>

      <ContextMenuItem isDisabled>
        <DownloadIcon />
        <span>Download audio</span>
      </ContextMenuItem>

      <ContextMenuItem>
        <TrashIcon />
        <span>Delete</span>
      </ContextMenuItem>
    </ContextMenu>
  </>
);
PlaygroundContextMenu.args = {
  testId: 'CONTEXT_MENU',
};
PlaygroundContextMenu.storyName = '10. Playground ContextMenu';

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  decorators: [PlaygroundDecorator],
};

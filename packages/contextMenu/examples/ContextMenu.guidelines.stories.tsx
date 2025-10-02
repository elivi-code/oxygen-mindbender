import React from 'react';

import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
  show,
  hide,
} from '@8x8/oxygen-context-menu';
import { DownloadIcon, TrashIcon, PlayCircleIcon } from '@8x8/oxygen-icon';
import Button from '@8x8/oxygen-button';

import {
  ComponentSection,
  ComponentItem,
  Headline,
  Section,
  Label,
} from '@8x8/oxygen-storybook-utils';

let closeTimeout;

function clearCloseTimeout() {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = undefined;
  }
}

export default {
  title: 'Components/ContextMenu',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>ContextMenu - Guidelines</Headline>

      <ContextMenuTrigger id="test-id-1">
        <ComponentSection>
          <ComponentItem>
            <h1>Right Click Here</h1>
          </ComponentItem>
        </ComponentSection>
      </ContextMenuTrigger>

      <ContextMenu id="test-id-1" onHide={clearCloseTimeout}>
        <ContextMenuItem>
          <PlayCircleIcon />
          <span>Play audio</span>
        </ContextMenuItem>

        <ContextMenuItem isDisabled>
          <DownloadIcon />
          <span>Download audio (disabled)</span>
        </ContextMenuItem>

        <ContextMenuItem>
          <TrashIcon />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenu>
    </Section>

    <Section>
      <Headline>Control from outside the component</Headline>
      <ComponentSection>
        <ComponentItem>
          <Label>
            Showcasing the `show` and `hide` methods that allow the context menu
            to be controlled from the outside.
          </Label>

          <Button
            onClick={e => {
              show('test-id-open-on-click', { x: e.clientX, y: e.clientY });
              clearCloseTimeout();
              closeTimeout = setTimeout(
                () => hide('test-id-open-on-click'),
                3000,
              );
            }}
          >
            Click to open context menu that closes after 3 seconds.
          </Button>
        </ComponentItem>

        <ContextMenu id="test-id-open-on-click" onHide={clearCloseTimeout}>
          <ContextMenuItem>
            <PlayCircleIcon />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              gravida orci quis felis blandit
            </span>
          </ContextMenuItem>

          <ContextMenuItem>
            <TrashIcon />
            <span>Delete</span>
          </ContextMenuItem>
        </ContextMenu>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';

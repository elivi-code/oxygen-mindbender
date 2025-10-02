import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { action } from 'storybook/actions';
import {
  Toaster,
  notify,
  configure,
  SIZE,
  TYPE,
  closeAll,
} from '@8x8/oxygen-toaster';
import Button, { ButtonGroup, buttonVariant } from '@8x8/oxygen-button';

import {
  Section,
  ComponentSection,
  Label,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

const FloatingSection = styled(Section)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
`;

const ZLabel = styled(Label)`
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  top: ${({ top }) => top};
  border: 3px solid #eeefff;
  padding: 16px;
`;

ZLabel.propTypes = {
  position: PropTypes.string,
  zIndex: PropTypes.number,
  top: PropTypes.string,
};

ZLabel.defaultProps = {
  position: 'static',
  zIndex: 1,
  top: '0px',
};

const title = 'The quick brown fox jumps over the lazy dog';
const description = 'And a description that can run over many multiple lines.';

function notifySuccessToast() {
  notify({
    content: title,
    closeButtonLabel: 'Dismiss notification',
  });
}

function notifyErrorToast() {
  notify({
    content: title,
    type: TYPE.error,
    closeButtonLabel: 'Dismiss error notification',
  });
}

function notifyOnCloseCallback() {
  notify({
    content: title,
    onClose: action('onClose'),
  });
}

function notifyWoCloseControl() {
  notify({
    content: title,
    hideCloseControl: true,
  });
}

function notifyCustomThemeToast() {
  notify({
    content: title,
    theme: {
      backgroundColor: 'red',
    },
  });
}

function notifyCustomActions() {
  notify({
    content: 'Do you like 🍉s ?',
    actions: [
      { title: 'Yes', callback: () => {} },
      { title: 'There is only Yes', callback: () => {} },
    ],
  });
}

function notify30sDuration() {
  notify({
    content: 'A long long time ago...',
    duration: 30000,
    type: TYPE.error,
  });
}

function notifyToastV2(type, size = 0) {
  notify({
    title,
    type,
    description: description.repeat(size),
  });
}

function notifyWoCloseControlV2() {
  notify({
    title,
    hideCloseControl: true,
  });
}

function notifyCustomThemeToastV2() {
  notify({
    title,
    theme: {
      backgroundColor: 'red',
    },
  });
}

function notifyCustomActionsV2() {
  notify({
    title: 'Do you like 🍉s ?',
    actions: [
      { title: 'Yes', callback: () => {} },
      { title: 'There is only Yes', callback: () => {} },
    ],
  });
}

function notify30sDurationV2() {
  notify({
    title: 'A long long time ago...',
    duration: 30000,
    type: TYPE.error,
  });
}

function changeSize(size) {
  configure({
    size,
  });
  notify({
    content: `👍 Size changed to ${size}`,
  });
}

function changeStackToTen() {
  configure({
    stackSize: 10,
  });
  notify({
    content: '👍 Stack size is now 10',
  });
}

function changeStackToDefault() {
  configure({
    stackSize: 4,
  });
  notify({
    content: '👍 Stack size is now default (4)',
  });
}

function changeToasterContent(counter) {
  const types = [
    TYPE.loading,
    TYPE.warning,
    TYPE.success,
    TYPE.error,
    TYPE.info,
  ];
  const toastType = types[Math.floor(Math.random() * types.length)];

  notify({
    id: 'updated-toaster-id',
    content: `Update content and type after each click, clicked: ${counter}`,
    type: toastType,
  });
}

export const PlaygroundToaster = args => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <FloatingSection>
        <ComponentSection style={{ flex: 1, margin: 0 }} />
        <ComponentSection>
          <ZLabel position={args.position} zIndex={args.zIndex} top={args.top}>
            Test label with customizable position and z-index (see Knobs). Used
            to see how Toasts renders over content
          </ZLabel>

          <div>
            <ButtonGroup hasVerticalSpacing>
              <Button
                variant={buttonVariant.secondary}
                onClick={() => changeSize(SIZE.small)}
              >
                Change to small toasts
              </Button>
              <Button
                variant={buttonVariant.secondary}
                onClick={() => changeSize(SIZE.medium)}
              >
                Change to normal toasts
              </Button>
              <Button
                variant={buttonVariant.secondary}
                onClick={() => changeSize(SIZE.large)}
              >
                Change to large toasts
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup hasVerticalSpacing>
              <Button
                variant={buttonVariant.secondary}
                onClick={() => changeStackToTen()}
              >
                Change stack size to 10
              </Button>
              <Button
                variant={buttonVariant.secondary}
                onClick={() => changeStackToDefault()}
              >
                Change stack size to default
              </Button>
              <Button
                variant={buttonVariant.secondary}
                onClick={() => closeAll()}
              >
                Close all
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup hasVerticalSpacing>
              <Button onClick={() => notifySuccessToast()}>
                Show success toast + closeButtonLabel - Classic
              </Button>

              <Button onClick={() => notifyErrorToast()}>
                Show error toast + closeButtonLabel - Classic
              </Button>

              <Button onClick={() => notifyWoCloseControl()}>
                Show toast without close control - Classic
              </Button>

              <Button onClick={() => notifyCustomActions()}>
                Show toast with custom actions - Classic
              </Button>

              <Button onClick={() => notify30sDuration()}>
                Show toast with 30s duration - Classic
              </Button>

              <Button onClick={() => notifyCustomThemeToast()}>
                Show toast with custom theme - Classic
              </Button>

              <Button onClick={() => notifyOnCloseCallback()}>
                Show toast with onClose callback
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup hasVerticalSpacing>
              <Button onClick={() => notifyToastV2(TYPE.success)}>
                Show success toast - V2
              </Button>

              <Button onClick={() => notifyToastV2(TYPE.success, 1)}>
                Show success toast + description
              </Button>

              <Button onClick={() => notifyToastV2(TYPE.success, 2)}>
                Show success toast + longer description
              </Button>

              <Button onClick={() => notifyToastV2(TYPE.error)}>
                Show error toast - V2
              </Button>

              <Button onClick={() => notifyToastV2(TYPE.warning)}>
                Show warning toast
              </Button>

              <Button onClick={() => notifyToastV2(TYPE.info)}>
                Show info toast
              </Button>

              <Button onClick={() => notifyWoCloseControlV2()}>
                Show toast without close control - V2
              </Button>

              <Button onClick={() => notifyCustomActionsV2()}>
                Show toast with custom actions - V2
              </Button>

              <Button onClick={() => notify30sDurationV2()}>
                Show toast with 30s duration - V2
              </Button>

              <Button onClick={() => notifyCustomThemeToastV2()}>
                Show toast with custom theme - V2
              </Button>

              <Button
                onClick={() => {
                  setCounter(counter + 1);
                  changeToasterContent(counter);
                }}
              >
                Show toast + update it after each click
              </Button>
            </ButtonGroup>
          </div>
        </ComponentSection>
      </FloatingSection>
      <Toaster />
    </>
  );
};
PlaygroundToaster.args = {
  position: 'static',
  zIndex: 1,
  top: '0px',
};
PlaygroundToaster.argTypes = {
  position: {
    control: {
      type: 'select',
    },
    options: ['static', 'relative', 'fixed', 'absolute', 'sticky'],
  },
  size: {
    control: {
      type: 'select',
    },
    options: ['small', 'medium', 'large'],
  },
};
PlaygroundToaster.storyName = '10. Playground';

export default {
  title: 'Components/Toaster',
  component: Toaster,
  decorators: [PlaygroundDecorator],
};

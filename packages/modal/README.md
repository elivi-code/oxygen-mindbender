# 8x8 Oxygen - Modal

## Installation

```sh
$ yarn add @8x8/oxygen-modal
```

```sh
$ npm install @8x8/oxygen-modal
```

## Usage

```js
import Modal, {
  ModalPortal,
  ModalHeader,
  ModalFooter,
  MODAL_SIZE,
  MODAL_HEADER_ALIGN_TITLE,
  MODAL_FOOTER_ALIGN,
  Styled,
} from '@8x8/oxygen-modal';

import Button, { buttonVariant } from '@8x8/oxygen-button';
```

```js
<Modal size={MODAL_SIZE.SMALL} isVisible>
  <ModalHeader
    title="Modal title"
    alignTitle={MODAL_HEADER_ALIGN_TITLE.CENTER}
  />
  Content
  <ModalFooter align={MODAL_FOOTER_ALIGN.SPACE_AROUND}>
    <Button>Save</Button>
    <Button variant={buttonVariant.secondary}>Cancel</Button>
  </ModalFooter>
</Modal>
```

```js
// You can use ModalPortal instead of Modal if you require not to use createPortal
<ModalPortal size={MODAL_SIZE.SMALL} zIndex={100} isVisible>
  <ModalHeader
    title="Modal title"
    alignTitle={MODAL_HEADER_ALIGN_TITLE.CENTER}
  />
  Content
  <ModalFooter align={MODAL_FOOTER_ALIGN.SPACE_AROUND}>
    <Button>Save</Button>
    <Button variant={buttonVariant.secondary}>Cancel</Button>
  </ModalFooter>
</ModalPortal>
```

### How to use initialFocus

The initialFocus can get HTML selector as: class or id, but most of the time is recommended to use the useRef.
Below you can find an example how to do that. Keep in mind initialFocus works ONLY with `shouldUseFocusTrap`

```js
import React, { useRef } from 'react';

const NewFeature = () => {
  const cancelButtonRef = useRef(null);
  return (
    <Modal initialFocus={() => cancelButtonRef.current}>
      <Button ref={cancelButtonRef}>Cancel</Button>
    </Modal>
  );
};
```

```js
// Using ID as a reference to initialFocus
import React, { useRef } from 'react';

const NewFeature = () => {
  return (
    <Modal initialFocus="#cancel_button_id">
      <Button id="cancel_button_id">Cancel</Button>
    </Modal>
  );
};
```

```js
// MODAL_SIZE exposes the following values:
MODAL_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium', // default
  BIG: 'big',
};
```

```js
// MODAL_HEADER_ALIGN_TITLE exposes the following values:
MODAL_HEADER_ALIGN_TITLE = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
};
```

```js
// MODAL_FOOTER_ALIGN exposes the following values:
MODAL_FOOTER_ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
};
```

## Available styled components

- _(deprecated)_ `Container` — this doesn't actually work
- _(deprecated)_ `Content` — this doesn't actually work
- `FooterContainer`
- `HeaderCloseIcon`
- `HeaderContainer`
- `HeaderTitle`
- `HeaderTitleWrapper`
- `HeaderSubtitle`

## Props

### Modal

| Name                      | Type                                                                                                                                                | Default              | Description                                                                                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| targetNode                | <pre style="padding: 0; margin: 0; background: transparent">oneOfType([<br /> instanceOf(<br /> window.Element<br /> ),<br /> element<br />])</pre> | window.document.body | DOM node representing the element where the Modal will be rendered                                                                                                                                                                                                                |
| isVisible                 | bool                                                                                                                                                | true                 | Modal visibility flag. <br /> **\*_Note:_** to obtain an efficient source code, it is recommended to avoid the usage of this flag, a better solution could be to conditionally render the Modal component                                                                         |
| hasShadow                 | bool                                                                                                                                                | true                 | Tell if the modal has box-shadow displayed                                                                                                                                                                                                                                        |
| shouldCloseOnEsc          | bool                                                                                                                                                | true                 | Tell if the modal should call the `onClose` callback on Esc key press                                                                                                                                                                                                             |
| shouldCloseOnOverlayClick | bool                                                                                                                                                | false                | Tell if the modal should call the `onClose` callback on click on modal's overlay                                                                                                                                                                                                  |
| allowOutsideClick         | <pre style="padding: 0; margin: 0; background: transparent">oneOfType([<br /> bool,<br /> func<br />])</pre>                                        | undefined            | Exposed prop for [focus-trap](https://github.com/focus-trap/focus-trap). If `true` or returns `true`, a click outside the focus trap will immediately deactivate the focus trap and allow the click event to do its thing (i.e. to pass-through to the element that was clicked). |
| size                      | <pre style="padding: 0; margin: 0">oneOf([<br /> MODAL_SIZE.SMALL,<br /> MODAL_SIZE.MEDIUM<br /> MODAL_SIZE.BIG<br />])</pre>                       | MODAL_SIZE.MEDIUM    | Size of the modal                                                                                                                                                                                                                                                                 |
| width                     | string                                                                                                                                              | undefined            | Custom width of the modal                                                                                                                                                                                                                                                         |
| height                    | string                                                                                                                                              | undefined            | Custom height of the modal                                                                                                                                                                                                                                                        |
| onClose                   | func                                                                                                                                                | noop                 | Close callback of the modal. Could be executed based on `shouldCloseOnEsc` or `shouldCloseOnOverlayClick` props/flags                                                                                                                                                             |
| children                  | any                                                                                                                                                 | null                 | The rendered content of the Modal                                                                                                                                                                                                                                                 |
| shouldUseFocusTrap        | bool                                                                                                                                                | true                 | Turns on / off focus trap for modal                                                                                                                                                                                                                                               |
| `portalRef`               | `React.RefObject<HTMLDivElement>`                                                                                                                   | undefined            | This ref is attached to a sibling node to the Container. Used for Select or Popover component which want to render larger items                                                                                                                                                   |
| testId                    | string                                                                                                                                              | 'MODAL'              | Test ID DOM attribute value                                                                                                                                                                                                                                                       |
| theme                     | object                                                                                                                                              |                      | Modal theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                                                 |

### ModalPortal

| Name                      | Type                                                                                                                          | Default           | Description                                                                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isVisible                 | bool                                                                                                                          | true              | Modal visibility flag. <br /> **\*_Note:_** to obtain an efficient source code, it is recommended to avoid the usage of this flag, a better solution could be to conditionally render the Modal component                                                               |
| hasShadow                 | bool                                                                                                                          | true              | Tell if the modal has box-shadow displayed                                                                                                                                                                                                                              |
| shouldCloseOnEsc          | bool                                                                                                                          | true              | Tell if the modal should call the `onClose` callback on Esc key press                                                                                                                                                                                                   |
| shouldCloseOnOverlayClick | bool                                                                                                                          | false             | Tell if the modal should call the `onClose` callback on click on modal's overlay                                                                                                                                                                                        |
| size                      | <pre style="padding: 0; margin: 0">oneOf([<br /> MODAL_SIZE.SMALL,<br /> MODAL_SIZE.MEDIUM<br /> MODAL_SIZE.BIG<br />])</pre> | MODAL_SIZE.MEDIUM | Size of the modal                                                                                                                                                                                                                                                       |
| width                     | string                                                                                                                        | undefined         | Custom width of the modal                                                                                                                                                                                                                                               |
| height                    | string                                                                                                                        | undefined         | Custom height of the modal                                                                                                                                                                                                                                              |
| onClose                   | func                                                                                                                          | noop              | Close callback of the modal. Could be executed based on `shouldCloseOnEsc` or `shouldCloseOnOverlayClick` props/flags                                                                                                                                                   |
| children                  | any                                                                                                                           | null              | The rendered content of the Modal                                                                                                                                                                                                                                       |
| shouldUseFocusTrap        | bool                                                                                                                          | true              | Turns on / off focus trap for modal                                                                                                                                                                                                                                     |
| initialFocus              | HTMLElement, ReactNode, SVGElement, string                                                                                    | undefined         | Specify the element to receive initial focus. By default, the first element in the focus trap's order will receive focus. The prop can be set to false to prevent any initial focus. [Focus trap library documentation](https://www.npmjs.com/package/focus-trap-react) |
| testId                    | string                                                                                                                        | 'MODAL'           | Test ID DOM attribute value                                                                                                                                                                                                                                             |
| theme                     | object                                                                                                                        |                   | Modal theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                                                                                                                                       |

### ModalHeader

| Name            | Type                                                                                                                                                                                            | Default                       | Description                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hasBorderBottom | bool                                                                                                                                                                                            | false                         | Tell if the Modal Header has border bottom                                                                                                                   |
| alignTitle      | <pre style="padding: 0; margin: 0">oneOf([<br /> MODAL_HEADER_ALIGN_TITLE<br /> .LEFT,<br /> MODAL_HEADER_ALIGN_TITLE<br /> .RIGHT,<br /> MODAL_HEADER_ALIGN_TITLE<br /> .CENTER <br />])</pre> | MODAL_HEADER_ALIGN_TITLE.LEFT | The alignment option of the title in the Modal header                                                                                                        |
| title           | string                                                                                                                                                                                          | ''                            | Title string of the modal header                                                                                                                             |
| iconCloseTitle  | string                                                                                                                                                                                          | Close                         | Title attribute on close icon                                                                                                                                |
| onClose         | func                                                                                                                                                                                            | undefined                     | Function executed when the X (close) icon is clicked in Modal header. <br /> **\*_Note:_** The X (close) icon is visible only if the `onClose` is a function |
| children        | node                                                                                                                                                                                            | null                          | Optional rendered content of the Modal Header. Children are rendered under the `title`                                                                       |
| testId          | string                                                                                                                                                                                          | 'MODAL_HEADER'                | Test ID DOM attribute value                                                                                                                                  |
| theme           | object                                                                                                                                                                                          |                               | Modal theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants                            |
| buttonCloseRef  | object, func
| titleProps      | object                                                                                                                                                                                          | undefined                     | Can set id value if manually overriding automatic header h1 id                                                                                               |                                                                                                                                                                              | undefined                     | Reference to the close icon button, mainly for initial focus purpose                                                                                         |

### ModalFooter

| Name             | Type                                                                                                                                                                                                                                   | Default                  | Description                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| hasBorderTop     | bool                                                                                                                                                                                                                                   | false                    | Tell if the Modal Footer has border top                                                                                           |
| hasButtonSpacing | bool                                                                                                                                                                                                                                   | true                     | Flag to decide if the Button components rendered in ModalFooter has default spacing                                               |
| isSmall          | bool                                                                                                                                                                                                                                   | false                    | flag to decide if the modal footer has small spacings                                                                             |
| align            | <pre style="padding: 0; margin: 0">oneOf([<br /> MODAL_FOOTER_ALIGN.LEFT,<br /> MODAL_FOOTER_ALIGN.CENTER,<br /> MODAL_FOOTER_ALIGN.RIGHT,<br /> MODAL_FOOTER_ALIGN.SPACE_BETWEEN,<br /> MODAL_FOOTER_ALIGN.SPACE_AROUND<br />])</pre> | MODAL_FOOTER_ALIGN.RIGHT | The alignment of the content of the modal footer                                                                                  |
| children         | node                                                                                                                                                                                                                                   | null                     | The rendered content of the Modal Footer                                                                                          |
| testId           | string                                                                                                                                                                                                                                 | 'MODAL_FOOTER'           | Test ID DOM attribute value                                                                                                       |
| theme            | object                                                                                                                                                                                                                                 |                          | Modal theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |

## Theme

```js
modal = {
  // Modal
  zIndex: 2000,
  widthSmall: '620px',
  widthLarge: '960px',
  minHeight: '360px',
  modalOffsetMinimal: '16px',
  backgroundColor: '#FFF',
  shadowSize: '0 4px 8px 0',
  shadowColor: 'rgba(28,32,37,0.1)',
  borderRadius: '5px',
  animation: keyframes`
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    70% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  // Header
  headerPadding: '16px',
  headerPaddingRightWithIcon: '56px',
  headerShadowSize: '0 1px 0 0',
  headerShadowColor: '#D1DBE8',
  headerFontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  headerTitleFontSize: '24px',
  headerTitleLineHeight: 1.4,
  headerTitleFontWeight: 600,
  headerIconTop: '16px',
  headerIconRight: '16px',
  // Footer
  footerPaddingHorizontal: '24px',
  footerPaddingSmallHorizontal: '16px',
  footerPaddingVertical: '16px',
  footerShadowSize: '0 1px 0 0',
  footerShadowColor: '#D1DBE8',
  footerButtonSpacing: '16px',
};
```

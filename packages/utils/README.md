# 8x8 Oxygen - Utilities

## Map

- Components
  - [OutsideEventBehavior](#outsideEventBehavior)
- Functions
  - [Media](#media)

## Components

### OutsideEventBehavior

Component wich will attach an `onClick` event listener to the `window` object. The function will be triggered everytime a click event target doesn't contain the children of `OutsideEventBehavior`.

```javascript
import { OutsideEventBehavior } from '@8x8/oxygen-utils';

<OutsideEventBehavior onClick={this.handleClickOutside}>
  <div>Some random children</div>
</OutsideEventBehavior>;
```

In the example above, the function `this.handleClickOutside` will be triggered every time one executes a click outside `<div>Some random children</div>`.

## Functions

### Media

An object with media breakpoints helpers for `styled-components`. You can use `media` for `max-width` breakpoints or `mediaMin` for `min-width` rules.

```javascript
// max-width breakpoint rule

import { media } from '@8x8/oxygen-utils';

const StyledDiv = styled.div`
  color: red;

  ${media.desktop`color: yellow;`}
  ${media.tablet`color: green;`}
  ${media.phone`color: blue;`}
`;

export default StyledDiv;
```

```javascript
// min-width breakpoint rule

import { mediaMin } from '@8x8/oxygen-utils';

const StyledDiv = styled.div`
  color: red;

  ${mediaMin.desktop`color: yellow;`}
  ${mediaMin.tablet`color: green;`}
  ${mediaMin.phone`color: blue;`}
`;

export default StyledDiv;
```

## Hooks

### `useFontSize`

Transforms a `rem` into a `px` value based on the root html font-size property. This allows access to the _actual_ value in JS.

If you need a dimension in `px` that relates to font-size values, use this hook which takes the user's font-size preferences into account.

```javascript
import { useFontSize } from '@8x8/oxygen-utils';

const Component = () => {
  const height = useFontSize(1.5); // 1.5rem => 24px with default font-size
  return (
    <div style={{ ${height}px }}>I have 1.5rem as height set from JS</div>
  );
}
```

### `useHasOverflow`

Detects whether the given element has overflowed its content. Useful for detentcting whether a container has truncated its text with an ellipsis.

### `useId`

Generates a stable `id` via `uuid`. Once React 18 is used, this can be replaced with the official react `useId` hook https://react.dev/reference/react/useId

Useful to generate unique id's for form & accesibility purposes (to link elements together).

```javascript
import { useId } from '@8x8/oxygen-utils';

const Component = () => {
  const id = useId();
  return (
    <label htmlFor={id}>Label</label>
    <input id={id} />
  );
}
```

### `useAriaLive`

Manages screen reader announcements with automatic DOM injection. Messages are announced to screen readers without requiring any JSX components to be rendered.

Creates aria-live containers on-demand when messages are announced, ensuring screen readers can properly register them. Messages are announced via direct DOM manipulation for reliable screen reader detection.

```javascript
import { useAriaLive } from '@8x8/oxygen-utils';

const Component = () => {
  const { announce } = useAriaLive();

  const handleSave = () => {
    // ... save logic
    announce('Item saved successfully');
  };

  const handleError = () => {
    // ... error handling
    announce('Connection failed!', { assertive: true });
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleError}>Trigger Error</button>
    </div>
  );
};
```

#### API

`useAriaLive(): { announce: (message: string, options?: { assertive?: boolean }) => void }`

- **`announce(message, options?)`**: Announces a message to screen readers
  - `message` (string): The message to announce
  - `options.assertive` (boolean, optional): Use assertive priority for urgent announcements that interrupt current speech. Defaults to `false` (polite)

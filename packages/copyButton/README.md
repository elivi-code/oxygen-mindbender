# @8x8/oxygen-copy-button

A button component that copies text to the clipboard with visual feedback.

## Installation

```bash
yarn add @8x8/oxygen-copy-button
```

## Usage

```jsx
import CopyButton from '@8x8/oxygen-copy-button';

function MyComponent() {
  return <CopyButton textToCopy="Hello, World!" />;
}
```

## Props

### CopyButton

`interface CopyButtonProps`

| Name              | Type         | Default     | Description                                               |
| :---------------- | :----------- | :---------- | :-------------------------------------------------------- |
| `textToCopy?`     | `string`     | `undefined` | Text to copy to clipboard                                 |
| `onCopy?`         | `() => void` | `undefined` | Callback function triggered when copy action is performed |
| `tooltipText?`    | `string`     | `'Copy'`    | Custom tooltip text shown before copying                  |
| `copiedText?`     | `string`     | `'Copied'`  | Custom text shown in tooltip after copying                |
| `copiedDuration?` | `number`     | `2000`      | Duration in milliseconds to show "copied" state           |
| `isDisabled?`     | `boolean`    | `false`     | Disable the button                                        |
| `testId?`         | `string`     | `undefined` | Test ID for testing purposes                              |

The component also accepts all standard HTML button attributes.

## Features

- **Fixed Size**: Button is 20px (1.25rem) as per design specifications
- **Clipboard Integration**: Automatically copies text to clipboard using the Clipboard API
- **Visual Feedback**: Shows tooltip with "Copied" message after successful copy
- **Customizable**: Customize tooltip text and copy duration
- **Accessible**: Supports keyboard navigation and screen readers
- **Fallback Support**: Includes fallback for browsers without Clipboard API support

## Examples

### Basic Usage

```jsx
<CopyButton textToCopy="Hello, World!" />
```

### With Custom Tooltip Text

```jsx
<CopyButton
  textToCopy="https://example.com"
  tooltipText="Copy URL"
  copiedText="URL Copied!"
/>
```

### With Callback

```jsx
<CopyButton
  textToCopy="Code snippet"
  onCopy={() => console.log('Text copied!')}
/>
```

### Disabled State

```jsx
<CopyButton textToCopy="Cannot copy" isDisabled />
```

## Accessibility

- The component uses semantic HTML button element
- Supports keyboard navigation (Enter and Space keys)
- Provides visual feedback through tooltips
- Can be disabled with `isDisabled` prop
- Supports custom aria-labels through spread props

## Browser Support

The component uses the modern Clipboard API with a fallback for older browsers. It supports:

- Chrome 63+
- Firefox 53+
- Safari 13.1+
- Edge 79+
- All browsers with `document.execCommand('copy')` support (fallback)

# 8x8 Oxygen - Link

The `Link` component is a wrapper around the HTML `a` element. It provides two main variants: inline (default) and standalone. The inline variant integrates with text content, while the standalone variant offers enhanced typography and spacing controls. Both variants support icons and chat-specific styling.

## Installation

```sh
$ yarn add @8x8/oxygen-link
```

```sh
$ npm install @8x8/oxygen-link
```

## Props

### Link
`interface LinkProps`

| **Name**      | **Type**             | **Default** | **Description**                                                |
| ------------- | -------------------- | ----------- | -------------------------------------------------------------- |
| `children`    | `string`             | `undefined` | Link text content                                              |
| `href`        | `string`             | `undefined` | URL destination for the link                                   |
| `standalone?` | `boolean`            | `false`     | When true, applies bold typography and enables size control    |
| `size?`       | `'small' \| 'large'` | `'small'`   | Only applies when standalone is true. Controls typography size |
| `icon?`       | `React.ReactNode`    | `undefined` | Icon to display (available in both variants)                   |
| `isChat?`     | `boolean`            | `false`     | Applies chat-specific styling when true                        |
| `testId?`     | `string`             | `undefined` | Used for testing. Example: `testId="settings-link"` will result in `data-test-id="settings-link"` |

### Icon Behavior
- In standalone mode: icon size is controlled by the Link size prop
  * `large`: 20px
  * `small`: 16px
- In inline mode: icon inherits size from surrounding text

## Usage Examples

```jsx
// Inline Link (default)
<Link href="https://example.com">Click me</Link>

// Inline Link with icon
<Link href="https://example.com" icon={<SearchIcon />}>Click me</Link>

// Standalone Link
<Link href="https://example.com" standalone>Click me</Link>

// Standalone Link with icon
<Link href="https://example.com" standalone icon={<SearchIcon />}>Click me</Link>

// Standalone Link with small size (default if standalone is true)
<Link href="https://example.com" standalone size="small">Click me</Link>

// Standalone Link with large size
<Link href="https://example.com" standalone size="large">Click me</Link>

// Link in chat context
<Link href="https://example.com" isChat>Click me</Link>
```
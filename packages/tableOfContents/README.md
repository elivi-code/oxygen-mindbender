# TableOfContents

The `TableOfContents` component is used to go to anchors within a document

## Installation

```sh
$ yarn add @8x8/oxygen-table-of-contents
$ npm install @8x8/oxygen-table-of-contents
```

Exported React components:

## TableOfContents 

Wrap everything inside this container

## Item

Declare an `Item` for each item in your TOC

## Props of Item

`interface ItemProps`

| Name              | Type              | Default     | Description                                                                                                                 |
| ----------------- | ----------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `children`        | `React.ReactNode` | `undefined` | Text content                                                                                                                |
| `onClick`         | `() => void`      | `undefined` | Called when item clicked                                                                                                    |
| `isActive`        | `boolean`         | `undefined` | True means item is selected                                                                                                 |

# 8x8 Oxygen - SlideOut

## Instalation

```sh
$ yarn add @8x8/oxygen-slide-out
```

```sh
$ npm install @8x8/oxygen-slide-out
```

## Usage

```js
import SlideOut, { Styled } from '@8x8/oxygen-slide-out';
```

```js
<SlideOut
  isVisible={false}
  isResizable={true}
  hasAnimation={true}
  defaultWidth={defaultWidth}
  minWidth={minWidth}
  maxWidth={maxWidth}
  onResize={onResize}
>
  Content
</SlideOut>
```

## Available styled components

- SlideOut
- Splitter
- Content

## Props

| Name         | Type   | Default     | Description                                                                                                                 |
| ------------ | ------ | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| theme        | object |             | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |
| testId       | string | 'SLIDE_OUT' | Test ID DOM attribute value                                                                                                 |
| children     | node   |             | Content                                                                                                                     |
| className    | string | undefined   | Adds css class to the Container                                                                                             |
| isVisible    | bool   | false       | Tell when the SlideOut is open                                                                                              |
| isResizable  | bool   | true        | Tell when the SlideOut is resizable                                                                                         |
| hasAnimation | bool   | true        | Tell when the SlideOut uses animation on opening and closing                                                                |
| defaultWidth | number | 400         | The default width of the SlideOut in pixels                                                                                 |
| minWidth     | number | undefined   | Minimum width of the SlideOut                                                                                               |
| maxWidth     | number | undefined   | Maximum width of the SlideOut                                                                                               |
| onResize     | func   | noop        | Callback executed when the SlideOut is being resized                                                                        |

## Theme

```js
const slideOut = {
  fontFamily: "'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontSize: '15px',
  lineHeight: 1.6,
  animationSpeed: '150ms',
  backgroundColor: '#FFF',
  boxShadowColor: '#000',
  boxShadowOpacity: 0.25,
  boxShadowSize: '0 4px 8px 0',
};
```

# 8x8 Oxygen - Overlay

## Installation

```sh
$ yarn add @8x8/oxygen-overlay
```

```sh
$ npm install @8x8/oxygen-overlay
```

## Usage

```js
import Overlay from '@8x8/oxygen-overlay';
```

```js
<Overlay />
```

## Theme

Keyframe used by the animation:

```css
@keyframes show from {
  opacity: 0;
}
to {
  opacity: 1;
}
```

### Classic

```json
{
  "backgroundColor": "rgba(240,243,247,0.75)",
  "animation": "150ms ease-in show",
  "zIndex": 1000
}
```

### Novo

```json
{
  "backgroundColor": "rgba(41,41,41,0.75)",
  "animation": "150ms ease-in show",
  "zIndex": 1000
}
```

### NovoDark

```json
{
  "backgroundColor": "rgba(41,41,41,0.75)",
  "animation": "150ms ease-in show",
  "zIndex": 1000
}
```

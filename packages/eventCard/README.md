# 8x8 Oxygen - EventCard

## Installation

```sh
$ yarn add @8x8/oxygen-event-card
```

```sh
$ npm install @8x8/oxygen-event-card
```

## Usage

```js
import { VideoIcon } from '@8x8/oxygen-icon';
import EventCard from '@8x8/oxygen-event-card';

<EventCard
  icon={VideoIcon}
  avatars={[{ name: "John Doe" }, { src: "https://work.8x8.com/8x8-logo.png" }]}
  title="Rock FM"
  text="3h20m"
/>
/>;
```

## Props

| Name    | Type                                             | Default      | Description                                                                                                                                                            |
| ------- | ------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| icon    | node                                             | undefined    | Renderable component. _Should_ be an Oxygen icon                                                                                                                       |
| avatars | { name?: string, src?: string, isGroup: bool }[] | undefined    | Array of Avatar props, used for an [AvatarStack](?path=/story/components-avatar--04-documentation#avatarstack) instance.                                               |
| title   | string                                           | ''           | Title                                                                                                                                                                  |
| text    | string                                           | ''           | Text (description)                                                                                                                                                     |
| testId  | string                                           | 'EVENT_CARD' | Test ID DOM attribute value                                                                                                                                            |
| theme   | object                                           |              | EventCard theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants. See below for the actual values |

## Theme

### Novo (& Classic)

```json
{
  "background": "#FFFFFF",
  "backgroundHover": "#F1F1F1",
  "borderColor": "#F1F1F1",
  "borderFocusColor": "#0056E0",
  "gap": "12px",
  "iconBackground": "#E0E0E0",
  "iconColor": "#292929",
  "shadow": "0px 1px 2px 0px rgba(41,41,41,0.25)",
  "text": {
    "fontFamily": "Inter, sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": 400,
    "letterSpacing": "-0.006em"
  },
  "textColor": "#666666",
  "title": {
    "fontFamily": "Inter, sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": 600,
    "letterSpacing": "-0.006em"
  },
  "titleColor": "#292929"
}
```

### NovoDark

```json
{
  "background": "#171719",
  "backgroundHover": "#3D3D3D",
  "borderColor": "#3D3D3D",
  "borderFocusColor": "#246FE5",
  "gap": "12px",
  "iconBackground": "#666666",
  "iconColor": "#FFFFFF",
  "shadow": "0px 1px 2px 1px rgba(20,20,20,1)",
  "text": {
    "fontFamily": "Inter, sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": 400,
    "letterSpacing": "-0.006em"
  },
  "textColor": "#C2C2C2",
  "title": {
    "fontFamily": "Inter, sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": 600,
    "letterSpacing": "-0.006em"
  },
  "titleColor": "#FFFFFF"
}
```

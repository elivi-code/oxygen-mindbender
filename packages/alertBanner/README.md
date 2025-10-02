# AlertBanner

The `AlertBanner` component is used as a warning for important system messages. It pushes the content of the page down and cannot be dismissed.

## Installation

```sh
$ yarn add @8x8/oxygen-alert-banner
$ npm install @8x8/oxygen-alert-banner
```

## Props

`interface AlertBannerProps`

| Name              | Type              | Default     | Description                                                                                                                 |
| ----------------- | ----------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `children`        | `React.ReactNode` | `undefined` | Text content                                                                                                                |
| `actionText?`     | `string`          | `undefined` | Text for the optional action button. If specified it expects the `actionCallback` to be provided as well.                   |
| `actionCallback?` | `() => void`      | `undefined` | Callback for the optional action button. If specified it expects the `actionText` to be provided as well.                   |
| `testId?`         | `string`          | `'Alert'`   | Test ID DOM attribute value                                                                                                 |
| `theme?`          | `object`          | `{}`        | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |

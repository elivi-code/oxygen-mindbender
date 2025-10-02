# 8x8 Oxygen - Badge

## Installation

```sh
$ yarn add @8x8/oxygen-badge
```

```sh
$ npm install @8x8/oxygen-badge
```

## Usage

### Badge

```js
import Badge, { badgeSize, badgePosition, badgeType } from '@8x8/oxygen-badge';
```

```js
<Badge
  size={badgeSize.medium}
  position={badgePosition['bottom-end']}
  type={badgeType.primary}
>
  2
</Badge>
```

#### Badge Constants

```js
// badgeSize exposes the following values:
badgeSize = {
  small: 'small',
  medium: 'medium',
  big: 'big',
};
```

```js
// badgePosition values:
badgePosition = {
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
};
```

```js
// badgeType:
badgeType = {
  primary: 'primary',
  secondary: 'secondary',
};
```

### AIBadge

```js
import { AIBadge } from '@8x8/oxygen-badge';
```

```js
<AIBadge />
```

## Props

### Badge

`interface BadgeProps`

| Name        | Type                                                              | Default     | Description                                                                                                                         |
| :---------- | :---------------------------------------------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `children?` | `React.ReactNode`                                                 | `undefined` | Rendered element inside the badge                                                                                                   |
| `type?`     | `'primary' \| 'secondary'`                                        | `'primary'` | Define Badge type                                                                                                                   |
| `size?`     | `'small' \| 'medium' \| 'big'`                                    | `'medium'`  | Define Badge size                                                                                                                   |
| `position?` | `'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end'`     |             | Define Badge position                                                                                                               |
| `isInner?`  | `boolean`                                                         | `false`     | Tell if badge should render inside wrapper                                                                                          |
| `testId?`   | `string`                                                          | `'BADGE'`   | Test ID DOM attribute value                                                                                                         |
| `theme?`    | `BadgeTheme`                                                      |             | Badge theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants |

### AIBadge

`interface AIBadgeProps extends React.HTMLAttributes<HTMLDivElement>`

| Name        | Type              | Default      | Description                         |
| :---------- | :---------------- | :----------- | :---------------------------------- |
| `children?` | `React.ReactNode` | `'AI'`       | Content to display next to the star icon |
| `testId?`   | `string`          | `'AI_BADGE'` | Test ID DOM attribute value         |

*Inherits all standard HTML div attributes (className, style, onClick, etc.)*

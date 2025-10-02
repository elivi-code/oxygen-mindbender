# 8x8 Oxygen - Skeleton Loaders

## Installation

```sh
$ yarn add @8x8/oxygen-skeletons
```

```sh
$ npm install @8x8/oxygen-skeletons
```

## Usage

```js
import { SkeletonBlock, SkeletonCircle, skeletonAnimation } from '@8x8/oxygen-skeletons';

<SkeletonBlock />

<SkeletonCircle />

// use the animation directly
const CustomContainerWithAnimation = styled.div`
  // your other stylings
  ${skeletonAnimation};
`
```

## Interface

### SkeletonProps

| Name      | Type                                                                                                                                                               | Default                                   | Description                                                                                                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size?`   | `'label01'` \| `'body01'` \| `'body02'` \| `'bulletList01'` \| `'heading01'` \| `'heading02' ` \| `'xlarge'` \| `'large'` \| `'medium'` \| `'small'` \| `'xsmall'` | `'body01'`                                | Uses a) typography tokens which use the line-height property from the token (easy to match text height in your loader) or b) Avatar sizes or c) any custom string which is passed directly to the height/width properties. |
| `testId?` | `string`                                                                                                                                                           | `'SKELETON_BLOCK'` \| `'SKELETON_CIRCLE'` | Use for test selectors                                                                                                                                                                                                     |

# 8x8 Oxygen - Card


## Installation

```sh
$ yarn add @8x8/oxygen-card
```

```sh
$npm install @8x8/oxygen-card
```

## Usage
### Import
- Card only
```js
import Card from '@8x8/oxygen-card';
```

- Card with styles
```js
import Card, { Styled } from '@8x8/oxygen-card';
```

- All the components and styles
```js
import Card, { Header, Separator, Statistics, Styled } from '@8x8/oxygen-card';
```

### Create a simple card
- Without children
```jsx
<Card testId="SIMPLE_CARD" />
```

- With header
```jsx
<Card testId="CARD_WITH_HEADER">
    <Header>Oxygen Card</Header>
</Card>
```

- With custom component
```jsx
<Card testId="CARD_WITH_CUSTOM_COMPONENT">
    <CustomComponent />
</Card>
```

## Available styled components
- Card
- Header
- Separator
- StatisticsBox
- StatisticsNumbers
- StatisticsText

### Extend styling
You can extend/override any of the styles by importing the styled components directly.

```js
import { Styled } from '@8x8/oxygen-card';
import styled from 'styled-components';
const StyledCard = styled(Styled.Card)`
	background: blue;
`;
```


## Props
### Card
|Name|Type|Default|Description|
|---|---|---|---|
|children|node|null|Content|
|theme|object||The theme of the component (see the values in the Theme section)|
|testId|string|'CARD'|Test id|

### Header
|Name|Type|Default|Description|
|---|---|---|---|
|children|node|null|Content|
|theme|object||The theme of the component (see the values in the Theme section)|
|testId|string|'CARD_HEADER'|Test id|

### Separator
|Name|Type|Default|Description|
|---|---|---|---|
|theme|object||The theme of the component (see the values in the Theme section)|
|testId|string|'CARD_SEPARATOR'|Test id|

### Statistics
|Name|Type|Default|Description|
|---|---|---|---|
|data*|arrayOf(shape({statistics: string, label: string, hasError: bool}))||Information to be displayed|
|theme|object||The theme of the component (see the values in the Theme section)|
|testId|string|'CARD_STATISTICS'|Test id|

>Props marked with \* are required

## Theme

### Card theme Classic
|Property name|Value|
|---|---|
|cardHeight|252px|
|cardWidth|328px|
|cardBackground|#FFF|
|cardBoxShadow|0 4px 8px 0 #D1DBE8|
|cardBorderTop|6px solid #235C6E|
|cardBorderRadius|5px 5px 0 0|
|cardHeaderFontWeight|600|
|cardHeaderFontSize|19px|
|cardHeaderLineHeight|24px|
|cardHeaderColor|#1C2025|
|cardSeparatorBackgroundColor|#D1DBE8|
|cardSeparatorHeight|1px|
|cardSeparatorWidth|100%|

### Card theme Novo
|Property name| Value               |
|---|---------------------|
|cardHeight| 252px               |
|cardWidth| 328px               |
|cardBackground| #FFF                |
|cardBoxShadow| 0px 2px 6px 0px rgba(41,41,41,0.25) |
|cardBorderRadius| 6px                 |
|cardHeaderFontWeight| 600                 |
|cardHeaderFontSize| 19px                |
|cardHeaderLineHeight| 24px                |
|cardHeaderColor| #1C2025             |
|cardSeparatorBackgroundColor| #D1DBE8             |
|cardSeparatorHeight| 1px                 |
|cardSeparatorWidth| 100%                |

### Card theme NovoDark
|Property name| Value               |
|---|---------------------|
|cardHeight| 252px               |
|cardWidth| 328px               |
|cardBackground| #FFF                |
|cardBoxShadow| 0px 2px 8px 2px rgba(20,20,20,1) |
|cardBorderRadius| 6px                 |
|cardHeaderFontWeight| 600                 |
|cardHeaderFontSize| 19px                |
|cardHeaderLineHeight| 24px                |
|cardHeaderColor| #1C2025             |
|cardSeparatorBackgroundColor| #D1DBE8             |
|cardSeparatorHeight| 1px                 |
|cardSeparatorWidth| 100%                |

### Statistics theme
|Property name|Value|
|---|---|
|numbersFontWeight|600|
|numbersFontSize|19px|
|numbersLineHeight|28px|
|numbersColorError|#E12D2D|
|textFontSize|13px|
|textLineHeight|18px|
|textColor|#5E6D7A|
|textColorError|#E12D2D|
|boxMargin|16px 20px 24px|
|boxWidth|70px|


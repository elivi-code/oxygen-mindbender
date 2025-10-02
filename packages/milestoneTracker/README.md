# 8x8 Oxygen - Milestone Tracker

## Installation

```sh
$ yarn add @8x8/oxygen-milestone-tracker
```

```sh
$ npm install @8x8/oxygen-milestone-tracker
```

## Usage

```js
import MilestoneTracker from '@8x8/oxygen-milestone-tracker';
// also, styled components are exposed as named exports
import {
    StyledMilestoneTrackerContainer,
    StyledMilestoneContainer,
    StyledGraphicContainer,
    StyledBulletContainer,
    StyledTitle,
    StyledDescription,
    StyledRow,
    StyledBullet,
    StyledRoad,
} from '@8x8/oxygen-milestone-tracker';

```
```js
<MilestoneTracker milestones={[{}]} />
```

## Props

|Name|Type|Default|Description|
|---|---|---|---|
|milestones|<pre>arrayOf(<br />  shape({<br />    testId: string,<br />    id: string.isRequired,<br />    title: string,<br />    description: node,<br />    isCompleted: bool,<br />    icon: node<br />  })<br />)</pre>|[]|Array of data for each milestone|
|theme|object| |Milestone tracker theme|
|size|number|48|Size of the milestone bullets in px|
|showRoads|bool|true|Choice to display or not, roads between bullets|

## Theme

```js
const milestoneTracker = {
    milestoneProgressBarMargin: '16px',
    fontFamily: "'Nunito','Helvetica Neue',Helvetica,Arial,sans-serif",
    milestoneTitleColorCompleted: '#1C2025',
    milestoneTitleColorUncompleted: '#A4B8D1',
    milestoneTitleFontWeight: 600,
    milestoneTitleFontSize: '19px',
    bulletBackgroundColorUncompleted: '#F0F3F7',
    bulletBackgroundColorCompleted: '#0376DA',
    bulletBorderColor: '#D1DBE8',
    bulletBorderSize: '2px',
    bulletColor: '#FFF',
    bulletInnerDescriptionPaddingVertical: '8px',
    bulletInnerDescriptionPaddingHorizontal: '16px',
    bulletBorderRadius: '100px',
    roadBackgroundColorCompleted: '#0376DA',
    roadBackgroundColorUncompleted: '#D1DBE8',
    roadWidth: '2px',
    roadMinHeight: '40px',
    milestoneDescriptionFontColor: '#5E6D7A',
    milestoneDescriptionFontSize: '15px',
};
```

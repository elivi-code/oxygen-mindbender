# 8x8 Oxygen - UserStatus


## Installation

```sh
$ yarn add @8x8/oxygen-user-status
```

```sh
$ npm install @8x8/oxygen-user-status
```

## Usage

```js
import UserStatus, { userStatusSize, userStatusType } from '@8x8/oxygen-user-status';
```

## Props

|Name|Type|Default|Description|
|---|---|---|---|
|theme|object| |UserStatus theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants|
|size|oneOf(['small', 'large'])|'large'|Define UserStatus size|
|status|oneOf(['available', 'away', 'busy', 'doNotDisturb', 'onBreak', 'onCall', 'onDirectCall', 'offline', 'workingOffline'])|'available'|Define status types|
|title|string|undefined|Render title attribute|
|children|node|undefined|Overwrite icon inside UserStatus|

## Theme

```js
userStatus = {
  sizeSmall: '12px',
  sizeLarge: '20px',
  borderColorAvailable: '#FFF',
  borderColorAway: '#FFF',
  borderColorBusy: '#FFF',
  borderColorDoNotDisturb: '#FFF',
  borderColorOffline: '#FFF',
  borderColorOnBreak: '#FFF',
  borderColorOnCall: '#FFF',
  borderColorWorkingOffline: '#FFF',
};
```

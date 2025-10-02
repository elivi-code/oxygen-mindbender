# 8x8 Oxygen - Toaster


## Installation

```sh
$ yarn add @8x8/oxygen-toaster
```

```sh
$ npm install @8x8/oxygen-toaster
```

## Usage

Import the ```Toaster``` and insert it in the body tag (preferably).

```js
import { Toaster, notify } from '@8x8/oxygen-toaster';
```
```js
<body>
    <Toaster />
</body>
```

### Configuration

```js
import { configure, SIZE, DURATION } from '@8x8/oxygen-toaster';
```
```js
configure({
    targetNode: document.body,
    size: SIZE.normal,
    duration: DURATION.INFINITE,
    stackSize: 4,
});

```

### Show a toast
```js
import { notify, SIZE, DURATION, TYPE } from '@8x8/oxygen-toaster';
```
```js
notify({
    content: 'Text in Toast Children - takes precedence over title + description',
    actions: [{ title: 'Link', callback: () => {} }],
    hideCloseControl: true,
    onClose: () => {},
    type: TYPE.error,
    duration: 5000,
    theme: { backgroundColor: 'red' },
});
notify({
    title: 'Title',
    description: 'Description'
    actions: [{ title: 'Link', callback: () => {} }],
    hideCloseControl: true,
    onClose: () => {},
    type: TYPE.error,
    duration: 5000,
    theme: { backgroundColor: 'red' },
});
notify({
    title: 'Title',
    description: 'Description',
    closeButtonLabel: 'Dismiss notification',
    actions: [{ title: 'Link', callback: () => {} }],
    hideCloseControl: false,
    onClose: () => {},
    type: TYPE.success,
    duration: 5000,
    theme: { backgroundColor: 'green' },
});
```

### Close a toast before expiration
```js
import { notify } from '@8x8/oxygen-toaster';

const toast = notify({ ... });

toast.close();
```

### Close all toasts
```js
import { closeAll } from '@8x8/oxygen-toaster';

const toast1 = notify({ ... });
const toast2 = notify({ ... });
const toast3 = notify({ ... });

closeAll();
```

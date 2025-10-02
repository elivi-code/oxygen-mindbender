# 8x8 Oxygen - Icon

## Installation

```sh
$ yarn add @8x8/oxygen-icon
```

```sh
$ npm install @8x8/oxygen-icon
```

## Usage

### React Icon components

```js
import { SearchIcon } from '@8x8/oxygen-icon';
```

### SVG files

- Integrators are able to use the original SVG files. Oxygen icon package exposes the SVG files, and can be imported like:

```js
// Classic
import AudiowaveIconSvg from '@8x8/oxygen-icon/icons/AudiowaveIcon.svg';

// Novo
import SearchIconSvg from '@8x8/oxygen-icon/novo/SearchIcon.svg';
```

## Props

| Name         | Type   | Default   | Description                                                                                                                             |
| ------------ | ------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| active       | bool   | false     | The icon is in active state                                                                                                             |
| color        | string | null      | The fill color of the icon (applied to non-link icons)                                                                                  |
| invertColors | bool   | false     | Flag to represent if the icon should be used with inverted colors (mainly for icons placed inside a wrapper with dark background color) |
| disabled     | bool   | false     | The icon is disabled                                                                                                                    |
| link         | bool   | false     | The icon is clickable (has pointer cursor, changes the fill color on hover/active/disabled)                                             |
| selected     | bool   | false     | The icon is in selected state                                                                                                           |
| size         | number | null      | The custom size of the icon (the size can be also customized using the theme). The default size in the theme is 24px                    |
| title        | string | undefined | Icon native title                                                                                                                       |
| theme        | object |           | Theme object, default value provided by the internal Oxygen theme provider via @8x8/oxygen-config and @8x8/oxygen-constants             |

## Theme

```js
const icon = {
  color: '#1C2025',
  disabledColor: '#6FB1EA',
  disabledInvertColor: '#5E6D7A',
  hoverColor: '#0376DA',
  hoverInvertColor: '#FFF',
  linkColor: '#5E6D7A',
  linkInvertColor: '#A4B8D1',
  noLinkInvertColor: '#FFF',
  selectedColor: '#0376DA',
  selectedInvertColor: '#FFF',
  size: '24px',
  viewBox: '0 0 24 24',
};
```

## Setting up the Icons (for Oxygen developers: generate/update icon collection)

0. Prerequisite: setup the icon submodule

   Note: you probably only need to do this _once_ when you first set up the project

   ```
   git submodule init
   git submodule update
   ```

1. Update the icon `.svg` files from [oxygen-icons](https://github.com/8x8/oxygen-icons) repository.

   ```
   git submodule update --recursive --remote --merge --force
   ```

   - the SVG files are managed as a git submodule in the `./packages/icon/assets` directory, the above command will pull the latest from the `oxygen-icons` repository
   - to see all the git diff including the submodules one run : `git diff --submodule`

2. Regenerate all source files based on the existings icons under `./packages/icon/assets`

   ```
   yarn lerna exec yarn generate:svg:components --scope @8x8/oxygen-icon
   ```

   The script will:

   - clean up existing svg & js files
   - copy all svg files
   - create react components
   - create Storybook files

3. Verify that the icons have been generated correctly:

   ```
   yarn build:dev
   yarn storybook
   ```

   Visit `http://localhost:9001` and verify the `Icon` stories on left side

4. Update test snapshots

   ```
   // run from root oxygen
   yarn test --watch --testPathPattern=icon
   ```

   There should be new snapshots if new icons were added.<br />
   There should be updated snapshots if icons were changed.<br />
   There should be removed snapshots if icons were removed (this should be rare, for backwards compatibility Icons are usually not removed).

---

### Test a particular branch from oxygen-icons

If you need to locally test the icons from a custom `oxygen-icons` branch:

{This is usually a good idea if there are major changes to the `oxygen-icons` repository, to validate whether the icons are in a correct format before merging the SVG changes in.
Helps reduce design & dev work update loops.

a. Configure git to check out a custom branch by editing `.git/config`:

Find where the submodule is configured:

```
[submodule "packages/icon/assets"]
  active = true
  url = git@github.com:8x8/oxygen-icons.git
```

You will want to update the branch:

```
[submodule "packages/icon/assets"]
  active = true
  url = git@github.com:8x8/oxygen-icons.git
  branch = favorite-icon
```

b. Update the submodule from remote:

```
git submodule update --remote
```

This should yield a diff in the assets folder:

```git
--- a/packages/icon/assets
+++ b/packages/icon/assets
@@ -1 +1 @@
-Subproject commit 0bd0dd04c04752895063f360fbae51a72f3feeff
+Subproject commit c1ad32bb7cabe4d21b61b68af68642536002c2bb
```

c. Now you can run the steps from 3. & 4. to do the update and verify that all is good.

d. Clean up — revert back to master on the `oxygen-icons` repository

```
[submodule "packages/icon/assets"]
  active = true
  url = git@github.com:8x8/oxygen-icons.git
```

## Icon deprecation steps:

- In order to set deprecation warning message to one or more Icon components, add into `./packages/icon/scripts/deprecatedIcons.js` file, in exported object:
  - key: the name of the icon to be deprecated
  - value: deprecation message; if empty string is provided, the default deprecation message will be logged.
  - Example:
  ```
  {
      ExcalmationIcon: '',
      ExcalmationSolidIcon:
        'The "ExcalmationSolidIcon" is deprecated; Please use "ExclamationCircleSolidIcon" instead'
  }
  ```

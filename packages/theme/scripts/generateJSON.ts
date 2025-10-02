/* eslint-disable no-console */
import path from 'node:path';
import { promises as fsPromises } from 'node:fs';

import themes from '../src';

[
  { name: 'light.json', src: themes.light },
  { name: 'dark.json', src: themes.dark },
  { name: 'neoLight.json', src: themes.neoLight },
  { name: 'neoDark.json', src: themes.neoDark },
  { name: 'colorPalette.json', src: themes.colorPalette },
].map(async ({ name, src }) => {
  try {
    fsPromises.writeFile(
      path.join('../../storybook', name),
      JSON.stringify(src, null, 2),
    );
    console.log('File written', { name, src });
  } catch (err) {
    console.error('Failed to write file', { name, src });

    if (err) throw err;
  }
});

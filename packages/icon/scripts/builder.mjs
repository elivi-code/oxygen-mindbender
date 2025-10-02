/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import readdir from 'recursive-readdir';
import { optimize } from 'svgo';

import deprecatedIconWarnings from './deprecatedIcons.mjs';

// Path where to save the generated react svg components
const ROOT_DEST_PATH = new URL(path.join(import.meta.url, '..', '..', 'src'))
  .pathname;
// The path from where to read the svg files
const SVG_PATH_ICONS = new URL(
  path.join(import.meta.url, '..', '..', 'assets', 'Classic'),
).pathname;

const SVG_PATH_NOVO = new URL(
  path.join(import.meta.url, '..', '..', 'assets', 'Novo'),
).pathname;

// Template used to create the react svg component
const TEMPLATE = readFileSync(new URL('./SvgIcon.template', import.meta.url), {
  encoding: 'utf8',
});
const TEMPLATE_DEPRECATED = readFileSync(
  new URL('./SvgDeprecatedIcon.template', import.meta.url),
  {
    encoding: 'utf8',
  },
);
// Template used to create the storybook
const STORY_BOOK_TEMPLATE = readFileSync(
  new URL('./StoryBook.template', import.meta.url),
  { encoding: 'utf8' },
);
const TEST_TEMPLATE = readFileSync(
  new URL('./SvgIconTest.template', import.meta.url),
  { encoding: 'utf8' },
);

const FILL_REPLACEMENT_IGNORE = [
  'MessengerBlackIcon',
  'TwitterBlackIcon',
  'WhatsappBlackIcon',
];

// GLOBALS
const componentNameList = [];
const index = [
  '/* THIS IS A GENERATED FILE, DO NOT EDIT THIS DIRECTLY AS YOU WILL LOOSE ANY EDITS */',
  `export { default as Icon, type IconProps } from './utils/Icon';`,
];
const storyBookComponentList = [];
const storyBookImports = [];
/**
 * Keep a list of items which we don't want to market as usable in Storybook
 * For example: deprecated items
 */
const IGNORE_ICONS = ['OminchannelIcon'];
let storyBookComponentName = '';
let storyBookCategory = '';

/**
 * Add file entry
 *
 * @param {string} componentName
 *
 */
function addFileEntry(componentName, categoryName, folderName) {
  // Add entry to index file content
  index.push(
    `export { default as ${componentName} } from './${folderName}/${componentName}';`,
  );

  if (categoryName !== storyBookCategory) {
    storyBookComponentList.push(`
        <Label style={{ width: '100%', textAlign: 'left', fontWeight: 'bold' }}>${categoryName}</Label>
    `);

    storyBookCategory = categoryName;
  }

  // Prepare component props
  let componentProps = '';

  if (componentName === 'BrandLogoIcon') {
    // for Brand Logo we have a different viewBox & fill is set to match the brand
    componentProps = `${componentProps} viewBox="0 0 140 63" color="#E52920"`;
  }

  // Don't add the icon to the storybook if it's in the ignore list
  if (IGNORE_ICONS.includes(componentName)) {
    return;
  }
  // Add entry to storyBook icons list
  storyBookComponentList.push(`
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <${componentName}${componentProps} />
          <Label>${componentName}</Label>
        </div>
  `);

  // Add entry to storyBook imports list
  storyBookImports.push(componentName);
}

/**
 * Return Pascal-Cased component name.
 *
 * @param {string} svgPath
 * @returns {string} component name
 */
function getComponentName(svgPath) {
  const svgName = path.basename(svgPath);
  const splitregex = new RegExp(`[${path.sep}-]+`);

  const parts = svgName
    .replace('.svg', '')
    .replace('@', 'AtSign') // don't allow @ in file name or component name
    .split(splitregex)
    .map(part => part.charAt(0).toUpperCase() + part.substring(1));

  return parts.join('');
}

/**
 * Return the name of the component's category
 *
 * @param svgPath
 * @return {String}
 */
function getCategoryName(svgPath) {
  return path.dirname(svgPath).split(path.sep).pop();
}

/**
 * Get svg paths
 *
 * @param {string} svgContent
 * @returns {string} svgPaths
 *
 */
function getSvgPaths(svgContent, componentName) {
  const svgWithoutRect = svgContent.replace(
    '<rect width="24" height="24"/>',
    '',
  );

  // Optimize the svg
  const optimizedSvg = optimize(svgWithoutRect, {
    floatPrecision: 4,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // this is required as the SVG's will use the same id and the fill from one will be used across all
            cleanupIds: false,
          },
        },
      },
    ],
  });
  const result = optimizedSvg && optimizedSvg.data;

  console.log({ componentName, svgWithoutRect, svgContent, result });

  // Remove unused tags, fix property names
  // @todo svgo might be able to replace these
  let svgPaths = result
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .replace(/xlink:href=/g, 'xlinkHref=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/clip-path=/g, 'clipPath=');

  // Do not remove the fill for the following components
  if (!FILL_REPLACEMENT_IGNORE.includes(componentName)) {
    svgPaths = svgPaths.replace(/( fill=")#[a-zA-Z0-9]*"/g, '');
  }

  return svgPaths;
}

/**
 * Generate the index file
 *
 */
function generateIndexFile() {
  console.log('Generate index.tsx file');

  // Write the index file to disk
  try {
    // add an empty entry to have a new line at the end of the file
    index.push('');
    const indexContent = index.join('\n');
    const indexFilePath = path.join(ROOT_DEST_PATH, 'index.tsx');

    mkdirSync(ROOT_DEST_PATH, { recursive: true });
    writeFileSync(indexFilePath, indexContent);
  } catch (err) {
    console.error('Failed to generate the index file', err);
  }
}

/**
 * Generate the storybook
 *
 */
function generateStoryBook() {
  console.log('Generate stories/Icon.guidelines.stories.tsx');
  const imports = storyBookImports
    .map(componentName => `import { ${componentName} } from '@8x8/oxygen-icon'`)
    .join(';\n');
  const componentList = storyBookComponentList.join('');

  // Generate the file content for the storyBook
  const storyBookContent = STORY_BOOK_TEMPLATE.replace('$imports$', imports)
    .replace('$componentList$', componentList)
    .replace(/\$componentName\$/g, storyBookComponentName)
    .replace('$iconSet$', '01. Guidelines');

  // Write the index file to disk
  try {
    const storyBookFilePath = new URL(
      path.resolve('stories', `Icon.guidelines.stories.tsx`),
      import.meta.url,
    );

    writeFileSync(storyBookFilePath, storyBookContent);
  } catch (err) {
    console.error('Failed to generate the story book file', err);
  }
}

/**
 * Generate the react svg component
 *
 * @param {string} filePath
 * @param {string} componentName
 *
 */
function generateReactSvgComponent(filePath, componentName, folderName) {
  const svgContent = readFileSync(filePath, { encoding: 'utf8' });
  const deprecatedIcons = Object.keys(deprecatedIconWarnings);

  // Extract paths from svg
  const paths = getSvgPaths(svgContent, componentName);
  const template =
    deprecatedIcons.indexOf(componentName) !== -1
      ? TEMPLATE_DEPRECATED
      : TEMPLATE;

  // Generate the file content for the react SVG component
  const reactSvgComponentContent = template
    .replace('$paths$', paths)
    .replace('$componentName$', componentName)
    .replace('$deprecatedIconWarning$', deprecatedIconWarnings[componentName]);

  // Write the react svg component file to disk
  try {
    const reactSvgComponentPath = path.join(folderName, `${componentName}.tsx`);

    console.log(
      `Generate react svg component ${componentName} in ${folderName}`,
      reactSvgComponentPath,
    );

    mkdirSync(folderName, { recursive: true });
    writeFileSync(reactSvgComponentPath, reactSvgComponentContent);
  } catch (err) {
    console.error('Failed to generate the react svg component:', err);
  }
}

function generateComponentTest(componentName, folderName) {
  const componentTestContent = TEST_TEMPLATE.replace(
    /\$componentName\$/g,
    componentName,
  );

  // Write the react component test file to disk
  try {
    const componentTestPath = path.join(
      folderName,
      `${componentName}.test.tsx`,
    );

    mkdirSync(folderName, { recursive: true });
    writeFileSync(componentTestPath, componentTestContent);
  } catch (err) {
    console.error('Failed to generate the react component test:', err);
  }
}

function moveSvgFile(filePath, componentName, folderName) {
  const iconSvgFilePath = path.join(folderName, `${componentName}.svg`);

  copyFileSync(filePath, iconSvgFilePath);
}

// Create react svg components from svg files and
// add file entry
// generate inde.tsx file
// generate stories//Icon.guidelines.stories.tsx files
// ignore '.git', 'icons-for-export.sketch' and 'README.md' files
Promise.all([
  readdir(SVG_PATH_ICONS, [
    '.git',
    'icons-for-export.sketch',
    'README.md',
  ]).then(
    files => {
      const PATH = 'icons';

      files.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      files.forEach(file => {
        const fileName = getComponentName(file);
        const componentName = `${fileName}Icon`;
        const categoryName = getCategoryName(file);

        storyBookComponentName = storyBookComponentName || componentName;

        if (componentNameList.indexOf(componentName) < 0) {
          addFileEntry(componentName, categoryName, PATH);
          generateReactSvgComponent(
            file,
            componentName,
            path.join('src', PATH),
          );
          generateComponentTest(componentName, path.join('src', PATH));
          moveSvgFile(file, componentName, path.join('src', PATH));
          componentNameList.push(componentName);

          return;
        }
        console.error('Duplicated componentName:', componentName);
      });
    },
    error => {
      console.error('Failed to recursively read the directories:', error);
    },
  ),

  readdir(SVG_PATH_NOVO, ['.git', 'icons-for-export.sketch', 'README.md'])
    .then(
      files => {
        const PATH = 'novo';

        files.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        files.forEach(file => {
          const fileName = getComponentName(file);
          const componentName = `${fileName}Icon`;
          const categoryName = getCategoryName(file);

          storyBookComponentName = storyBookComponentName || componentName;

          if (componentNameList.indexOf(componentName) < 0) {
            addFileEntry(componentName, categoryName, PATH);
            generateReactSvgComponent(
              file,
              componentName,
              path.join('src', PATH),
            );
            generateComponentTest(componentName, path.join('src', PATH));
            moveSvgFile(file, componentName, path.join('src', PATH));
            componentNameList.push(componentName);

            return;
          }
          console.error('Duplicated componentName:', componentName);
        });
      },
      error => {
        console.error('Failed to recursively read the directories:', error);
      },
    )
    .then(() => {
      generateStoryBook();
    }),
]).then(() => {
  generateIndexFile();
});

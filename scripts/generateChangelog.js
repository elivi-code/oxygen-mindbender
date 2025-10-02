const {
  createWriteStream,
  existsSync,
  lstatSync,
  readdirSync,
  readFileSync,
} = require('node:fs');
const { join } = require('node:path');
const util = require('node:util');
const parseChangelog = require('changelog-parser');
const { compareVersions } = require('compare-versions');
const co = require('co');
const yargs = require('yargs');

// flag to run only unreleased version
const { unreleased } = yargs(process.argv.slice(2)).argv;
// output file
const outputFile = unreleased ? 'UNRELEASED_CHANGELOG.md' : 'CHANGELOG.md';

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);
const log = args => {
  // eslint-disable-next-line no-console
  console.log(
    util.inspect(args, { showHidden: false, depth: null, colors: true }),
  );
};
/**
 * If the text contains a Jira issue key for OX, it will be replaced with a link to the issue
 * @param {string} text
 */
const regexOxJira = /(OX-\d+)/gi;
const addJiraLink = text => {
  if (text.match(regexOxJira)) {
    return text.replace(regexOxJira, `[$1](https://agile.8x8.com/browse/$1)`);
  }

  return text;
};
const categories = ['Changed', 'Added', 'Removed', 'Fixed'];
const packageDirs = getDirectories('packages');

co(function* changelogParser() {
  // keep a normalized object of all the changelogs with each version as key
  const global = new Map();
  const versionDates = new Map();

  // read each package changelog
  for (const packageDir of packageDirs) {
    const changelogFilePath = `${packageDir}/CHANGELOG.md`;
    let changelogExists = false;
    let parsedChangelog;

    try {
      if (existsSync(changelogFilePath)) {
        changelogExists = true;
      }
    } catch (err) {
      changelogExists = false;
    }

    if (!changelogExists) {
      log(`CHANGELOG.md not found in ${packageDir}/`);
      continue;
    }

    const fileContent = readFileSync(changelogFilePath, 'utf8');

    if (process.env.DEBUG) {
      log({ changelogFilePath, fileContent });
    }

    try {
      parsedChangelog = yield parseChangelog({
        text: fileContent,
        removeMarkdown: false,
      });
    } catch (error) {
      log(`${changelogFilePath} can not be parsed`);
      continue;
    }

    if (process.env.DEBUG) {
      log({ parsedChangelog });
    }

    // add each found verison to the global object
    for (const changelogVersion of parsedChangelog.versions) {
      const { title, date, body, version, parsed } = changelogVersion;

      if (!body) {
        continue;
      }

      // ignore unreleased versions for global changelog and vice-versa
      if (unreleased) {
        if (title !== '[Unreleased]') {
          continue;
        }
      } else if (title === '[Unreleased]') {
        continue;
      }

      if (!global.has(version)) {
        global.set(version, new Map());
      }

      if (!versionDates.has(version)) {
        versionDates.set(version, date);
      }

      global
        .get(version)
        .set(`### ${parsedChangelog.title.replace(' CHANGELOG', '')}`, parsed);
    }
  }

  if (process.env.DEBUG) {
    log({ global });
  }

  // Sort versions descending
  const globalSorted = new Map(
    [...global.entries()].sort((a, b) => -1 * compareVersions(a[0], b[0])),
  );

  if (process.env.DEBUG) {
    log(globalSorted);
  }

  // write to file
  const fileStream = createWriteStream(outputFile);

  // file title
  fileStream.write('# @8x8/oxygen CHANGELOG\n');

  for (const [version, packages] of globalSorted) {
    if (process.env.DEBUG) {
      log({ version, packages, date: versionDates.get(version) });
    }
    // write version
    const versionTitle = unreleased
      ? '[Unreleased]'
      : `[${version}] - ${versionDates.get(version)}`;

    fileStream.write(`\n## ${versionTitle}\n`);

    for (const [title, body] of packages) {
      // write package name
      fileStream.write(`\n${title}\n`);
      // get categories (Changed, Added, Removed, Fixed) and their content
      categories.forEach(category => {
        if (body[category]) {
          fileStream.write(`\n#### ${category}\n\n`);

          for (const item of body[category]) {
            fileStream.write(`${addJiraLink(item)}\n`);
          }
        }
      });
    }
  }
}).catch(error => log(error));

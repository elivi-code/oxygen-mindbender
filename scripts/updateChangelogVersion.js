/* eslint-disable */

const parseChangelog = require('changelog-parser');
const {
  lstatSync,
  readdirSync,
  existsSync,
  readFileSync,
  writeFileSync,
} = require('fs');
const { join } = require('path');
const eol = require('eol');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const packageDirs = getDirectories('packages');
const packageJson = readFileSync('package.json');
const newVersion = JSON.parse(packageJson).version;
const unreleasedVersion = '[Unreleased]';

packageDirs.forEach(async packageDir => {
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
    console.log(`CHANGELOG.md not found in ${packageDir}/`);
    return;
  }

  const fileContent = readFileSync(changelogFilePath, 'utf8');

  try {
    parsedChangelog = await parseChangelog({
      text: fileContent,
    });
  } catch (error) {
    console.log(`${changelogFilePath} can not be parsed`);
    return;
  }

  let newChangelogContent = `# ${parsedChangelog.title}\n`;

  newChangelogContent += `\n## ${unreleasedVersion}\n`;

  parsedChangelog.versions.forEach(({ title, body }) => {
    if (!body) {
      return;
    }

    let versionTitle = title;

    if (title === unreleasedVersion) {
      versionTitle = `[${newVersion}] - ${new Date()
        .toISOString()
        .substr(0, 10)}`;
    }

    newChangelogContent += `\n## ${versionTitle}\n\n${body}\n`;
  });

  writeFileSync(changelogFilePath, eol.lf(newChangelogContent));
});

/* eslint-enable */

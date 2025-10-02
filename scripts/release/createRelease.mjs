import childProcess from 'node:child_process';
import util from 'node:util';
import fs from 'node:fs';
import yargs from 'yargs';
import chalk from 'chalk';
import { loadJsonFile } from 'load-json-file';
import { writeJsonFile } from 'write-json-file';

const exec = util.promisify(childProcess.exec);
const { log } = console;

const { versionToRelease } = yargs(process.argv.slice(2)).argv;
// update to allow pre-release form from https://regexr.com/39s32
const versionCheckRegex =
  /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/;

if (!versionCheckRegex.test(versionToRelease)) {
  log(
    chalk.red(
      'Incorrect version-to-release value. Version format example: 1.12.99',
    ),
  );

  process.exit(1);
}

async function doesNewReleaseBranchOrTagExist() {
  log(chalk.blue('Checking if release branch already exists'));
  const { stdout, stderr } = await exec('git branch -r');

  if (stderr) {
    throw new Error('Could not validate branch names');
  }

  const branchName = `origin/release/${versionToRelease}`;

  if (stdout.indexOf(branchName) > -1) {
    throw new Error(
      `A release branch already exists for version ${versionToRelease}`,
    );
  }

  log(chalk.blue('Checking if tag already exists'));

  const { stdout: stdoutTag, stderr: stderrTag } = await exec(
    `git tag -l v${versionToRelease}`,
  );

  if (stderrTag) {
    throw new Error('Chould not validate tag name');
  }

  if (stdoutTag.length) {
    throw new Error(`Tag v${versionToRelease} already exists`);
  }
}

async function createNewReleaseBranch() {
  log(chalk.blue('Creating new release branch'));
  await exec(`git checkout -b release/${versionToRelease}`);

  log(chalk.green(`Branch release/${versionToRelease} created`));
}

async function updateVersionInRootPackageJson() {
  log(chalk.blue('Updating version in root package.json'));
  const rootPackageJson = await loadJsonFile('./package.json');
  rootPackageJson.version = versionToRelease;
  await writeJsonFile('./package.json', rootPackageJson, {
    detectIndent: true,
  });
  log(
    chalk.green(`Version in root package.json updated to ${versionToRelease}`),
  );
}

async function updateConfigPeerDependencyVersion() {
  log(chalk.blue('Updating @8x8/oxygen-config version in all packages'));
  const dirs = await fs.promises.readdir('./packages');

  for (const dir of dirs) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const packageJson = await loadJsonFile(`./packages/${dir}/package.json`);
      if (
        packageJson.peerDependencies &&
        packageJson.peerDependencies['@8x8/oxygen-config']
      ) {
        packageJson.peerDependencies[
          '@8x8/oxygen-config'
        ] = `^${versionToRelease} || >=${versionToRelease}`;
        // eslint-disable-next-line no-await-in-loop
        await writeJsonFile(`./packages/${dir}/package.json`, packageJson, {
          detectIndent: true,
        });
        log(chalk.green(`${dir}/package.json updated`));
      }
    } catch (error) {
      log(chalk.red(error));
      log(
        chalk.yellow(
          'Info: Folders without package.json are kept for CHANGELOG.md',
        ),
      );
    }
  }
}

async function updateChangelogs() {
  log(chalk.blue('Updating CHANGELOGs'));
  await exec('yarn run changelog:update-version');
  await exec('yarn run changelog');
  log(chalk.green('CHANGELOGs updated'));
}

async function createUpdateVersionCommit() {
  log(
    chalk.blue(
      `Creating '[NO-TICKET] Update version in package.json and changelog docs to ${versionToRelease}' commit`,
    ),
  );
  await exec('git add .');
  await exec(
    `git commit -m "[NO-TICKET] Update version in package.json and changelog docs to ${versionToRelease}"`,
  );
  log(chalk.green('Commit created'));
}

async function runUpdateVersion() {
  log(chalk.blue('Updating packages version'));
  await exec(`yarn run update:version ${versionToRelease}`);
  log(chalk.green('Versions updated in all packages'));
}

async function pushToOrigin() {
  log(
    chalk.blue(
      `Pushing branch release/${versionToRelease} and tag v${versionToRelease} to origin`,
    ),
  );
  await exec(`git push origin release/${versionToRelease} --follow-tags`);
  log(chalk.blue('Push complete'));
}

async function run() {
  try {
    log(
      chalk.white.bgBlue(
        `Starting release process for version ${versionToRelease}`,
      ),
    );

    await doesNewReleaseBranchOrTagExist();
    await createNewReleaseBranch();
    await updateVersionInRootPackageJson();
    await updateConfigPeerDependencyVersion();
    await updateChangelogs();
    await createUpdateVersionCommit();
    await runUpdateVersion();
    await pushToOrigin();

    log(chalk.white.bgGreen(`SUCCESS`));
    log(
      chalk.white.bgBlue(
        `Version ${versionToRelease} will be published to the repository by the Jenkins pipeline`,
      ),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
}

run();

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

const { log, error: logError } = console;

function validateVersionNumber(versionToRelease) {
  const versionCheckRegex =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm;

  return versionCheckRegex.test(versionToRelease);
}

async function doesVersionExist(version) {
  log('[OXYGEN] Checking version in repository', version);

  try {
    const { stdout } = await exec(`npm view @8x8/oxygen-constants@${version}`);

    if (!stdout) {
      return false;
    }

    return true;
  } catch (error) {
    log('[OXYGEN] Cannot check version in repository');
    logError(error);

    return false;
  }
}

async function publishPackage() {
  const { env } = process;
  const buildBranch = env.BRANCH_NAME;
  const isReleaseBranch = !!buildBranch.match(/release\/.*$/);

  log(`[OXYGEN] buildBranch:`, buildBranch);
  log(`[OXYGEN] isReleaseBranch:`, isReleaseBranch);

  if (!isReleaseBranch) {
    log(`[OXYGEN] Oxygen package is published only for release branches`);
    log('[OXYGEN] Stopping publish package.');

    return;
  }

  const versionToRelease = buildBranch.match(/release\/(.*)$/)[1];
  const isVersionPublished = await doesVersionExist(versionToRelease);

  log(`[OXYGEN] versionToRelease`, versionToRelease);
  log('[OXYGEN] isVersionPublished', isVersionPublished);

  if (isVersionPublished) {
    log(`[OXYGEN] Version ${versionToRelease} already published, cancelling`);

    process.exit(0);
  }

  if (!validateVersionNumber(versionToRelease)) {
    log(
      `[OXYGEN] Incorrect build-branch value. Version format examples: 1.22.0, 1.3.4-alpha.1.1 or 1.12.99-prerelease+meta`,
    );
    process.exit(1);
  }

  let lernaData = {};

  try {
    const data = fs.readFileSync('./lerna.json');

    lernaData = JSON.parse(data);
  } catch (e) {
    log('[OXYGEN] Error reading lerna.json file');
    process.exit(1);
  }

  if (lernaData.version !== versionToRelease) {
    log(
      `[OXYGEN] The version in release branch name (${versionToRelease}) does not match with the version in lerna.json file (${lernaData.version})`,
    );
    process.exit(1);
  }

  log(`[OXYGEN] Publishing package with version ${versionToRelease}`);
  await exec(`yarn run lerna:version`);
  await exec(`yarn run lerna:publish ${versionToRelease}`);
  log('[OXYGEN] Publish complete');
}

publishPackage();

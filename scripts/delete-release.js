const fs = require('fs');
const path = require('path');
const { buildFileName } = require('./release-utils');

const RELEASES_DIR = path.join(__dirname, '..', 'docs', 'releases');

async function main() {
  const releaseName = process.env.RELEASE_NAME?.trim();

  if (!releaseName) {
    throw new Error('RELEASE_NAME env var is required');
  }

  const fileName = buildFileName(releaseName);
  const filePath = path.join(RELEASES_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: release file not found, nothing to delete: ${fileName}`);
    return;
  }

  fs.unlinkSync(filePath);
  console.log(`Deleted: ${fileName}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const fs = require('fs');
const path = require('path');
const { RELEASES_DIR, buildFileName, deleteVersionedRelease } = require('./release-utils');

async function main() {
  const releaseName = process.env.RELEASE_NAME?.trim();

  if (!releaseName) {
    throw new Error('RELEASE_NAME env var is required');
  }

  const fileName = buildFileName(releaseName);
  const filePath = path.join(RELEASES_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: release file not found, nothing to delete: ${fileName}`);
  } else {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${fileName}`);
  }

  deleteVersionedRelease(fileName);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

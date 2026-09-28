const fs = require('fs');
const path = require('path');
const {
  RELEASES_DIR,
  ARCHIVED_RELEASES_DIR,
  listReleaseFiles,
  syncReleasePositions,
  upsertReleaseRedirect,
} = require('./release-utils');

// Number of most recent releases to keep in the main releases folder.
const ACTIVE_RELEASES_LIMIT = 10;

// Release notes reference local images as require('./img/<file>'); keep those alongside the moved file.
function moveReferencedImages(content, fileName) {
  const matches = Array.from(content.matchAll(/require\(['"]\.\/img\/([^'"]+)['"]\)/g));

  const sourceImageDir = path.resolve(RELEASES_DIR, 'img');
  const destinationImageDir = path.resolve(ARCHIVED_RELEASES_DIR, 'img');

  matches.forEach((match) => {
    const imageName = match[1];
    const srcImagePath = path.resolve(sourceImageDir, imageName);
    const destImagePath = path.resolve(destinationImageDir, imageName);

    if (
      !srcImagePath.startsWith(sourceImageDir + path.sep) ||
      !destImagePath.startsWith(destinationImageDir + path.sep)
    ) {
      console.warn(`Skipping unsafe image path for ${fileName}: ${imageName}`);
      return;
    }

    if (!fs.existsSync(srcImagePath)) return;

    fs.mkdirSync(path.dirname(destImagePath), { recursive: true });

    if (fs.existsSync(destImagePath)) {
      console.warn(
        `Skipping image for ${fileName}: ${imageName} already exists in archived-releases/img.`,
      );
      return;
    }

    fs.renameSync(srcImagePath, destImagePath);
    console.log(`Moved image: ${imageName}`);
  });
}

// Moves a release file (and its referenced image, if any) from releases/ to releases/archived-releases/.
function moveRelease(fileName) {
  const srcPath = path.join(RELEASES_DIR, fileName);
  const destPath = path.join(ARCHIVED_RELEASES_DIR, fileName);

  if (fs.existsSync(destPath)) {
    console.warn(`Skipping ${fileName}: already exists in archived-releases.`);
    return false;
  }

  const content = fs.readFileSync(srcPath, 'utf-8');
  fs.renameSync(srcPath, destPath);
  console.log(`Archived: ${fileName}`);

  moveReferencedImages(content, fileName);

  const slug = fileName.replace(/\.md$/, '');
  upsertReleaseRedirect(`/releases/${slug}`, `/releases/archived-releases/${slug}`);

  return true;
}

function main() {
  fs.mkdirSync(ARCHIVED_RELEASES_DIR, { recursive: true });

  const files = listReleaseFiles(RELEASES_DIR);
  const toArchive = files.slice(ACTIVE_RELEASES_LIMIT);

  const archived = toArchive.filter(moveRelease).length;

  const activeReordered = syncReleasePositions(RELEASES_DIR);
  const archivedReordered = syncReleasePositions(ARCHIVED_RELEASES_DIR);

  console.log(
    `\nDone. ${archived} release(s) archived, ${activeReordered.length} position(s) updated in releases/, ` +
      `${archivedReordered.length} position(s) updated in releases/archived-releases/.`,
  );
}

main();

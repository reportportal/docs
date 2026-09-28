/* eslint-disable import/no-extraneous-dependencies */
import { visit } from 'unist-util-visit';
import { imageSizeFromFile } from 'image-size/fromFile';
import path from 'path';
import fs from 'fs';

async function processNode(node, mdxDir) {
  const typeAttr = node.attributes.find((attribute) => attribute.name === 'type');
  if (typeAttr?.value === 'video') return;

  const hasWidth = node.attributes.some((attribute) => attribute.name === 'width');
  const hasHeight = node.attributes.some((attribute) => attribute.name === 'height');
  if (hasWidth && hasHeight) return;

  const srcAttr = node.attributes.find((attribute) => attribute.name === 'src');
  const thumbnailAttr = node.attributes.find((attribute) => attribute.name === 'thumbnail');
  const displayedImageAttr = thumbnailAttr ?? srcAttr;
  if (!displayedImageAttr?.value || typeof displayedImageAttr.value !== 'object') return;

  const exprText = displayedImageAttr.value.value;
  const match = exprText?.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/);
  if (!match) return;

  const imgAbsPath = path.resolve(mdxDir, match[1]);
  if (!fs.existsSync(imgAbsPath)) return;

  try {
    const { width, height } = await imageSizeFromFile(imgAbsPath);
    if (!width || !height) return;

    if (!hasWidth) {
      node.attributes.push({ type: 'mdxJsxAttribute', name: 'width', value: String(width) });
    }
    if (!hasHeight) {
      node.attributes.push({ type: 'mdxJsxAttribute', name: 'height', value: String(height) });
    }
  } catch {
    // Ignore unreadable or unsupported image formats.
  }
}

export default function remarkMediaViewerDimensions() {
  return async (tree, file) => {
    const mdxFilePath = file.path;
    if (!mdxFilePath) return;

    const mdxDir = path.dirname(mdxFilePath);
    const mediaViewerNodes = [];

    visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node) => {
      if (node.name === 'MediaViewer') {
        mediaViewerNodes.push(node);
      }
    });

    await Promise.all(mediaViewerNodes.map((node) => processNode(node, mdxDir)));
  };
}

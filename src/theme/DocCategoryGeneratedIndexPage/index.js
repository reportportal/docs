/* eslint-disable react/jsx-filename-extension, react/jsx-props-no-spreading */
import React from 'react';
import Head from '@docusaurus/Head';
import { useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import DocCategoryGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';

export default function DocCategoryGeneratedIndexPageWrapper(props) {
  const versionMetadata = useDocsVersion();

  return (
    <>
      {!versionMetadata.isLast && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <DocCategoryGeneratedIndexPage {...props} />
    </>
  );
}

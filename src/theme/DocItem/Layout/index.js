/* eslint-disable react/jsx-filename-extension, react/no-array-index-key, react/jsx-props-no-spreading */
import React from 'react';
import Head from '@docusaurus/Head';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { usePluginData } from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OriginalLayout from '@theme-original/DocItem/Layout';

import { buildJsonLd } from '@site/src/lib/schemaOrg';

const PLUGIN_NAME = 'plugin-schema-org';

function lookupEntry(schemaMap, permalink) {
  if (!permalink) return undefined;
  const withSlash = permalink.endsWith('/') ? permalink : `${permalink}/`;
  const withoutSlash = permalink.endsWith('/') ? permalink.slice(0, -1) : permalink;
  return schemaMap[permalink] || schemaMap[withSlash] || schemaMap[withoutSlash];
}

export default function DocItemLayoutWithSchema(props) {
  const { metadata, frontMatter } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const schemaMap = usePluginData(PLUGIN_NAME) || {};

  const entry = lookupEntry(schemaMap, metadata && metadata.permalink);
  const jsonLdBlocks = buildJsonLd({ siteConfig, metadata, frontMatter, entry });

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <Head key={`schema-${index}`}>
          <script type="application/ld+json">{JSON.stringify(block)}</script>
        </Head>
      ))}
      <OriginalLayout {...props} />
    </>
  );
}

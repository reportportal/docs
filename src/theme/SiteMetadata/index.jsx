import React from 'react';
import PropTypes from 'prop-types';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { PageMetadata, useThemeConfig } from '@docusaurus/theme-common';
import { DEFAULT_SEARCH_TAG } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import { applyTrailingSlash } from '@docusaurus/utils-common';
import SearchMetadata from '@theme/SearchMetadata';
import {
  useActivePlugin,
  useActiveDocContext,
  useDocVersionSuggestions,
} from '@docusaurus/plugin-content-docs/client';

function useDefaultCanonicalUrl() {
  const {
    siteConfig: { url: siteUrl, baseUrl, trailingSlash },
  } = useDocusaurusContext();
  const { pathname } = useLocation();
  const canonicalPathname = applyTrailingSlash(useBaseUrl(pathname), {
    trailingSlash,
    baseUrl,
  });
  return siteUrl + canonicalPathname;
}

function CanonicalUrlHeaders({ permalink }) {
  const {
    siteConfig: { url: siteUrl, baseUrl, trailingSlash },
  } = useDocusaurusContext();
  const defaultCanonicalUrl = useDefaultCanonicalUrl();
  const canonicalUrl = permalink
    ? siteUrl + applyTrailingSlash(permalink, { trailingSlash, baseUrl })
    : defaultCanonicalUrl;
  return (
    <Head>
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

CanonicalUrlHeaders.propTypes = {
  permalink: PropTypes.string,
};

CanonicalUrlHeaders.defaultProps = {
  permalink: undefined,
};

function getVersionMainDoc(version) {
  return version?.docs.find((doc) => doc.id === version.mainDocId);
}

function VersionedCanonicalHeaders({ pluginId }) {
  const { activeVersion } = useActiveDocContext(pluginId);
  const { latestDocSuggestion, latestVersionSuggestion } = useDocVersionSuggestions(pluginId);
  const latestMainDoc = getVersionMainDoc(latestVersionSuggestion);
  const canonicalPath = (latestDocSuggestion ?? latestMainDoc)?.path;

  if (!activeVersion || activeVersion.isLast) {
    return <CanonicalUrlHeaders />;
  }

  // Same doc in latest, or the latest index when that doc was removed.
  return <CanonicalUrlHeaders permalink={canonicalPath} />;
}

VersionedCanonicalHeaders.propTypes = {
  pluginId: PropTypes.string.isRequired,
};

export default function SiteMetadata() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const { metadata, image: defaultImage } = useThemeConfig();
  const activePlugin = useActivePlugin();
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <body className="navigation-with-keyboard" />
      </Head>

      {defaultImage && <PageMetadata image={defaultImage} />}

      {activePlugin ? (
        <VersionedCanonicalHeaders pluginId={activePlugin.pluginId} />
      ) : (
        <CanonicalUrlHeaders />
      )}

      <SearchMetadata tag={DEFAULT_SEARCH_TAG} locale={currentLocale} />

      <Head>
        {metadata.map((metadatum, i) => (
          // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
          <meta key={i} {...metadatum} />
        ))}
      </Head>
    </>
  );
}

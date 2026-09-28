import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  useActivePlugin,
  useDocVersionSuggestions,
  useDocsPreferredVersion,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';

function UnreleasedVersionLabel({ productName, versionMetadata }) {
  return (
    <Translate
      id="theme.docs.versions.unreleasedVersionLabel"
      description="The label used to tell the user that he's browsing an unreleased doc version"
      values={{
        productName,
        versionLabel: <b>{versionMetadata.label}</b>,
      }}
    >
      {'You are viewing unreleased {productName} documentation version {versionLabel}.'}
    </Translate>
  );
}

UnreleasedVersionLabel.propTypes = {
  productName: PropTypes.string.isRequired,
  versionMetadata: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

function UnmaintainedVersionLabel({ productName, versionMetadata }) {
  return (
    <Translate
      id="theme.docs.versions.unmaintainedVersionLabel"
      description="The label used to tell the user that he's browsing an unmaintained doc version"
      values={{
        productName,
        versionLabel: <b>{versionMetadata.label}</b>,
      }}
    >
      {'You are viewing {productName} documentation version {versionLabel}.'}
    </Translate>
  );
}

UnmaintainedVersionLabel.propTypes = {
  productName: PropTypes.string.isRequired,
  versionMetadata: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel,
};

function BannerLabel({ productName, versionMetadata }) {
  const BannerLabelComponent = BannerLabelComponents[versionMetadata.banner];
  return <BannerLabelComponent productName={productName} versionMetadata={versionMetadata} />;
}

BannerLabel.propTypes = {
  productName: PropTypes.string.isRequired,
  versionMetadata: PropTypes.shape({
    banner: PropTypes.oneOf(['unreleased', 'unmaintained']),
    label: PropTypes.string,
  }).isRequired,
};

function LatestVersionSuggestionLabel({ versionLabel, to, onClick }) {
  return (
    <Translate
      id="theme.docs.versions.latestVersionSuggestionLabel"
      description="The label used to tell the user to check the latest version"
      values={{
        versionLabel,
        latestVersionLink: (
          <Link to={to} onClick={onClick}>
            <Translate
              id="theme.docs.versions.latestVersionLinkLabel"
              description="The label used for the latest version suggestion link label"
            >
              latest documentation
            </Translate>
          </Link>
        ),
      }}
    >
      {
        'For the latest features and updates, please visit the {latestVersionLink} ({versionLabel}).'
      }
    </Translate>
  );
}

LatestVersionSuggestionLabel.propTypes = {
  versionLabel: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function DocVersionBannerEnabled({ className = undefined, versionMetadata }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const productName = customFields?.productName ?? 'ReportPortal';
  const { pluginId } = useActivePlugin({ failfast: true });
  const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);
  const { savePreferredVersionName } = useDocsPreferredVersion(pluginId);
  const { latestDocSuggestion, latestVersionSuggestion } = useDocVersionSuggestions(pluginId);
  // Try to link to same doc in latest version (not always possible), falling
  // back to main doc of latest version
  const latestVersionSuggestedDoc =
    latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);
  return (
    <div
      className={clsx(
        className,
        ThemeClassNames.docs.docVersionBanner,
        'alert alert--warning margin-bottom--md',
      )}
      role="alert"
    >
      <div>
        <BannerLabel productName={productName} versionMetadata={versionMetadata} />
      </div>
      <div className="margin-top--md">
        <LatestVersionSuggestionLabel
          versionLabel={latestVersionSuggestion.label}
          to={latestVersionSuggestedDoc.path}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
        />
      </div>
    </div>
  );
}

DocVersionBannerEnabled.propTypes = {
  className: PropTypes.string,
  versionMetadata: PropTypes.shape({
    banner: PropTypes.oneOf(['unreleased', 'unmaintained']),
    label: PropTypes.string,
  }).isRequired,
};

export default function DocVersionBanner({ className = undefined }) {
  const versionMetadata = useDocsVersion();
  if (versionMetadata.banner) {
    return <DocVersionBannerEnabled className={className} versionMetadata={versionMetadata} />;
  }
  return null;
}

DocVersionBanner.propTypes = {
  className: PropTypes.string,
};

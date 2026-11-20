/* eslint-disable react/jsx-filename-extension, react/jsx-props-no-spreading, react/prop-types */
import React from 'react';
import FooterLinkItem from '@theme-original/Footer/LinkItem';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import { resolveFooterLink } from '../../../utils/footerVersionLinks';

export default function FooterLinkItemWrapper(props) {
  const activeVersion = useActiveVersion('default');
  const { item } = props;

  if (!item.to) {
    return <FooterLinkItem {...props} />;
  }

  const versionedItem = { ...item, to: resolveFooterLink(item.to, activeVersion?.name) };

  return <FooterLinkItem {...props} item={versionedItem} />;
}

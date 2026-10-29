/* eslint-disable react/jsx-filename-extension, react/jsx-props-no-spreading, react/prop-types */
import React from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const activePlugin = useActivePlugin({ failfast: false });
  const { mobile: isSidebar } = props;
  const divider = (
    <div className="version-selector-divider">
      <span className="version-selector-divider__line" />
    </div>
  );

  if (!activePlugin || activePlugin.pluginId === 'releases') {
    return null;
  }

  return (
    <>
      {!isSidebar && divider}
      <DocsVersionDropdownNavbarItem {...props} />
    </>
  );
}

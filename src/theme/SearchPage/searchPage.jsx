import React from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';

export function SearchPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      {/* Prop spreading is required here because this is a swizzle wrapper that must
          forward all props to the original SearchPage component without modification */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SearchPage {...props} />
    </>
  );
}

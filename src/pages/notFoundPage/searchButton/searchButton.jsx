/*
 * Copyright 2023 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import { useSearchPage } from '@docusaurus/theme-common/internal';
import {
    useAlgoliaContextualFacetFilters,
    useSearchResultUrlProcessor,
} from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import translations from '@theme/SearchTranslations';

import { Button } from '../../../components/button';
import styles from './searchButton.module.css';

function Hit({ hit, children }) {
    return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({state, onClose}) {
    const { generateSearchPageLink } = useSearchPage();

    return (
        <Link to={generateSearchPageLink(state.query)} onClick={onClose}>
            <Translate
                id="theme.SearchBar.seeAll"
                values={{count: state.context.nbHits}}>
                {'See all {count} results'}
            </Translate>
        </Link>
    );
}

function mergeFacetFilters(f1, f2) {
    const normalize = (f) => typeof f === 'string' ? [f] : f;
    return [...normalize(f1), ...normalize(f2)];
}

export function SearchButton() {
    const { siteConfig } = useDocusaurusContext();
    const algoliaConfig = siteConfig.themeConfig.algolia;
    const { siteMetadata } = useDocusaurusContext();
    const processSearchResultUrl = useSearchResultUrlProcessor();

    const contextualSearchFacetFilters =
        useAlgoliaContextualFacetFilters();

    const configFacetFilters =
        algoliaConfig.searchParameters?.facetFilters ?? [];

    const facetFilters = algoliaConfig.contextualSearch
        ? // Merge contextual search filters with config filters
        mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
        : // ... or use config facetFilters
        configFacetFilters;

    // We let user override default searchParameters if she wants to
    const searchParameters = {
        ...algoliaConfig.searchParameters,
        facetFilters,
    };

    const history = useHistory();
    const searchContainer = useRef(null);
    const searchButtonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [initialQuery, setInitialQuery] = useState(
        undefined,
    );

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onClose = useCallback(() => {
        setIsOpen(false);
        searchContainer.current?.remove();
    }, [setIsOpen]);

    const onInput = useCallback(
        (event) => {
            setIsOpen(true);
            setInitialQuery(event.key);
        },
        [setIsOpen, setInitialQuery],
    );

    const navigator = useRef({
        navigate({ itemUrl }) {
            // Algolia results could contain URL's from other domains which cannot
            // be served through history and should navigate with window.location
            if (isRegexpStringMatch(algoliaConfig.externalUrlRegex, itemUrl)) {
                window.location.href = itemUrl;
            } else {
                history.push(itemUrl);
            }
        },
    }).current;

    const transformItems = useRef(
        (items) =>
            algoliaConfig.transformItems
                ? // Custom transformItems
                algoliaConfig.transformItems(items)
                : // Default transformItems
                items.map((item) => ({
                    ...item,
                    url: processSearchResultUrl(item.url),
                })),
    ).current;

    const resultsFooterComponent = useMemo(
        () => (footerProps) => <ResultsFooter {...footerProps} onClose={onClose} />,
        [onClose],
    );

    const transformSearchClient = useCallback(
        (searchClient) => {
            searchClient.addAlgoliaAgent(
                'docusaurus',
                siteMetadata.docusaurusVersion,
            );

            return searchClient;
        },
        [siteMetadata.docusaurusVersion],
    );

    useDocSearchKeyboardEvents({
        isOpen,
        onOpen,
        onClose,
        onInput,
        searchButtonRef,
    });

    const { buttonText = 'Search', buttonAriaLabel = 'Search' } = translations.button;

    return (
        <>
            <Button ref={searchButtonRef} onClick={onOpen} ariaLabel={buttonAriaLabel}>
                <i className={styles['search-icon']} />
                {buttonText}
            </Button>
            {isOpen &&
                createPortal(
                    <DocSearchModal
                        onClose={onClose}
                        initialScrollY={window.scrollY}
                        initialQuery={initialQuery}
                        navigator={navigator}
                        transformItems={transformItems}
                        hitComponent={Hit}
                        transformSearchClient={transformSearchClient}
                        {...(algoliaConfig.searchPagePath && {
                            resultsFooterComponent,
                        })}
                        {...algoliaConfig}
                        searchParameters={searchParameters}
                        placeholder={translations.placeholder}
                        translations={translations.modal}
                    />,
                    document.body,
                )}
        </>
    );
}

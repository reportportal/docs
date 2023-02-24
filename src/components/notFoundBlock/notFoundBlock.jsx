/*
 * Copyright 2022 EPAM Systems
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

import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import { SearchButton } from './searchButton';
import styles from './notFoundBlock.module.css';

export const NotFoundBlock = () => (
    <>
        <PageMetadata title='Page Not Found' />
        <Layout>
            <div className={styles['not-found-content']}>
                <div className={styles['not-found-img']} />
                <h1 className={styles['not-found-title']}>
                    Page Not Found
                </h1>
                <p className={styles['not-found-text']}>
                    You may have used an outdated link as there have been some changes in the structure of the
                    documentation.
                </p>
                <p className={styles['not-found-text']}>
                    But it's clearly here somewhere! <br/>
                    Please, use the <strong>keyword search</strong> to find it!
                </p>
                <div className={styles['search-button-wrapper']}>
                    <SearchButton />
                </div>
            </div>
        </Layout>
    </>
);

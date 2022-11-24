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
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from '@theme/Layout';
import './notFoundBlock.css';

export const NotFoundBlock = () => {
  return (
      <>
        <PageMetadata
            title='Page Not Found'
        />
        <Layout>
          <div className={'not-found-content'}>
                <div className={'not-found-img'} />
                <h1 className={'not-found-title'}>
                  Page Not Found
                </h1>
                <p className={'not-found-text'}>
                  You may have used an outdated link as there have been some changes in the structure of the documentation.
                </p>
                <p className={'not-found-text'}>
                  But it's clearly here somewhere. <br/> Use the keyword search to find!
                </p>
          </div>
        </Layout>
      </>
  );
}

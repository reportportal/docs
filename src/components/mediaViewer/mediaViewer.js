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

import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

import './mediaViewer.css';

const TYPE_PHOTO = "photo";
const TYPE_VIDEO = "video";

export function MediaViewer({ src, type, alt, thumbnail }) {
    const [open, setOpen] = useState(false);

    return (
        <BrowserOnly>
            {() => {
                const ReactImageVideoLightbox =
                    require('react-image-video-lightbox').default;
                const assetSrc = useBaseUrl(thumbnail ? thumbnail : src);
                const isVideo = type === TYPE_VIDEO;

                if (type === TYPE_PHOTO) {
                    src = useBaseUrl(src);
                } else if (isVideo) {
                    src = src.replace('.be/', 'be.com/embed/');
                }

                return (
                        <>
                            <div className={`${!isVideo ? 'media-container' : 'video-container'}` } onClick={() => setOpen(true)} >
                                <img className={'thumbnail'} src={assetSrc} alt={alt} />
                            </div>
                            {open &&
                            <div className={'preview-container'}>
                                <ReactImageVideoLightbox
                                    data={[
                                        {
                                            url: src,
                                            thumbnail: assetSrc,
                                            type,
                                            alt,
                                        },
                                    ]}
                                    startIndex={0}
                                    onCloseCallback={() => setOpen(false)}
                                />
                            </div>
                            }
                        </>
                );
            }}
        </BrowserOnly>
    );
}



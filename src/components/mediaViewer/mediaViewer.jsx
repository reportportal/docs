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
import PropTypes from 'prop-types';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './mediaViewer.css';

const ReactImageVideoLightbox = require('react-image-video-lightbox').default;

const TYPE_PHOTO = "photo";
const TYPE_VIDEO = "video";

const getSrc = (src) => {
  return typeof src === 'string' ? src : src.default;
}

export function MediaViewer({ src, type, alt, thumbnail }) {
  const [open, setOpen] = useState(false);

  return (
    <BrowserOnly>
      {() => {
        let contentSrc = getSrc(src);
        const thumbnailSrc = thumbnail ? getSrc(thumbnail) : contentSrc;
        const isVideo = type === TYPE_VIDEO;

        if (isVideo && contentSrc.includes('youtu.be/')) {
          contentSrc = contentSrc.replace('.be/', 'be.com/embed/');
        }

        return (
          <>
            <div className={isVideo ? 'video-container' : 'media-container'} onClick={() => setOpen(true)} >
              <img className={'thumbnail'} src={thumbnailSrc} alt={alt} />
            </div>
            {open &&
              <div className={'preview-container'}>
                <ReactImageVideoLightbox
                  data={[
                    {
                      url: contentSrc,
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
MediaViewer.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf([TYPE_PHOTO, TYPE_VIDEO]),
  alt: PropTypes.string,
};
MediaViewer.defaultProps = {
  thumbnail: '',
  type: TYPE_PHOTO,
  alt: '',
};

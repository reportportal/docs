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

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import styles from './button.module.css';

export const Button = forwardRef(({ children, ariaLabel, onClick }, ref) => (
  <button
    type="button"
    aria-label={ariaLabel}
    onClick={onClick}
    className={styles.button}
    ref={ref}
  >
    {children}
  </button>
));
Button.propTypes = {
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: null,
  ariaLabel: '',
  onClick: () => {},
};

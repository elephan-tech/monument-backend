import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import favicon from '../../monument_logo-short.png';

const PageTitle = ({ title }) => (
  <Helmet title={title} link={[{ rel: 'icon', type: 'image/png', href: favicon }]} />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageTitle);

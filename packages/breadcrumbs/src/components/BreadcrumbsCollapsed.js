import React from 'react';
import PropTypes from 'prop-types';

import TextLink from '@8x8/oxygen-text-link';
import BreadcrumbsListItem from '../styled/BreadcrumbsListItem';
import BreadcrumbsSeparator from '../styled/BreadcrumbsSeparator';
import BreadcrumbContent from '../styled/BreadcrumbContent';

const BreadcrumbsCollapsed = ({ title, separator, onClick }) => (
  <BreadcrumbsListItem>
    <BreadcrumbContent>
      <TextLink size="inherit" onClick={onClick} title={title}>
        ...
      </TextLink>
      <BreadcrumbsSeparator role="separator">{separator}</BreadcrumbsSeparator>
    </BreadcrumbContent>
  </BreadcrumbsListItem>
);

BreadcrumbsCollapsed.propTypes = {
  title: PropTypes.string.isRequired,
  separator: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BreadcrumbsCollapsed;

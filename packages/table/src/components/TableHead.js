import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styled';

const TableHead = ({ children, ...otherProps }) => (
  <Styled.TableHead {...otherProps}>{children}</Styled.TableHead>
);

TableHead.propTypes = {
  /** Content */
  children: PropTypes.node.isRequired,
};

export default TableHead;

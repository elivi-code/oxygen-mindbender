import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styled';

const TableBody = ({ children, ...otherProps }) => (
  <Styled.TableBody {...otherProps}>{children}</Styled.TableBody>
);

TableBody.propTypes = {
  /** Content */
  children: PropTypes.node.isRequired,
};

export default TableBody;

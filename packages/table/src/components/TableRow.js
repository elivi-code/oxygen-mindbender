import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styled';

const TableRow = ({ isSelectable, isSelected, children, ...otherProps }) => (
  <Styled.TableRow
    enableHover={isSelectable}
    isSelected={isSelected}
    {...otherProps}
  >
    {children}
  </Styled.TableRow>
);

TableRow.propTypes = {
  /** Set custom styling when hovering */
  isSelectable: PropTypes.bool,
  /** Set the selected custom styles */
  isSelected: PropTypes.bool,
  /** Content */
  children: PropTypes.node.isRequired,
};

TableRow.defaultProps = {
  isSelectable: false,
  isSelected: false,
};

export default TableRow;

import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styled';

const TableCell = ({ isHead, children, ...otherProps }) => {
  if (isHead) {
    return (
      <Styled.TableCell as="th" isHead {...otherProps}>
        {children}
      </Styled.TableCell>
    );
  }

  return <Styled.TableCell {...otherProps}>{children}</Styled.TableCell>;
};

TableCell.propTypes = {
  /** Enable custom styling for table heading */
  isHead: PropTypes.bool,
  /** Content */
  children: PropTypes.node.isRequired,
};

TableCell.defaultProps = {
  isHead: false,
};

export default TableCell;

import React from 'react';
import { ColumnInterface } from '../../types/ColumnManagement';
import { EmptyMessage } from './styled/EmptyStateMessage';

export const EmptyStateMessage = ({
  items,
  message,
}: {
  items: ColumnInterface[];
  message?: string;
}) => {
  if (items.length === 0 && message) {
    return (
      <EmptyMessage role="row">
        <div role="gridcell">{message}</div>
      </EmptyMessage>
    );
  }

  return null;
};

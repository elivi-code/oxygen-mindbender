import React, { useState, useMemo, useRef } from 'react';
import { Table as ITable, Row } from '@tanstack/react-table';

import { getTestAttributes } from '@8x8/oxygen-config';
import { PinnedColumns } from './utils';
import { GetRowActions, GetRowStatus } from '../actions/ActionTypes';
import { BodyRowComponent } from './BodyRow';
import { HiddenRow, Body as StyledBody } from '../styled/Body';
import { useKeyNavigation } from './useKeyNavigation';
import { RowWithTranslateY } from './useVirtual';

interface Props<TData> {
  activeRowId?: string;
  tableApi: ITable<TData>;
  pinnedColumns?: PinnedColumns;
  showPinnedBorder?: boolean;
  rowActionsPortalTarget: React.RefObject<HTMLDivElement>;
  getRowActions?: GetRowActions<TData>;
  getRowStatus?: GetRowStatus<TData>;
  onRowClick?: (row: Row<TData>) => void;
  renderableRows: RowWithTranslateY<TData>[];
  bodyHeight?: number;
  shouldTrackHoveredRow?: boolean;
  blurOnTab: boolean;
  testId?: string;
}

const Body = <TData,>({
  activeRowId,
  tableApi,
  pinnedColumns,
  showPinnedBorder,
  rowActionsPortalTarget,
  getRowActions,
  getRowStatus,
  onRowClick,
  testId = 'body',
  renderableRows,
  bodyHeight,
  shouldTrackHoveredRow,
  blurOnTab,
}: Props<TData>) => {
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null);
  const [focusedRowId, setFocusedRowId] = useState<string | null>(null);
  const { rows } = tableApi.getRowModel();
  const actionsMap = useMemo(() => {
    return getRowActions
      ? rows.reduce((acc, row) => {
          acc[row.id] = getRowActions(row.original);

          return acc;
        }, {} as Record<string, ReturnType<GetRowActions<TData>>>)
      : {};
  }, [getRowActions, rows]);

  const errorMap = useMemo(() => {
    return getRowStatus
      ? rows.reduce((acc, row) => {
          acc[row.id] = getRowStatus(row.original);

          return acc;
        }, {} as Record<string, ReturnType<GetRowStatus<TData>>>)
      : {};
  }, [getRowStatus, rows]);
  const { firstRowRef, hiddenRowRef, onKeyDown, onFocus } = useKeyNavigation({
    blurOnTab,
  });

  const lastRowRef = useRef<HTMLTableRowElement>(null);

  return (
    <StyledBody
      {...getTestAttributes(testId)}
      height={bodyHeight}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      tabIndex={blurOnTab ? 0 : undefined}
    >
      {renderableRows.map(({ row, translateY }, index) => {
        const rowStatus = errorMap[row.id];

        let bodyRowRef: React.RefObject<HTMLTableRowElement> | undefined;

        if (index === 0) {
          bodyRowRef = firstRowRef;
        } else if (index === renderableRows.length - 1) {
          bodyRowRef = lastRowRef;
        } else {
          bodyRowRef = undefined;
        }

        return (
          <BodyRowComponent
            key={row.id}
            bodyRowRef={bodyRowRef}
            row={row}
            rowStatus={rowStatus}
            activeRowId={activeRowId}
            hoveredRowId={hoveredRowId}
            setHoveredRowId={
              shouldTrackHoveredRow ? setHoveredRowId : undefined
            }
            focusedRowId={focusedRowId}
            setFocusedRowId={setFocusedRowId}
            onRowClick={onRowClick}
            actionsMap={actionsMap}
            rowActionsPortalTarget={rowActionsPortalTarget}
            pinnedColumns={pinnedColumns}
            showPinnedBorder={showPinnedBorder}
            errorMap={errorMap}
            testId={testId}
            translateY={translateY}
          />
        );
      })}
      {blurOnTab && <HiddenRow ref={hiddenRowRef} tabIndex={0} />}
    </StyledBody>
  );
};

export { Body };

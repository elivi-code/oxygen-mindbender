import { renderHook, act } from '@testing-library/react-hooks';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import React from 'react';
import {
  ColumnManagementInterface,
  useColumnManagement,
} from '../useColumnManagement';
import { Person } from '../../__tests__/mockData';

const columnHelper = createColumnHelper<Person>();

describe('useColumnManagement', () => {
  const columnDefinitions: ColumnDef<Person, string>[] = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
      header: () => <div>First Name</div>,
      meta: {
        // visibleByDefault: true means this will be part of @defaultColumns
        columnManagement: { visibleByDefault: true, label: 'First Name' },
      },
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      header: () => <div>Last Name</div>,
      meta: {
        columnManagement: { visibleByDefault: false, label: 'First Name' },
      },
    }),
  ];

  /* columnManagementProps.currentColumns */

  it('should set columnManagementProps.currentColumns to props.initiallyVisibleColumns if it is provided', () => {
    const initiallyVisibleColumns: ColumnManagementInterface[] = [
      { id: 'firstName', name: 'First Name' },
      { id: 'lastName', name: 'Last Name' },
    ];

    const { result } = renderHook(() =>
      useColumnManagement({
        initiallyVisibleColumns,
        columnDefinitions,
      }),
    );

    const { columnManagementProps } = result.current;

    expect(columnManagementProps.currentColumns).toEqual(
      initiallyVisibleColumns,
    );
  });

  it('should set columnManagementProps.currentColumns to defaultColumns if initiallyVisibleColumns is not provided', () => {
    // see @defaultColumns above
    const { result } = renderHook(() =>
      useColumnManagement({
        columnDefinitions,
      }),
    );

    const { columnManagementProps } = result.current;

    expect(columnManagementProps.currentColumns).toEqual([
      { id: 'firstName', name: 'First Name' },
    ]);
  });

  it('should set columnManagementProps.currentColumns when onSave is called', () => {
    const { result } = renderHook(() =>
      useColumnManagement({
        columnDefinitions,
      }),
    );

    let hookResult = result.current;

    act(() =>
      hookResult.columnManagementProps.onSave([
        { id: 'lastName', name: 'Last Name' },
      ]),
    );

    hookResult = result.current;
    expect(hookResult.columnManagementProps.currentColumns).toEqual([
      { id: 'lastName', name: 'Last Name' },
    ]);
  });

  /* columnManagementTableState.columnOrder */

  it('should set columnManagementTableState.columnOrder to column ids in visibleColumns', () => {
    const initiallyVisibleColumns: ColumnManagementInterface[] = [
      { id: 'lastName', name: 'Last Name' },
      { id: 'firstName', name: 'First Name' },
    ];

    const { result } = renderHook(() =>
      useColumnManagement({
        initiallyVisibleColumns,
        columnDefinitions,
      }),
    );

    const { columnManagementTableState } = result.current;

    expect(columnManagementTableState.columnOrder).toEqual([
      'lastName',
      'firstName',
    ]);
  });

  /* columnManagementTableState.columnVisibility */

  it('should set columnManagementTableState.columnVisibility to true for columns in visibleColumns', () => {
    const initiallyVisibleColumns: ColumnManagementInterface[] = [
      { id: 'lastName', name: 'Last Name' },
    ];

    const { result } = renderHook(() =>
      useColumnManagement({
        initiallyVisibleColumns,
        columnDefinitions,
      }),
    );

    const { columnManagementTableState } = result.current;

    expect(columnManagementTableState.columnVisibility).toEqual({
      firstName: false,
      lastName: true,
    });
  });

  /* columnManagementProps.isOpened */

  it('should set columnManagementProps.isOpened to false by default', () => {
    const { result } = renderHook(() =>
      useColumnManagement({
        columnDefinitions,
      }),
    );

    const { columnManagementProps } = result.current;

    expect(columnManagementProps.isOpened).toBe(false);
  });

  it('should set columnManagementProps.isOpened to true when openColumnManagement is called', () => {
    const { result } = renderHook(() =>
      useColumnManagement({
        columnDefinitions,
      }),
    );

    let hookResult = result.current;

    act(() => hookResult.openColumnManagement());

    hookResult = result.current;
    expect(hookResult.columnManagementProps.isOpened).toBe(true);
  });

  it('should set columnManagementProps.isOpened to false when onClose is called', () => {
    const { result } = renderHook(() =>
      useColumnManagement({
        columnDefinitions,
      }),
    );

    let hookResult = result.current;

    act(() => hookResult.openColumnManagement());

    hookResult = result.current;
    expect(hookResult.columnManagementProps.isOpened).toBe(true);
    act(() => hookResult.columnManagementProps.onClose());

    hookResult = result.current;
    expect(hookResult.columnManagementProps.isOpened).toBe(false);
  });
});

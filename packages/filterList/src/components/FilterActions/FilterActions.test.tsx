import React from 'react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { fireEvent, render, screen } from '@testing-library/react';
import FilterAction from './FilterActions';
import { FilterDefinitionType, FilterType } from '../../types';

// Mock useAriaLive hook
const mockAnnounce = jest.fn();

jest.mock('@8x8/oxygen-utils', () => ({
  useAriaLive: () => ({
    announce: mockAnnounce,
  }),
}));

const MOCK_TELEMETRY_PROPS = {
  uiArea: 'test',
};

const filterDefinitions: FilterDefinitionType[] = [
  { id: '1', label: 'Filter 1' },
];
const currentFilters = [];
const internalCurrentFilters = [];
const mockInternalFilters: FilterType[] = [
  {
    id: '1',
    label: 'Filter 1',
    operator: { value: 'is', label: 'is' },
    values: [{ value: '1', label: '1' }],
  },
];
const defaultFilters: FilterType[] = [
  {
    id: '1',
    label: 'Filter 1',
    operator: { value: 'is', label: 'is' },
    values: [{ value: 'default', label: 'default' }],
  },
];
const onChange = () => {};
const translations = {
  applyFilterLabel: 'Apply',
  resetAllLabel: 'Reset All',
  clearAllLabel: 'Clear All',
  resetAllSuccessLabel: 'All filters have been reset',
  clearAllSuccessLabel: 'All filters have been cleared',
};
const testId = 'test-id';
const setInternalCurrentFilters = () => {};

describe('FilterActions component', () => {
  beforeEach(() => {
    mockAnnounce.mockClear();
  });
  it('should display Apply button if hasGlobalApplyButton is true', () => {
    render(
      <OxygenProvider themeName="light">
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={internalCurrentFilters}
          setInternalCurrentFilters={setInternalCurrentFilters}
          onChange={onChange}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    expect(
      screen.queryByTestId('test-id_GLOBAL_APPLY_FILTER'),
    ).toBeInTheDocument();
  });

  it('should not display Apply button if hasGlobalApplyButton is false', () => {
    render(
      <OxygenProvider themeName="light">
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={internalCurrentFilters}
          defaultFilters={defaultFilters}
          setInternalCurrentFilters={setInternalCurrentFilters}
          onChange={onChange}
          hasGlobalApplyButton={false}
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    expect(
      screen.queryByTestId('test-id_GLOBAL_APPLY_FILTER'),
    ).not.toBeInTheDocument();
  });

  it('should display Reset All button if hasDefaults is not empty', () => {
    render(
      <OxygenProvider themeName="light">
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={internalCurrentFilters}
          defaultFilters={defaultFilters}
          setInternalCurrentFilters={setInternalCurrentFilters}
          onChange={onChange}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    expect(
      screen.queryByTestId('test-id_RESET_ALL_FILTER'),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('test-id_CLEAR_ALL_FILTER'),
    ).not.toBeInTheDocument();
  });

  it('should have the apply button disabled if the internalCurrentFilters is equal to the currentFilters', () => {
    render(
      <OxygenProvider themeName="light">
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={internalCurrentFilters}
          setInternalCurrentFilters={setInternalCurrentFilters}
          onChange={onChange}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('test-id_GLOBAL_APPLY_FILTER')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('should call setInternalCurrentFilters when the apply button is clicked', () => {
    const setInternalCurrentFiltersMock = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={mockInternalFilters}
          setInternalCurrentFilters={setInternalCurrentFiltersMock}
          onChange={onChange}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    const globallyApplyButton = screen.getByTestId(
      'test-id_GLOBAL_APPLY_FILTER',
    );

    fireEvent.click(globallyApplyButton);

    expect(setInternalCurrentFiltersMock).toHaveBeenCalled();
  });

  it('should call onChange with currentFilters when clearAll is clicked', () => {
    const onChangeMock = jest.fn();

    render(
      <OxygenProvider themeName="light">
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={mockInternalFilters}
          onChange={onChangeMock}
          setInternalCurrentFilters={setInternalCurrentFilters}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    const clearAllButton = screen.getByTestId('test-id_CLEAR_ALL_FILTER');

    fireEvent.click(clearAllButton);

    expect(onChangeMock).toHaveBeenCalledWith([]);
  });

  it('sends telemetry event on when clearAll is clicked', () => {
    const mockOnTelemetry = jest.fn();

    render(
      <OxygenProvider themeName="light" telemetryCallback={mockOnTelemetry}>
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={mockInternalFilters}
          onChange={onChange}
          setInternalCurrentFilters={setInternalCurrentFilters}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
          telemetryProps={{ uiArea: 'test' }}
        />
      </OxygenProvider>,
    );

    const clearAllButton = screen.getByTestId('test-id_CLEAR_ALL_FILTER');

    fireEvent.click(clearAllButton);

    expect(mockOnTelemetry).toHaveBeenCalledTimes(1);
    expect(mockOnTelemetry).toHaveBeenCalledWith(
      'filter_clear_all',
      MOCK_TELEMETRY_PROPS,
    );
  });

  it('Does not sends telemetry event on when clearAll is clicked - no telemetryProps', () => {
    const mockOnTelemetry = jest.fn();

    render(
      <OxygenProvider themeName="light" telemetryCallback={mockOnTelemetry}>
        <FilterAction
          filterDefinitions={filterDefinitions}
          currentFilters={currentFilters}
          internalCurrentFilters={mockInternalFilters}
          onChange={onChange}
          setInternalCurrentFilters={setInternalCurrentFilters}
          hasGlobalApplyButton
          translations={translations}
          testId={testId}
        />
      </OxygenProvider>,
    );

    const clearAllButton = screen.getByTestId('test-id_CLEAR_ALL_FILTER');

    fireEvent.click(clearAllButton);

    expect(mockOnTelemetry).toHaveBeenCalledTimes(0);
  });

  describe('Accessibility Features', () => {
    it('should call announce when Reset All button is clicked', () => {
      render(
        <OxygenProvider themeName="light">
          <FilterAction
            filterDefinitions={filterDefinitions}
            currentFilters={currentFilters}
            internalCurrentFilters={mockInternalFilters}
            defaultFilters={defaultFilters}
            onChange={onChange}
            setInternalCurrentFilters={setInternalCurrentFilters}
            hasGlobalApplyButton={false}
            translations={translations}
            testId={testId}
          />
        </OxygenProvider>,
      );

      const resetButton = screen.getByTestId('test-id_RESET_ALL_FILTER');

      fireEvent.click(resetButton);

      expect(mockAnnounce).toHaveBeenCalledWith('All filters have been reset');
    });

    it('should call announce with custom message from translations', () => {
      const customTranslations = {
        ...translations,
        resetAllSuccessLabel: 'Custom reset success message',
      };

      render(
        <OxygenProvider themeName="light">
          <FilterAction
            filterDefinitions={filterDefinitions}
            currentFilters={currentFilters}
            internalCurrentFilters={mockInternalFilters}
            defaultFilters={defaultFilters}
            onChange={onChange}
            setInternalCurrentFilters={setInternalCurrentFilters}
            hasGlobalApplyButton={false}
            translations={customTranslations}
            testId={testId}
          />
        </OxygenProvider>,
      );

      const resetButton = screen.getByTestId('test-id_RESET_ALL_FILTER');

      fireEvent.click(resetButton);

      expect(mockAnnounce).toHaveBeenCalledWith('Custom reset success message');
    });

    it('should call announce when Clear All button is clicked', () => {
      render(
        <OxygenProvider themeName="light">
          <FilterAction
            filterDefinitions={filterDefinitions}
            currentFilters={currentFilters}
            internalCurrentFilters={mockInternalFilters}
            onChange={onChange}
            setInternalCurrentFilters={setInternalCurrentFilters}
            hasGlobalApplyButton={false}
            translations={translations}
            testId={testId}
          />
        </OxygenProvider>,
      );

      const clearButton = screen.getByTestId('test-id_CLEAR_ALL_FILTER');

      fireEvent.click(clearButton);

      expect(mockAnnounce).toHaveBeenCalledWith(
        'All filters have been cleared',
      );
    });

    it('should call announce with custom clear message from translations', () => {
      const customTranslations = {
        ...translations,
        clearAllSuccessLabel: 'Custom clear success message',
      };

      render(
        <OxygenProvider themeName="light">
          <FilterAction
            filterDefinitions={filterDefinitions}
            currentFilters={currentFilters}
            internalCurrentFilters={mockInternalFilters}
            onChange={onChange}
            setInternalCurrentFilters={setInternalCurrentFilters}
            hasGlobalApplyButton={false}
            translations={customTranslations}
            testId={testId}
          />
        </OxygenProvider>,
      );

      const clearButton = screen.getByTestId('test-id_CLEAR_ALL_FILTER');

      fireEvent.click(clearButton);

      expect(mockAnnounce).toHaveBeenCalledWith('Custom clear success message');
    });
  });
});

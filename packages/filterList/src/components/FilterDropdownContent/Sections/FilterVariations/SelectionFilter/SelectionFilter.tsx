import React, { useCallback, useEffect, useRef, useState } from 'react';
import { produce } from 'immer';
import { useImmer } from 'use-immer';

import Input from '@8x8/oxygen-input';
import { SearchIcon } from '@8x8/oxygen-icon';
import { Spinner } from '@8x8/oxygen-loaders';

import SelectionList from './SelectionList';
import {
  FilterDefinitionType,
  FilterListInterface,
  FilterType,
  FilterValueObjectType,
  FilterValueType,
  Translations,
} from '../../../../../types';
import {
  Container,
  OptionsContainer,
  LoaderContainer,
  NoResultsLabel,
  SelectedLegend,
  SelectedFieldset,
} from './SelectionFilter.styled';
import { isGroupFilterDefinitionType } from '../../../../../utils/getFilterType';
import { shouldShowSearchInput } from './shouldShowSearchInput';

interface SelectionFilterInterface {
  filterDefinition: FilterDefinitionType;
  internalFilter: FilterType;
  internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
  getSearchSuggestions?: FilterListInterface['getSearchSuggestions'];
  searchSuggestionKeyOffset?: number;
  isMultiSelection: boolean;
  translations: Partial<Translations>;
  testId: string;
}

const SCROLL_TOLERANCE = 100;

// deduplicate using a Set to keep track of values
function deduplicate(item: FilterValueObjectType) {
  if (this.has(item.value)) {
    return false;
  }
  this.add(item.value);

  return true;
}

function SelectionFilter({
  filterDefinition,
  internalFilter,
  internalOnChange,
  getSearchSuggestions,
  searchSuggestionKeyOffset,
  isMultiSelection,
  translations,
  testId,
}: SelectionFilterInterface) {
  const containerRef = useRef(null);
  const requestMeta = useRef<string>('');
  const allowFreeformSuggestions = filterDefinition?.allowFreeformSuggestions;
  const initialValues = isGroupFilterDefinitionType(filterDefinition)
    ? filterDefinition.subFilters[internalFilter.subFilterId]?.values
    : filterDefinition.values;

  const [options, setOptions] = useImmer<FilterValueObjectType[]>(
    initialValues ?? [],
  );

  const showSearchInput = shouldShowSearchInput({
    numOptionValues: initialValues?.length,
    filterDefinition,
    isGetSearchSuggestionsDefined: Boolean(getSearchSuggestions),
  });

  const [filterSearch, setFilterSearch] = useState<FilterValueType>('');
  const [isLoading, setIsLoading] = useState(false);
  const [paginationConfig, setPaginationConfig] = useState<{
    canQueryMore: boolean;
    pageKey: number;
  }>({
    canQueryMore: !!getSearchSuggestions,
    pageKey: 0,
  });

  const selectedValues = (internalFilter.values || []).filter(value =>
    value.label
      .toLowerCase()
      .includes(String(filterSearch)?.toLowerCase()?.trim()),
  );

  const fetchData = async (searchCriteria: FilterValueType) => {
    try {
      setIsLoading(true);

      const newItems = await getSearchSuggestions(
        internalFilter.id,
        searchCriteria,
        paginationConfig.pageKey,
      );

      if (requestMeta.current === searchCriteria) {
        setOptions(prevItems => {
          // deduplicate identical values (in case of race conditions)
          return prevItems
            .concat(newItems.content)
            .filter(deduplicate, new Set());
        });
        setPaginationConfig(prev => ({
          canQueryMore: !newItems.lastPage,
          pageKey: prev.pageKey + searchSuggestionKeyOffset,
        }));
      }
    } catch (error) {
      setPaginationConfig(prev => ({
        canQueryMore: false,
        pageKey: prev.pageKey,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (
        scrollTop + clientHeight >= scrollHeight - SCROLL_TOLERANCE &&
        !isLoading &&
        paginationConfig.canQueryMore
      ) {
        fetchData(filterSearch);
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, [options, filterSearch, isLoading]);

  const onInputChange = (event: { target: { value: string } }) => {
    const newSearchvalue = event.target?.value || '';

    const values = isGroupFilterDefinitionType(filterDefinition)
      ? filterDefinition.subFilters[internalFilter.subFilterId]?.values
      : filterDefinition.values;

    setFilterSearch(newSearchvalue);
    setOptions(
      values?.filter(option =>
        option.label
          .toLowerCase()
          .includes(newSearchvalue?.toLowerCase()?.trim()),
      ) ?? [],
    );
    setPaginationConfig({ canQueryMore: true, pageKey: 0 });
    containerRef.current?.scrollTo?.(0, 0);
    requestMeta.current = event.target?.value || '';
  };

  const handleSelection = useCallback(
    (
      element: FilterValueObjectType,

      isChecked = false,
    ) => {
      if (!isMultiSelection) {
        internalOnChange(
          produce(internalFilter, draft => {
            draft.values = [element];
          }),
        );

        return;
      }

      if (isChecked) {
        // removes item from internal state
        internalOnChange(
          produce(internalFilter, draft => {
            draft.values = draft.values.filter(
              val => val.value !== element.value,
            );
          }),
        );
      } else {
        // adds item in internal state
        internalOnChange(
          produce(internalFilter, draft => {
            if (!draft.values) {
              draft.values = [];
            }
            draft.values.push(element);
          }),
        );
      }
    },
    [internalFilter, internalOnChange, selectedValues, isMultiSelection],
  );

  const displayedValues: FilterValueObjectType[] =
    isMultiSelection &&
    allowFreeformSuggestions &&
    String(filterSearch)?.trim()?.length &&
    !selectedValues?.find(
      val => val.label.trim() === String(filterSearch).trim(),
    ) &&
    !options?.find(val => val.label.trim() === String(filterSearch).trim())
      ? [
          {
            value: String(filterSearch),
            label: String(filterSearch),
            isFreeform: true,
          },
          ...selectedValues,
        ]
      : selectedValues;

  return (
    <Container>
      {showSearchInput && (
        <Input
          aria-label={translations.searchValueLabel}
          iconLeft={SearchIcon}
          onChange={onInputChange}
          placeholder={translations.searchValueLabel}
          testId={`${testId}_SELECTION_INPUT`}
          theme={{ verticalSpacing: '0px' }}
          value={filterSearch}
        />
      )}
      <OptionsContainer ref={containerRef} onScroll={handleScroll}>
        {!!displayedValues?.length && (
          <SelectedFieldset>
            {!!selectedValues?.length && (
              <SelectedLegend>{translations.selectedLabel}</SelectedLegend>
            )}

            <SelectionList
              options={displayedValues}
              selectedValues={selectedValues}
              handleSelection={handleSelection}
              isMultiSelection={isMultiSelection}
              translations={translations}
              testId={`${testId}_SELECTED`}
            />
          </SelectedFieldset>
        )}

        <SelectionList
          options={options}
          selectedValues={selectedValues}
          handleSelection={handleSelection}
          isMultiSelection={isMultiSelection}
          translations={translations}
          testId={testId}
        />

        {isLoading && (
          <LoaderContainer>
            <Spinner size="small" />
          </LoaderContainer>
        )}

        {options.length === 0 && !isLoading && (
          <NoResultsLabel>
            {translations.noSuggestionsFoundLabel}
          </NoResultsLabel>
        )}
      </OptionsContainer>
    </Container>
  );
}

export default SelectionFilter;

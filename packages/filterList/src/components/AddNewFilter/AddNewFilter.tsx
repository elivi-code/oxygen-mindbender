import React, { useEffect, useMemo, useState } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Popover } from '@8x8/oxygen-popover';
import { PlusIcon, SearchIcon } from '@8x8/oxygen-icon';
import List, { ListItem } from '@8x8/oxygen-list';

import {
  FilterListInterface,
  FilterType,
  FilterDefinitionType,
  Translations,
  GroupFilterDefinitionType,
} from '../../types';
import {
  AddFilterSearch,
  AddFilterTag,
  ListWrapper,
} from './AddNewFilter.styled';
import { Container } from '../FilterDropdownContent/FilterDropdownContent.styled';

interface AddNewFilterInterface
  extends Pick<FilterListInterface, 'popoverPortalRef'> {
  internalCurrentFilters: (FilterType | FilterDefinitionType)[];
  filterDefinitions?: (FilterDefinitionType | GroupFilterDefinitionType)[];
  onAddFilter(
    newFilter: FilterDefinitionType | GroupFilterDefinitionType,
  ): void;
  translations?: Partial<Translations>;
  testId: string;
}

function AddNewFilter({
  internalCurrentFilters,
  filterDefinitions,
  onAddFilter,
  translations,
  testId,
  popoverPortalRef,
}: AddNewFilterInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const [addFilterSearch, setAddFilterSearch] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setAddFilterSearch('');
    }
  }, [isOpen]);

  const availableFilters = useMemo(
    () =>
      filterDefinitions?.filter(
        definition =>
          !internalCurrentFilters?.find(
            currentFilter => currentFilter.id === definition.id,
          ),
      ) ?? [],
    [filterDefinitions, internalCurrentFilters],
  );

  if (availableFilters.length === 0) {
    return null;
  }

  const filteredFilters = availableFilters?.filter(definition =>
    definition.label.toLowerCase().includes(addFilterSearch?.toLowerCase()),
  );

  return (
    <Popover
      floatingContent={
        <Container {...getTestAttributes(`${testId}_new_filter_CONTAINER`)}>
          <AddFilterSearch
            iconLeft={SearchIcon}
            onChange={event => setAddFilterSearch(event.target.value)}
            placeholder={translations?.searchNewFilterLabel}
            testId={`${testId}_SEARCH_INPUT`}
            aria-label={translations?.searchNewFilterLabel}
          />
          <ListWrapper>
            <List {...getTestAttributes(`${testId}_CONTAINER`)}>
              {filteredFilters.map(filter => (
                <ListItem
                  key={filter.id}
                  onClick={() => {
                    onAddFilter(filter);
                    setIsOpen(false);
                  }}
                >
                  {filter.label}
                </ListItem>
              ))}
            </List>
          </ListWrapper>
        </Container>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      portalTargetRef={popoverPortalRef}
    >
      <AddFilterTag
        isDisabled={availableFilters.length === 0}
        size="small"
        variant="text"
        iconLeft={<PlusIcon />}
        testId={`${testId}_BUTTON`}
      >
        {translations?.addNewFilterLabel}
      </AddFilterTag>
    </Popover>
  );
}

export default AddNewFilter;

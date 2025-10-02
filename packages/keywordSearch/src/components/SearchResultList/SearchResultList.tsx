import React, { FunctionComponent, useEffect, useRef } from 'react';
import {
  EventKey,
  useArrowKeyListIndex,
  useGlobalActionKeyHandler,
} from '@8x8/oxygen-utils';
import { getTestAttributes } from '@8x8/oxygen-config';
import NoResultsWrapper from './styled/NoResultsWrapper';
import CardListWrapper from './styled/CardListWrapper';
import ViewResultsWrapper from './styled/ViewResultsWrapper';
import Divider from './styled/Divider';
import { SearchResultItemType, SearchResultTranslations } from '../../types';
import SearchResultItem from './SearchResultItem';
import { SEARCH_RESULT_LIST_ID } from '../../utils/constants';
import ListWrapper from './styled/ListWrapper';
import ButtonWrapper from './styled/ButtonWrapper';
import ResultsTextWrapper from './styled/ResultsTextWrapper';

export interface SearchResultsProps {
  searchResults: SearchResultItemType[];
  searchValue: string;
  resultsCount: number;
  onClickListItem: (val: SearchResultItemType) => void;
  onChangeActiveItem: (index: number) => void;
  onEnterListItem: (index: number) => void;
  onSearchSelect: (val: string) => void;
  translations: SearchResultTranslations;
  testId: string;
}

const useArrowKeySearchResultList = (
  elementCount: number,
  searchValue: string,
) => {
  const { focusedElementIndex } = useArrowKeyListIndex({
    elementCount,
    initialHighlightedElementIndex: 0,
  });

  return !searchValue ? 0 : focusedElementIndex;
};

export const SearchResultList: FunctionComponent<SearchResultsProps> = ({
  searchResults = [],
  searchValue,
  resultsCount,
  onClickListItem,
  onChangeActiveItem,
  onEnterListItem,
  onSearchSelect,
  translations,
  testId,
}) => {
  const focusedElementIndex = useArrowKeySearchResultList(
    searchResults.length + 1,
    searchValue,
  );
  const focusedElIndexRef = useRef<number>(focusedElementIndex);

  useEffect(() => {
    focusedElIndexRef.current = focusedElementIndex;
    const focusedEl = document.getElementById(focusedElementIndex.toString());

    onChangeActiveItem(focusedElIndexRef.current);
    focusedEl?.scrollIntoView({ block: 'nearest' });
  }, [focusedElementIndex, onChangeActiveItem]);

  useGlobalActionKeyHandler({
    actionKeyHandler: () => onEnterListItem(focusedElIndexRef.current),
    fireEvents: [EventKey.Enter],
  });

  if (searchValue && !searchResults.length) {
    return (
      <CardListWrapper>
        <NoResultsWrapper>
          {translations.noResultsText}&nbsp;
          <strong>{`"${searchValue}"`}</strong>
        </NoResultsWrapper>
      </CardListWrapper>
    );
  }

  const viewAllResultsText = searchValue
    ? `${translations.viewAllResultsForText} "${searchValue}"`
    : `${translations.viewAllResultsText}`;

  return (
    <CardListWrapper>
      <ViewResultsWrapper>
        <ButtonWrapper
          {...getTestAttributes(`${testId}-view-all-results-button`)}
          isInfo
          id="0"
          isActive={focusedElementIndex === 0}
          onClick={() => onSearchSelect(searchValue)}
          tabIndex={-1}
        >
          <ResultsTextWrapper>
            <span title={viewAllResultsText}>{viewAllResultsText}</span>
            &nbsp;({resultsCount})
          </ResultsTextWrapper>
        </ButtonWrapper>
        {searchValue && <Divider />}
      </ViewResultsWrapper>
      {searchValue && (
        <ListWrapper id={SEARCH_RESULT_LIST_ID}>
          {searchResults.map((item, index) => (
            <SearchResultItem
              key={Object.values(item)[0]}
              testId={`${testId}-list-item-button`}
              id={(index + 1).toString()}
              isActive={focusedElementIndex === index + 1}
              item={item}
              onClick={onClickListItem}
            />
          ))}
        </ListWrapper>
      )}
    </CardListWrapper>
  );
};

export default SearchResultList;

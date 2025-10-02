import { act, create, ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import 'jest-styled-components';
import noop from 'lodash.noop';
import { OxygenProvider } from '@8x8/oxygen-config';
import Input from '@8x8/oxygen-input';
import { EventKey } from '@8x8/oxygen-utils';
import KeywordSearch, { KeywordSearchProps } from './KeywordSearch';
import SearchResultList from '../SearchResultList/SearchResultList';
import LoadingIndicatorWrapper from './styled/LoadingIndicatorWrapper';

jest.mock('@8x8/oxygen-input', () => 'Input');

const searchResults = [{ 0: 'mockValue 1' }, { 0: 'mockValue 2' }];

describe('<KeywordSearch>', () => {
  const setup = (props?: Partial<KeywordSearchProps>): ReactTestRenderer =>
    create(
      <OxygenProvider>
        <KeywordSearch
          isLoading={false}
          testId="keyword-search"
          searchResults={searchResults}
          onSearchChange={noop}
          onSearchResultSelect={noop}
          onFetchSearchResults={noop}
          onClear={noop}
          onViewAllResults={noop}
          searchResultsCount={10}
          translations={{
            clearButtonTitle: 'Clear button',
            placeholder: 'Search',
            viewAllResultsForText: 'View all results for',
            viewAllResultsText: 'View all results',
            noResultsText: "We couldn't find any results for",
            loadingSearchResultsText: 'Searching for',
          }}
          size="default"
          {...props}
        />
      </OxygenProvider>,
    );

  it('should render correctly with default props', () => {
    const wrapper = setup().toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when search results components is visible', () => {
    const wrapper = setup();
    const searchInput = wrapper.root.findByType(Input);

    act(() => searchInput.props.onChange({ target: 'mockValue' }));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading indicator when search results are loaded', () => {
    const wrapper = setup({ isLoading: true });
    const loadingIndicator = wrapper.root.findByType(LoadingIndicatorWrapper);

    expect(loadingIndicator).toBeDefined();
  });

  it('should handle view all suggestions', () => {
    const newSearchValue = 'newValue';
    const onViewAllResultsMock = jest.fn();

    const wrapper = setup({ onViewAllResults: onViewAllResultsMock });
    const searchInput = wrapper.root.findByType(Input);

    act(() => searchInput.props.onFocus());

    expect(wrapper.root.findByType(SearchResultList)).toBeDefined();

    act(() =>
      searchInput.props.onChange({ target: { value: newSearchValue } }),
    );

    act(() =>
      wrapper.root
        .findByType(SearchResultList)
        .props.onSearchSelect(newSearchValue),
    );

    expect(wrapper.root.findAllByType(SearchResultList)).toHaveLength(0);

    expect(onViewAllResultsMock).toHaveBeenCalledWith(newSearchValue);
  });

  it('should clear search input value on clicking clear button', () => {
    const newSearchValue = 'newValue';
    const onClearMock = jest.fn();

    const wrapper = setup({ onClear: onClearMock });
    const searchInput = wrapper.root.findByType(Input);

    act(() => searchInput.props.onFocus());
    act(() =>
      searchInput.props.onChange({ target: { value: newSearchValue } }),
    );

    act(() =>
      wrapper.root
        .findByType(SearchResultList)
        .props.onSearchSelect(newSearchValue),
    );

    act(() => {
      searchInput.props.iconRight().props.onClick();
    });

    expect(onClearMock).toHaveBeenCalled();
    expect(wrapper.root.findByType(Input).props.value).toEqual('');
  });

  it('should close search results list when input loses focus', () => {
    const wrapper = setup();
    const searchInput = wrapper.root.findByType(Input);

    act(() => searchInput.props.onFocus());

    expect(wrapper.root.findAllByType(SearchResultList)).toHaveLength(1);

    act(() => searchInput.props.onKeyDown({ key: EventKey.Tab }));

    expect(wrapper.root.findAllByType(SearchResultList)).toHaveLength(0);
  });
});

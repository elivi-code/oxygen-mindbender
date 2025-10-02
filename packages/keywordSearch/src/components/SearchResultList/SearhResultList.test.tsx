import { create, ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import 'jest-styled-components';
import noop from 'lodash.noop';
import { OxygenProvider } from '@8x8/oxygen-config';
import SearchResultList, { SearchResultsProps } from './SearchResultList';

jest.mock('./SearchResultItem', () => 'SearchResultItem');
jest.mock('@8x8/oxygen-list', () => 'List');
jest.mock('@8x8/oxygen-button', () => 'Button');

describe('<SearchResultList>', () => {
  const setup = (props?: Partial<SearchResultsProps>): ReactTestRenderer =>
    create(
      <OxygenProvider>
        <SearchResultList
          testId="keyword-search"
          searchResults={[]}
          searchValue="mockValue"
          onClickListItem={noop}
          onEnterListItem={noop}
          onSearchSelect={noop}
          onChangeActiveItem={noop}
          resultsCount={0}
          translations={{
            viewAllResultsForText: 'View all results for',
            noResultsText: "We couldn't find any results for",
            viewAllResultsText: 'View all results',
            loadingSearchResultsText: 'Searching for',
          }}
          {...props}
        />
      </OxygenProvider>,
    );

  it('should render correctly when no results found', () => {
    const wrapper = setup().toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when search results found', () => {
    const wrapper = setup({
      searchResults: [{ 0: 'mockName1' }, { 0: 'mockName2', 1: 'mockGroup' }],
      searchValue: 'mock',
      resultsCount: 10,
    }).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

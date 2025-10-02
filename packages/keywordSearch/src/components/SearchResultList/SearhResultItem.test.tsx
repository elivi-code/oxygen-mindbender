import { create, ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import 'jest-styled-components';
import noop from 'lodash.noop';
import { OxygenProvider } from '@8x8/oxygen-config';
import SearchResultItem, { SearchResultItemProps } from './SearchResultItem';

jest.mock('@8x8/oxygen-list', () => ({
  ListItem: 'ListItem',
}));
jest.mock('@8x8/oxygen-button', () => 'Button');

describe('<SearchResultItem>', () => {
  const setup = (props?: Partial<SearchResultItemProps>): ReactTestRenderer =>
    create(
      <OxygenProvider>
        <SearchResultItem
          id="mockId"
          testId="mockTestId"
          isActive={false}
          item={{ 0: 'MockSearchResult' }}
          onClick={noop}
          {...props}
        />
      </OxygenProvider>,
    );

  it('should render correctly search result item', () => {
    const wrapper = setup().toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly search result item with more keys', () => {
    const wrapper = setup({
      item: { 0: 'MockSearchResult', 1: 'MockGroup' },
    }).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

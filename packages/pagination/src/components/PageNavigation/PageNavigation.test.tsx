import renderer, { ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import noop from 'lodash.noop';
import 'jest-styled-components';
import TextLink from '@8x8/oxygen-text-link';
import Select from '@8x8/oxygen-select';
import { OxygenProvider } from '@8x8/oxygen-config';
import PageNavigation, { PageNavigationProps } from './PageNavigation';

jest.mock('@8x8/oxygen-select', () => 'Select');
jest.mock('@8x8/oxygen-text-link', () => 'TextLink');

describe('PageNavigation', () => {
  const getWrapper = (
    props?: Partial<PageNavigationProps>,
  ): ReactTestRenderer =>
    renderer.create(
      <OxygenProvider>
        <PageNavigation
          testId="PAGINATION"
          canGoBack={false}
          canGoNext
          isCompactMode={false}
          currentPage={1}
          numberOfPages={10}
          isDisabled={false}
          onPageChange={noop}
          size="default"
          translations={{
            prevPage: 'Prev',
            numberOfPages: 'of 50 pages',
            nextPage: 'Next',
          }}
          {...props}
        />
      </OxygenProvider>,
    );

  it('should render component correctly', () => {
    const wrapper = getWrapper();

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should disable buttons and select component when isDisabled is true', () => {
    const wrapper = getWrapper({ isDisabled: true });

    expect(wrapper.root.findAllByType(TextLink)[0].props.isDisabled).toBe(true);
    expect(wrapper.root.findAllByType(TextLink)[1].props.isDisabled).toBe(true);
    expect(wrapper.root.findAllByType(Select)[0].props.isDisabled).toBe(true);
  });

  it('should disable previous button when the current page is the first one', () => {
    const wrapper = getWrapper();

    expect(wrapper.root.findAllByType(TextLink)[0].props.isDisabled).toBe(true);
  });

  it('should disable next button when the current page is the last one', () => {
    const wrapper = getWrapper({ canGoNext: false });

    expect(wrapper.root.findAllByType(TextLink)[1].props.isDisabled).toBe(true);
  });

  it('should call onPageChange when Space or Enter is pressed on previous page button', () => {
    const onPageChange = jest.fn();
    const wrapper = getWrapper({
      onPageChange,
      canGoBack: true,
      currentPage: 2,
    });

    const prevButton = wrapper.root.findAllByType(TextLink)[0];

    // Simulate Space key
    prevButton.props.onKeyDown({ key: ' ', preventDefault: jest.fn() });
    // Simulate Enter key
    prevButton.props.onKeyDown({ key: 'Enter', preventDefault: jest.fn() });

    expect(onPageChange).toHaveBeenCalledTimes(2);
  });

  it('should call onPageChange when Space or Enter is pressed on next page button', () => {
    const onPageChange = jest.fn();
    const wrapper = getWrapper({
      onPageChange,
      canGoNext: true,
      currentPage: 1,
    });

    const nextButton = wrapper.root.findAllByType(TextLink)[1];

    // Simulate Space key
    nextButton.props.onKeyDown({ key: ' ', preventDefault: jest.fn() });
    // Simulate Enter key
    nextButton.props.onKeyDown({ key: 'Enter', preventDefault: jest.fn() });

    expect(onPageChange).toHaveBeenCalledTimes(2);
  });
});

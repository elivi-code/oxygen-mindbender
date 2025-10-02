/* eslint-disable no-console */
import React from 'react';
import { screen, render } from '@testing-library/react';

import AlertBanner from './AlertBanner';

describe('AlertBanner', () => {
  beforeAll(() => {
    // jsdom doesn't support @container CSS syntax and shows an error message in the console
    // this suppresses the error message
    const originalError = console.error;

    console.error = (...args) => {
      if (/Error: Could not parse CSS stylesheet/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });
  it('renders', () => {
    const { container } = render(
      <AlertBanner actionText="button text" actionCallback={jest.fn()}>
        warning text
      </AlertBanner>,
    );

    expect(screen.getByText('warning text')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('sets up testId attributes', () => {
    render(
      <AlertBanner
        actionText="button text"
        actionCallback={jest.fn()}
        testId="test"
      >
        warning text
      </AlertBanner>,
    );
    expect(screen.getByTestId('test')).toBeInTheDocument();
    expect(screen.getByTestId('test_button')).toBeInTheDocument();
  });
  describe('action button', () => {
    it('renders the action button based on the actionText and actionCallback props', () => {
      const { rerender } = render(
        <AlertBanner actionText="button text" actionCallback={jest.fn()}>
          test
        </AlertBanner>,
      );

      expect(screen.getByText('button text')).toBeInTheDocument();
      expect(screen.getByTestId('alertBanner_button')).toBeInTheDocument();

      // if actionCallback is not provided, the action button should not be rendered
      rerender(<AlertBanner actionText="button text">test</AlertBanner>);
      expect(screen.queryByText('button text')).not.toBeInTheDocument();
      expect(
        screen.queryByTestId('alertBanner_button'),
      ).not.toBeInTheDocument();

      // if actionText is not provided, the action button should not be rendered
      rerender(<AlertBanner actionCallback={jest.fn()}>test</AlertBanner>);
      expect(screen.queryByText('button text')).not.toBeInTheDocument();
      expect(
        screen.queryByTestId('alertBanner_button'),
      ).not.toBeInTheDocument();
    });
    it('calls the actionCallback when the action button is clicked', () => {
      const actionCallback = jest.fn();

      render(
        <AlertBanner actionText="button text" actionCallback={actionCallback}>
          test
        </AlertBanner>,
      );
      expect(actionCallback).toHaveBeenCalledTimes(0);
      screen.getByText('button text').click();
      expect(actionCallback).toHaveBeenCalledTimes(1);
    });
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OxygenProvider } from '@8x8/oxygen-config';
import CopyButton from './index';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

describe('CopyButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    render(
      <OxygenProvider>
        <CopyButton testId="copy-button" />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('calls onCopy callback when clicked', async () => {
    const onCopy = jest.fn();

    render(
      <OxygenProvider>
        <CopyButton testId="copy-button" onCopy={onCopy} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    await userEvent.click(button);

    await waitFor(() => expect(onCopy).toHaveBeenCalledTimes(1));
  });

  it('copies text to clipboard when textToCopy is provided', async () => {
    const textToCopy = 'Hello, World!';

    render(
      <OxygenProvider>
        <CopyButton testId="copy-button" textToCopy={textToCopy} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    await userEvent.click(button);

    await waitFor(() =>
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(textToCopy),
    );
  });

  it('does not trigger actions when disabled', async () => {
    const onCopy = jest.fn();

    render(
      <OxygenProvider>
        <CopyButton testId="copy-button" onCopy={onCopy} isDisabled />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    await userEvent.click(button);

    expect(onCopy).not.toHaveBeenCalled();
    expect(navigator.clipboard.writeText).not.toHaveBeenCalled();
  });

  it('calls custom onClick handler', async () => {
    const onClick = jest.fn();

    render(
      <OxygenProvider>
        <CopyButton testId="copy-button" onClick={onClick} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    await userEvent.click(button);

    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1));
  });

  it('supports keyboard navigation', async () => {
    const onCopy = jest.fn();

    render(
      <OxygenProvider>
        <CopyButton testId="copy-button" onCopy={onCopy} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    button.focus();
    expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    await waitFor(() => expect(onCopy).toHaveBeenCalledTimes(1));
  });

  it('forwards ref to button element', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(
      <OxygenProvider>
        <CopyButton ref={ref} testId="copy-button" />
      </OxygenProvider>,
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toBe(screen.getByTestId('copy-button'));
  });

  it('spreads additional props to button element', () => {
    render(
      <OxygenProvider>
        <CopyButton
          testId="copy-button"
          aria-label="Copy to clipboard"
          data-custom="test"
        />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('copy-button');

    expect(button).toHaveAttribute('aria-label', 'Copy to clipboard');
    expect(button).toHaveAttribute('data-custom', 'test');
  });
});

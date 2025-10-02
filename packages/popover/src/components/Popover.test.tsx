import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { OxygenProvider } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';
import { Popover } from './Popover';

const TestWrapper = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <OxygenProvider>
      <Popover
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        floatingContent={
          <div>
            content
            <button type="button" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        }
      >
        <Button type="button">Click</Button>
      </Popover>
    </OxygenProvider>
  );
};

describe('Popover mouse click', () => {
  it('should render list items on click and call onUpdate with selected item via click', async () => {
    const user = userEvent.setup();

    render(<TestWrapper />);
    const button = screen.getByText('Click');

    await user.click(button);
    // render floating content
    expect(screen.getByText('content')).toBeInTheDocument();
    await user.click(screen.getByText('close'));
    // floating content no longer rendered
    expect(screen.queryByText('content')).not.toBeInTheDocument();
  });
});

describe('Popover keyboard', () => {
  it('can be opened by keyboard and closed by Escape', async () => {
    const user = userEvent.setup();

    render(<TestWrapper />);

    const button = screen.getByText('Click');

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    // render floating content
    expect(screen.getByText('content')).toBeInTheDocument();
    await user.keyboard('{Esc}');
    // floating content no longer rendered
    expect(screen.queryByText('content')).not.toBeInTheDocument();
  });
});

describe('Popover maxHeight', () => {
  it.each`
    maxHeight    | expectedValue
    ${undefined} | ${400}
    ${100}       | ${100}
  `(
    'renders correctly for maxHeight=$maxHeight prop as $expectedValue',
    ({ maxHeight, expectedValue }) => {
      render(
        <OxygenProvider>
          <Popover
            isOpen
            setIsOpen={() => {}}
            floatingContent={<div>content</div>}
            maxHeight={maxHeight}
          >
            <Button type="button">Click</Button>
          </Popover>
        </OxygenProvider>,
      );

      const popover = screen.getByTestId('POPOVER');

      expect(popover).toHaveStyle(
        `max-height: calc(${expectedValue}px - 16px)}`,
      );
    },
  );
});

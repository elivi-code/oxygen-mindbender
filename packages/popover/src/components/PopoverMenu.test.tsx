import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { OxygenProvider } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';
import { PopoverMenu } from './PopoverMenu';
import {
  Divider,
  SectionHeader,
  EmptyState,
} from '../styled/PopoverMenuComponents';

const items = [
  {
    key: '0',
    children: '0',
  },
  {
    key: '1',
    children: '1',
  },
  {
    key: '2',
    isDisabled: true,
    children: '2',
  },
  {
    key: '3',
    children: '3',
  },
  {
    key: '4',
    children: '4',
  },
];
const itemsWithDividers = [
  [
    {
      key: '0',
      children: '0',
    },
  ],
  <Divider key="divider 1" />,
  [
    {
      key: '1',
      children: '1',
    },
    {
      key: '2',
      isDisabled: true,
      children: '2',
    },
    {
      key: '3',
      children: '3',
    },
  ],
  <Divider key="divider 2" />,
  [
    {
      key: '4',
      children: '4',
    },
  ],
];

const testHeader = <div>Header</div>;
const testFooter = <div>Footer</div>;

const testListItems = [
  {
    key: '0',
    children: '0',
  },
  {
    key: '1',
    children: '1',
  },
  {
    key: '2',
    children: '2',
  },
];

const testListItems2 = [
  {
    key: '3',
    children: '3',
  },
  {
    key: '4',
    children: '4',
  },
];

const complexItems = [
  testListItems,
  <Divider key="divider 1" data-testid="divider" />,
  testListItems2,
  <Divider key="divider 2" data-testid="divider" />,
];

describe('PopoverMenu mouse click', () => {
  it('renders list items on click and call onUpdate with selected item via click', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onUpdate={onUpdate}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));
    await user.click(screen.getByText('1'));

    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenCalledWith(items[1], 1);
  });
  it('triggers onUpdate on the same element multiple subsequent times OX-1944', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onUpdate={onUpdate}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));
    await user.click(screen.getByText('1'));

    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenCalledWith(items[1], 1);

    await user.click(screen.getByText('Click'));
    await user.click(screen.getByText('1'));

    expect(onUpdate).toHaveBeenCalledTimes(2);
    expect(onUpdate).toHaveBeenCalledWith(items[1], 1);
  });
  it('does not select disabled items', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onUpdate={onUpdate}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));
    await user.click(screen.getByText('2'));

    expect(onUpdate).toHaveBeenCalledTimes(0);
  });
});

describe('PopoverMenu keyboard', () => {
  it('first item should be automatically selected', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onUpdate={onUpdate}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    // first item should be automatically selected
    await waitFor(() => {
      expect(screen.getByText('0').parentElement).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(onUpdate).toHaveBeenCalledTimes(1);
      expect(onUpdate).toHaveBeenCalledWith(items[0], 0);
    });
  });

  it('updates selection with arrow keys', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onUpdate={onUpdate}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByText('0').parentElement).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('1').parentElement).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(onUpdate).toHaveBeenCalledTimes(1);
      expect(onUpdate).toHaveBeenCalledWith(items[1], 1);
    });
  });

  it('updates selection with arrow keys when using items and Dividers', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu
          items={itemsWithDividers}
          header={testHeader}
          footer={testFooter}
          onUpdate={onUpdate}
        >
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.tab();
    await waitFor(() => {
      return expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      return expect(screen.getByText('0').parentElement).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      return expect(screen.getByText('1').parentElement).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      return expect(onUpdate).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      return expect(onUpdate).toHaveBeenCalledWith(itemsWithDividers[2][0], 1);
    });
  });

  it('isDisabled items can not be selected', async () => {
    const user = userEvent.setup();
    const onUpdate = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onUpdate={onUpdate}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByText('0').parentElement).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('1').parentElement).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('2').parentElement).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    expect(onUpdate).toHaveBeenCalledTimes(0);
  });

  it('should use custom click handlers if provided for click events', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const onMenuItemClick = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onMenuItemClick={onMenuItemClick}>
          <Button type="button" onClick={onClick}>
            Click
          </Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);

    const firstMenuItem = screen.getByText('0');

    await user.click(firstMenuItem);

    expect(onMenuItemClick).toHaveBeenCalledTimes(1);
  });

  it('should use custom click handlers if provided for keyboard events', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const onMenuItemClick = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu items={items} onMenuItemClick={onMenuItemClick}>
          <Button type="button" onClick={onClick}>
            Click
          </Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByText('0').parentElement).toHaveFocus();
    });

    expect(onClick).toHaveBeenCalledTimes(1);
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('1').parentElement).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('2').parentElement).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    expect(onMenuItemClick).toHaveBeenCalledTimes(1);
  });

  it('adding stopPropagation on custom handler should stop click event propagation', async () => {
    const user = userEvent.setup();
    const parentButtonOnClick = jest.fn();
    const onClick = e => {
      e.stopPropagation();
    };
    const onMenuItemClick = e => {
      e.stopPropagation();
    };

    render(
      <OxygenProvider>
        <Button onClick={parentButtonOnClick}>
          <PopoverMenu items={items} onMenuItemClick={onMenuItemClick}>
            <Button type="button" onClick={onClick}>
              Click
            </Button>
          </PopoverMenu>
        </Button>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.click(button);

    const firstMenuItem = screen.getByText('0');

    await user.click(firstMenuItem);

    expect(parentButtonOnClick).toHaveBeenCalledTimes(0);
  });

  it('adding stopPropagation on custom handler should stop keyboard event propagation', async () => {
    const user = userEvent.setup();
    const parentButtonOnClick = jest.fn();
    const onClick = e => {
      e.stopPropagation();
    };
    const onMenuItemClick = e => {
      e.stopPropagation();
    };

    render(
      <OxygenProvider>
        <Button onClick={parentButtonOnClick}>
          <PopoverMenu items={items} onMenuItemClick={onMenuItemClick}>
            <Button type="button" onClick={onClick}>
              Click
            </Button>
          </PopoverMenu>
        </Button>
      </OxygenProvider>,
    );

    const button = screen.getByText('Click');

    await user.tab(); // this focuses the parent button
    await user.tab();

    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByText('0').parentElement).toHaveFocus();
    });

    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('1').parentElement).toHaveFocus();
    });
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByText('2').parentElement).toHaveFocus();
    });
    await user.keyboard('{Enter}');

    expect(parentButtonOnClick).toHaveBeenCalledTimes(0);
  });

  it('renders from array type list items (complex list items rendering) ', async () => {
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <PopoverMenu
          items={complexItems}
          header={testHeader}
          footer={testFooter}
        >
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));

    expect(screen.getByText('Header')).toBeInTheDocument();

    complexItems.forEach(item => {
      if (React.isValidElement(item)) {
        const hrElements = screen.getAllByRole('separator');
        const specificHrElement = hrElements.find(
          hr =>
            hr.getAttribute('data-testid') ===
            (item.props as any)['data-testid'],
        );

        expect(specificHrElement).toBeInTheDocument();
      } else if (Array.isArray(item)) {
        item.forEach(subItem => {
          expect(screen.getByText(subItem.children)).toBeInTheDocument();
        });
      }
    });

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});

describe('Popover maxHeight', () => {
  it.each`
    maxHeight    | expectedValue
    ${undefined} | ${400}
    ${100}       | ${100}
  `(
    'renders correctly for maxHeight=$maxHeight prop as $expectedValue',
    async ({ maxHeight, expectedValue }) => {
      const user = userEvent.setup();

      render(
        <OxygenProvider>
          <PopoverMenu items={items} maxHeight={maxHeight}>
            <Button type="button">Click</Button>
          </PopoverMenu>
        </OxygenProvider>,
      );

      await user.click(screen.getByText('Click'));

      const popover = screen.getByTestId('POPOVER_MENU');

      expect(popover).toHaveStyle(
        `max-height: calc(${expectedValue}px - 16px)}`,
      );
    },
  );
});

describe('PopoverMenu open/close state and cancel handling', () => {
  it('calls onMenuOpenToggle when menu opens and closes', async () => {
    const user = userEvent.setup();
    const onCancel = jest.fn();
    const onMenuOpenToggle = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu
          items={items}
          onCancel={onCancel}
          onMenuOpenToggle={onMenuOpenToggle}
        >
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    // Check initial render doesn't trigger callback
    expect(onMenuOpenToggle).not.toHaveBeenCalled();

    // Open menu
    await user.click(screen.getByText('Click'));
    expect(onMenuOpenToggle).toHaveBeenCalledWith(true);

    // Close menu by selecting an item
    await user.click(screen.getByText('1'));
    expect(onMenuOpenToggle).toHaveBeenCalledWith(false);
    expect(onMenuOpenToggle).toHaveBeenCalledTimes(2);

    // Should not call onCancel
    expect(onCancel).not.toHaveBeenCalled();
  });

  it('calls onCancel when menu is closed without selecting an item', async () => {
    const user = userEvent.setup();
    const onCancel = jest.fn();
    const onMenuOpenToggle = jest.fn();

    render(
      <OxygenProvider>
        <PopoverMenu
          items={items}
          onCancel={onCancel}
          onMenuOpenToggle={onMenuOpenToggle}
        >
          <Button type="button">Click</Button>
        </PopoverMenu>
        <div data-test-id="outside">Click outside</div>
      </OxygenProvider>,
    );

    // Open menu
    await user.click(screen.getByText('Click'));
    expect(onMenuOpenToggle).toHaveBeenCalledWith(true);
    expect(onCancel).not.toHaveBeenCalled();

    // Close menu by pressing esc key
    await user.keyboard('{Escape}');
    expect(onMenuOpenToggle).toHaveBeenCalledWith(false);
    expect(onCancel).toHaveBeenCalledTimes(1);

    // Open menu again
    await user.click(screen.getByText('Click'));
    expect(onMenuOpenToggle).toHaveBeenCalledWith(true);

    // Close menu by clicking outside
    await user.click(screen.getByTestId('outside'));
    expect(onCancel).toHaveBeenCalledTimes(2);
  });
});

describe('PopoverMenu accessibility', () => {
  it('has role="menu" when opened', async () => {
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <PopoverMenu items={items}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    // Open menu
    await user.click(screen.getByText('Click'));

    // Verify the container has role="menu"
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('correctly groups items under section headers with aria-labelledby', async () => {
    const user = userEvent.setup();

    const itemsWithSectionHeaders = [
      <SectionHeader key="header1">Section 1</SectionHeader>,
      [
        { key: 'item1', children: 'Item 1' },
        { key: 'item2', children: 'Item 2' },
      ],
      <SectionHeader key="header2">Section 2</SectionHeader>,
      [{ key: 'item3', children: 'Item 3' }],
    ];

    render(
      <OxygenProvider>
        <PopoverMenu items={itemsWithSectionHeaders}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));

    // Check that section headers have proper IDs (IDs are on the wrapping li elements)
    const header1Li = screen.getByText('Section 1').closest('li');
    const header2Li = screen.getByText('Section 2').closest('li');

    expect(header1Li).toHaveAttribute('id', 'section-header-1');
    expect(header2Li).toHaveAttribute('id', 'section-header-2');

    // Check that groups are properly labeled by their headers
    const groups = screen.getAllByRole('group');

    expect(groups).toHaveLength(2);
    expect(groups[0]).toHaveAttribute('aria-labelledby', 'section-header-1');
    expect(groups[1]).toHaveAttribute('aria-labelledby', 'section-header-2');

    // Check that items are inside the groups
    const item1 = screen.getByRole('menuitem', { name: 'Item 1' });
    const item2 = screen.getByRole('menuitem', { name: 'Item 2' });
    const item3 = screen.getByRole('menuitem', { name: 'Item 3' });

    // First two items should be in first group
    expect(item1.closest('[role="group"]')).toBe(groups[0]);
    expect(item2.closest('[role="group"]')).toBe(groups[0]);

    // Third item should be in second group
    expect(item3.closest('[role="group"]')).toBe(groups[1]);
  });

  it('groups single items with section headers using aria-labelledby', async () => {
    const user = userEvent.setup();

    const itemsWithSingleItem = [
      <SectionHeader key="header1">Single Item Section</SectionHeader>,
      [{ key: 'item1', children: 'Only Item' }],
    ];

    render(
      <OxygenProvider>
        <PopoverMenu items={itemsWithSingleItem}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));

    // Check that section header has proper ID (ID is on the wrapping li, not the h3)
    const headerLi = screen.getByText('Single Item Section').closest('li');

    expect(headerLi).toHaveAttribute('id', 'section-header-1');

    // Check that there's a group with proper aria-labelledby even for single item
    const group = screen.getByRole('group');

    expect(group).toHaveAttribute('aria-labelledby', 'section-header-1');

    // Check that the single item is inside the group
    const item = screen.getByRole('menuitem', { name: 'Only Item' });

    expect(item.closest('[role="group"]')).toBe(group);
  });

  it('renders EmptyState components as div-level content, not menu items', async () => {
    const user = userEvent.setup();

    const itemsWithEmptyState = [
      <EmptyState
        key="no-results"
        primaryMessage="No results found"
        secondaryMessage="Try a different search term."
      />,
      [], // Empty array as typically used with EmptyState
    ];

    render(
      <OxygenProvider>
        <PopoverMenu items={itemsWithEmptyState}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));

    // Check that EmptyState messages are rendered
    expect(screen.getByText('No results found')).toBeInTheDocument();
    expect(
      screen.getByText('Try a different search term.'),
    ).toBeInTheDocument();

    // Check that there's no menu (since there are no selectable items)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Check that there are no menu items
    expect(screen.queryByRole('menuitem')).not.toBeInTheDocument();
  });

  it('renders loading state with EmptyState component', async () => {
    const user = userEvent.setup();

    const itemsWithLoading = [
      <EmptyState
        key="loading"
        primaryMessage=""
        secondaryMessage="Please wait..."
      />,
      [], // Empty array
    ];

    render(
      <OxygenProvider>
        <PopoverMenu items={itemsWithLoading}>
          <Button type="button">Click</Button>
        </PopoverMenu>
      </OxygenProvider>,
    );

    await user.click(screen.getByText('Click'));

    // Check that loading message is rendered
    expect(screen.getByText('Please wait...')).toBeInTheDocument();

    // Check that there's no menu (since there are no selectable items)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Check that there are no menu items
    expect(screen.queryByRole('menuitem')).not.toBeInTheDocument();
  });
});

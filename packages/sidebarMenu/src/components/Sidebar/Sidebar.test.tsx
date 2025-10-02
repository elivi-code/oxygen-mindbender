import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { OxygenProvider } from '@8x8/oxygen-config';
import { OfficeBuildingIcon, UsersIcon, ArchiveIcon } from '@8x8/oxygen-icon';

import { Sidebar } from './Sidebar';

Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: callback => callback(),
});

const mockFunction = jest.fn();

const items = [
  {
    label: 'Company',
    icon: <OfficeBuildingIcon />,
    onTrigger: mockFunction,
  },
  {
    label: 'Users',
    icon: <UsersIcon />,
    subItems: [
      { label: 'Company Settings' },
      { label: 'Identity & Security' },
      { label: 'Profiles' },
      { label: 'Roles and Permissions' },
      { label: 'Meetings' },
      { label: 'Work App Settings' },
    ],
  },
  // footer items
  {
    label: 'Audit Log Events',
    icon: <ArchiveIcon />,
    isFooter: true,
  },
];

const itemsWithMainMenuActive = [
  {
    label: 'Company',
    icon: <OfficeBuildingIcon />,
  },
  {
    label: 'Users',
    icon: <UsersIcon />,
    subItems: [
      { label: 'Company Settings' },
      { label: 'Identity & Security' },
      { label: 'Profiles' },
      { label: 'Roles and Permissions' },
      { label: 'Meetings' },
      { label: 'Work App Settings' },
    ],
  },
  // footer items
  {
    label: 'Audit Log Events',
    isActive: true,
    icon: <ArchiveIcon />,
    isFooter: true,
  },
];

const itemsWithSubMenuActive = [
  {
    label: 'Company',
    icon: <OfficeBuildingIcon />,
  },
  {
    label: 'Users',
    icon: <UsersIcon />,
    subItems: [
      { label: 'Company Settings' },
      { label: 'Identity & Security' },
      { label: 'Profiles' },
      { label: 'Roles and Permissions' },
      { label: 'Meetings', isActive: true },
      { label: 'Work App Settings' },
    ],
  },
  // footer items
  {
    label: 'Audit Log Events',
    icon: <ArchiveIcon />,
    isFooter: true,
  },
];

describe('Sidebar', () => {
  beforeEach(() => {
    mockFunction.mockClear();
  });
  it('renders all first level items & no 2nd level items', () => {
    render(
      <OxygenProvider>
        <Sidebar items={items} />
      </OxygenProvider>,
    );
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Audit Log Events')).toBeInTheDocument();
    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
  });
  it('renders 2nd level items when activated', async () => {
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <Sidebar items={items} />
      </OxygenProvider>,
    );
    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
    await user.click(screen.getByText('Users'));
    expect(screen.queryByText('Identity & Security')).toBeInTheDocument();
    await user.click(screen.getByText('Users'));
    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
  });
  it('chk if onTrigger invoked on click', async () => {
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <Sidebar items={items} />
      </OxygenProvider>,
    );

    const button = screen.getByText('Company');

    await user.click(button);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  it('chk if onTrigger invoked on cmd+click', async () => {
    render(
      <OxygenProvider>
        <Sidebar items={items} />
      </OxygenProvider>,
    );

    const button = screen.getByText('Company');

    // Simulate cmd+click on the item
    fireEvent.click(button, { metaKey: true });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('renders 2nd level items in collapsed mode on hover', async () => {
    render(
      <OxygenProvider>
        <Sidebar items={items} initialCollapsedState />
      </OxygenProvider>,
    );

    const button = within(screen.getByTestId('SIDEBAR_ITEM_Users')).getByTestId(
      'SIDEBAR_FLOATING_UI_TRIGGER',
    );

    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();

    await fireEvent.mouseEnter(button);
    await fireEvent.pointerMove(button);
    await fireEvent.mouseMove(button);

    expect(screen.getByText('Identity & Security')).toBeInTheDocument();

    await fireEvent.mouseOut(button);
    await fireEvent.pointerOut(button);
    await fireEvent.mouseLeave(button);
    await fireEvent.pointerLeave(button);

    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
  });
  it('renders 2nd level items in collapsed mode on keyboard events', async () => {
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <Sidebar items={items} initialCollapsedState />
      </OxygenProvider>,
    );

    const firstButton = within(
      screen.getByTestId('SIDEBAR_ITEM_Company'),
    ).getByTestId('SIDEBAR_FLOATING_UI_TRIGGER');
    const secondButton = within(
      screen.getByTestId('SIDEBAR_ITEM_Users'),
    ).getByTestId('SIDEBAR_FLOATING_UI_TRIGGER');

    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
    await user.tab();
    expect(firstButton).toHaveFocus();
    await user.tab();
    expect(secondButton).toHaveFocus();

    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
    await user.keyboard('{enter}');
    expect(screen.queryByText('Identity & Security')).toBeInTheDocument();
    await user.keyboard('{escape}');
    expect(screen.queryByText('Identity & Security')).not.toBeInTheDocument();
  });
  it('renders the collapse button only when enabled', () => {
    const { rerender } = render(
      <OxygenProvider>
        <Sidebar items={items} collapseLabel="Collapse" expandLabel="Expand" />
      </OxygenProvider>,
    );

    expect(screen.getByText('Collapse')).toBeInTheDocument();
    expect(
      screen.getByTestId('SIDEBAR_COLLAPSE_ITEM_Collapse'),
    ).toBeInTheDocument();
    rerender(
      <OxygenProvider>
        <Sidebar items={items} />
      </OxygenProvider>,
    );
    expect(screen.queryByText('Collapse')).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('SIDEBAR_COLLAPSE_ITEM_Collapse'),
    ).not.toBeInTheDocument();
  });
  it('renderes initial collapsed state based on value from provider', () => {
    const { rerender } = render(
      <OxygenProvider>
        <Sidebar items={items} collapseLabel="Collapse" expandLabel="Expand" />
      </OxygenProvider>,
    );

    expect(screen.queryByText('Collapse')).toBeInTheDocument();
    rerender(
      <OxygenProvider>
        <Sidebar initialCollapsedState items={items} collapseLabel="Collapse" />
      </OxygenProvider>,
    );
    expect(screen.queryByText('Collapse')).not.toBeInTheDocument();
  });

  it('calls onCollapsedChange', async () => {
    const user = userEvent.setup();
    const onCollapseChange = jest.fn();
    const collapseString = 'Collapse';
    const expandString = 'Expand';

    render(
      <OxygenProvider>
        <Sidebar
          items={items}
          collapseLabel={collapseString}
          expandLabel={expandString}
          onCollapseChange={onCollapseChange}
        />
      </OxygenProvider>,
    );

    expect(onCollapseChange).toHaveBeenCalledWith(false);
    await user.click(screen.getByText(collapseString));
    expect(onCollapseChange).toHaveBeenCalledWith(true);
  });

  it('scrolls into view the active element', () => {
    const { rerender } = render(
      <OxygenProvider>
        <Sidebar items={items} />
      </OxygenProvider>,
    );

    // Main menu item check
    const mainItem = screen.getByText('Audit Log Events');

    jest.mocked(Element.prototype.scrollIntoView).mockClear();

    expect(mainItem.scrollIntoView).toHaveBeenCalledTimes(0);
    rerender(
      <OxygenProvider>
        <Sidebar items={itemsWithMainMenuActive} />
      </OxygenProvider>,
    );
    expect(mainItem.scrollIntoView).toHaveBeenCalledTimes(1);

    // mock lives on the prototype directly, need to reset
    jest.mocked(Element.prototype.scrollIntoView).mockClear();

    // SubMenuItem check
    screen.getByText('Users').click();
    const item = screen.getByText('Meetings');

    expect(item.scrollIntoView).toHaveBeenCalledTimes(0);
    rerender(
      <OxygenProvider>
        <Sidebar items={itemsWithSubMenuActive} />
      </OxygenProvider>,
    );
    expect(item.scrollIntoView).toHaveBeenCalledTimes(1);
  });
});

interface CustomComponentProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const CustomComponent = React.forwardRef<
  HTMLAnchorElement,
  CustomComponentProps
  // eslint-disable-next-line jsx-a11y/anchor-has-content
>((props, ref) => <a ref={ref} {...props} />);

CustomComponent.displayName = 'CustomComponent';

describe('renders Sidebar with custom components', () => {
  const itemsWithLink = [
    {
      label: 'Company',
      link: '/company',
      icon: <OfficeBuildingIcon />,
    },
    {
      label: 'Users',
      link: '/users',
      icon: <UsersIcon />,
      subItems: [
        { label: 'Company Settings', link: '/company-settings' },
        { label: 'Meetings', isActive: true },
      ],
    },
    // footer items
    {
      label: 'Audit Log Events',
      link: '/audis-log-events',
      icon: <ArchiveIcon />,
      isFooter: true,
    },
  ];

  it('renders the custom item', () => {
    render(
      <OxygenProvider>
        <Sidebar items={itemsWithLink} linkComponent={CustomComponent} />
      </OxygenProvider>,
    );

    const linkCompany = screen.getByTestId('SIDEBAR_ITEM_Company').children[0];

    expect(linkCompany).toBeInTheDocument();
    expect(linkCompany.tagName).toBe('A');
    expect(linkCompany).toHaveAttribute('to', '/company');
  });

  it('renders the custom item and custom prop', () => {
    render(
      <OxygenProvider>
        <Sidebar
          items={itemsWithLink}
          linkComponent={CustomComponent}
          linkProp="href"
        />
      </OxygenProvider>,
    );

    const linkCompany = screen.getByTestId('SIDEBAR_ITEM_Company').children[0];

    expect(linkCompany).toBeInTheDocument();
    expect(linkCompany.tagName).toBe('A');
    expect(linkCompany).toHaveAttribute('href', '/company');
  });

  it('does not render the custom item if linkComponent is not defined', () => {
    render(
      <OxygenProvider>
        <Sidebar items={itemsWithLink} />
      </OxygenProvider>,
    );

    const linkCompany = screen.getByTestId('SIDEBAR_ITEM_Company').children[0];

    expect(linkCompany).toBeInTheDocument();
    expect(linkCompany.tagName).toBe('BUTTON');
    expect(linkCompany).not.toHaveAttribute('to');
  });
  it('changes the border from right to left when position is to right', () => {
    render(
      <OxygenProvider>
        <Sidebar items={items} position="right" />
      </OxygenProvider>,
    );

    const sidebar = screen.getByTestId('SIDEBAR');

    expect(sidebar).toHaveStyle('border-left: 1px solid #E0E0E0;');
  });

  it('changes the collapse arrow when position is to right - sidebar not collapsed', () => {
    render(
      <OxygenProvider>
        <Sidebar
          items={items}
          collapseLabel="Collapse"
          expandLabel="Expand"
          position="right"
        />
      </OxygenProvider>,
    );

    const sidebarCollapse = screen.getByTestId(
      'SIDEBAR_COLLAPSE_ITEM_Collapse',
    );

    expect(sidebarCollapse).toBeInTheDocument();

    // DoubleArrowRightIcon
    expect(screen.getByTestId('DOUBLE_ARROW_RIGHT_ICON')).toBeInTheDocument();
  });
  it('changes the collapse arrow when position is to right - sidebar collapsed', () => {
    render(
      <OxygenProvider>
        <Sidebar
          items={items}
          collapseLabel="Collapse"
          expandLabel="Expand"
          position="right"
          initialCollapsedState
        />
      </OxygenProvider>,
    );

    const sidebarCollapse = screen.getByTestId(
      'SIDEBAR_COLLAPSE_FLOATING_UI_TRIGGER',
    );

    expect(sidebarCollapse).toBeInTheDocument();

    // DoubleArrowLeftIcon
    expect(screen.getByTestId('DOUBLE_ARROW_LEFT_ICON')).toBeInTheDocument();
  });
});

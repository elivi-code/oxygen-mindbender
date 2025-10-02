import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MenuBadge } from './Badge';
import { SidebarProvider } from '../../Sidebar/SidebarProvider';

const renderWithProvider = (
  component: React.ReactElement,
  { isSidebarCollapsed = false } = {},
) => {
  return render(
    <SidebarProvider initialCollapsedState={isSidebarCollapsed}>
      {component}
    </SidebarProvider>,
  );
};

const defaultProps = {};

describe('<MenuBadge />', () => {
  describe('when menu does not have badge ', () => {
    it('should not render anything', () => {
      const { container } = renderWithProvider(
        <MenuBadge {...defaultProps} hasBadge={false} />,
      );

      expect(container.firstChild).toBeNull();
    });

    it('should not render anything even with badge children', () => {
      const { container } = renderWithProvider(
        <MenuBadge {...defaultProps} hasBadge={false} badgeChildren="5" />,
      );

      expect(container.firstChild).toBeNull();
    });
  });

  describe('when menu has badge', () => {
    describe('with expanded sidebar', () => {
      it('should render badge wrapper for main menu item', () => {
        renderWithProvider(<MenuBadge {...defaultProps} hasBadge />, {
          isSidebarCollapsed: false,
        });

        // Check that wrapper div exists using test ID
        const wrapperDiv = screen.getByTestId('menu_badge_wrapper');

        expect(wrapperDiv).toBeInTheDocument();
      });

      it('should render badge wrapper for sub menu item without padding', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge isSubMenuItem />,
          {
            isSidebarCollapsed: false,
          },
        );

        // Wrapper should exist
        const wrapperDiv = screen.getByTestId('menu_badge_wrapper');

        expect(wrapperDiv).toBeInTheDocument();
      });

      it('should render badge with small size when no children', () => {
        renderWithProvider(<MenuBadge {...defaultProps} hasBadge />, {
          isSidebarCollapsed: false,
        });

        expect(screen.getByTestId('BADGE')).toBeInTheDocument();
      });

      it('should render badge with medium size when children provided', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge badgeChildren="5" />,
          {
            isSidebarCollapsed: false,
          },
        );

        expect(screen.getByText('5')).toBeInTheDocument();
      });

      it('should render badge with text content', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge badgeChildren="New" />,
          {
            isSidebarCollapsed: false,
          },
        );

        expect(screen.getByText('New')).toBeInTheDocument();
      });

      it('should render badge with numeric content', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge badgeChildren={10} />,
          {
            isSidebarCollapsed: false,
          },
        );

        expect(screen.getByText('10')).toBeInTheDocument();
      });
    });

    describe('with collapsed sidebar', () => {
      it('should render styled badge for main menu item', () => {
        renderWithProvider(<MenuBadge {...defaultProps} hasBadge />, {
          isSidebarCollapsed: true,
        });

        expect(screen.getByTestId('BADGE')).toBeInTheDocument();
      });

      it('should render styled badge with children for main menu item', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge badgeChildren={3} />,
          {
            isSidebarCollapsed: true,
          },
        );

        expect(screen.getByTestId('BADGE')).toBeInTheDocument();

        expect(screen.getByText('3')).toBeInTheDocument();
      });

      it('should render badge wrapper for sub menu item (not styled badge)', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge isSubMenuItem />,
          {
            isSidebarCollapsed: true,
          },
        );

        // Should render the wrapper, not the styled badge
        const wrapperDiv = screen.getByTestId('menu_badge_wrapper');

        expect(wrapperDiv).toBeInTheDocument();
      });

      it('should render badge wrapper for sub menu item with children', () => {
        renderWithProvider(
          <MenuBadge
            {...defaultProps}
            hasBadge
            isSubMenuItem
            badgeChildren="7"
          />,
          { isSidebarCollapsed: true },
        );

        expect(screen.getByText('7')).toBeInTheDocument();
        const wrapperDiv = screen.getByTestId('menu_badge_wrapper');

        expect(wrapperDiv).toBeInTheDocument();
      });
    });
  });

  describe('badge size logic', () => {
    it('should use small size when no badge children provided', () => {
      renderWithProvider(<MenuBadge {...defaultProps} hasBadge />, {
        isSidebarCollapsed: false,
      });

      expect(screen.getByTestId('BADGE')).toBeInTheDocument();
    });

    it('should use medium size when badge children provided', () => {
      renderWithProvider(
        <MenuBadge {...defaultProps} hasBadge badgeChildren="test" />,
        {
          isSidebarCollapsed: false,
        },
      );

      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });

  describe('conditional rendering scenarios', () => {
    it('should handle empty string as badge children', () => {
      renderWithProvider(
        <MenuBadge {...defaultProps} hasBadge badgeChildren="" />,
        {
          isSidebarCollapsed: false,
        },
      );

      expect(screen.getByTestId('BADGE')).toBeInTheDocument();
    });

    it('should handle zero as badge children', () => {
      renderWithProvider(
        <MenuBadge {...defaultProps} hasBadge badgeChildren={0} />,
        {
          isSidebarCollapsed: false,
        },
      );

      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('should handle React element as badge children', () => {
      renderWithProvider(
        <MenuBadge
          {...defaultProps}
          hasBadge
          badgeChildren={<span>Custom</span>}
        />,
        { isSidebarCollapsed: false },
      );

      expect(screen.getByText('Custom')).toBeInTheDocument();
    });
  });

  describe('accessibility features', () => {
    describe('ARIA attributes', () => {
      it('should have aria-hidden="true" to hide badge from screen readers', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge badgeChildren={5} />,
          { isSidebarCollapsed: false },
        );

        const badge = screen.getByTestId('BADGE');

        expect(badge).toHaveAttribute('aria-hidden', 'true');
      });

      it('should have aria-hidden="true" in collapsed state', () => {
        renderWithProvider(
          <MenuBadge {...defaultProps} hasBadge badgeChildren={3} />,
          { isSidebarCollapsed: true },
        );

        const badge = screen.getByTestId('BADGE');

        expect(badge).toHaveAttribute('aria-hidden', 'true');
      });

      it('should have aria-hidden="true" for sub menu items', () => {
        renderWithProvider(
          <MenuBadge
            {...defaultProps}
            hasBadge
            badgeChildren={2}
            isSubMenuItem
          />,
          { isSidebarCollapsed: false },
        );

        const badge = screen.getByTestId('BADGE');

        expect(badge).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });
});

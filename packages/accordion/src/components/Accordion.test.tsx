import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ArrowDownIcon } from '@8x8/oxygen-icon';

import Accordion from './Accordion';

const user = userEvent.setup();

describe('<Accordion />', () => {
  it('should render the iconLeft when provided', () => {
    render(
      <Accordion title="title" iconLeft={<ArrowDownIcon />}>
        content
      </Accordion>,
    );
    expect(screen.queryByTestId('ACCORDION_ICON_LEFT')).toBeInTheDocument();
  });

  it('should not render the iconLeft when not provided', () => {
    render(<Accordion title="title">content</Accordion>);
    expect(screen.queryByTestId('ACCORDION_ICON_LEFT')).not.toBeInTheDocument();
  });

  it('should render the provided props title, text and content', () => {
    render(
      <Accordion title="title" text="text">
        content
      </Accordion>,
    );
    expect(screen.queryByText('title')).toBeInTheDocument();
    expect(screen.queryByText('text')).toBeInTheDocument();
    // @todo this should be changed and the content should not be rendered when not expanded
    expect(screen.queryByText('content')).toBeInTheDocument();
  });

  it('should render right Arrow icon', () => {
    render(<Accordion title="title">content</Accordion>);
    expect(screen.queryByTestId('ACCORDION_ICON_RIGHT')).toBeInTheDocument();
  });

  it('should show children when expanded and hide when collapsed', async () => {
    const TestComponent = () => {
      const [isExpanded, setIsExpanded] = React.useState(false);

      return (
        <Accordion
          title="title"
          isExpanded={isExpanded}
          onChange={() => setIsExpanded(prev => !prev)}
        >
          <div>Child content</div>
        </Accordion>
      );
    };

    render(<TestComponent />);

    // Initial state - verify collapsed state
    const contentContainer = screen.getByTestId('ACCORDION_CONTENT');

    expect(screen.getByTestId('ACCORDION_HEADER')).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(contentContainer).toHaveStyleRule('grid-template-rows', '0fr');

    // Expand accordion
    await user.click(screen.getByText('title'));

    // Check that the content should now be expanded
    expect(screen.getByTestId('ACCORDION_HEADER')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(contentContainer).toHaveStyleRule('grid-template-rows', '1fr');

    // Collapse again
    await user.click(screen.getByText('title'));

    // Content should be hidden again
    expect(screen.getByTestId('ACCORDION_HEADER')).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(contentContainer).toHaveStyleRule('grid-template-rows', '0fr');
  });

  it('should respect initial expanded state from props', () => {
    render(
      <Accordion title="title" isExpanded>
        <div data-test-id="accordion-content">Child content</div>
      </Accordion>,
    );

    expect(screen.getByTestId('ACCORDION_HEADER')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByTestId('ACCORDION_CONTENT')).toHaveStyleRule(
      'grid-template-rows',
      '1fr',
    );
  });

  it('should handle keyboard accessibility', async () => {
    const TestComponent = () => {
      const [isExpanded, setIsExpanded] = React.useState(false);

      return (
        <Accordion
          title="title"
          isExpanded={isExpanded}
          onChange={() => setIsExpanded(prev => !prev)}
        >
          <div data-test-id="accordion-content">Child content</div>
        </Accordion>
      );
    };

    render(<TestComponent />);

    // Get header and focus it
    const header = screen.getByTestId('ACCORDION_HEADER');

    header.focus();

    // Press Enter key to expand
    await user.keyboard('{Enter}');

    // Verify expansion
    expect(header).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('ACCORDION_CONTENT')).toHaveStyleRule(
      'grid-template-rows',
      '1fr',
    );
  });

  it('should call onChange when toggled, but not re-rendered', async () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Accordion title="title" onChange={onChange}>
        content
      </Accordion>,
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    await user.click(screen.getByText('title'));
    expect(onChange).toHaveBeenCalledTimes(1);
    await user.click(screen.getByText('title'));
    expect(onChange).toHaveBeenCalledTimes(2);

    rerender(
      <Accordion title="title" onChange={onChange} isExpanded>
        content
      </Accordion>,
    );

    expect(onChange).toHaveBeenCalledTimes(2);
    rerender(
      <Accordion title="title" onChange={onChange} isExpanded>
        content
      </Accordion>,
    );

    expect(onChange).toHaveBeenCalledTimes(2);
  });

  describe('expandTrigger prop', () => {
    describe('expandTrigger="header" (default)', () => {
      it('should render header as button element by default', () => {
        render(<Accordion title="title">content</Accordion>);

        const header = screen.getByTestId('ACCORDION_HEADER');

        expect(header.tagName).toBe('BUTTON');
        expect(header).toHaveAttribute('aria-expanded', 'false');
      });

      it('should render header as button when explicitly set to "header"', () => {
        render(
          <Accordion title="title" expandTrigger="header">
            content
          </Accordion>,
        );

        const header = screen.getByTestId('ACCORDION_HEADER');

        expect(header.tagName).toBe('BUTTON');
        expect(header).toHaveAttribute('aria-expanded', 'false');
      });

      it('should make entire header clickable', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="header">
            content
          </Accordion>,
        );

        const header = screen.getByTestId('ACCORDION_HEADER');

        await user.click(header);

        expect(onChange).toHaveBeenCalledTimes(1);
      });

      it('should support keyboard navigation on header', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="header">
            content
          </Accordion>,
        );

        const header = screen.getByTestId('ACCORDION_HEADER');

        header.focus();
        await user.keyboard('{Enter}');

        expect(onChange).toHaveBeenCalledTimes(1);

        await user.keyboard(' ');
        expect(onChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('expandTrigger="arrow"', () => {
      it('should render header as div element', () => {
        render(
          <Accordion title="title" expandTrigger="arrow">
            content
          </Accordion>,
        );

        const header = screen.getByTestId('ACCORDION_HEADER');

        expect(header.tagName).toBe('DIV');
        expect(header).not.toHaveAttribute('aria-expanded');
      });

      it('should make header non-clickable', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="arrow">
            content
          </Accordion>,
        );

        const header = screen.getByTestId('ACCORDION_HEADER');

        await user.click(header);

        expect(onChange).not.toHaveBeenCalled();
      });

      it('should make only arrow icon clickable', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="arrow">
            content
          </Accordion>,
        );

        // Click on the arrow icon button
        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        await user.click(arrowButton);
        expect(onChange).toHaveBeenCalledTimes(1);
      });

      it('should support keyboard navigation on arrow icon', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="arrow">
            content
          </Accordion>,
        );

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        arrowButton.focus();
        await user.keyboard('{Enter}');

        expect(onChange).toHaveBeenCalledTimes(1);
      });

      it('should allow custom content interactions without affecting accordion toggle', async () => {
        const onChange = jest.fn();
        const customButtonClick = jest.fn();

        render(
          <Accordion
            title="title"
            onChange={onChange}
            expandTrigger="arrow"
            contentAfterTitle={
              <button
                type="button"
                onClick={customButtonClick}
                data-test-id="custom-button"
              >
                Custom Action
              </button>
            }
          >
            content
          </Accordion>,
        );

        // Click custom content - should not trigger accordion toggle
        const customButton = screen.getByTestId('custom-button');

        await user.click(customButton);

        expect(customButtonClick).toHaveBeenCalledTimes(1);
        expect(onChange).not.toHaveBeenCalled();

        // Click arrow - should trigger accordion toggle
        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        await user.click(arrowButton);

        expect(onChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('integration tests', () => {
      it('should maintain expand/collapse functionality in both modes', async () => {
        const TestComponent = () => {
          const [mode, setMode] = React.useState<'header' | 'arrow'>('header');
          const [isExpanded, setIsExpanded] = React.useState(false);

          return (
            <div>
              <button
                type="button"
                onClick={() => setMode(mode === 'header' ? 'arrow' : 'header')}
                data-test-id="mode-toggle"
              >
                Toggle Mode
              </button>
              <Accordion
                title="title"
                expandTrigger={mode}
                isExpanded={isExpanded}
                onChange={() => setIsExpanded(prev => !prev)}
              >
                <div data-test-id="accordion-content">Content</div>
              </Accordion>
            </div>
          );
        };

        render(<TestComponent />);

        // Start in header mode
        let header = screen.getByTestId('ACCORDION_HEADER');

        expect(header.tagName).toBe('BUTTON');

        // Toggle to arrow mode
        await user.click(screen.getByTestId('mode-toggle'));

        header = screen.getByTestId('ACCORDION_HEADER');
        expect(header.tagName).toBe('DIV');

        // Test functionality still works in arrow mode
        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        await user.click(arrowButton);

        expect(screen.getByTestId('ACCORDION_CONTENT')).toHaveStyleRule(
          'grid-template-rows',
          '1fr',
        );
      });

      it('should preserve aria-expanded state across mode changes', async () => {
        const TestComponent = () => {
          const [expandTrigger, setExpandTrigger] = React.useState<
            'header' | 'arrow'
          >('header');

          return (
            <div>
              <button
                type="button"
                onClick={() =>
                  setExpandTrigger(
                    expandTrigger === 'header' ? 'arrow' : 'header',
                  )
                }
                data-test-id="toggle-mode"
              >
                Toggle Mode
              </button>
              <Accordion title="title" expandTrigger={expandTrigger} isExpanded>
                content
              </Accordion>
            </div>
          );
        };

        render(<TestComponent />);

        // Initially in header mode, expanded
        let header = screen.getByTestId('ACCORDION_HEADER');

        expect(header).toHaveAttribute('aria-expanded', 'true');

        // Switch to arrow mode
        await user.click(screen.getByTestId('toggle-mode'));

        // Should still be expanded in arrow mode
        header = screen.getByTestId('ACCORDION_HEADER');
        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        expect(arrowButton).toHaveAttribute('aria-expanded', 'true');
      });
    });

    describe('edge cases', () => {
      it('should handle rapid clicking in arrow mode', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="arrow">
            content
          </Accordion>,
        );

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        // Rapid clicks
        await user.click(arrowButton);
        await user.click(arrowButton);
        await user.click(arrowButton);

        expect(onChange).toHaveBeenCalledTimes(3);
      });

      it('should handle title clicks in arrow mode without triggering onChange', async () => {
        const onChange = jest.fn();

        render(
          <Accordion title="title" onChange={onChange} expandTrigger="arrow">
            content
          </Accordion>,
        );

        // Click on title text directly
        await user.click(screen.getByText('title'));
        expect(onChange).not.toHaveBeenCalled();

        // Click on secondary text if present
        render(
          <Accordion
            title="title"
            text="secondary"
            onChange={onChange}
            expandTrigger="arrow"
          >
            content
          </Accordion>,
        );

        await user.click(screen.getByText('secondary'));
        expect(onChange).not.toHaveBeenCalled();
      });

      it('should prevent event bubbling when custom content is clicked in arrow mode', async () => {
        const onChange = jest.fn();
        const customClick = jest.fn();

        render(
          <Accordion
            title="title"
            onChange={onChange}
            expandTrigger="arrow"
            contentAfterTitle={
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  customClick();
                }}
                data-test-id="custom-action"
              >
                Action
              </button>
            }
          >
            content
          </Accordion>,
        );

        await user.click(screen.getByTestId('custom-action'));

        expect(customClick).toHaveBeenCalledTimes(1);
        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('accessibility tests', () => {
      describe('expandTrigger="header" accessibility', () => {
        it('should have proper ARIA attributes on header button', () => {
          render(
            <Accordion title="Test Accordion" expandTrigger="header">
              content
            </Accordion>,
          );

          const header = screen.getByTestId('ACCORDION_HEADER');
          const contentPanel = screen.getByTestId('ACCORDION_CONTENT');

          expect(header).toHaveAttribute('aria-expanded', 'false');
          expect(header).toHaveAttribute(
            'aria-controls',
            'ACCORDION_CONTENT_PANEL',
          );
          expect(contentPanel).toHaveAttribute('id', 'ACCORDION_CONTENT_PANEL');
          expect(contentPanel).toHaveAttribute(
            'aria-labelledby',
            'ACCORDION_HEADER',
          );
        });

        it('should update aria-expanded when toggled', async () => {
          const TestComponent = () => {
            const [isExpanded, setIsExpanded] = React.useState(false);

            return (
              <Accordion
                title="Test Accordion"
                expandTrigger="header"
                isExpanded={isExpanded}
                onChange={() => setIsExpanded(prev => !prev)}
              >
                content
              </Accordion>
            );
          };

          render(<TestComponent />);

          const header = screen.getByTestId('ACCORDION_HEADER');

          expect(header).toHaveAttribute('aria-expanded', 'false');

          await user.click(header);
          expect(header).toHaveAttribute('aria-expanded', 'true');

          await user.click(header);
          expect(header).toHaveAttribute('aria-expanded', 'false');
        });
      });

      describe('expandTrigger="arrow" accessibility', () => {
        it('should have proper ARIA attributes on arrow button', () => {
          render(
            <Accordion title="Test Accordion" expandTrigger="arrow">
              content
            </Accordion>,
          );

          const header = screen.getByTestId('ACCORDION_HEADER');
          const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');
          const contentPanel = screen.getByTestId('ACCORDION_CONTENT');

          // Header should not have aria-expanded in arrow mode
          expect(header).not.toHaveAttribute('aria-expanded');
          expect(header).not.toHaveAttribute('aria-controls');

          // Arrow button should have proper ARIA attributes
          expect(arrowButton).toHaveAttribute('aria-expanded', 'false');
          expect(arrowButton).toHaveAttribute(
            'aria-controls',
            'ACCORDION_CONTENT_PANEL',
          );
          expect(arrowButton).toHaveAttribute(
            'aria-label',
            'Expand Test Accordion',
          );

          // Content panel should have proper attributes
          expect(contentPanel).toHaveAttribute('id', 'ACCORDION_CONTENT_PANEL');
          expect(contentPanel).toHaveAttribute(
            'aria-labelledby',
            'ACCORDION_HEADER',
          );
        });

        it('should update arrow button aria-expanded and aria-label when toggled', async () => {
          const TestComponent = () => {
            const [isExpanded, setIsExpanded] = React.useState(false);

            return (
              <Accordion
                title="Test Accordion"
                expandTrigger="arrow"
                isExpanded={isExpanded}
                onChange={() => setIsExpanded(prev => !prev)}
              >
                content
              </Accordion>
            );
          };

          render(<TestComponent />);

          const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

          expect(arrowButton).toHaveAttribute('aria-expanded', 'false');
          expect(arrowButton).toHaveAttribute(
            'aria-label',
            'Expand Test Accordion',
          );

          await user.click(arrowButton);

          expect(arrowButton).toHaveAttribute('aria-expanded', 'true');
          expect(arrowButton).toHaveAttribute(
            'aria-label',
            'Collapse Test Accordion',
          );

          await user.click(arrowButton);

          expect(arrowButton).toHaveAttribute('aria-expanded', 'false');
          expect(arrowButton).toHaveAttribute(
            'aria-label',
            'Expand Test Accordion',
          );
        });

        it('should support keyboard navigation on arrow button', async () => {
          const onChange = jest.fn();

          render(
            <Accordion
              title="Test Accordion"
              expandTrigger="arrow"
              onChange={onChange}
            >
              content
            </Accordion>,
          );

          const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

          // Test Enter key
          arrowButton.focus();
          await user.keyboard('{Enter}');
          expect(onChange).toHaveBeenCalledTimes(1);

          // Test Space key
          await user.keyboard(' ');
          expect(onChange).toHaveBeenCalledTimes(2);
        });

        it('should not make header keyboard accessible in arrow mode', async () => {
          const onChange = jest.fn();

          render(
            <Accordion
              title="Test Accordion"
              expandTrigger="arrow"
              onChange={onChange}
            >
              content
            </Accordion>,
          );

          const header = screen.getByTestId('ACCORDION_HEADER');

          header.focus();
          await user.keyboard('{Enter}');
          await user.keyboard(' ');

          expect(onChange).not.toHaveBeenCalled();
        });
      });

      describe('screen reader compatibility', () => {
        it('should provide accessible names for content regions', () => {
          render(
            <Accordion
              title="My Accordion"
              testId="TEST_ACCORDION"
              expandTrigger="arrow"
            >
              content
            </Accordion>,
          );

          const header = screen.getByTestId('TEST_ACCORDION_HEADER');
          const contentPanel = screen.getByTestId('TEST_ACCORDION_CONTENT');

          expect(contentPanel).toHaveAttribute(
            'aria-labelledby',
            'TEST_ACCORDION_HEADER',
          );

          // The header should contain the title text for screen readers
          expect(header).toHaveTextContent('My Accordion');
        });

        it('should maintain proper focus management', async () => {
          render(
            <Accordion title="Test Accordion" expandTrigger="arrow">
              <button type="button">Content Button</button>
            </Accordion>,
          );

          const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');
          const contentButton = screen.getByText('Content Button');

          // Arrow button should be focusable
          arrowButton.focus();
          expect(arrowButton).toHaveFocus();

          // Content should be focusable when expanded
          contentButton.focus();
          expect(contentButton).toHaveFocus();
        });
      });
    });

    describe('translations prop', () => {
      it('should use default translations when none provided', () => {
        render(
          <Accordion title="Test Accordion" expandTrigger="arrow">
            content
          </Accordion>,
        );

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        expect(arrowButton).toHaveAttribute(
          'aria-label',
          'Expand Test Accordion',
        );
      });

      it('should use custom translations when provided', () => {
        const customTranslations = {
          expand: 'Open',
          collapse: 'Close',
        };

        render(
          <Accordion
            title="Test Accordion"
            expandTrigger="arrow"
            translations={customTranslations}
          >
            content
          </Accordion>,
        );

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        expect(arrowButton).toHaveAttribute(
          'aria-label',
          'Open Test Accordion',
        );
      });

      it('should support partial translations - expand only', () => {
        const partialTranslations = {
          expand: 'Show',
        };

        render(
          <Accordion
            title="Test Accordion"
            expandTrigger="arrow"
            translations={partialTranslations}
          >
            content
          </Accordion>,
        );

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        expect(arrowButton).toHaveAttribute(
          'aria-label',
          'Show Test Accordion',
        );
      });

      it('should support partial translations - collapse only', async () => {
        const partialTranslations = {
          collapse: 'Hide',
        };

        const TestComponent = () => {
          const [isExpanded, setIsExpanded] = React.useState(true);

          return (
            <Accordion
              title="Test Accordion"
              expandTrigger="arrow"
              isExpanded={isExpanded}
              translations={partialTranslations}
              onChange={() => setIsExpanded(prev => !prev)}
            >
              content
            </Accordion>
          );
        };

        render(<TestComponent />);

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        // Should use custom collapse translation and default expand translation
        expect(arrowButton).toHaveAttribute(
          'aria-label',
          'Hide Test Accordion',
        );

        await user.click(arrowButton);

        expect(arrowButton).toHaveAttribute(
          'aria-label',
          'Expand Test Accordion',
        );
      });

      it('should update aria-label with custom translations when toggled', async () => {
        const customTranslations = {
          expand: 'Mostrar',
          collapse: 'Ocultar',
        };

        const TestComponent = () => {
          const [isExpanded, setIsExpanded] = React.useState(false);

          return (
            <Accordion
              title="Acordeón"
              expandTrigger="arrow"
              isExpanded={isExpanded}
              translations={customTranslations}
              onChange={() => setIsExpanded(prev => !prev)}
            >
              content
            </Accordion>
          );
        };

        render(<TestComponent />);

        const arrowButton = screen.getByTestId('ACCORDION_ARROW_BUTTON');

        expect(arrowButton).toHaveAttribute('aria-label', 'Mostrar Acordeón');

        await user.click(arrowButton);

        expect(arrowButton).toHaveAttribute('aria-label', 'Ocultar Acordeón');

        await user.click(arrowButton);

        expect(arrowButton).toHaveAttribute('aria-label', 'Mostrar Acordeón');
      });
    });
  });

  describe('inert attribute', () => {
    it('should have inert attribute when collapsed', () => {
      render(<Accordion title="Test Accordion">content</Accordion>);

      const contentPanel = screen.getByTestId('ACCORDION_CONTENT');

      expect(contentPanel).toHaveAttribute('inert', '');
    });

    it('should not have inert attribute when expanded', () => {
      render(
        <Accordion title="Test Accordion" isExpanded>
          content
        </Accordion>,
      );

      const contentPanel = screen.getByTestId('ACCORDION_CONTENT');

      expect(contentPanel).not.toHaveAttribute('inert');
    });

    it('should toggle inert attribute when expanded/collapsed', async () => {
      const TestComponent = () => {
        const [isExpanded, setIsExpanded] = React.useState(false);

        return (
          <Accordion
            title="Test Accordion"
            isExpanded={isExpanded}
            onChange={() => setIsExpanded(prev => !prev)}
          >
            <button type="button">Focus target</button>
          </Accordion>
        );
      };

      render(<TestComponent />);

      const contentPanel = screen.getByTestId('ACCORDION_CONTENT');
      const header = screen.getByTestId('ACCORDION_HEADER');

      // Initially collapsed - should have inert
      expect(contentPanel).toHaveAttribute('inert', '');

      // Expand accordion
      await user.click(header);

      // Should not have inert when expanded
      expect(contentPanel).not.toHaveAttribute('inert');

      // Collapse again
      await user.click(header);

      // Should have inert when collapsed
      expect(contentPanel).toHaveAttribute('inert', '');
    });
  });
});

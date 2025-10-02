import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { act } from 'react-test-renderer';
import Accordion from './Accordion';
import AccordionGroup from './AccordionGroup';

describe('<AccordionGroup />', () => {
  it('should render one child correctly', () => {
    render(
      <AccordionGroup>
        <Accordion title="title">Content</Accordion>
      </AccordionGroup>,
    );

    expect(screen.getByTestId('ACCORDION_GROUP')).toBeInTheDocument();
    expect(
      screen.getByTestId('ACCORDION_GROUP').children[0].children,
    ).toHaveLength(1);
    expect(screen.queryAllByTestId('ACCORDION_GROUP_ITEM')).toHaveLength(1);
  });

  it('should render multiple children correctly', () => {
    render(
      <AccordionGroup>
        <Accordion title="title">Content</Accordion>
        <Accordion title="title">Content2</Accordion>
        <Accordion title="title">Content3</Accordion>
        <Accordion title="title">Content4</Accordion>
      </AccordionGroup>,
    );

    expect(screen.getByTestId('ACCORDION_GROUP')).toBeInTheDocument();
    expect(
      screen.getByTestId('ACCORDION_GROUP').children[0].children,
    ).toHaveLength(4);
    expect(screen.queryAllByTestId('ACCORDION_GROUP_ITEM')).toHaveLength(4);
  });

  it('should send id on onChange or null if already active', () => {
    const onChange = jest.fn();

    render(
      <AccordionGroup onChange={onChange}>
        <Accordion title="title" id="Accordion_1">
          Content
        </Accordion>
        <Accordion title="title" id="Accordion_2">
          Content2
        </Accordion>
        <Accordion title="title" id="Accordion_3">
          Content3
        </Accordion>
        <Accordion title="title" id="Accordion_4">
          Content4
        </Accordion>
      </AccordionGroup>,
    );

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });
    expect(onChange).toHaveBeenNthCalledWith(1, 'Accordion_2');

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });

    expect(onChange).toHaveBeenNthCalledWith(2, null);
  });

  it('should send id on onChange even if active if shouldCloseOnActiveClick is false', () => {
    const onChange = jest.fn();

    render(
      <AccordionGroup onChange={onChange} shouldCloseOnActiveClick={false}>
        <Accordion title="title" id="Accordion_1">
          Content
        </Accordion>
        <Accordion title="title" id="Accordion_2">
          Content2
        </Accordion>
        <Accordion title="title" id="Accordion_3">
          Content3
        </Accordion>
        <Accordion title="title" id="Accordion_4">
          Content4
        </Accordion>
      </AccordionGroup>,
    );

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });
    expect(onChange).toHaveBeenNthCalledWith(1, 'Accordion_2');

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });

    expect(onChange).toHaveBeenNthCalledWith(2, 'Accordion_2');
  });

  it('should send random uuid if id is not provided', () => {
    let uuid = null;
    const onChange = id => {
      uuid = id;
    };

    render(
      <AccordionGroup onChange={onChange}>
        <Accordion title="title">Content</Accordion>
        <Accordion title="title">Content2</Accordion>
        <Accordion title="title">Content3</Accordion>
        <Accordion title="title">Content4</Accordion>
      </AccordionGroup>,
    );

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });

    expect(uuid).not.toBeNull();

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });

    expect(uuid).toBeNull();
  });

  it('should open Accordion based on activeElementId when isControlled is true', () => {
    const onChange = jest.fn(() => false);

    const MockAccordion = jest.fn(Accordion);

    render(
      <AccordionGroup onChange={onChange} initialActiveElementId="Accordion_1">
        <MockAccordion title="title" id="Accordion_1">
          Content
        </MockAccordion>
        <MockAccordion title="title" id="Accordion_2">
          Content2
        </MockAccordion>
      </AccordionGroup>,
    );

    const initialFirstAccordionItemProps = MockAccordion.mock.calls[0][0];
    const initialSecondAccordionItemProps = MockAccordion.mock.calls[1][0];

    expect(initialFirstAccordionItemProps.isExpanded).toBe(true);
    expect(initialSecondAccordionItemProps.isExpanded).toBe(false);

    act(() => {
      fireEvent.click(
        screen.queryAllByTestId('ACCORDION_GROUP_ITEM')[1].children[0],
      );
    });

    expect(onChange).toHaveBeenNthCalledWith(1, 'Accordion_2');

    // when onChange returns false the component does not rerender
    expect(MockAccordion).toHaveBeenCalledTimes(2);
  });

  describe('prop passing behavior', () => {
    describe('expandTrigger prop', () => {
      it('should pass expandTrigger prop to all child accordions', () => {
        render(
          <AccordionGroup expandTrigger="arrow">
            <Accordion title="First Accordion">Content 1</Accordion>
            <Accordion title="Second Accordion">Content 2</Accordion>
          </AccordionGroup>,
        );

        // Both accordions should render arrow buttons (indicating expandTrigger="arrow")
        expect(screen.queryAllByTestId(/ARROW_BUTTON/)).toHaveLength(2);
      });

      it('should allow individual accordion to override group expandTrigger', () => {
        render(
          <AccordionGroup expandTrigger="arrow">
            <Accordion title="Arrow Mode">Content 1</Accordion>
            <Accordion title="Header Mode" expandTrigger="header">
              Content 2
            </Accordion>
          </AccordionGroup>,
        );

        // First accordion should have arrow button (uses group setting)
        const arrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);

        expect(arrowButtons).toHaveLength(1); // Only first should have arrow button

        // Second accordion should use header mode (overrides group setting)
        const headers = screen.queryAllByTestId(/HEADER/);

        expect(headers[0].tagName).toBe('DIV'); // First is non-interactive (arrow mode)
        expect(headers[1].tagName).toBe('BUTTON'); // Second is interactive (header mode)
      });

      it('should default to header mode when expandTrigger not specified at group level', () => {
        render(
          <AccordionGroup>
            <Accordion title="Default Mode">Content</Accordion>
          </AccordionGroup>,
        );

        const header = screen.getByTestId('ACCORDION_GROUP_ITEM_HEADER');

        expect(header.tagName).toBe('BUTTON'); // Should be interactive by default
      });
    });

    describe('translations prop', () => {
      it('should pass translations prop to all child accordions', () => {
        const groupTranslations = {
          expand: 'Open',
          collapse: 'Close',
        };

        render(
          <AccordionGroup
            expandTrigger="arrow"
            translations={groupTranslations}
          >
            <Accordion title="First Accordion">Content 1</Accordion>
            <Accordion title="Second Accordion">Content 2</Accordion>
          </AccordionGroup>,
        );

        // Both accordion arrow buttons should use group translations
        const arrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);

        expect(arrowButtons[0]).toHaveAttribute(
          'aria-label',
          'Open First Accordion',
        );
        expect(arrowButtons[1]).toHaveAttribute(
          'aria-label',
          'Open Second Accordion',
        );
      });

      it('should allow individual accordion to override group translations', () => {
        const groupTranslations = {
          expand: 'Open',
          collapse: 'Close',
        };

        const individualTranslations = {
          expand: 'Show',
          collapse: 'Hide',
        };

        render(
          <AccordionGroup
            expandTrigger="arrow"
            translations={groupTranslations}
          >
            <Accordion title="Group Translation">Content 1</Accordion>
            <Accordion
              title="Individual Translation"
              translations={individualTranslations}
            >
              Content 2
            </Accordion>
          </AccordionGroup>,
        );

        const arrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);

        expect(arrowButtons[0]).toHaveAttribute(
          'aria-label',
          'Open Group Translation',
        );
        expect(arrowButtons[1]).toHaveAttribute(
          'aria-label',
          'Show Individual Translation',
        );
      });

      it('should support partial translation overrides at individual level', () => {
        const groupTranslations = {
          expand: 'Expand',
          collapse: 'Collapse',
        };

        const partialTranslations = {
          expand: 'Show', // Only override expand, collapse should come from group or default
        };

        render(
          <AccordionGroup
            expandTrigger="arrow"
            translations={groupTranslations}
          >
            <Accordion title="Group Translation">Content 1</Accordion>
            <Accordion
              title="Partial Override"
              translations={partialTranslations}
            >
              Content 2
            </Accordion>
          </AccordionGroup>,
        );

        const arrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);

        expect(arrowButtons[0]).toHaveAttribute(
          'aria-label',
          'Expand Group Translation',
        );
        expect(arrowButtons[1]).toHaveAttribute(
          'aria-label',
          'Show Partial Override',
        );
      });

      it('should use default translations when neither group nor individual specify translations', () => {
        render(
          <AccordionGroup expandTrigger="arrow">
            <Accordion title="Default Translation">Content</Accordion>
          </AccordionGroup>,
        );

        const arrowButton = screen.getByTestId(
          'ACCORDION_GROUP_ITEM_ARROW_BUTTON',
        );

        expect(arrowButton).toHaveAttribute(
          'aria-label',
          'Expand Default Translation',
        );
      });
    });

    describe('combined prop behavior', () => {
      it('should work correctly when both expandTrigger and translations are set at group level', () => {
        const customTranslations = {
          expand: 'Abrir',
          collapse: 'Cerrar',
        };

        render(
          <AccordionGroup
            expandTrigger="arrow"
            translations={customTranslations}
          >
            <Accordion title="Spanish Accordion">Contenido</Accordion>
            <Accordion title="Another Spanish Accordion">
              Más contenido
            </Accordion>
          </AccordionGroup>,
        );

        const arrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);

        expect(arrowButtons).toHaveLength(2);
        expect(arrowButtons[0]).toHaveAttribute(
          'aria-label',
          'Abrir Spanish Accordion',
        );
        expect(arrowButtons[1]).toHaveAttribute(
          'aria-label',
          'Abrir Another Spanish Accordion',
        );
      });

      it('should handle mixed override scenarios correctly', () => {
        const groupTranslations = {
          expand: 'Open',
          collapse: 'Close',
        };

        render(
          <AccordionGroup
            expandTrigger="arrow"
            translations={groupTranslations}
          >
            <Accordion title="Uses Group Settings">Content 1</Accordion>
            <Accordion title="Overrides Mode" expandTrigger="header">
              Content 2
            </Accordion>
            <Accordion
              title="Overrides Translation"
              translations={{ expand: 'Show' }}
            >
              Content 3
            </Accordion>
            <Accordion
              title="Overrides Both"
              expandTrigger="header"
              translations={{ expand: 'Display' }}
            >
              Content 4
            </Accordion>
          </AccordionGroup>,
        );

        // First accordion: uses group settings (arrow mode + group translations)
        const arrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);
        const firstArrowButton = arrowButtons.find(button =>
          button.getAttribute('aria-label')?.includes('Uses Group Settings'),
        );

        expect(firstArrowButton).toHaveAttribute(
          'aria-label',
          'Open Uses Group Settings',
        );

        // Second accordion: header mode (no arrow button)
        const headers = screen.queryAllByTestId(/HEADER/);

        expect(headers[1].tagName).toBe('BUTTON');

        // Third accordion: arrow mode with individual translation
        const allArrowButtons = screen.queryAllByTestId(/ARROW_BUTTON/);
        const thirdArrowButton = allArrowButtons.find(button =>
          button.getAttribute('aria-label')?.includes('Show'),
        );

        expect(thirdArrowButton).toHaveAttribute(
          'aria-label',
          'Show Overrides Translation',
        );

        // Fourth accordion: header mode with individual translation (translation shouldn't affect header mode)
        expect(headers[3].tagName).toBe('BUTTON');
      });
    });
  });
});

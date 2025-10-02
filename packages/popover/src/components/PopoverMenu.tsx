import React, { forwardRef, useState, useRef, useEffect } from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import styled from 'styled-components';

import { getTestAttributes } from '@8x8/oxygen-config';
import { isEnterEvent, isSpaceEvent, useId } from '@8x8/oxygen-utils';

import { ListItemWrapper } from './ListItemWrapper';
import { ListItemWrapperProps, type PopoverMenuProps } from '../types';

import {
  PopoverMenuContainer,
  MenuList,
  HeaderContainer,
  FooterContainer,
} from '../styled/Container';
import { SectionHeader, Divider } from '../styled/PopoverMenuComponents';
import { defaultProps } from './utils';

const noop = () => {};

const NestedGroupList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

function isSectionHeader(item: unknown): boolean {
  if (!React.isValidElement(item)) {
    return false;
  }

  return item.type === SectionHeader;
}

function isDivider(item: unknown): boolean {
  if (!React.isValidElement(item)) {
    return false;
  }

  return item.type === Divider;
}

export const PopoverMenu = forwardRef<HTMLDivElement, PopoverMenuProps>(
  function PopoverMenu(
    {
      children,
      placement = defaultProps.placement,
      isDisabled = defaultProps.isDisabled,
      onUpdate = noop,
      items,
      activeProp = defaultProps.activeProp,
      disabledProp = defaultProps.disabledProp,
      maxHeight = 400,
      portalTargetRef,
      testId = 'POPOVER_MENU',
      onMenuItemClick = undefined,
      onMenuOpenToggle,
      onCancel,
      header,
      footer,
      ...rest
    },
    ref,
  ) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(null);
    const [selectionUpdated, setSelectionUpdated] = useState<number>(0);
    const listRef = useRef([]);
    const isFirstRender = useRef(true);
    const buttonId = useId();

    // holds a flat representation of all selectable items
    const selectableItems: ListItemWrapperProps[] = React.useMemo(() => {
      return items
        .filter(
          item =>
            Array.isArray(item) ||
            (item &&
              typeof item === 'object' &&
              'children' in item &&
              !React.isValidElement(item)),
        )
        .flat() as ListItemWrapperProps[];
    }, [items]);

    // Notifies that a selection was made
    useEffect(() => {
      if (selectableItems && selectableItems[selectedIndex]) {
        // we should only get selections for ListItem elements
        onUpdate(selectableItems[selectedIndex], selectedIndex);
      }
    }, [selectedIndex, selectionUpdated]);

    useEffect(() => {
      // prevent executing onMenuOpenToggle on first render
      if (isFirstRender.current) {
        isFirstRender.current = false;

        return;
      }

      if (onMenuOpenToggle) {
        onMenuOpenToggle(isOpen);
      }
    }, [isOpen, onMenuOpenToggle]);

    const { refs, floatingStyles, context } = useFloating({
      placement,
      open: isOpen,
      onOpenChange: newOpenState => {
        setIsOpen(newOpenState);

        if (onCancel && isOpen) {
          onCancel();
        }
      },
      middleware: [
        flip({
          fallbackStrategy: 'initialPlacement',
        }),
        shift(),
      ],
      whileElementsMounted: autoUpdate,
    });

    const listNavigation = useListNavigation(context, {
      listRef,
      activeIndex,
      selectedIndex,
      onNavigate: setActiveIndex,
      disabledIndices: [],
    });

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      setSelectionUpdated(state => state + 1);
      setIsOpen(false);
    };

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: null });
    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([click, dismiss, role, listNavigation]);

    // combines the ref received from outside with the floating-ui refs
    const childRef = useMergeRefs([refs.setReference, ref]);

    // Helper to check if items require complex rendering (grouping logic)
    // Arrays contain selectable items, everything else is decorative
    function requiresComplexRendering(): boolean {
      return items.some(item => Array.isArray(item));
    }

    // Helper to add header to div content
    function buildHeaderContent(divContent: React.ReactNode[]): void {
      if (header) {
        divContent.push(
          <HeaderContainer key="menu-header">{header}</HeaderContainer>,
        );
      }
    }

    // Helper to add footer to div content
    function buildFooterContent(divContent: React.ReactNode[]): void {
      if (footer) {
        divContent.push(
          <FooterContainer key="menu-footer">{footer}</FooterContainer>,
        );
      }
    }

    // Simple rendering: just process arrays and plain objects as menu items
    function renderSimpleMenuItems(): React.ReactNode[] {
      const menuContent: React.ReactNode[] = [];
      let currentIndex = 0;

      items.forEach(item => {
        if (Array.isArray(item)) {
          item.forEach(listItem => {
            if (
              listItem &&
              typeof listItem === 'object' &&
              'children' in listItem
            ) {
              menuContent.push(renderListItem(listItem, currentIndex));
              currentIndex += 1;
            }
          });
        } else if (
          item &&
          typeof item === 'object' &&
          'children' in item &&
          !React.isValidElement(item)
        ) {
          menuContent.push(renderListItem(item, currentIndex));
          currentIndex += 1;
        }
      });

      return menuContent;
    }

    // Helper to create a group with proper ARIA attributes
    function createGroup(
      groupItems: Array<{ item: ListItemWrapperProps; index: number }>,
      headerId: string | undefined,
      groupId: number,
    ): React.ReactNode {
      const groupProps: { role: string; [key: string]: unknown } = {
        role: 'group',
      };

      if (headerId) {
        groupProps['aria-labelledby'] = headerId;
      }

      return (
        <li key={`group-${groupId}`} role="none">
          <NestedGroupList {...groupProps}>
            {groupItems.map(({ item, index }) => renderListItem(item, index))}
          </NestedGroupList>
        </li>
      );
    }

    // Complex rendering: handle headers, dividers, empty states, and grouping
    function renderComplexMenuItems(): {
      menuContent: React.ReactNode[];
      divContent: React.ReactNode[];
    } {
      const menuContent: React.ReactNode[] = [];
      const divContent: React.ReactNode[] = [];

      let currentIndex = 0;
      let headerIdCounter = 0;
      let groupIdCounter = 0;
      let currentGroupItems: Array<{
        item: ListItemWrapperProps;
        index: number;
      }> = [];
      let currentHeaderId: string | undefined;

      const flushCurrentGroup = () => {
        if (currentGroupItems.length > 0) {
          if (currentGroupItems.length === 1 && !currentHeaderId) {
            // Single item without section header - render directly
            const { item, index } = currentGroupItems[0];

            menuContent.push(renderListItem(item, index));
          } else {
            // Multiple items OR single item with section header - create group
            menuContent.push(
              createGroup(currentGroupItems, currentHeaderId, groupIdCounter),
            );
          }

          currentGroupItems = [];
          currentHeaderId = undefined;
          groupIdCounter += 1;
        }
      };

      items.forEach(item => {
        if (Array.isArray(item)) {
          // Add all items from array to current group - these become <li> elements
          item.forEach(listItem => {
            if (
              listItem &&
              typeof listItem === 'object' &&
              'children' in listItem
            ) {
              currentGroupItems.push({
                item: listItem,
                index: currentIndex,
              });
              currentIndex += 1;
            }
          });
        } else {
          // Everything else gets rendered directly (no <li> wrapper)
          flushCurrentGroup();

          if (React.isValidElement(item)) {
            if (isSectionHeader(item)) {
              // SectionHeaders need special handling for accessibility
              headerIdCounter += 1;
              const headerId = `section-header-${headerIdCounter}`;

              currentHeaderId = headerId;

              menuContent.push(
                <li key={headerId} role="none" id={headerId}>
                  {item as React.ReactNode}
                </li>,
              );
            } else if (isDivider(item)) {
              // Dividers go in menuContent
              menuContent.push(
                <React.Fragment key={`item-${groupIdCounter}`}>
                  {item as React.ReactNode}
                </React.Fragment>,
              );
            } else {
              // All other React components (EmptyState, loading states, etc.) go to divContent
              divContent.push(
                <React.Fragment key={`div-${groupIdCounter}`}>
                  {item as React.ReactNode}
                </React.Fragment>,
              );
            }
          }

          groupIdCounter += 1;
        }
      });

      flushCurrentGroup();

      return { menuContent, divContent };
    }

    function renderMenuContent() {
      const headerContent: React.ReactNode[] = [];
      const middleContent: React.ReactNode[] = [];
      const footerContent: React.ReactNode[] = [];
      let menuContent: React.ReactNode[] = [];

      // Add header content first
      buildHeaderContent(headerContent);

      // Choose rendering strategy based on item complexity
      if (requiresComplexRendering()) {
        const result = renderComplexMenuItems();

        menuContent = result.menuContent;
        middleContent.push(...result.divContent);
      } else {
        menuContent = renderSimpleMenuItems();
      }

      // Add footer content last
      buildFooterContent(footerContent);

      return (
        <>
          {/* Header content (search, filters, etc.) */}
          {headerContent}

          {/* Middle content (empty states, loading states, etc.) */}
          {middleContent}

          {/* Menu UL with role="menu" */}
          {menuContent.length > 0 && (
            <MenuList role="menu" aria-labelledby={buttonId}>
              {menuContent}
            </MenuList>
          )}

          {/* Footer content (actions, etc.) */}
          {footerContent}
        </>
      );
    }

    function renderListItem(item: ListItemWrapperProps, index: number) {
      return (
        <ListItemWrapper
          key={item.key || index}
          tabIndex={activeIndex === index ? 0 : -1}
          ref={(node: HTMLLIElement) => {
            listRef.current[index] = node;
          }}
          {...getItemProps({
            // Handle pointer select.
            onClick(event) {
              onMenuItemClick?.(event);

              if (item.isDisabled) {
                return;
              }

              handleSelect(index);
            },
            // Handle keyboard select.
            onKeyDown(event) {
              if (isEnterEvent(event) || isSpaceEvent(event)) {
                onMenuItemClick?.(event);
                event.preventDefault();

                if (item.isDisabled) {
                  return;
                }

                handleSelect(index);
              }
            },
          })}
          {...item}
        />
      );
    }

    return (
      <>
        {React.cloneElement(children, {
          ref: childRef,
          [activeProp]: isOpen,
          id: buttonId,
          ...getReferenceProps({
            onClick: children?.props?.onClick,
          }),
          'aria-haspopup': 'menu',
          ...(isDisabled && { [disabledProp]: true }),
        })}
        {isOpen && (
          <FloatingPortal root={portalTargetRef}>
            <FloatingFocusManager context={context}>
              <PopoverMenuContainer
                $maxHeight={maxHeight}
                ref={refs.setFloating}
                style={floatingStyles}
                {...getTestAttributes(testId)}
                {...getFloatingProps()}
                aria-orientation={undefined}
                {...rest}
              >
                {renderMenuContent()}
              </PopoverMenuContainer>
            </FloatingFocusManager>
          </FloatingPortal>
        )}
      </>
    );
  },
);

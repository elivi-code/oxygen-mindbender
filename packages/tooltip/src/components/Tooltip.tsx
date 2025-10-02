import React, {
  cloneElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  FloatingPortal,
  limitShift,
  offset as floatingUiOffset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useMergeRefs,
} from '@floating-ui/react';
import StaticTooltip from '@8x8/oxygen-static-tooltip';
import {
  getTestAttributes,
  withTheme,
  withDeprecation,
} from '@8x8/oxygen-config';
import { useId } from '@8x8/oxygen-utils';

import {
  HandlerWithCallback,
  registerEventHandlers,
  unregisterEventHandlers,
  parseModifiers,
} from '../utils';

import Arrow from './Arrow';

import type { TooltipProps } from '../types';
import {
  showOn as showOnValues,
  orientation as orientationValues,
} from '../types';

const side = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
};

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  customCloseHandlers = [],
  delay = 0,
  enableArrow,
  includeWrapper = true,
  offset = 7,
  modifiers,
  orientation = orientationValues.top,
  renderContainer,
  renderContainerId,
  showOn = showOnValues.hover,
  disableInteractive = false,
  testId = 'TOOLTIP',
  theme,
  title,
  triggerRef,
  forwardedRef,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  // @deprecated modifiers — use offset instead directly
  const computedOffset = parseModifiers(modifiers) || offset;

  const handlers: HandlerWithCallback[] = React.useCallback(
    () =>
      customCloseHandlers.map(handler => ({
        ...handler,
        callback: () => setOpen(false),
      })),
    [customCloseHandlers],
  )();

  // @deprecated customCloseHandlers — we'll keep it if we find a use-case and usage
  useEffect(() => {
    if (open) {
      registerEventHandlers(handlers);
    } else {
      unregisterEventHandlers(handlers);
    }

    return () => unregisterEventHandlers(handlers);
  }, [open]);

  const arrowRef = useRef(null);
  const {
    x,
    y,
    refs,
    strategy,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: orientation,
    middleware: [
      floatingUiOffset(computedOffset),
      flip(),
      shift({ limiter: limitShift() }),
      arrow({ element: arrowRef, padding: 9 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  // Use external HTMLElement as trigger if provided
  useLayoutEffect(() => {
    if (!triggerRef) return;
    refs.setReference(triggerRef);
  }, [refs.setReference, triggerRef]);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: showOn === 'hover',
      move: false,
      delay: {
        open: delay,
        close: 0,
      },
      handleClose: disableInteractive
        ? // closes the toolip when the mouse leaves the reference
          null
        : // helps keep the tooltip open when moving the mouse from the trigger to the floating element
          safePolygon({ blockPointerEvents: false }),
    }),
    useClick(context, { enabled: showOn === 'click', toggle: true }),
    // Only use focus on hover enabled Tooltips
    useFocus(context, { enabled: showOn === 'hover' }),
    // Role props for screen readers
    useRole(context, { role: 'tooltip' }),
    useDismiss(context, {
      escapeKey: true,
      // only enable reference press dismiss on hover (otherwise this breaks useClick => toggle: true)
      referencePress: showOn === 'hover',
    }),
  ]);

  const staticSide = side[placement.split('-')[0] as keyof typeof side];

  const renderWithoutWrapper = () =>
    React.Children.map(children || null, (child, index) => {
      // only use the first child as target
      if (index === 0 && React.isValidElement(child)) {
        return cloneElement(
          child,
          getReferenceProps({
            ref: useMergeRefs([refs.setReference, forwardedRef]),
            ...child.props,
            ...rest,
          }),
        );
      }

      return child;
    });

  const renderWithWrapper = () => (
    <div
      {...getReferenceProps({
        ref: useMergeRefs([refs.setReference, forwardedRef]),
        ...getTestAttributes(`ANCHOR_FOR_${testId}`),
        ...rest,
      })}
    >
      {children}
    </div>
  );

  const generatedId = useId();
  /**
   * ID priority:
   * 1. specified `renderContainerId` prop
   * 2. if `renderContainer` is provided: use a generated UUID
   * 3. use the default static value 'oxygen-tooltip-root'
   *
   * (note: need to keep the ternary separate from || shorcircuit below, otherwise it always evaluates to the ternary result)
   */
  const id = renderContainer ? generatedId : 'oxygen-tooltip-root';
  const floatingPortalProps = {
    id: renderContainerId || id,
    ...(renderContainer && { root: renderContainer }),
  };

  return (
    <>
      {includeWrapper ? renderWithWrapper() : renderWithoutWrapper()}
      <FloatingPortal {...floatingPortalProps}>
        {open && (
          <div
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
            }}
            {...getFloatingProps()}
          >
            <StaticTooltip
              theme={theme}
              testId={`STATIC_TOOLTIP_FOR_${testId}`}
              renderArrow={() =>
                (enableArrow ?? theme.enableArrow) && (
                  <Arrow
                    ref={arrowRef}
                    {...getTestAttributes(`tooltip_arrow_${testId}`)}
                    style={{
                      left: arrowX != null ? `${arrowX}px` : '',
                      top: arrowY != null ? `${arrowY}px` : '',
                      [staticSide]: theme.arrowMarginOffset,
                    }}
                  />
                )
              }
              {...rest}
            >
              {title}
            </StaticTooltip>
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

export default withDeprecation(
  withTheme(Tooltip, 'staticTooltip'),
  `Tooltip deprecated props: "modifiers", "customCloseHandlers"`,
);

const getNextFocusable = (
  tabbables: HTMLElement[],
  activeElement: Element | null,
  forward: boolean,
) => {
  const currentIndex = tabbables.findIndex(el => el === activeElement);
  let nextIndex = -1;
  const noneFocused = currentIndex === -1;

  if (noneFocused) {
    nextIndex = forward ? 0 : tabbables.length - 1;
  } else {
    nextIndex =
      (currentIndex + (forward ? 1 : -1) + tabbables.length) % tabbables.length; // '%' => by using the remainder, cycling happens automagically
  }

  return nextIndex;
};

const focusAdjacentRow = (current: HTMLElement | null, forward: boolean) => {
  const parent = current?.parentElement;
  const tabbableRows = Array.from(
    parent?.querySelectorAll<HTMLElement>('tr') || [],
  );

  const nextIndex = getNextFocusable(tabbableRows, current, forward);

  tabbableRows[nextIndex]?.focus();
};

export const focusNextRow = (current: HTMLElement | null) =>
  focusAdjacentRow(current, true);

export const focusPreviousRow = (current: HTMLElement | null) =>
  focusAdjacentRow(current, false);

/**
 * cycles focus through tabbable elements within the parent element
 */
export const focusAdjacentTabbable = (
  parent: HTMLElement | null,
  forward: boolean,
) => {
  const tabbables = Array.from(
    parent?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ) || [],
  ).filter(
    el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'),
  );

  const nextIndex = getNextFocusable(
    tabbables,
    document.activeElement,
    forward,
  );

  tabbables[nextIndex]?.focus();
};

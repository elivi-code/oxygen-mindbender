import { renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';
import useAriaLive, { cleanup, CONTAINER_IDS } from './useAriaLive';

describe('useAriaLive', () => {
  beforeEach(() => {
    // Clean up any existing aria-live containers from previous tests
    const politeContainer = document.getElementById(CONTAINER_IDS.polite);
    const assertiveContainer = document.getElementById(CONTAINER_IDS.assertive);

    if (politeContainer) {
      politeContainer.remove();
    }

    if (assertiveContainer) {
      assertiveContainer.remove();
    }

    // Reset module state
    cleanup();
  });

  afterEach(() => {
    // Clean up containers after each test
    const politeContainer = document.getElementById(CONTAINER_IDS.polite);
    const assertiveContainer = document.getElementById(CONTAINER_IDS.assertive);

    if (politeContainer) {
      politeContainer.remove();
    }

    if (assertiveContainer) {
      assertiveContainer.remove();
    }

    // Reset module state
    cleanup();
  });

  it('should create aria-live containers on first announce call', () => {
    // Initially no containers should exist
    expect(document.getElementById(CONTAINER_IDS.polite)).toBeNull();
    expect(document.getElementById(CONTAINER_IDS.assertive)).toBeNull();

    const { result } = renderHook(() => useAriaLive());

    // After rendering hook, containers should NOT exist until announce is called
    expect(document.getElementById(CONTAINER_IDS.polite)).toBeNull();
    expect(document.getElementById(CONTAINER_IDS.assertive)).toBeNull();

    // Call announce to trigger container creation
    result.current.announce('Test message');

    // Now polite container should exist
    const politeContainer = document.getElementById(CONTAINER_IDS.polite);

    expect(politeContainer).toBeInTheDocument();
    expect(politeContainer).toHaveAttribute('aria-live', 'polite');
    expect(politeContainer).toHaveAttribute('aria-atomic', 'true');

    // Call announce with assertive to trigger assertive container creation
    result.current.announce('Urgent message', { assertive: true });

    // Now assertive container should exist
    const assertiveContainer = document.getElementById(CONTAINER_IDS.assertive);

    expect(assertiveContainer).toBeInTheDocument();
    expect(assertiveContainer).toHaveAttribute('aria-live', 'assertive');
    expect(assertiveContainer).toHaveAttribute('aria-atomic', 'true');
  });

  it('should return announce function', () => {
    const { result } = renderHook(() => useAriaLive());

    expect(typeof result.current.announce).toBe('function');
  });

  it('should accept message and options parameters', () => {
    const { result } = renderHook(() => useAriaLive());

    // Should not throw when called with different parameter combinations
    expect(() => {
      result.current.announce('Test message');
      result.current.announce('Test message', {});
      result.current.announce('Test message', { assertive: false });
      result.current.announce('Test message', { assertive: true });
    }).not.toThrow();
  });

  it('should apply correct offscreen styling to containers', () => {
    const { result } = renderHook(() => useAriaLive());

    // Trigger container creation
    result.current.announce('Test message');
    result.current.announce('Urgent message', { assertive: true });

    const politeContainer = document.getElementById(CONTAINER_IDS.polite);
    const assertiveContainer = document.getElementById(CONTAINER_IDS.assertive);

    // Check that containers have offscreen styling applied
    [politeContainer, assertiveContainer].forEach(container => {
      expect(container?.style.position).toBe('absolute');
      expect(container?.style.width).toBe('1px');
      expect(container?.style.height).toBe('1px');
      expect(container?.style.overflow).toBe('hidden');
    });
  });

  it('should reuse existing containers when hook is called multiple times', () => {
    // First hook instance
    const { result: result1 } = renderHook(() => useAriaLive());

    // Trigger container creation
    result1.current.announce('Test message');
    result1.current.announce('Urgent message', { assertive: true });

    const polite1 = document.getElementById(CONTAINER_IDS.polite);
    const assertive1 = document.getElementById(CONTAINER_IDS.assertive);

    // Second hook instance
    const { result: result2 } = renderHook(() => useAriaLive());

    // Use second hook instance
    result2.current.announce('Test message 2');
    result2.current.announce('Urgent message 2', { assertive: true });

    const polite2 = document.getElementById(CONTAINER_IDS.polite);
    const assertive2 = document.getElementById(CONTAINER_IDS.assertive);

    // Should be the same DOM elements (reused)
    expect(polite1).toBe(polite2);
    expect(assertive1).toBe(assertive2);

    // Should only have one container of each type in the DOM
    const allPoliteContainers = document.querySelectorAll(
      `[id="${CONTAINER_IDS.polite}"]`,
    );
    const allAssertiveContainers = document.querySelectorAll(
      `[id="${CONTAINER_IDS.assertive}"]`,
    );

    expect(allPoliteContainers).toHaveLength(1);
    expect(allAssertiveContainers).toHaveLength(1);
  });

  it('should announce messages and clear them after timeout', async () => {
    const { result } = renderHook(() => useAriaLive());

    // Test polite message
    result.current.announce('Polite message');

    const politeContainer = document.getElementById(
      CONTAINER_IDS.polite,
    ) as HTMLDivElement;

    expect(politeContainer.textContent).toBe('Polite message');

    // Test assertive message
    result.current.announce('Assertive message', { assertive: true });

    const assertiveContainer = document.getElementById(
      CONTAINER_IDS.assertive,
    ) as HTMLDivElement;

    expect(assertiveContainer.textContent).toBe('Assertive message');
    expect(politeContainer.textContent).toBe('Polite message'); // Should still be there

    // Wait for messages to be cleared (1000ms timeout)
    await waitFor(() => expect(politeContainer.textContent).toBe(''), {
      timeout: 1200,
    });
    await waitFor(() => expect(assertiveContainer.textContent).toBe(''), {
      timeout: 1200,
    });
  });

  it('should replace previous message when new message is announced', () => {
    const { result } = renderHook(() => useAriaLive());

    // First message
    result.current.announce('First message');

    const politeContainer = document.getElementById(
      CONTAINER_IDS.polite,
    ) as HTMLDivElement;

    expect(politeContainer.textContent).toBe('First message');

    // Second message should replace the first
    result.current.announce('Second message');
    expect(politeContainer.textContent).toBe('Second message');
  });
});

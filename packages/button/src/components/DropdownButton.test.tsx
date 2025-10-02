import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { OxygenProvider } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';
import { DropdownButton } from './DropdownButton';

const { novo } = themes;

describe('DropdownButton', () => {
  it('renders its children', () => {
    render(
      <OxygenProvider>
        <DropdownButton>content</DropdownButton>
      </OxygenProvider>,
    );
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByText('content')).toMatchSnapshot();
  });
  it.each`
    size         | typography          | iconSize
    ${undefined} | ${novo.bodyBold01}  | ${'20'}
    ${'medium'}  | ${novo.bodyBold01}  | ${'20'}
    ${'large'}   | ${novo.bodyBold02}  | ${'24'}
    ${'small'}   | ${novo.labelBold01} | ${'16'}
  `(
    'renders for size=$size correct typography and icon dimensions',
    ({ size, typography, iconSize }) => {
      render(
        <OxygenProvider>
          <DropdownButton size={size}>content</DropdownButton>
        </OxygenProvider>,
      );
      const item = screen.getByText('content');

      expect(item).toHaveStyle({
        ...typography,
        fontFamily: typography.fontFamily.split(', ').join(','),
      });
      expect(item.querySelector('svg')).toHaveAttribute('size', iconSize);
    },
  );
  it('renders the width based on fullWidth', () => {
    const { rerender } = render(
      <OxygenProvider>
        <DropdownButton>content</DropdownButton>
      </OxygenProvider>,
    );

    expect(screen.getByText('content')).toHaveStyle({ width: undefined });

    rerender(
      <OxygenProvider>
        <DropdownButton fullWidth>content</DropdownButton>
      </OxygenProvider>,
    );
    expect(screen.getByText('content')).toHaveStyle({ width: '100%' });
  });
  it('renders the correct chevron based on isActive', () => {
    const { rerender } = render(
      <OxygenProvider>
        <DropdownButton>content</DropdownButton>
      </OxygenProvider>,
    );

    expect(screen.getByText('content').querySelector('svg'))
      .toMatchInlineSnapshot(`
      .c0 {
        height: 20px;
        width: 20px;
        min-height: 20px;
        min-width: 20px;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        pointer-events: auto;
        fill: #292929;
      }

      <svg
        class="c0"
        role="presentation"
        size="20"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            clip-rule="evenodd"
            d="M3.9697 7.7197a.75.75 0 0 1 1.0606 0L12 14.6893l6.9697-6.9696a.75.75 0 0 1 1.0606 1.0607l-7.5 7.4999a.75.75 0 0 1-1.0606 0l-7.5-7.5a.75.75 0 0 1 0-1.0606Z"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    `);

    rerender(
      <OxygenProvider>
        <DropdownButton isActive>content</DropdownButton>
      </OxygenProvider>,
    );

    expect(screen.getByText('content').querySelector('svg'))
      .toMatchInlineSnapshot(`
      .c0 {
        height: 20px;
        width: 20px;
        min-height: 20px;
        min-width: 20px;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        pointer-events: auto;
        fill: #292929;
      }

      <svg
        class="c0"
        role="presentation"
        size="20"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            clip-rule="evenodd"
            d="M20.0303 16.2803a.75.75 0 0 1-1.0606 0L12 9.3107l-6.9697 6.9696a.75.75 0 0 1-1.0606-1.0606l7.5-7.5a.75.75 0 0 1 1.0606 0l7.5 7.5a.75.75 0 0 1 0 1.0606Z"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    `);
  });
  it('renders testId attribute', () => {
    const { rerender } = render(
      <OxygenProvider>
        <DropdownButton>content</DropdownButton>
      </OxygenProvider>,
    );

    expect(screen.getByTestId('DROPDOWN_BUTTON')).toBeInTheDocument();

    rerender(
      <OxygenProvider>
        <DropdownButton testId="CUSTOM">content</DropdownButton>
      </OxygenProvider>,
    );

    expect(screen.getByTestId('CUSTOM')).toBeInTheDocument();
  });
});

describe('<DropdownButton isDisabled />', () => {
  it('renders isDisabled state', () => {
    render(
      <OxygenProvider>
        <DropdownButton isDisabled />
      </OxygenProvider>,
    );
    expect(screen.getByTestId('DROPDOWN_BUTTON')).toHaveStyle({
      color: novo.disabled04,
      cursor: 'not-allowed',
    });
    expect(
      screen.getByTestId('DROPDOWN_BUTTON').querySelector('svg'),
    ).toHaveAttribute('color', novo.disabled04);
  });
  it('allows onClick events', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <DropdownButton onClick={onClick} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('DROPDOWN_BUTTON');

    expect(onClick).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('prevents onClick events when isDisabled', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <DropdownButton isDisabled onClick={onClick} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('DROPDOWN_BUTTON');

    expect(onClick).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it.each`
    key
    ${'{Enter}'}
    ${'{Space}'}
  `('allows onKeyDown events for $key', async ({ key }) => {
    const onKeyDown = jest.fn();
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <DropdownButton onKeyDown={onKeyDown} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('DROPDOWN_BUTTON');

    expect(onKeyDown).toHaveBeenCalledTimes(0);

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard(key);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
  it.each`
    key
    ${'{Enter}'}
    ${'{Space}'}
  `('prevents onKeyDown events when isDisabled for $key', async ({ key }) => {
    const onKeyDown = jest.fn();
    const user = userEvent.setup();

    render(
      <OxygenProvider>
        <DropdownButton isDisabled onKeyDown={onKeyDown} />
      </OxygenProvider>,
    );

    const button = screen.getByTestId('DROPDOWN_BUTTON');

    expect(onKeyDown).toHaveBeenCalledTimes(0);

    await user.tab();
    await waitFor(() => {
      expect(button).toHaveFocus();
    });
    await user.keyboard(key);
    expect(onKeyDown).toHaveBeenCalledTimes(0);
  });
});

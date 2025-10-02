import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { iconButton } from '@8x8/oxygen-constants';
import { AddReactionIcon } from '@8x8/oxygen-icon';
import IconButton from './IconButton';
import { iconButtonSize } from '..';
import { IconButtonStyled } from '../styled/IconButtonStyled';

describe('IconButton', () => {
  const getDisabledIconButtonWrapper = (onClickMock: () => void) => {
    return render(
      <OxygenProvider>
        <IconButton onClick={onClickMock} testId="test-id-mock" isDisabled>
          <AddReactionIcon />
        </IconButton>
      </OxygenProvider>,
    );
  };

  it('renders', () => {
    render(
      <OxygenProvider>
        <IconButton>test</IconButton>
      </OxygenProvider>,
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('sets the appropriate disabled attributes & styles', () => {
    const { rerender } = render(
      <OxygenProvider>
        <IconButton testId="testIconButton">
          <AddReactionIcon />
        </IconButton>
      </OxygenProvider>,
    );
    let button = screen.getByTestId('testIconButton');

    expect(button).not.toHaveAttribute('aria-disabled');
    expect(button.querySelector('svg')).toHaveAttribute(
      'color',
      iconButton.color,
    );

    rerender(
      <OxygenProvider>
        <IconButton isDisabled testId="testIconButton">
          <AddReactionIcon />
        </IconButton>
      </OxygenProvider>,
    );
    button = screen.getByTestId('testIconButton');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button.querySelector('svg')).toHaveAttribute(
      'color',
      iconButton.colorDisabled,
    );
  });

  it.each`
    isInverted | isDisabled | expectedColor
    ${false}   | ${false}   | ${iconButton.color}
    ${true}    | ${false}   | ${iconButton.colorInverted}
    ${false}   | ${true}    | ${iconButton.colorDisabled}
    ${true}    | ${true}    | ${iconButton.colorDisabled}
  `('overrides icon props', ({ isInverted, isDisabled, expectedColor }) => {
    render(
      <OxygenProvider>
        <IconButton
          testId="testIconButton"
          isInverted={isInverted}
          isDisabled={isDisabled}
        >
          <AddReactionIcon color="red" />
        </IconButton>
      </OxygenProvider>,
    );
    const button = screen.getByTestId('testIconButton');

    expect(button.querySelector('svg')).toHaveAttribute('color', expectedColor);
  });

  it('sets the correct testId attribute', () => {
    // no testId
    const { rerender } = render(
      <OxygenProvider>
        <IconButton>test</IconButton>
      </OxygenProvider>,
    );

    expect(screen.getByText('test')).toHaveAttribute(
      'data-test-id',
      'iconButton',
    );

    // custom testId
    rerender(
      <OxygenProvider>
        <IconButton testId="testIconButton">test</IconButton>
      </OxygenProvider>,
    );
    expect(screen.getByText('test')).toHaveAttribute(
      'data-test-id',
      'testIconButton',
    );

    // empty testId
    rerender(
      <OxygenProvider>
        <IconButton testId="">test</IconButton>
      </OxygenProvider>,
    );
    expect(screen.getByText('test')).toHaveAttribute('data-test-id', '');
  });

  it('listens to click events', () => {
    const onClick = jest.fn();

    render(
      <OxygenProvider>
        <IconButton onClick={onClick}>test</IconButton>
      </OxygenProvider>,
    );
    screen.getByText('test').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is focusable', () => {
    const { rerender } = render(
      <OxygenProvider>
        <IconButton>test</IconButton>
      </OxygenProvider>,
    );
    let button = screen.getByTestId('iconButton');

    expect(button).not.toHaveFocus();
    button.focus();
    expect(button).toHaveFocus();
    button.blur();

    // disabled button should retain focususable state
    rerender(
      <OxygenProvider>
        <IconButton isDisabled>test</IconButton>
      </OxygenProvider>,
    );
    button = screen.getByTestId('iconButton');
    expect(button).not.toHaveFocus();
    button.focus();
    expect(button).toHaveFocus();
  });

  it('has correct focus styles', () => {
    // default rules
    const { rerender } = render(
      <OxygenProvider>
        <IconButton>test</IconButton>
      </OxygenProvider>,
    );
    let button = screen.getByTestId('iconButton');

    expect(button).toHaveStyleRule('border-color', iconButton.borderFocus, {
      modifier: ':focus-visible',
    });

    rerender(
      <OxygenProvider>
        <IconButton isInverted>test</IconButton>
      </OxygenProvider>,
    );
    button = screen.getByTestId('iconButton');
    expect(button).toHaveStyleRule(
      'border-color',
      iconButton.borderFocusInverted,
      {
        modifier: ':focus-visible',
      },
    );
  });

  it('has correct active styles', () => {
    const { rerender } = render(
      <OxygenProvider>
        <IconButton>test</IconButton>
      </OxygenProvider>,
    );
    const button = screen.getByTestId('iconButton');

    expect(button).toHaveStyleRule('background', 'transparent');

    rerender(
      <OxygenProvider>
        <IconButton isActive>test</IconButton>
      </OxygenProvider>,
    );

    expect(button).toHaveStyle(
      `background: ${iconButton.backgroundActiveSelected}`,
    );
  });

  it('should prevent click action handler when icon button is disabled', () => {
    const onClickMock = jest.fn();
    const wrapper = getDisabledIconButtonWrapper(onClickMock);

    wrapper.getByTestId('test-id-mock').click();

    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('should prevent space key down action handler when icon button is disabled', () => {
    const onKeyDownMock = jest.fn();
    const wrapper = getDisabledIconButtonWrapper(onKeyDownMock);
    const buttonWrapper = wrapper.getByTestId('test-id-mock');

    fireEvent.keyDown(buttonWrapper, { key: 'Space' });

    expect(onKeyDownMock).not.toHaveBeenCalled();
  });

  it('should prevent enter key down action handler when icon button is disabled', () => {
    const onKeyDownMock = jest.fn();
    const wrapper = getDisabledIconButtonWrapper(onKeyDownMock);
    const buttonWrapper = wrapper.getByTestId('test-id-mock');

    fireEvent.keyDown(buttonWrapper, { key: 'Enter' });

    expect(onKeyDownMock).not.toHaveBeenCalled();
  });

  it('should handle keydown action', () => {
    const onKeyDownMock = jest.fn();
    const wrapper = render(
      <OxygenProvider>
        <IconButton onKeyDown={onKeyDownMock} testId="test-id-mock">
          <AddReactionIcon />
        </IconButton>
      </OxygenProvider>,
    );
    const buttonWrapper = wrapper.getByTestId('test-id-mock');

    fireEvent.keyDown(buttonWrapper, { key: 'Tab' });

    expect(onKeyDownMock).toHaveBeenCalled();
  });

  it.each`
    size               | pxSize
    ${'small2XIconXs'} | ${[20, 16]}
    ${'smallXIconS'}   | ${[24, 20]}
    ${'smallIconM'}    | ${[32, 24]}
    ${'smallIconS'}    | ${[32, 20]}
    ${'smallIconXs'}   | ${[32, 16]}
    ${'mediumIconL'}   | ${[40, 32]}
    ${'mediumIconM'}   | ${[40, 24]}
    ${'mediumIconS'}   | ${[40, 20]}
    ${'largeIconL'}    | ${[48, 32]}
    ${'largeIconM'}    | ${[48, 24]}
  `(
    'applies the correct $size to the icon in px as $pxSize',
    ({ size, pxSize }) => {
      render(
        <OxygenProvider>
          <IconButton size={size}>
            <AddReactionIcon />
          </IconButton>
        </OxygenProvider>,
      );
      const button = screen.getByTestId('iconButton');
      const icon = button?.querySelector('svg');

      expect(button).toHaveStyle(`width: ${pxSize[0]}px;`);
      expect(button).toHaveStyle(`height: ${pxSize[0]}px;`);
      expect(icon).toHaveAttribute('size', `${pxSize[1]}`);
    },
  );

  it('applies the correct size to the icon when default size is set', () => {
    render(
      <OxygenProvider>
        <IconButton size={undefined}>
          <AddReactionIcon />
        </IconButton>
      </OxygenProvider>,
    );
    const button = screen.getByTestId('iconButton');
    const icon = button?.querySelector('svg');

    expect(icon).toHaveAttribute('size', '24');
  });

  it('overrides size prop from the icon itself', () => {
    const iconSize = 100;

    render(
      <OxygenProvider>
        <IconButton size={iconButtonSize.small2XIconXs} testId="test-id-mock">
          <AddReactionIcon size={iconSize} />
        </IconButton>
      </OxygenProvider>,
    );
    const button = screen.getByTestId('test-id-mock');

    expect(button.querySelector('svg')).toHaveAttribute(
      'size',
      iconSize.toString(),
    );
  });

  it('uses colorInverted when colorSelected is undefined', () => {
    const themeWithoutColorSelected = {
      color: '#000000',
      colorInverted: '#FFFFFF',
    };

    render(
      <IconButton isActive theme={themeWithoutColorSelected} testId="test">
        <AddReactionIcon />
      </IconButton>,
    );

    const icon = screen.getByTestId('test').querySelector('svg');

    expect(icon).toHaveAttribute('color', '#FFFFFF');
  });
  it('handles missing backgroundSelectedDisabled theme property', () => {
    const themeWithoutSelectedDisabled = {
      backgroundActive: '#ff0000',
    };

    const { container } = render(
      <IconButtonStyled
        isActive
        aria-disabled
        theme={themeWithoutSelectedDisabled}
      />,
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('has no box-shadow when shadowFocus is undefined', () => {
    const themeWithoutShadow = {
      borderFocus: '#0056E0',
      shadowFocus: undefined,
    };

    const { container } = render(
      <IconButtonStyled theme={themeWithoutShadow} />,
    );

    const button = container.querySelector('button');

    if (button) {
      button.focus();

      expect(button).toHaveStyleRule('border-color', '#0056E0', {
        modifier: ':focus-visible',
      });
      expect(button).toHaveStyleRule('box-shadow', '0 0 0 2px  inset', {
        modifier: ':focus-visible',
      });
    }
  });

  it.each`
    isActive | isInverted | expectedBgType   | expectedIconType
    ${true}  | ${false}   | ${'active'}      | ${'normal'}
    ${false} | ${true}    | ${'transparent'} | ${'inverted'}
    ${true}  | ${true}    | ${'active'}      | ${'normal'}
    ${false} | ${false}   | ${'transparent'} | ${'normal'}
  `(
    'has correct styling for isActive=$isActive isInverted=$isInverted',
    ({ isActive, isInverted, expectedBgType, expectedIconType }) => {
      render(
        <OxygenProvider>
          <IconButton
            isActive={isActive}
            isInverted={isInverted}
            testId="test-button"
          >
            <AddReactionIcon />
          </IconButton>
        </OxygenProvider>,
      );

      const button = screen.getByTestId('test-button');
      const icon = button.querySelector('svg');

      if (expectedBgType === 'transparent') {
        expect(button).toHaveStyle('background: transparent');
      } else {
        expect(button).not.toHaveStyle('background: transparent');
      }

      expect(icon).toHaveAttribute('color');

      if (expectedIconType === 'inverted') {
        expect(icon?.getAttribute('color')).not.toBe('#292929');
      }
    },
  );
});

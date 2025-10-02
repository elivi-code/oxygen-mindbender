import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { button, buttonNovo } from '@8x8/oxygen-constants';

import Button from './Button';

// test CircularButton props override
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Icon = props => <div {...props}>icon</div>;

const getDisabledButtonWrapper = (onClickMock: () => void) => {
  return render(
    <Button onClick={onClickMock} testId="test-id-mock" isDisabled>
      button
    </Button>,
  );
};

describe('<Button />', () => {
  it('renders the button', () => {
    render(<Button>button</Button>);
    expect(screen.getByText('button')).toBeInTheDocument();
  });
  it('renders the testId', () => {
    render(<Button testId="my-button">button</Button>);
    expect(screen.getByTestId('my-button')).toBeInTheDocument();
  });
  it('renders isDisabled', () => {
    render(<Button isDisabled>button</Button>);
    // @todo this will have to change when we update the button disabled state to only apply aria-disabled
    expect(screen.getByText('button')).toHaveAttribute('aria-disabled');
    expect(screen.getByText('button')).toHaveStyle(
      `background-color: ${button.backgroundColorPrimaryDisabled}`,
    );
    expect(screen.getByText('button')).toHaveStyle(
      `color: ${button.fontColorPrimaryDisabled}`,
    );
  });
  it('allows regular button html attributes', () => {
    render(<Button type="submit">button</Button>);
    expect(screen.getByText('button')).toHaveAttribute('type', 'submit');
  });
  it.each`
    isDisabled | isActive | expectedColor
    ${false}   | ${false} | ${button.fontColorPrimary}
    ${true}    | ${false} | ${button.fontColorPrimaryDisabled}
    ${false}   | ${true}  | ${button.fontColorPrimary}
    ${true}    | ${true}  | ${button.fontColorPrimaryDisabled}
  `('renders isCircular items', ({ isDisabled, isActive, expectedColor }) => {
    // color prop is not passed when not circular
    const { rerender } = render(
      <Button isDisabled={isDisabled} isActive={isActive}>
        <Icon />
      </Button>,
    );

    expect(screen.getByText('icon')).not.toHaveAttribute('color');

    // color prop is is passed when circular
    rerender(
      <Button isCircular isDisabled={isDisabled} isActive={isActive}>
        <Icon />
      </Button>,
    );
    expect(screen.getByText('icon')).toHaveAttribute('color', expectedColor);
  });
  it.each`
    variant               | color                                   | hoverColor
    ${'tertiary'}         | ${buttonNovo.fontColorTertiary}         | ${buttonNovo.fontColorTertiaryHover}
    ${'tertiaryReversed'} | ${buttonNovo.fontColorTertiaryReversed} | ${buttonNovo.fontColorTertiaryReversedHover}
    ${'text'}             | ${buttonNovo.backgroundColorPrimary}    | ${buttonNovo.backgroundColorPrimaryHover}
  `(
    'handles internal hover state for $variant',
    async ({ variant, color, hoverColor }) => {
      const user = userEvent.setup();

      render(
        <Button theme={buttonNovo} isCircular variant={variant}>
          <Icon />
        </Button>,
      );
      const item = screen.getByText('icon');

      expect(item).toHaveAttribute('color', color);
      await user.hover(item);
      expect(item).toHaveAttribute('color', hoverColor);
    },
  );
  it('has a default type="button"', () => {
    render(<Button>button</Button>);
    expect(screen.getByText('button')).toHaveAttribute('type', 'button');
  });
  it('the default type can be overwritten', () => {
    render(<Button type="submit">button</Button>);
    expect(screen.getByText('button')).toHaveAttribute('type', 'submit');
  });
  it('should prevent click action handler when button is disabled', () => {
    const onClickMock = jest.fn();
    const wrapper = getDisabledButtonWrapper(onClickMock);

    wrapper.getByTestId('test-id-mock').click();

    expect(onClickMock).not.toHaveBeenCalled();
  });
  it('should prevent enter key down action handler when button is disabled', () => {
    const onKeyDownMock = jest.fn();
    const wrapper = getDisabledButtonWrapper(onKeyDownMock);
    const buttonWrapper = wrapper.getByTestId('test-id-mock');

    fireEvent.keyDown(buttonWrapper, { key: 'Enter' });

    expect(onKeyDownMock).not.toHaveBeenCalled();
  });
  it('should prevent space key down action handler when button is disabled', () => {
    const onKeyDownMock = jest.fn();
    const wrapper = getDisabledButtonWrapper(onKeyDownMock);
    const buttonWrapper = wrapper.getByTestId('test-id-mock');

    fireEvent.keyDown(buttonWrapper, { key: 'Space' });

    expect(onKeyDownMock).not.toHaveBeenCalled();
  });
  it('should handle click action', () => {
    const onClickMock = jest.fn();

    render(
      <Button type="submit" onClick={onClickMock}>
        button
      </Button>,
    );
    const buttonWrapper = screen.getByText('button');

    fireEvent.click(buttonWrapper);

    expect(onClickMock).toHaveBeenCalled();
  });
  it('should handle keydown action', () => {
    const onKeyDownMock = jest.fn();

    render(
      <Button type="submit" onKeyDown={onKeyDownMock}>
        button
      </Button>,
    );
    const buttonWrapper = screen.getByText('button');

    fireEvent.keyDown(buttonWrapper, { key: 'Tab' });

    expect(onKeyDownMock).toHaveBeenCalled();
  });

  it('renders iconLeft & iconRight', () => {
    render(
      <Button
        iconLeft={<Icon data-test-id="icon-left" />}
        iconRight={<Icon data-test-id="icon-right" />}
      >
        button
      </Button>,
    );
    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });
  it.each`
    size        | expectedDimensions
    ${'large'}  | ${'24'}
    ${'medium'} | ${'20'}
    ${'small'}  | ${'16'}
  `(
    'renders for size=$size iconSize as $expectedDimensions',
    ({ size, expectedDimensions }) => {
      render(
        <Button
          theme={buttonNovo}
          iconLeft={<Icon data-test-id="icon-left" />}
          iconRight={<Icon data-test-id="icon-right" />}
          size={size}
        >
          button
        </Button>,
      );
      expect(screen.getByTestId('icon-right')).toHaveAttribute(
        'size',
        expectedDimensions,
      );
      expect(screen.getByTestId('icon-left')).toHaveAttribute(
        'size',
        expectedDimensions,
      );
    },
  );
});

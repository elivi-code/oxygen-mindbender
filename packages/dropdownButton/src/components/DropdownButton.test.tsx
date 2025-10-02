import React from 'react';
import { Popper } from 'react-popper';
import {
  createEvent,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownButton from './DropdownButton';
import { directions } from '../types';

jest.mock('react-popper', () => ({
  __esModule: true,
  Manager: ({ children }) => children,
  Reference: ({ children }) => children({ ref: jest.fn() }),
  Popper: jest.fn(({ children }) => children({})),
}));

const user = userEvent.setup();

describe('Dropdown Button', () => {
  it('should render correctly', () => {
    const { rerender, container } = render(
      <DropdownButton buttonText="Button">
        <div>Dropdown content</div>
      </DropdownButton>,
    );

    expect(container).toMatchSnapshot();
    expect(screen.queryByText('Dropdown content')).not.toBeInTheDocument();

    rerender(
      <DropdownButton buttonText="Button" isDefaultOpen>
        <div>Dropdown content</div>
      </DropdownButton>,
    );
    expect(screen.queryByText('Dropdown content')).toBeInTheDocument();
  });

  it('should pass invertIconPosition prop to children', () => {
    const { rerender } = render(
      <DropdownButton buttonText="Button">
        <div>Dropdown content</div>
      </DropdownButton>,
    );
    const button = screen.getAllByRole('button')[0];

    expect(button).not.toHaveStyle('flex-flow: row-reverse');

    rerender(
      <DropdownButton buttonText="Button" invertIconPosition>
        <div>Dropdown content</div>
      </DropdownButton>,
    );

    expect(button).toHaveStyle('flex-flow: row-reverse');
  });

  it('renders DropdownIndicator in classic, DropdownIcon in novo & nothing when indicatorIcon={false}', () => {
    const { rerender } = render(
      <DropdownButton buttonText="Button">
        <div>Dropdown content</div>
      </DropdownButton>,
    );

    let [indicator] = screen.getByRole('button').children;

    // this is CSS build in Classic
    expect(indicator).toMatchInlineSnapshot(`
      .c0 {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 8px solid #5E6D7A;
        margin: 0 5px 0 calc(5px + 8px);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }

      <span
        aria-hidden="true"
        class="c0"
      />
    `);

    rerender(
      <DropdownButton buttonText="Button" theme={{ isClassic: false }}>
        <div>Dropdown content</div>
      </DropdownButton>,
    );

    [indicator] = screen.getByRole('button').children;

    // uses an svg icon in novo
    expect(indicator).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
        min-height: 24px;
        min-width: 24px;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        pointer-events: auto;
        fill: #5E6D7A;
      }

      .c1 {
        margin-left: 8px;
      }

      <svg
        aria-hidden="true"
        class="c0 c1"
        color="#5E6D7A"
        role="presentation"
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
      <DropdownButton buttonText="Button" indicatorIcon={false}>
        <div>Dropdown content</div>
      </DropdownButton>,
    );
    [indicator] = screen.getByRole('button').children;
    expect(indicator).toEqual(undefined);
  });

  describe('direction', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    Object.values(directions).forEach(direction => {
      it(`should open dropdown with the direction ${direction}`, () => {
        render(
          <DropdownButton
            buttonText="Button"
            idealDirection={direction}
            isDefaultOpen
          >
            <div>Dropdown content</div>
          </DropdownButton>,
        );

        expect(Popper).toHaveBeenCalledTimes(1);
        expect(Popper).toHaveBeenCalledWith(
          expect.objectContaining({ placement: direction }),
          {},
        );
      });
    });
  });

  it('should render beside the button when renderInPortal=false', async () => {
    const { container } = render(
      <DropdownButton buttonText="button" renderInPortal={false}>
        <div data-test-id="child" />
      </DropdownButton>,
    );

    await user.click(screen.getByText('button'));
    const child = screen.queryByTestId('child');

    // should be rendered
    expect(child).toBeInTheDocument();
    // should be child of the button
    expect(container).toContainElement(child);
  });

  it('should render in a portal when renderInPortal=true', async () => {
    const { container } = render(
      <DropdownButton buttonText="button">
        <div data-test-id="child" />
      </DropdownButton>,
    );

    await user.click(screen.getByText('button'));
    const child = screen.queryByTestId('child');

    // should be rendered
    expect(child).toBeInTheDocument();
    // should NOT be child of the button
    expect(container).not.toContainElement(child);
  });

  it('should render aria-* roles correctly when dropdown is opened/closed', () => {
    // open
    const { rerender } = render(
      <DropdownButton buttonText="button" isDefaultOpen>
        <div data-test-id="child" />
      </DropdownButton>,
    );

    let button = screen.getByText('button');
    let [icon] = button.children;

    expect(button).toHaveAttribute('aria-haspopup', 'true');
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(icon).toHaveAttribute('aria-hidden', 'true');

    // closed
    rerender(
      <DropdownButton buttonText="button">
        <div data-test-id="child" />
      </DropdownButton>,
    );

    button = screen.getByText('button');
    [icon] = button.children;

    expect(button).toHaveAttribute('aria-haspopup', 'true');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('should stop event propagate on click dropdown', () => {
    const parentOnClickMock = jest.fn();

    const { getByRole } = render(
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div onClick={parentOnClickMock}>
        <DropdownButton buttonText="button">
          <div data-test-id="child" />
        </DropdownButton>
      </div>,
    );

    const button = getByRole('button');
    const event = createEvent.click(button);

    event.stopPropagation = jest.fn();

    fireEvent(button, event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(parentOnClickMock).not.toHaveBeenCalled();
  });

  it('closes the dropdown on click inside the dropdown without shouldCloseOnInsideClick prop', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    render(
      <DropdownButton
        buttonText="dropdownButton"
        onOpen={onOpen}
        onClose={onClose}
        isDefaultOpen
      >
        <div>
          <button type="button" data-test-id="childBtn">
            Test
          </button>
        </div>
      </DropdownButton>,
    );

    fireEvent.click(screen.getByText('Test'));
    waitFor(() => {
      expect(onClose).toHaveBeenCalled();
      expect(screen.queryByText('Test')).toBeNull();
    });
  });

  it('does not close the dropdown on click inside the dropdown with shouldCloseOnInsideClick set to false', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    render(
      <DropdownButton
        buttonText="dropdownButton"
        onOpen={onOpen}
        onClose={onClose}
        isDefaultOpen
        shouldCloseOnInsideClick={false}
      >
        <div>
          <button type="button" data-test-id="childBtn">
            Test
          </button>
        </div>
      </DropdownButton>,
    );

    fireEvent.click(screen.getByText('Test'));
    waitFor(() => {
      expect(onClose).not.toHaveBeenCalled();
      expect(screen.queryByText('Test')).toBeDefined();
    });
  });

  it('OX-1412 only calls onOpen/onClose handlers when needed', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    const { rerender } = render(
      <DropdownButton buttonText="button" onOpen={onOpen} onClose={onClose}>
        <div data-test-id="child" />
      </DropdownButton>,
    );

    expect(onOpen).toHaveBeenCalledTimes(0);
    expect(onClose).toHaveBeenCalledTimes(0);

    await user.click(screen.getByText('button'));

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    await user.click(screen.getByText('button'));

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);

    // using different handlers should not trigger them
    const onOpen2 = jest.fn();
    const onClose2 = jest.fn();

    rerender(
      <DropdownButton buttonText="button" onOpen={onOpen2} onClose={onClose2}>
        <div data-test-id="child" />
      </DropdownButton>,
    );

    // original handlers number of calls remains the same
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);

    // new handlers are not called (this would fail before OX-1412)
    expect(onOpen2).toBeCalledTimes(0);
    expect(onClose2).toBeCalledTimes(0);
  });

  describe('Keyboard navigation', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();

    it('closes the dropdown on Escape key when the focus is inside the dropdown', () => {
      render(
        <DropdownButton
          buttonText="dropdownButton"
          onOpen={onOpen}
          onClose={onClose}
          isDefaultOpen
        >
          <div>
            <button type="button" data-test-id="childBtn">
              Test
            </button>
          </div>
        </DropdownButton>,
      );

      fireEvent.keyDown(screen.getByText('Test'), { key: 'Escape' });
      waitFor(() => {
        expect(onClose).toHaveBeenCalled();
        expect(screen.queryByText('Test')).toBeNull();
      });
    });

    it('closes the dropdown on Escape key when the focus is on the dropdownButton', () => {
      render(
        <DropdownButton
          buttonText="dropdownButton"
          onOpen={onOpen}
          onClose={onClose}
          isDefaultOpen
        >
          <div>
            <button type="button" data-test-id="childBtn">
              Test
            </button>
          </div>
        </DropdownButton>,
      );

      fireEvent.keyDown(screen.getByText('dropdownButton'), { key: 'Escape' });
      waitFor(() => {
        expect(onClose).toHaveBeenCalled();
        expect(screen.queryByText('Test')).toBeNull();
      });
    });

    it('closes the dropdown on inside ENTER', () => {
      render(
        <DropdownButton
          buttonText="dropdownButton"
          onOpen={onOpen}
          onClose={onClose}
          isDefaultOpen
        >
          <div>
            <button type="button" data-test-id="childBtn">
              Test
            </button>
          </div>
        </DropdownButton>,
      );

      fireEvent.keyDown(screen.getByText('Test'), { key: 'Enter' });
      waitFor(() => {
        expect(onClose).toHaveBeenCalled();
        expect(screen.queryByText('Test')).toBeNull();
      });
    });

    it('does not close the dropdown on inside ENTER when shouldCloseOnInsideClick is false', () => {
      render(
        <DropdownButton
          buttonText="dropdownButton"
          onOpen={onOpen}
          onClose={onClose}
          isDefaultOpen
          shouldCloseOnInsideClick={false}
        >
          <div>
            <button type="button" data-test-id="childBtn">
              Test
            </button>
          </div>
        </DropdownButton>,
      );

      fireEvent.keyDown(screen.getByText('Test'), { key: 'Enter' });
      waitFor(() => {
        expect(screen.queryByText('Test')).not.toBeNull();
      });
    });
  });
});

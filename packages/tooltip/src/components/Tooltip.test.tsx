import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  staticTooltip,
  staticTooltipNovo,
  staticTooltipNovoDark,
} from '@8x8/oxygen-constants';

import Tooltip from './Tooltip';

type ButtonProps = React.HTMLProps<HTMLButtonElement>;
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button type="button" ref={ref}>
      {props.children}
    </button>
  ),
);

Button.displayName = 'Button';
const CustomWrapper: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => <div data-test-id="custom-wrapper">{children}</div>;

describe('Tooltip', () => {
  describe('render', () => {
    it('should render the children', () => {
      render(
        <Tooltip title="content">
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.getByText('child')).toBeInTheDocument();
    });
    it('should render an empty wrapper when no children', () => {
      render(<Tooltip title="content" testId="with_wrapper" />);
      expect(screen.getByTestId('ANCHOR_FOR_with_wrapper')).toBeInTheDocument();
    });
    it('should not render anything when no children & no wrapper', () => {
      const { container } = render(
        <Tooltip
          title="content"
          includeWrapper={false}
          testId="with_wrapper"
        />,
        {
          wrapper: CustomWrapper,
        },
      );

      expect(container.firstChild).toBeEmptyDOMElement();
    });

    it('renders in a default provided portal', () => {
      const result = render(
        <Tooltip title="content">
          <div>child</div>
        </Tooltip>,
      );

      // need to use native JS to traverse the DOM up to the parent (body) to fetch the root portal
      const root = result.container.parentElement?.querySelector(
        '#oxygen-tooltip-root',
      );

      expect(root).toBeInTheDocument();
    });
    it('renders in a custom element', () => {
      const result = render(
        <Tooltip title="content" renderContainerId="test-id">
          <div>child</div>
        </Tooltip>,
      );

      // need to use native JS to traverse the DOM up to the parent (body) to fetch the root portal
      const root = result.container.parentElement?.querySelector('#test-id');

      expect(root).toBeInTheDocument();
    });
  });
  describe('trigger mechanisms', () => {
    it('show the Tooltip when hovered', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content">
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      await user.hover(screen.getByText('child'));
      await screen.findByText('content');
    });
    it('show the Tooltip when hovered without wrapper', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" includeWrapper={false}>
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      await user.hover(screen.getByText('child'));
      await screen.findByText('content');
    });
    it('show the Tooltip when focused', async () => {
      render(
        <Tooltip title="content">
          <button type="button">child</button>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      screen.getByText('child').focus();
      await screen.findByText('content');
    });
    it('show the Tooltip when focused without wrapper', async () => {
      render(
        <Tooltip title="content" includeWrapper={false}>
          <button type="button">child</button>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      screen.getByText('child').focus();
      await screen.findByText('content');
    });
    it('show the Tooltip on click', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip showOn="click" title="content">
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      await user.click(screen.getByText('child'));
      await screen.findByText('content');
    });
    it('show the Tooltip on click without wrapper', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip showOn="click" title="content" includeWrapper={false}>
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      await user.click(screen.getByText('child'));
      await screen.findByText('content');
    });
    it('only the first child of multiple children will work', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" includeWrapper={false}>
          <Button>child_1</Button>
          <Button>child_2</Button>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      await user.hover(screen.getByText('child_2'));
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      await user.hover(screen.getByText('child_1'));
      await screen.findByText('content');
    });
    it('should work with triggerRef and no children', async () => {
      const user = userEvent.setup();
      const Comp = () => {
        const [externalTrigger, setExternalTrigger] =
          React.useState<HTMLDivElement>();
        const saveRefToState = (ref: HTMLDivElement) => setExternalTrigger(ref);

        return (
          <>
            <Tooltip
              title="content"
              includeWrapper={false}
              triggerRef={externalTrigger}
            />
            <div ref={saveRefToState}>sibling</div>
          </>
        );
      };

      render(<Comp />);
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      user.hover(screen.getByText('sibling'));
      await screen.findByText('content');
    });
  });
  describe('advanced interactions', () => {
    it('should keep Tooltip open when hovering over the Tooltip & close when hovering out of the Tooltip', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content">
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      // should render on hover
      await user.hover(screen.getByText('child'));
      const content = screen.getByText('content');

      // mouse enter over the tooltip
      await fireEvent.mouseEnter(content);
      expect(content).toBeInTheDocument();
      // trigger more mouse events over the Tooltip body
      await fireEvent.mouseOver(content);
      expect(content).toBeInTheDocument();
      // mouse out from the Tooltip content should close the tooltip
      await user.unhover(content);
      expect(content).not.toBeInTheDocument();
    });
    // @todo this is not a reliable test, I can't get the mousemove positions to trigger to correct sequence of events
    // it works with or without disableInteractive
    // possibly need to calculate getBoundingClientRect() for each element and navigate between them manually
    it('closes when hovering over the Tooltip when disableInteractive is provied', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" disableInteractive>
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      const child = screen.getByText('child');

      // move the mouse over the child
      await user.pointer([{ target: child }]);
      // tooltip should open
      const content = screen.getByText('content');

      expect(content).toBeInTheDocument();
      // move mouse between child towards content
      await user.pointer([{ target: child }, { target: content }]);
      expect(content).not.toBeInTheDocument();
    });
    it('closes the Tooltip on reference click when opened with hover (OX-929)', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content">
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      // should render on hover
      await user.hover(screen.getByText('child'));
      await screen.findByText('content');
      // should close on click
      await user.click(screen.getByText('child'));
      expect(screen.queryByText('content')).not.toBeInTheDocument();
    });
    it('closes the Tooltip Escape click when opened with hover (OX-929)', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content">
          <div>child</div>
        </Tooltip>,
      );
      expect(screen.queryByText('content')).not.toBeInTheDocument();
      // should render on hover
      await user.hover(screen.getByText('child'));
      await screen.findByText('content');
      // should close on Escape
      await user.keyboard('{Escape}');
      expect(screen.queryByText('content')).not.toBeInTheDocument();
    });
  });
  describe('arrow', () => {
    it('should render arrow if set via prop', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" enableArrow>
          <div>child</div>
        </Tooltip>,
      );
      await user.hover(screen.getByText('child'));
      expect(screen.getByTestId('tooltip_arrow_TOOLTIP')).toBeInTheDocument();
    });
    it('should render arrow if set via theme', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" theme={staticTooltipNovo}>
          <div>child</div>
        </Tooltip>,
      );
      await user.hover(screen.getByText('child'));
      expect(screen.getByTestId('tooltip_arrow_TOOLTIP')).toBeInTheDocument();
    });
    it('should render arrow if set via theme (dark)', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" theme={staticTooltipNovoDark}>
          <div>child</div>
        </Tooltip>,
      );
      await user.hover(screen.getByText('child'));
      expect(screen.getByTestId('tooltip_arrow_TOOLTIP')).toBeInTheDocument();
    });
    it('should not render the arrow if not set via the theme (Classic has no arrow)', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" theme={staticTooltip}>
          <div>child</div>
        </Tooltip>,
      );
      await user.hover(screen.getByText('child'));
      expect(
        screen.queryByTestId('tooltip_arrow_TOOLTIP'),
      ).not.toBeInTheDocument();
    });
    it('should not render arrow if set via theme but overriden by prop', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip title="content" theme={staticTooltipNovo} enableArrow={false}>
          <div>child</div>
        </Tooltip>,
      );
      await user.hover(screen.getByText('child'));
      expect(
        screen.queryByTestId('tooltip_arrow_TOOLTIP'),
      ).not.toBeInTheDocument();
    });
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Tab from './Tab';
import { ARIA_CONTROLS_WARNING_MSG } from '../constants/messages';

describe('<Tab>', () => {
  it('renders the Tab', () => {
    const { container } = render(<Tab>Tab 1</Tab>);

    expect(container).toMatchSnapshot();
  });

  it('renders the tab when isActive', () => {
    render(<Tab isActive>Tab 1</Tab>);

    const tab = screen.getByRole('tab');

    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(tab).toHaveStyle({ cursor: 'pointer' });
    // lazy snapshot to rest of the styles
    expect(tab).toMatchSnapshot();
  });

  it('renders the tab when isDisabled', () => {
    render(<Tab isDisabled>Tab 1</Tab>);

    const tab = screen.getByRole('tab');

    expect(tab).toHaveAttribute('disabled');
    expect(tab).toHaveStyle({ cursor: 'not-allowed' });
    // lazy snapshot to rest of the styles
    expect(tab).toMatchSnapshot();
  });

  it.each`
    isActive     | isDisabled   | clickEventsPropgated
    ${undefined} | ${undefined} | ${1}
    ${false}     | ${false}     | ${1}
    ${true}      | ${false}     | ${1}
    ${false}     | ${true}      | ${0}
    ${true}      | ${true}      | ${0}
  `(
    'allows number of onClick callbacks=$clickEventsPropgated when isActive=$isActive and isDisabled=$isDisabled',
    async ({ isActive, isDisabled, clickEventsPropgated }) => {
      const user = userEvent.setup();
      const onClick = jest.fn();

      render(
        <Tab isActive={isActive} isDisabled={isDisabled} onClick={onClick}>
          Tab 1
        </Tab>,
      );

      const tab = screen.getByRole('tab');

      await user.click(tab);

      expect(onClick).toHaveBeenCalledTimes(clickEventsPropgated);
    },
  );

  it('renders correctly when isStretched', () => {
    render(<Tab isStretched>Tab 1</Tab>);

    const tab = screen.getByRole('tab');

    expect(tab).toHaveStyle({ alignItems: 'stretch', width: '100%' });
  });

  it('should warn when aria-controls prop is missing', () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    render(<Tab>Tab 1</Tab>);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining(ARIA_CONTROLS_WARNING_MSG),
    );
    consoleWarnSpy.mockRestore();
  });
});

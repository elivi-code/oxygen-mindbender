/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { avatarNeoLight as avatar } from '@8x8/oxygen-constants';
import { OmnichannelIcon } from '@8x8/oxygen-icon';
import '@testing-library/jest-dom';

import Avatar from './Avatar';

const CompWithRegularRef = () => {
  const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <OxygenProvider>
      <Avatar ref={ref} tabIndex={-1} />;
      <div
        onClick={() => {
          ref.current?.focus();
        }}
      >
        click to focus
      </div>
    </OxygenProvider>
  );
};

describe('Avatar', () => {
  it('default user profile icon has themed color', () => {
    const { container } = render(
      <OxygenProvider>
        <Avatar />
      </OxygenProvider>,
    );

    expect(container.querySelector('svg')).toHaveStyle(
      `fill: ${avatar.initialsColor}`,
    );
  });
  it('default group icon has themed color', () => {
    const { container } = render(
      <OxygenProvider>
        <Avatar isGroup />
      </OxygenProvider>,
    );

    expect(container.querySelector('svg')).toHaveStyle(
      `fill: ${avatar.initialsColor}`,
    );
  });
  it('custom icon has themed color', () => {
    const { container } = render(
      <OxygenProvider>
        <Avatar>
          <OmnichannelIcon />
        </Avatar>
      </OxygenProvider>,
    );

    expect(container.querySelector('svg')).toHaveStyle(
      `fill: ${avatar.initialsColor}`,
    );
  });
  it('custom badge icon has own color', () => {
    const { container } = render(
      <OxygenProvider>
        <Avatar name="JD" userStatus={<OmnichannelIcon />} />
      </OxygenProvider>,
    );

    expect(container.querySelector('svg')).not.toHaveStyle(
      `fill: ${avatar.initialsColor}`,
    );
  });
  it('supports ref forwarding', () => {
    render(<CompWithRegularRef />);
    expect(screen.getByTestId('AVATAR')).not.toHaveFocus();
    screen.getByText('click to focus').click();
    expect(screen.getByTestId('AVATAR')).toHaveFocus();
  });
});

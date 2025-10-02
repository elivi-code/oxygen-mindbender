import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import { OxygenProvider } from '@8x8/oxygen-config';

import Avatar from './Avatar';

const GoogleLogo =
  'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="%23FFC107" d="M10.903 5.02H10.5V5H6v2h2.826A2.999 2.999 0 1 1 6 3c.765 0 1.46.288 1.99.76l1.414-1.414A4.977 4.977 0 0 0 6 1a5 5 0 1 0 4.903 4.02z"/><path fill="%23FF3D00" d="M1.577 3.673l1.642 1.204A2.999 2.999 0 0 1 6 3c.765 0 1.46.288 1.99.76l1.415-1.415A4.977 4.977 0 0 0 6 1a4.997 4.997 0 0 0-4.423 2.673z"/><path fill="%234CAF50" d="M6 11a4.977 4.977 0 0 0 3.352-1.298l-1.547-1.31A2.977 2.977 0 0 1 6 9c-1.3 0-2.405-.83-2.82-1.987L1.548 8.27A4.996 4.996 0 0 0 6 11z"/><path fill="%231976D2" d="M10.903 5.02H10.5V5H6v2h2.826a3.01 3.01 0 0 1-1.022 1.393l1.548 1.309C9.242 9.802 11 8.5 11 6c0-.335-.035-.662-.097-.98z"/></g></g></svg>';

describe('<Avatar />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <OxygenProvider>
          <Avatar {...props} />
        </OxygenProvider>,
      )
      .toJSON();
  }

  it('should render the Avatar component with placeholder', () => {
    wrapper = setup({
      testId: 'mockedTestId',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with group placeholder', () => {
    wrapper = setup({
      isGroup: true,
      testId: 'mockedTestId',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with initials', () => {
    wrapper = setup({
      name: 'mocked name',
      testId: 'mockedTestId',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with custom number of initials based on maxInitials', () => {
    wrapper = setup({
      name: 'John Junior Doe',
      maxInitials: 3,
    });
    expect(wrapper.children[0]).toEqual('JJD');
  });

  it('should render the Avatar component with image', () => {
    wrapper = setup({
      src: 'https://www.8x8.com/wp-content/uploads/2015/06/8x8-referral-rewards-logo.png',
      name: 'mocked name',
      testId: 'mockedTestId',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with user status', () => {
    wrapper = setup({
      name: 'mocked name',
      userStatus: 'available',
      testId: 'mockedTestId',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with edit overlay', () => {
    wrapper = setup({
      showEditOverlay: true,
      name: 'mocked name',
      size: '2xlarge',
      testId: 'mockedTestId',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with custom content', () => {
    wrapper = setup({
      showEditOverlay: true,
      name: 'mocked name',
      size: '2xlarge',
      testId: 'mockedTestId',
      children: 'some custom content, can be anything react can render',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Avatar component with custom attributes', () => {
    wrapper = setup({
      name: 'Mocked name',
      size: '2xlarge',
      onClick: () => {},
      'aria-label': 'Mocked name avatar',
    });

    expect(wrapper.props).toMatchObject({
      'data-test-id': 'AVATAR',
      'data-id': 'AVATAR',
      tabIndex: 0,
      role: 'button',
      size: '2xlarge',
      'aria-label': 'Mocked name avatar',
    });
  });

  it('calls the imageProps callbacks when image loads', async () => {
    const onLoad = jest.fn();
    const onError = jest.fn();

    render(
      <Avatar
        testId="AVATAR"
        src={GoogleLogo}
        imageProps={{
          onLoad,
          onError,
        }}
      />,
    );

    fireEvent.load(screen.getByTestId('AVATAR_IMAGE'));

    await waitFor(() => {
      return expect(screen.getByTestId('AVATAR_IMAGE')).toHaveStyle(
        'opacity: 1',
      );
    });

    expect(onLoad).toHaveBeenCalled();
    expect(onError).not.toHaveBeenCalled();
  });

  it('resets the image loading state when the src prop changes', async () => {
    const onLoad = jest.fn();
    const onError = jest.fn();

    // 1. render with image
    const { rerender } = render(
      <Avatar
        src={GoogleLogo}
        name="Alfred Isaac"
        imageProps={{
          onLoad,
          onError,
        }}
      />,
    );

    fireEvent.load(screen.getByTestId('AVATAR_IMAGE'));

    await waitFor(() => {
      return expect(screen.getByTestId('AVATAR_IMAGE')).toHaveStyle(
        'opacity: 1',
      );
    });
    // image rendered, no initials are present
    expect(screen.queryByText('AI')).not.toBeInTheDocument();

    expect(onLoad).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledTimes(0);

    // 2. reset image, no src
    rerender(
      <Avatar
        name="Alfred Isaac"
        imageProps={{
          onLoad,
          onError,
        }}
      />,
    );

    // no image rendered
    expect(screen.queryByTestId('AVATAR_IMAGE')).not.toBeInTheDocument();
    // initials rendered
    expect(screen.getByText('AI')).toBeInTheDocument();

    // 3. load image again
    rerender(
      <Avatar
        name="Alfred Isaac"
        src={GoogleLogo}
        imageProps={{
          onLoad,
          onError,
        }}
      />,
    );

    fireEvent.load(screen.getByTestId('AVATAR_IMAGE'));

    await waitFor(() => {
      return expect(screen.getByTestId('AVATAR_IMAGE')).toHaveStyle(
        'opacity: 1',
      );
    });
    // image rendered, no initials are present
    expect(screen.queryByText('AI')).not.toBeInTheDocument();

    expect(onLoad).toHaveBeenCalledTimes(2);
    expect(onError).toHaveBeenCalledTimes(0);
  });
});

describe('Avatar custom size', () => {
  it('should allow size prop of type number', () => {
    render(
      <OxygenProvider>
        <Avatar size={40} />
      </OxygenProvider>,
    );
    const avatar = screen.getByTestId('AVATAR');

    expect(avatar).toHaveStyleRule('height', '40px');
    expect(avatar).toHaveStyleRule('width', '40px');
  });
  it('should have icon size as half +2', () => {
    render(
      <OxygenProvider>
        <Avatar size={40} />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('AVATAR').firstChild).toHaveAttribute(
      'size',
      '22',
    );
  });
  it('should have font size as half', () => {
    render(
      <OxygenProvider>
        <Avatar size={40} />
      </OxygenProvider>,
    );

    expect(screen.getByTestId('AVATAR')).toHaveStyleRule('font-size', '20px');
  });
});

describe('Avatar with Novo theme', () => {
  it('should render the Avatar component with Novo group icon', () => {
    const wrapper = renderer.create(
      <OxygenProvider>
        <Avatar isGroup />
      </OxygenProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should render the Avatar component with Novo user icon', () => {
    const wrapper = renderer.create(
      <OxygenProvider>
        <Avatar />
      </OxygenProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Enforce correct size even when "flex" parent tries to shrink it', () => {
  it('has both width & height as well as min-width and min-height', () => {
    render(<Avatar />);
    expect(screen.getByTestId('AVATAR')).toHaveStyle({
      width: '48px',
      height: '48px',
      minWidth: '48px',
      minHeight: '48px',
    });
  });
  it('has both width & height as well as min-width and min-height with custom size', () => {
    render(<Avatar size={60} />);
    expect(screen.getByTestId('AVATAR')).toHaveStyle({
      width: '60px',
      height: '60px',
      minWidth: '60px',
      minHeight: '60px',
    });
  });
});

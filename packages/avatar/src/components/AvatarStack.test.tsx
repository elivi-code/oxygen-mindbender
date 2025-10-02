import React from 'react';
import { mount } from 'enzyme';

import Avatar from './Avatar';
import AvatarStack from './AvatarStack';
import {
  StyledAvatarStackButton,
  StyledAvatarStackDiv,
} from '../styled/StyledAvatarStack';

describe('<AvatarStack />', () => {
  test('should render as div without onClick callback', () => {
    const wrapper = mount(<AvatarStack />);

    expect(wrapper.find(StyledAvatarStackDiv).props().onClick).toEqual(
      undefined,
    );
  });
  test('should render as button  and pass through the onClink handler', () => {
    const fn = () => {};
    const wrapper = mount(<AvatarStack onClick={fn} />);

    expect(wrapper.find(StyledAvatarStackButton).props().as).toEqual(undefined);
    expect(wrapper.find(StyledAvatarStackButton).props().onClick).toEqual(fn);
  });
  test('should render all avatars if less then the max', () => {
    const avatars = [{ name: '1' }, { name: '2' }, { name: '3' }];
    const wrapper = mount(
      <AvatarStack avatars={avatars} maxAvatars={avatars.length} />,
    );

    expect(wrapper.find(Avatar)).toHaveLength(avatars.length);
    expect(wrapper.find(Avatar).at(0).text()).toEqual(avatars[0].name);
    expect(wrapper.find(Avatar).at(1).text()).toEqual(avatars[1].name);
    expect(wrapper.find(Avatar).at(2).text()).toEqual(avatars[2].name);
  });
  test('should render the counter when avatars > max', () => {
    const avatars = [{ name: '1' }, { name: '2' }, { name: '3' }];
    const wrapper = mount(
      <AvatarStack avatars={avatars} maxAvatars={avatars.length - 1} />,
    );

    expect(wrapper.find(Avatar)).toHaveLength(avatars.length - 1);
    expect(wrapper.find(Avatar).at(0).text()).toEqual(avatars[0].name);
    expect(wrapper.find(Avatar).at(1).text()).toEqual('+2');
  });
  test('counter should show 99+ when over the limit', () => {
    const avatars = Array(105).fill({ name: 'John Doe' });
    const max = 3;
    const wrapper = mount(<AvatarStack avatars={avatars} maxAvatars={max} />);

    expect(wrapper.find(Avatar)).toHaveLength(max);
    expect(
      wrapper
        .find(Avatar)
        .at(max - 1)
        .text(),
    ).toEqual('99+');
  });
  test('should render avatars when provided as children', () => {
    const wrapper = mount(
      <AvatarStack>
        <Avatar name="1" />
        <Avatar name="2" />
        <Avatar name="3" />
        <Avatar name="4" />
      </AvatarStack>,
    );

    expect(wrapper.find(Avatar)).toHaveLength(4);
    expect(wrapper.find(Avatar).at(0).text()).toEqual('1');
    expect(wrapper.find(Avatar).at(1).text()).toEqual('2');
    expect(wrapper.find(Avatar).at(2).text()).toEqual('3');
    expect(wrapper.find(Avatar).at(3).text()).toEqual('4');
  });
});

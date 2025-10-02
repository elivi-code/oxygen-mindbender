import React from 'react';
import renderer from 'react-test-renderer';

import { eventCardNovo as theme } from '@8x8/oxygen-constants';

import {
  AvatarWrapper,
  IconContainer,
  Text,
  TextOverflow,
  Title,
} from './Content';

describe('Content styled components', () => {
  test('<AvatarWrapper />', () => {
    const wrapper = renderer.create(<AvatarWrapper theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  test('<Icon />', () => {
    const wrapper = renderer.create(<IconContainer theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  test('<Text />', () => {
    const wrapper = renderer.create(<Text theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  test('<TextOverflow />', () => {
    const wrapper = renderer.create(<TextOverflow theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  test('<Title />', () => {
    const wrapper = renderer.create(<Title theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

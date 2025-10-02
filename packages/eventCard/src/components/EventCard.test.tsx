import React from 'react';
import { mount } from 'enzyme';

import { AvatarStack } from '@8x8/oxygen-avatar';

import EventCard from './EventCard';
import { Title, TextOverflow } from '../styled/Content';

const Icon = () => <div data-qa="" />;

Icon.displayName = 'Icon';

describe('<EventCard />', () => {
  test('should render IconComponent when icon is provided', () => {
    const wrapper = mount(<EventCard icon={Icon} />);

    expect(wrapper.find(Icon)).toHaveLength(1);
  });
  test('should not render components when they are not active through props', () => {
    const wrapper = mount(<EventCard />);

    expect(wrapper.find(Icon)).toHaveLength(0);
    expect(wrapper.find(Title)).toHaveLength(0);
    expect(wrapper.find(AvatarStack)).toHaveLength(0);
  });
  test('should render the Title component when the text prop is provided', () => {
    const DATA = 'custom_text';
    const wrapper = mount(<EventCard title={DATA} />);

    expect(wrapper.find(Title).text()).toEqual(DATA);
  });
  test('should render the separator only when both Title and Text are provided', () => {
    const wrapper = mount(<EventCard title="some title" text="some text" />);

    expect(wrapper.find(TextOverflow).text()).toContain('•');
  });
  test.each`
    text           | title
    ${undefined}   | ${'some title'}
    ${'some text'} | ${undefined}
    ${undefined}   | ${undefined}
  `(
    'should not render the separator when text or title are missing',
    ({ text, title }) => {
      const wrapper = mount(<EventCard title={title} text={text} />);

      expect(wrapper.find(TextOverflow).text()).not.toContain('•');
    },
  );
  test('should render the AvatarStack component when the avatars prop is provided', () => {
    const DATA = [{ name: 'J B' }];
    const wrapper = mount(<EventCard avatars={DATA} />);

    expect(wrapper.find(AvatarStack)).toHaveLength(1);
  });
});

import React from 'react';
import renderer, { ReactTestInstance } from 'react-test-renderer';

import Value from './Value';

jest.mock('../styled/ValueText', () => 'ValueText');
jest.mock('../styled/Asterisk', () => 'Asterisk');

describe('<Value>', () => {
  const labelTextValue = 'Action text';

  function setup(props = {}) {
    return renderer.create(
      <Value value="Action text" showTooltipOnOverflow={false} {...props} />,
    );
  }

  it('should render correctly', () => {
    const wrapper = setup();

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should wrap label value in a span with title when showTooltipOnOverflow is passed and type is string', () => {
    const wrapper = setup({ showTooltipOnOverflow: true });

    expect(wrapper.root.findByType('span')).toBeDefined();
    expect(wrapper.root.findByType('span').props.title).toBe(labelTextValue);
  });

  it('should not wrap label value in a span for string values when showTooltipOnOverflow is not passed', () => {
    const wrapper = setup({ showTooltipOnOverflow: false });

    expect(wrapper.root.findAllByType('span')).toHaveLength(0);
  });

  it('should not wrap label value in a span when type is not a string', () => {
    const wrapper = setup({ value: <div> {labelTextValue} </div> });

    expect(wrapper.root.findAllByType('span')).toHaveLength(0);
  });

  it('should render correctly when expects to wrap', () => {
    const wrapper = setup({ shouldWrapText: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when label is required', () => {
    const wrapper = setup({ isRequired: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the * and the value inside the same component', () => {
    const wrapper = setup({ isRequired: true, showTooltipOnOverflow: true });
    const span = wrapper.root.findByType('span');

    expect(span.children[0]).toBe(labelTextValue);
    expect((span.children[1] as ReactTestInstance).type).toBe('Asterisk');
  });
});

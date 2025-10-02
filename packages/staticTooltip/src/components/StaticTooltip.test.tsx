import React from 'react';
import renderer from 'react-test-renderer';

import { staticTooltip as theme } from '@8x8/oxygen-constants';
import StaticTooltip from './StaticTooltip';

jest.mock('../styled', () => ({
  TooltipWrapper: 'TooltipWrapper',
  TooltipContent: 'TooltipContent',
}));

const MockArrow = () => <div data-arrow-render-prop />;

describe('<StaticTooltip>', () => {
  const setup = (props: object) =>
    renderer
      .create(
        <StaticTooltip theme={theme} {...props}>
          Lorem ipsum
        </StaticTooltip>,
      )
      .toJSON();

  it('should render correctly with default props', () => {
    const wrapper = setup({});

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with custom testId', () => {
    const wrapper = setup({ testId: 'CUSTOM_TEST_ID' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with Arrow render prop', () => {
    const wrapper = setup({
      testId: 'CUSTOM_TEST_ID',
      renderArrow: () => <MockArrow />,
    });

    expect(wrapper).toMatchSnapshot();
  });
});

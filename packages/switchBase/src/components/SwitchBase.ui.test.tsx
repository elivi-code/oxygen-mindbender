import React from 'react';
import renderer from 'react-test-renderer';

import SwitchBase, { SwitchBaseProps } from './SwitchBase';

jest.mock('./SwitchBaseInput', () => 'SwitchBaseInput');
jest.mock('../styled', () => ({
  __esModule: true,
  LabelTextWrapper: 'LabelTextWrapper',
  SwitchBaseWrapper: 'SwitchBaseWrapper',
}));

jest.mock('@8x8/oxygen-label', () => 'Label');

describe('<SwitchBase />', () => {
  let wrapper;
  const mockProps = {
    id: 'mockedId',
  };
  const setup = (props?: SwitchBaseProps) =>
    renderer.create(<SwitchBase {...mockProps} {...props} />).toJSON();

  it('should render correctly with default properties', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with testID', () => {
    wrapper = setup({ testId: 'exampleTestId' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with id', () => {
    wrapper = setup({ id: 'exampleId' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with htmlFor', () => {
    wrapper = setup({ htmlFor: 'exampleHtmlFor' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with icon', () => {
    wrapper = setup({ icon: 'IconComponent' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    wrapper = setup({ label: 'exampleLabel' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with value', () => {
    wrapper = setup({ value: 'exampleValue' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    wrapper = setup({ name: 'exampleName' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBox', () => {
    wrapper = setup({ infoBoxText: 'Test' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with infoBoxButtonLabel', () => {
    wrapper = setup({ infoBoxButtonLabel: 'Button Label' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is checked', () => {
    wrapper = setup({ isChecked: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with rest props', () => {
    wrapper = setup({ customProps: 'customProps' } as SwitchBaseProps);
    expect((wrapper as any)?.props?.customProps).toEqual('customProps');
  });

  it('should render correctly when the label tooltip is disabled', () => {
    wrapper = setup({ showLabelTooltipOnOverflow: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with label props', () => {
    wrapper = setup({ labelProps: { prop: 'customLabelProps' } });
    expect((wrapper as any).children[0].props.prop).toEqual('customLabelProps');
  });

  it('should render correctly with a label', () => {
    const tree = setup({ label: 'Test Label' });

    expect(tree).toMatchSnapshot();
  });
});

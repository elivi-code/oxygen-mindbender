import React from 'react';
import { shallow } from 'enzyme';

import { select as theme } from '@8x8/oxygen-constants';

import MultiValue from './MultiValue';

const ACTION = jest.fn();

describe('<MultiValue />', () => {
  let wrapper;

  function setupShallow(props = {}) {
    return shallow(
      <MultiValue
        theme={theme}
        selectProps={{
          testId: 'custom-test-id',
        }}
        removeProps={{
          onClick: ACTION,
        }}
        data={{}}
        {...props}
      />,
    );
  }

  it('renders', () => {
    wrapper = setupShallow();
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    isFixed  | isDisabled | actionProp
    ${false} | ${false}   | ${ACTION}
    ${true}  | ${false}   | ${undefined}
    ${false} | ${true}    | ${undefined}
  `(
    'when isFixed={isFixed} and isDisabled={isDisabled} no action is available',
    ({ isFixed, isDisabled, actionProp }) => {
      wrapper = setupShallow({
        data: { isFixed },
        selectProps: { isDisabled },
      });
      expect(wrapper.props().action).toBe(actionProp);
    },
  );
});

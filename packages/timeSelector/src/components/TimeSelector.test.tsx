import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { fireEvent, render, screen } from '@testing-library/react';

import { timeSelector as theme } from '@8x8/oxygen-constants';
import { ClockIcon } from '@8x8/oxygen-icon';

import TimeSelector from './TimeSelector';
import mockInputs from '../mocks/inputTimes';

describe('TimeSelector', () => {
  function setupMount(props = {}) {
    return mount(<TimeSelector theme={theme} {...props} />);
  }

  it('should render correctly', () => {
    const wrapper = setupMount();

    expect(wrapper).toMatchSnapshot();
  });

  it('should not open the dropdown if the input has no value', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: '' } }));
    wrapper.update();

    expect(wrapper.find('FloatingPortal')).toHaveLength(0);
  });

  it('should not open the dropdown if the input has not parsable value', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: 'asd' } }));
    wrapper.update();

    expect(wrapper.find('FloatingPortal')).toHaveLength(0);
  });

  it('should open the dropdown if the input has a parsable value', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: '11' } }));
    wrapper.update();
    expect(wrapper.find('FloatingPortal')).toHaveLength(1);
  });

  it('should close the dropdown on input blur', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: '11' } }));
    wrapper.update();

    act(() => Input.props().onBlur());
    wrapper.update();

    expect(wrapper.find('FloatingPortal')).toHaveLength(0);
  });

  it('should set the input error if the input value is not parsable', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: 'asd' } }));
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(true);
  });

  it('should set the input value empty string if no value is provided to TimeSelector', () => {
    const wrapper = setupMount();

    expect(wrapper.find('Input').props().value).toBe('');
  });

  it('should set the input value the formatted provided time value', () => {
    const wrapper = setupMount();

    act(() => {
      wrapper.setProps({
        value: { hours: 11, minutes: 55, seconds: 0 },
      });
    });
    wrapper.update();

    expect(wrapper.find('Input').props().value).toBe('11:55 AM');
  });

  it.each(mockInputs)(
    'should format correctly for $input',
    ({ input, expectedOutput }) => {
      const onChangeCb = jest.fn();

      const wrapper = setupMount({
        onChange: onChangeCb,
      });

      wrapper.update();

      act(() => wrapper.find('Input').props().onFocus());
      wrapper.update();

      act(() =>
        wrapper
          .find('Input')
          .props()
          .onChange({ target: { value: input } }),
      );
      wrapper.update();

      act(() => wrapper.find('Input').props().onBlur());
      wrapper.update();

      if (!expectedOutput) {
        expect(onChangeCb).not.toHaveBeenCalled();
      } else {
        expect(onChangeCb).toHaveBeenCalledWith(expectedOutput);
      }
    },
  );

  it('should use the custom formatter string to represent the time value', () => {
    const wrapper = setupMount();

    act(() => {
      wrapper.setProps({
        value: { hours: 14, minutes: 23, seconds: 41 },
        timeDisplayFormat: 'HH.mm.ss',
      });
    });

    wrapper.update();
    expect(wrapper.find('Input').props().value).toBe('14.23.41');
  });

  it('should change the input value if the custom string formatter changes', () => {
    const wrapper = setupMount();

    act(() => {
      wrapper.setProps({
        value: { hours: 19, minutes: 23, seconds: 41 },
      });
    });
    wrapper.update();

    act(() => {
      wrapper.setProps({
        timeDisplayFormat: 'HH.',
      });
    });
    wrapper.update();

    expect(wrapper.find('Input').props().value).toBe('19.');
  });

  it('should default to 0 for hours, minutes and seconds in value', () => {
    const wrapper = setupMount();

    act(() => {
      wrapper.setProps({
        value: {},
        timeDisplayFormat: 'HH.mm.ss',
      });
    });

    wrapper.update();
    expect(wrapper.find('Input').props().value).toBe('00.00.00');
  });

  it('should remove the input error state if new value is set as prop', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: 'asd' } }));
    wrapper.update();

    act(() => {
      wrapper.setProps({
        value: { hours: 19, minutes: 23, seconds: 41 },
      });
    });
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(false);
  });

  it('should remove the input error state if the input become empty', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: 'asd' } }));
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(true);

    act(() => Input.props().onChange({ target: { value: '' } }));
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(false);
  });

  it('should remove the input error state if the input become valid', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: 'asd' } }));
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(true);

    act(() => Input.props().onChange({ target: { value: '11:34' } }));
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(false);
  });

  it('should call the onOpen callback on input focus', () => {
    const onOpenCb = jest.fn();
    const wrapper = setupMount({ onOpen: onOpenCb });

    act(() => wrapper.find('Input').props().onFocus());
    wrapper.update();

    expect(onOpenCb).toHaveBeenCalled();
  });

  it('should call the onClose callback on input blur', () => {
    const onCloseCb = jest.fn();
    const wrapper = setupMount({ onClose: onCloseCb });

    act(() => wrapper.find('Input').props().onBlur());
    wrapper.update();

    expect(onCloseCb).toHaveBeenCalled();
  });

  it('should call the onChange function with `undefined`, if the input is empty on input blur', () => {
    const onChangeCb = jest.fn();
    const wrapper = setupMount({ onChange: onChangeCb });

    act(() => wrapper.find('Input').props().onFocus());
    wrapper.update();

    act(() => wrapper.find('Input').props().onBlur());
    wrapper.update();

    expect(onChangeCb).toHaveBeenCalledWith(undefined);
  });

  it('should revert the initial value, if the input has error on input blur', () => {
    const onChangeCb = jest.fn();
    const wrapper = setupMount({ onChange: onChangeCb });

    act(() => wrapper.find('Input').props().onBlur());
    wrapper.update();

    expect(onChangeCb).toHaveBeenCalledWith(undefined);
  });

  it('should not call the onChange, if the input has error on input blur', () => {
    const onChangeCb = jest.fn();
    const wrapper = setupMount({ onChange: onChangeCb });

    act(() => wrapper.find('Input').props().onFocus());
    wrapper.update();

    act(() =>
      wrapper
        .find('Input')
        .props()
        .onChange({ target: { value: 'asd' } }),
    );
    wrapper.update();

    act(() => wrapper.find('Input').props().onBlur());
    wrapper.update();

    expect(onChangeCb).not.toHaveBeenCalled();
  });

  it('should revert the input value, if the input has error on input blur', () => {
    const wrapper = setupMount({
      value: { hours: 19, minutes: 23, seconds: 41 },
    });

    act(() => wrapper.find('Input').props().onFocus());
    wrapper.update();

    act(() =>
      wrapper
        .find('Input')
        .props()
        .onChange({ target: { value: 'asd' } }),
    );
    wrapper.update();

    expect(wrapper.find('Input').props().value).toBe('asd');

    act(() => wrapper.find('Input').props().onBlur());
    wrapper.update();

    expect(wrapper.find('Input').props().value).toBe('7:23 PM');
  });

  it('should call the onChange with the newly selected value on input blur', () => {
    const onChangeCb = jest.fn();
    const wrapper = setupMount({ onChange: onChangeCb });

    act(() => wrapper.find('Input').props().onFocus());
    wrapper.update();

    act(() =>
      wrapper
        .find('Input')
        .props()
        .onChange({ target: { value: '11:23 PM' } }),
    );
    wrapper.update();

    act(() => wrapper.find('Input').props().onBlur());
    wrapper.update();

    expect(onChangeCb).toHaveBeenCalledWith({
      hours: 23,
      minutes: 23,
      seconds: 0,
    });
  });

  it('should remove the error state of the component of dropdown item click', () => {
    const wrapper = setupMount();

    const Input = wrapper.find('Input');

    act(() => Input.props().onFocus());
    wrapper.update();

    act(() => Input.props().onChange({ target: { value: '1' } }));
    wrapper.update();

    act(() => {
      wrapper.find('FloatingPortal').find('#option_0').at(0).simulate('click'); // 12:00 AM
    });
    wrapper.update();

    expect(wrapper.find('Input').props().hasError).toBe(false);
  });

  it('should select the clicked time on dropdown', () => {
    const onChangeCb = jest.fn();
    const wrapper = setupMount({
      onChange: onChangeCb,
    });

    act(() => wrapper.find('Input').props().onFocus());
    wrapper.update();

    act(() =>
      wrapper
        .find('Input')
        .props()
        .onChange({ target: { value: '1' } }),
    );
    wrapper.update();
    act(() => {
      wrapper.find('FloatingPortal').find('#option_39').at(0).simulate('click'); // 9:45 AM
    });
    wrapper.update();

    // Dropdown should be closed
    expect(wrapper.find('FloatingPortal')).toHaveLength(0);
    // Callback should be called with clicked time
    expect(onChangeCb).toHaveBeenCalledWith({
      hours: 9,
      minutes: 45,
      seconds: 0,
    });
  });

  it('should set the left icon to input if the `isLeftIconVisible` is `true`', () => {
    render(<TimeSelector isLeftIconVisible />);

    const { container } = render(<ClockIcon />);

    // first element is the left icon, match the correct Clock icon
    expect(screen.getAllByRole('presentation')[0].toString()).toMatch(
      container.firstChild.toString(),
    );
  });

  it('should select the correct option using only keyboard', () => {
    jest.resetAllMocks();
    jest.clearAllMocks();

    const onChangeCb = jest.fn();

    render(
      <TimeSelector theme={theme} testId="TESTING" onChange={onChangeCb} />,
    );

    const input = screen.getByTestId('INPUT_FIELD');

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.keyDown(input, { keyCode: 40 }); // ArrowDown
    fireEvent.keyDown(input, { keyCode: 40 }); // ArrowDown
    fireEvent.keyDown(input, { keyCode: 13 }); // Enter

    expect(onChangeCb).toHaveBeenCalledWith({
      hours: 0,
      minutes: 30,
      seconds: 0,
    });
  });
});

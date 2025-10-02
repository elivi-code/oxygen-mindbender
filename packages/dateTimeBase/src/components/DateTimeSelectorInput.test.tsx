import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import DateTimeSelectorInput from './DateTimeSelectorInput';

jest.mock('../styled/StyledDateTimeSelectorInput', () => ({
  InputContainer: 'InputContainer',
  InputIcon: 'InputIcon',
  InputTitle: 'InputTitle',
}));

describe('Date Time Selector Input', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <ThemeProvider theme={theme}>
          <DateTimeSelectorInput theme={theme} {...props} />
        </ThemeProvider>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    const inputRef = React.createRef();

    wrapper = setup({
      inputRef,
      size: 'large',
      isDisabled: false,
      isValueSelected: false,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should change isPlaceholder prop for InputTitle to false when isValueSelected is true', () => {
    const inputRef = React.createRef();

    wrapper = setup({
      inputRef,
      size: 'large',
      isDisabled: false,
      isValueSelected: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should change iconLeft color when isValueSelected is true', () => {
    const inputRef = React.createRef();

    wrapper = setup({
      inputRef,
      size: 'large',
      isDisabled: false,
      isValueSelected: true,
    });
    expect(wrapper).toMatchSnapshot();
  });
});

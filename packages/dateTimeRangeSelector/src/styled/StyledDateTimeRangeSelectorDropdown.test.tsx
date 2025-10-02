import React from 'react';
import renderer from 'react-test-renderer';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import {
  Content,
  CalendarWrapper,
  CalendarContainer,
  DateTimeInputs,
  DateInput,
  TimeInput,
  EndTimeError,
  DateTimeInputContainer,
} from './StyledDateTimeRangeSelectorDropdown';

describe('<DateInput>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<DateInput theme={theme} {...props} />).toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<TimeInput>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TimeInput theme={theme} {...props} />).toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<DateTimeInputContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<DateTimeInputContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<EndTimeError>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<EndTimeError theme={theme} {...props} />).toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<DateTimeInputs>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<DateTimeInputs theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CalendarWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<CalendarWrapper theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CalendarContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<CalendarContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Content>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Content theme={theme} {...props} />).toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

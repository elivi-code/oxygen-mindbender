import React from 'react';
import renderer from 'react-test-renderer';

import { select as theme } from '@8x8/oxygen-constants';

import {
  IconLeftWrapper,
  CloseIcon,
  SelectContainer,
  AvatarIcon,
  CheckboxWrapper,
  OptionWrapper,
  OptionCheckboxLayer,
} from './Select';

describe('<SelectContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<SelectContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the select container', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<IconLeftWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<IconLeftWrapper theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the icon left wrapper', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CloseIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<CloseIcon theme={theme} {...props} />).toJSON();
  }

  it('should style correctly the close icon when input is not focused', () => {
    wrapper = setup({ isFocused: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the close icon when input is focused', () => {
    wrapper = setup({ isFocused: true });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<AvatarIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<AvatarIcon theme={theme} {...props} />);
  }

  it('should style correctly the avatar icon', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CheckboxWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<CheckboxWrapper theme={theme} {...props} />);
  }

  it('should style correctly the checkbox wrapper', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<OptionWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<OptionWrapper theme={theme} {...props} />);
  }

  it('should style correctly the option wrapper', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<OptionCheckboxLayer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<OptionCheckboxLayer theme={theme} {...props} />);
  }

  it('should style correctly the option checkbox layer when option not disabled', () => {
    wrapper = setup({ isDisabled: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the option checkbox layer when option disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});

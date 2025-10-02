import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {
  card as theme,
  cardNovo as cardNovoTheme,
  cardNovoDark as cardNovoDarkTheme,
} from '@8x8/oxygen-constants';

import Card from './Card';

describe('Card component', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(
      <Card theme={theme} testId="card-test-id" {...props} />,
    );
  }

  it('should match snapshot with Classic theme', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with Novo theme', () => {
    wrapper = setup({ theme: cardNovoTheme });
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with NovoDark theme', () => {
    wrapper = setup({ theme: cardNovoDarkTheme });
    expect(wrapper).toMatchSnapshot();
  });
});

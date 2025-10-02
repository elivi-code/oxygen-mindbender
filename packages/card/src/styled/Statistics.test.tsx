import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { statistics as theme } from '@8x8/oxygen-constants';

import {
  Container,
  StatisticsBox,
  StatisticsNumbers,
  StatisticsText,
} from './Statistics';

describe('<Container />', () => {
  function setup(props = {}) {
    return renderer.create(<Container testId="container-test-id" {...props} />);
  }

  it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
  });
});

describe('<StatisticsBox />', () => {
  function setup(props = {}) {
    return renderer.create(<StatisticsBox theme={theme} {...props} />);
  }

  it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
  });
});

describe('<StatisticsNumbers />', () => {
  function setup(props = {}) {
    return renderer.create(<StatisticsNumbers theme={theme} {...props} />);
  }

  it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('should render correctly when hasError ', () => {
    expect(setup({ hasError: true })).toMatchSnapshot();
  });
});

describe('<StatisticsText />', () => {
  function setup(props = {}) {
    return renderer.create(<StatisticsText theme={theme} {...props} />);
  }

  it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('should render correctly when hasError ', () => {
    expect(setup({ hasError: true })).toMatchSnapshot();
  });
});

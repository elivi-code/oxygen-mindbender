import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { tagNovo } from '@8x8/oxygen-constants';

import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('should render default styles', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={tagNovo}>
          <Wrapper />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('should render error styles when hasError prop is provided', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={tagNovo}>
          <Wrapper $hasError />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  describe('horizontal paddings', () => {
    it('should have left and right padding by default', () => {
      const wrapper = renderer
        .create(
          <ThemeProvider theme={tagNovo}>
            <Wrapper />
          </ThemeProvider>,
        )
        .toJSON();

      expect(wrapper).toHaveStyleRule('padding-left', '8px');
      expect(wrapper).toHaveStyleRule('padding-right', '8px');
    });
    it('should have no left padding when avatar is provided', () => {
      const wrapper = renderer
        .create(
          <ThemeProvider theme={tagNovo}>
            <Wrapper $avatar={{}} />
          </ThemeProvider>,
        )
        .toJSON();

      expect(wrapper).toHaveStyleRule('padding-left', '0');
    });
    it('should have no right padding when action is provided', () => {
      const wrapper = renderer
        .create(
          <ThemeProvider theme={tagNovo}>
            <Wrapper $action={() => {}} />
          </ThemeProvider>,
        )
        .toJSON();

      expect(wrapper).toHaveStyleRule('padding-right', '0');
    });
  });
});

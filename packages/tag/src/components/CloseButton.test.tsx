import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { tagNovo } from '@8x8/oxygen-constants';

import { variants } from '../constants';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
  it('should render default styles', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={tagNovo}>
          <CloseButton
            action={() => {}}
            isFocused={false}
            variant={variants.light}
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with focus', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={tagNovo}>
          <CloseButton action={() => {}} isFocused variant={variants.light} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

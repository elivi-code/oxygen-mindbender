import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import { toast, toastNovo } from '@8x8/oxygen-constants';

import {
  Title,
  Description,
  StructureWrapper,
  ContentWrapper,
} from './structure';

describe('Structure components', () => {
  it('Title should render correctly with styles', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toastNovo}>
          <Title />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('Description should render correctly with styles', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toastNovo}>
          <Description />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('StructureWrapper should render correctly with styles', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toast}>
          <StructureWrapper />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('StructureWrapper should render correctly with styles for Novo', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toastNovo}>
          <StructureWrapper />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('ContentWrapper should render correctly with styles', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toast}>
          <ContentWrapper />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('ContentWrapper should have text overflow attribute', () => {
    const { container } = render(<ContentWrapper />);

    expect(container.firstChild).toHaveStyle('overflow-wrap: anywhere');
  });
});

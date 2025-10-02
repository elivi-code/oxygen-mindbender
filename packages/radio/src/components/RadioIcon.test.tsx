import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeProvider } from 'styled-components';
import { radio, radioNovo, radioNovoDark } from '@8x8/oxygen-constants';
import RadioIcon from './RadioIcon';

jest.mock('../styled', () => ({
  ...jest.requireActual('../styled'),
  RadioIconClassic: 'RadioIconClassic',
}));
describe('<RadioIcon />', () => {
  let wrapper;
  const setup = (theme, props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <RadioIcon
            hasLabel={false}
            isChecked={false}
            isDisabled={false}
            isFocused={false}
            isHovered={false}
            isPressed={false}
            {...props}
          />
        </ThemeProvider>,
      )
      .toJSON();

  describe('with classic theme', () => {
    it('should render correctly with default props', () => {
      wrapper = setup(radio);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is checked', () => {
      wrapper = setup(radio, { isChecked: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is disabled', () => {
      wrapper = setup(radio, { isDisabled: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is focused', () => {
      wrapper = setup(radio, { isFocused: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is hovered ', () => {
      wrapper = setup(radio, { isHovered: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with Novo theme', () => {
    it('should render correctly with default props', () => {
      wrapper = setup(radioNovo);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is checked', () => {
      wrapper = setup(radioNovo, { isChecked: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is disabled', () => {
      wrapper = setup(radioNovo, { isDisabled: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is focused', () => {
      wrapper = setup(radioNovo, { isFocused: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is hovered ', () => {
      wrapper = setup(radioNovo, { isHovered: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with NovoDark theme', () => {
    it('should render correctly with default props', () => {
      wrapper = setup(radioNovoDark);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is checked', () => {
      wrapper = setup(radioNovoDark, { isChecked: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is disabled', () => {
      wrapper = setup(radioNovoDark, { isDisabled: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is focused', () => {
      wrapper = setup(radioNovoDark, { isFocused: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is hovered ', () => {
      wrapper = setup(radioNovoDark, { isHovered: true });
      expect(wrapper).toMatchSnapshot();
    });
  });
});

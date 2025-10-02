import React, { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import { classicTheme, novoTheme } from '@8x8/oxygen-constants';
import {
  set,
  reset,
  get,
  getById,
  getTestAttributes,
  withTheme,
  setLogger,
  withDeprecation,
  OxygenProvider,
} from '.';

const AVATAR_STACK_DEFAULT = {
  backgroundHover: '#F1F1F1',
  borderColorFocus: '#0056E0',
  borderColorHover: '#E0E0E0',
  counterBackground: '#141414',
  counterColor: '#FFFFFF',
};

describe('@8x8/oxygen-config', () => {
  beforeEach(() => {
    // need fresh module loaded since the congi object is a singleton kept in the file scope
    jest.resetModules();
  });
  describe('get/set/reset/getById', () => {
    it('should return the whole default config object', () => {
      // huge object, will only be using a snapshot to validate changes to the default config object
      expect(get()).toMatchSnapshot();
    });
    it('should update one specific part of the config object, and reset to get the original back', () => {
      // original object
      expect(get().avatarStack).toEqual(AVATAR_STACK_DEFAULT);
      set({
        avatarStack: {
          counterColor: 'red',
        },
      });
      expect(get().avatarStack).toEqual({
        ...AVATAR_STACK_DEFAULT,
        counterColor: 'red',
      });
      reset();
      // original object
      expect(get().avatarStack).toEqual(AVATAR_STACK_DEFAULT);
    });
    it('getById returns a copy of a property', () => {
      expect(getById('avatarStack')).toEqual(get().avatarStack);
    });
    it('set should work with the complete theme objects', () => {
      expect(get().avatar).toEqual(classicTheme.avatar);
      set(novoTheme);
      expect(get().avatar).toEqual(novoTheme.avatar);
    });
  });

  it('getTestAttributes returns 3 types of specfiying data-test-id', () => {
    const STRING = 'customData';

    expect(getTestAttributes(STRING)).toEqual({
      'test-id': STRING,
      'data-test-id': STRING,
      'data-id': STRING,
    });
  });

  describe('withTheme', () => {
    it('should give the wrapped component a theme', () => {
      const Component = jest.mocked(
        jest.fn(({ children, ...rest }) => <div {...rest}>{children}</div>),
      );
      const WrappedComponent = withTheme(Component, 'avatarStack');

      render(<WrappedComponent />);
      expect(Component).toHaveBeenCalledWith(
        expect.objectContaining({ theme: AVATAR_STACK_DEFAULT }),
        {},
      );
    });
    it('should enhance the default theme', () => {
      const CUSTOM_THEME = { backgroundHover: 'green' };
      const Component = jest.mocked(
        jest.fn(({ children, ...rest }) => <div {...rest}>{children}</div>),
      );
      const WrappedComponent = withTheme(Component, 'avatarStack');

      render(<WrappedComponent theme={CUSTOM_THEME} />);
      expect(Component).toHaveBeenCalledWith(
        expect.objectContaining({
          theme: { ...AVATAR_STACK_DEFAULT, ...CUSTOM_THEME },
        }),
        {},
      );
    });
    it('should expose the combined types of the WrappedComponent + theme', () => {
      // the types on the `withTheme` fn are somewhat flawed, so this test is not complete
      type ComponentProps = {
        prop1?: string;
        children?: React.ReactNode;
      };
      const Component: FunctionComponent<ComponentProps> = ({
        prop1,
        children,
        ...rest
      }) => (
        <div {...rest}>
          {prop1};{children}
        </div>
      );
      const WrappedComponent = withTheme(Component, 'avatarStack');

      render(
        <WrappedComponent
          data-test-id="child"
          prop1="valueProp1"
          theme={{ borderColorFocus: 'red' }}
        />,
      );
      expect(screen.queryByTestId('child')).toBeInTheDocument();
    });
    it('takes the theme from the context', () => {
      const Component = jest.mocked(
        jest.fn(({ children, ...rest }) => <div {...rest}>{children}</div>),
      );
      const WrappedComponent = withTheme(Component, 'avatarStack');

      render(
        <OxygenProvider>
          <WrappedComponent />
        </OxygenProvider>,
      );
      expect(Component).toHaveBeenCalledWith(
        expect.objectContaining({ theme: AVATAR_STACK_DEFAULT }),
        {},
      );
    });
    it('enhances the theme from the context through globalComponentsOverride', () => {
      const Component = jest.mocked(
        jest.fn(({ children, ...rest }) => <div {...rest}>{children}</div>),
      );
      const WrappedComponent = withTheme(Component, 'avatarStack');

      render(
        <OxygenProvider
          globalComponentsOverride={{ avatarStack: { backgroundHover: 'red' } }}
        >
          <WrappedComponent />
        </OxygenProvider>,
      );
      expect(Component).toHaveBeenCalledWith(
        expect.objectContaining({
          theme: { ...AVATAR_STACK_DEFAULT, backgroundHover: 'red' },
        }),
        {},
      );
    });
  });

  describe('withDeprecation', () => {
    it('should wrap the component and still render the original', () => {
      type ComponentProps = {
        prop1?: string;
        children?: React.ReactNode;
      };
      const Component: FunctionComponent<ComponentProps> = ({
        prop1,
        children,
        ...rest
      }) => (
        <div data-test-id="child" {...rest}>
          {prop1};{children}
        </div>
      );
      const WrappedComponent = withDeprecation(Component, 'test');

      render(<WrappedComponent prop1="valueProp1">custom</WrappedComponent>);
      expect(screen.queryByTestId('child')).toBeInTheDocument();
    });
    it('should use console.warn by default', () => {
      const spy = jest.spyOn(console, 'warn');
      /* require module here so the spy is set before the module is loaded */
      // eslint-disable-next-line
      const { withDeprecation: localWithDeprecation } = require('.');
      const Component = () => <div>custom</div>;

      localWithDeprecation(Component, 'test');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        'test; Please check Oxygen changelog for more info: https://github.com/8x8/oxygen/blob/master/CHANGELOG.md',
      );
    });
    it('setLogger should allow updating the deprecation logger', () => {
      const spy = jest.fn();

      setLogger(spy);
      const Component = () => <div>custom</div>;

      withDeprecation(Component, 'test');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        'test; Please check Oxygen changelog for more info: https://github.com/8x8/oxygen/blob/master/CHANGELOG.md',
      );
    });
  });
});

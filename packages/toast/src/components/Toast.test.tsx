import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';

import Toast from './Toast';

const getWrapper = props => shallow(<Toast {...props} />);

describe('<Toast />', () => {
  it('renders a toast', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('renders a toast with content nodes', () => {
    const wrapper = shallow(
      <Toast>
        <strong>Bold toast message</strong>
        <em>Emphasized toast message</em>
      </Toast>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Classic Toast', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('renders a Novo Toast', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('toast without close action', () => {
    expect(getWrapper({ hideCloseControl: true })).toMatchSnapshot();
  });

  it('renders toast with a custom closeButtonLabel', () => {
    render(<Toast closeButtonLabel="Dismiss" />);
    expect(screen.getByTestId('TOAST_CLOSE_ICON')).toHaveAttribute(
      'aria-label',
      'Dismiss',
    );
  });

  it('matches snapshot for toast with a custom closeButtonLabel', () => {
    expect(getWrapper({ closeButtonLabel: 'Dismiss' })).toMatchSnapshot();
  });

  it('renders toast with the default closeButtonLabel when none is provided', () => {
    render(<Toast />);
    expect(screen.getByTestId('TOAST_CLOSE_ICON')).toHaveAttribute(
      'aria-label',
      'Close',
    );
  });

  it('matches snapshot for toast with default closeButtonLabel', () => {
    const wrapper = getWrapper();
    const toastTemplate = wrapper.dive().find('ToastTemplate');

    expect(toastTemplate.prop('closeButtonLabel')).toBe('Close');
    expect(wrapper).toMatchSnapshot();
  });

  it('toast with actions', () => {
    expect(
      getWrapper({
        actions: [
          { title: 'Link 1', callback: () => {}, id: 1 },
          { title: 'Link 2', callback: () => {}, id: 2 },
        ],
      }),
    ).toMatchSnapshot();
  });

  it.each`
    type         | ariaLive       | role
    ${'success'} | ${'polite'}    | ${'status'}
    ${'warning'} | ${'assertive'} | ${'alert'}
    ${'error'}   | ${'assertive'} | ${'alert'}
    ${'info'}    | ${'polite'}    | ${'status'}
    ${'loading'} | ${'polite'}    | ${'status'}
  `(
    'each toast type has the correct role and aria-live values',
    ({ ariaLive, role, type }) => {
      render(<Toast testId={type} type={type} />);
      expect(
        screen.getByTestId(`TOAST_${type.toString().toUpperCase()}_CONTAINER`),
      ).toHaveAttribute('aria-live', ariaLive);
      expect(
        screen.getByTestId(`TOAST_${type.toString().toUpperCase()}_CONTAINER`),
      ).toHaveAttribute('role', role);
    },
  );
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import { breadcrumbs as theme } from '@8x8/oxygen-constants';
import BreadcrumbsSeparator from './BreadcrumbsSeparator';

describe('<BreadcrumbsSeparator>', () => {
  it('should render correctly', () => {
    const wrapper = renderer
      .create(<BreadcrumbsSeparator theme={theme} />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

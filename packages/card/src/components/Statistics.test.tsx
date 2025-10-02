import React from 'react';
import renderer from 'react-test-renderer';

import Statistics from './Statistics';

jest.mock('../styled/Statistics', () => ({
  Container: 'Container',
  StatisticsBox: 'StatisticsBox',
  StatisticsText: 'StatisticsText',
  StatisticsNumbers: 'StatisticsNumbers',
}));

describe('Statistics', () => {
  const mockedData = [
    {
      statistics: '10/50',
      label: 'Used items',
    },
    {
      statistics: '80',
      label: 'Total items',
      hasError: true,
    },
  ];

  function setup(props = {}) {
    return renderer
      .create(<Statistics data={mockedData} {...props} />)
      .toJSON();
  }

  it('should render correctly with default props', () => {
    expect(setup()).toMatchSnapshot();
  });
});

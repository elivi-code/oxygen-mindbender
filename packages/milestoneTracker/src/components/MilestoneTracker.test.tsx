import React from 'react';
import renderer from 'react-test-renderer';

import { milestoneTracker as theme } from '@8x8/oxygen-constants';

import MilestoneTracker from './MilestoneTracker';

describe('<MilestoneTracker />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<MilestoneTracker theme={theme} {...props} />)
      .toJSON();
  }

  it('should render the MilestoneTracker component with roads between milestones', () => {
    wrapper = setup({
      milestones: [
        {
          description: 'mockedDescription',
          isCompleted: true,
          id: 'description-only-milestone',
        },
        {
          title: 'mockedTitle',
          description: 'mockedDescription',
          id: 'uncompleted-milestone',
          isCompleted: false,
        },
        {
          title: 'mockedTitle',
          description: 'mockedDescription',
          id: 'completed-milestone',
          isCompleted: false,
        },
        {
          title: 'mockedTitle',
          id: 'title-only-milestone',
        },
        {
          id: 'empty-milestone',
        },
      ],
      size: 48,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the MilestoneTracker component without roads between milestones', () => {
    wrapper = setup({
      milestones: [
        {
          title: 'mockedTitle',
          description: 'mockedDescription',
          id: 'uncompleted-milestone',
          isCompleted: true,
        },
        {
          title: 'mockedTitle',
          description: 'mockedDescription',
          id: 'completed-milestone',
        },
        {
          title: 'mockedTitle',
          id: 'title-only-milestone',
        },
        {
          id: 'empty-milestone',
        },
      ],
      size: 22,
      showRoads: false,
    });
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import { milestoneTracker as theme } from '@8x8/oxygen-constants';

import {
  StyledBullet,
  StyledRoad,
  StyledMilestoneTrackerContainer,
  StyledRow,
  StyledMilestoneContainer,
  StyledGraphicContainer,
  StyledBulletContainer,
  StyledTitle,
  StyledDescription,
} from './MilestoneTracker';

describe('<StyledRoad>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<StyledRoad theme={theme} {...props} />).toJSON();
  }

  it('should style correctly a completed road', () => {
    wrapper = setup({ isCompleted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly an uncompleted road', () => {
    wrapper = setup({ isCompleted: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly a visible road', () => {
    wrapper = setup({ showRoads: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly an invisible road', () => {
    wrapper = setup({ showRoads: false });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledBullet>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledBullet theme={theme} size={48} {...props} />)
      .toJSON();
  }

  it('should style correctly the bullet for a completed milestone', () => {
    wrapper = setup({ isCompleted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the bullet for an uncompleted milestone', () => {
    wrapper = setup({ isCompleted: false });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledMilestoneTrackerContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledMilestoneTrackerContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the milestone tracker container', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledMilestoneContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledMilestoneContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the milestone container', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledRow>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<StyledRow theme={theme} {...props} />).toJSON();
  }

  it('should style correctly a row with onClick', () => {
    wrapper = setup({ onClick: () => false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly a row without onClick', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledGraphicContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledGraphicContainer theme={theme} size={48} {...props} />)
      .toJSON();
  }

  it('should style correctly the graphics container', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledBulletContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledBulletContainer theme={theme} size={48} {...props} />)
      .toJSON();
  }

  it('should style correctly the bullet container for a milestone with inner description', () => {
    wrapper = setup({ hasInnerDescription: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the bullet container for a milestone without inner description', () => {
    wrapper = setup({ hasInnerDescription: false });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledTitle>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<StyledTitle theme={theme} {...props} />).toJSON();
  }

  it('should style correctly the title for a completed milestone', () => {
    wrapper = setup({ isCompleted: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the title for an uncompleted milestone', () => {
    wrapper = setup({ isCompleted: false });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<StyledDescription>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<StyledDescription theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the description', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

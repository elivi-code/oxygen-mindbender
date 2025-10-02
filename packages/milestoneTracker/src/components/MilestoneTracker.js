import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';

import milestoneTrackerUtils from '../utils/utils';

import {
  StyledMilestoneTrackerContainer,
  StyledMilestoneContainer,
  StyledGraphicContainer,
  StyledBulletContainer,
  StyledTitle,
  StyledDescription,
  StyledRow,
  StyledBullet,
  StyledRoad,
} from '../styled/MilestoneTracker';

/**
 * Renders the milestone tracker
 *
 * @param {Array} milestones - array of data for each milestone
 * @param {Number} size - size of the milestone bullet
 * @param {Boolean} showRoads - display roads between milestone bullets
 * @param {Object} theme - Milestone tracker theme
 * @param {Object} rest - rest of the props
 *
 * @return {JSX}
 */
const MilestoneTracker = ({ milestones, size, showRoads, theme, ...rest }) => {
  /**
   * Renders each milestone
   *
   * @return {Array} - array of JSX content for each milestone
   */
  const renderMilestones = () =>
    milestones.map((milestone, index) => {
      const {
        testId = 'MILESTONE',
        id,
        description,
        isCompleted,
        title,
        onClick,
      } = milestone;
      const hasInnerDescription =
        milestoneTrackerUtils.hasInnerDescription(milestone);
      const isFirst = index === 0;
      const isLast = index + 1 === milestones.length;

      return (
        <StyledMilestoneContainer
          {...rest}
          {...getTestAttributes(testId)}
          key={id}
        >
          {!isFirst && (
            <StyledRow>
              <StyledGraphicContainer size={size}>
                <StyledRoad
                  {...getTestAttributes(`${testId}_UPPER_ROAD`)}
                  isCompleted={isCompleted}
                  showRoads={showRoads}
                />
              </StyledGraphicContainer>
            </StyledRow>
          )}
          <StyledRow onClick={onClick}>
            <StyledBulletContainer
              hasInnerDescription={hasInnerDescription}
              size={size}
            >
              {!isFirst && (
                <StyledRoad
                  {...getTestAttributes(`${testId}_UPPER_BULLET_ROAD`)}
                  isCompleted={isCompleted}
                  showRoads={showRoads}
                />
              )}
              <StyledBullet
                {...getTestAttributes(`${testId}_BULLET`)}
                isCompleted={isCompleted}
                size={size}
              >
                {milestoneTrackerUtils.getMilestoneContent(milestone)}
              </StyledBullet>
              {!isLast && (
                <StyledRoad
                  {...getTestAttributes(`${testId}_BULLET_ROAD`)}
                  isCompleted={isCompleted}
                  showRoads={showRoads}
                />
              )}
            </StyledBulletContainer>
            <StyledTitle
              {...getTestAttributes(`${testId}_TITLE`)}
              isCompleted={isCompleted}
            >
              {title}
            </StyledTitle>
          </StyledRow>
          <StyledRow>
            <StyledGraphicContainer size={size}>
              {!isLast && (
                <StyledRoad
                  {...getTestAttributes(`${testId}_ROAD`)}
                  isCompleted={isCompleted}
                  showRoads={showRoads}
                />
              )}
            </StyledGraphicContainer>
            <StyledDescription {...getTestAttributes(`${testId}_DESCRIPTION`)}>
              {!hasInnerDescription && description}
            </StyledDescription>
          </StyledRow>
        </StyledMilestoneContainer>
      );
    });

  return (
    <ThemeProvider theme={theme}>
      <StyledMilestoneTrackerContainer>
        {renderMilestones()}
      </StyledMilestoneTrackerContainer>
    </ThemeProvider>
  );
};

MilestoneTracker.propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      testId: PropTypes.string,
      onClick: PropTypes.func,
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.node,
      isCompleted: PropTypes.bool,
      icon: PropTypes.node,
    }),
  ),
  size: PropTypes.number,
  theme: PropTypes.object,
  showRoads: PropTypes.bool,
};

MilestoneTracker.defaultProps = {
  milestones: [],
  size: 48,
  showRoads: true,
};

export default withTheme(MilestoneTracker, 'milestoneTracker');

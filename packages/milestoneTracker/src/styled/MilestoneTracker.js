import styled from 'styled-components';

const StyledRoad = styled.div`
  flex: 1;
  max-width: ${({ theme }) => theme.roadWidth};
  min-width: ${({ theme }) => theme.roadWidth};
  min-height: ${({ theme }) => `calc(${theme.roadMinHeight} / 2)`};
  background-color: ${({ isCompleted, theme }) =>
    isCompleted
      ? theme.roadBackgroundColorCompleted
      : theme.roadBackgroundColorUncompleted};
  margin: 0 auto;
  visibility: ${({ showRoads }) => (showRoads ? 'visible' : 'hidden')};
`;

const StyledBullet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ theme }) => theme.bulletBorderRadius};
  color: ${({ theme }) => theme.bulletColor};
  ${({ theme, isCompleted }) =>
    isCompleted
      ? `background-color: ${theme.bulletBackgroundColorCompleted}`
      : `background-color: ${theme.bulletBackgroundColorUncompleted};
         border: ${theme.bulletBorderSize} solid ${theme.bulletBorderColor};`}
`;

const StyledMilestoneTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const StyledMilestoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
  word-wrap: break-word;
  text-align: start;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  align-items: stretch;
`;

const StyledGraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  align-items: center;
  margin-right: ${({ theme }) => theme.milestoneProgressBarMargin};
`;

const StyledBulletContainer = styled(StyledGraphicContainer)`
  ${({ hasInnerDescription }) => (hasInnerDescription ? 'width: auto;' : '')}
  position: relative;
  justify-content: center;
  ${StyledRoad} {
    height: initial;
    &:first-child {
      top: 0;
      bottom: 50%;
    }
    &:last-child {
      top: 50%;
      bottom: 0;
    }
    position: absolute;
    left: ${({ theme, size }) =>
      size / 2 - parseInt(theme.roadWidth, 10) / 2}px;
  }
  ${StyledBullet} {
    ${({ theme, hasInnerDescription }) =>
      hasInnerDescription
        ? `width: auto;
           height: auto;
           padding:
            ${theme.bulletInnerDescriptionPaddingVertical}
            ${theme.bulletInnerDescriptionPaddingHorizontal};`
        : ''}
    position: relative;
    z-index: 1;
  }
`;

const StyledTitle = styled.div`
  color: ${({ theme, isCompleted }) =>
    isCompleted
      ? theme.milestoneTitleColorCompleted
      : theme.milestoneTitleColorUncompleted};
  font-weight: ${({ theme }) => theme.milestoneTitleFontWeight};
  font-size: ${({ theme }) => theme.milestoneTitleFontSize};
  align-self: center;
`;

const StyledDescription = styled.div`
  display: flex;
  align-self: flex-start;
  color: ${({ theme }) => theme.milestoneDescriptionFontColor};
  font-size: ${({ theme }) => theme.milestoneDescriptionFontSize};
`;

export {
  StyledBullet,
  StyledRoad,
  StyledMilestoneTrackerContainer,
  StyledRow,
  StyledMilestoneContainer,
  StyledGraphicContainer,
  StyledBulletContainer,
  StyledTitle,
  StyledDescription,
};

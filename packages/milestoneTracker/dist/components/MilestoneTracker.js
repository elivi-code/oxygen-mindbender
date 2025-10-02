var _excluded = ["milestones", "size", "showRoads", "theme"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import milestoneTrackerUtils from '../utils/utils';
import { StyledMilestoneTrackerContainer, StyledMilestoneContainer, StyledGraphicContainer, StyledBulletContainer, StyledTitle, StyledDescription, StyledRow, StyledBullet, StyledRoad } from '../styled/MilestoneTracker';

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
var MilestoneTracker = function MilestoneTracker(_ref) {
  var milestones = _ref.milestones,
    size = _ref.size,
    showRoads = _ref.showRoads,
    theme = _ref.theme,
    rest = _objectWithoutProperties(_ref, _excluded);
  /**
   * Renders each milestone
   *
   * @return {Array} - array of JSX content for each milestone
   */
  var renderMilestones = function renderMilestones() {
    return milestones.map(function (milestone, index) {
      var _milestone$testId = milestone.testId,
        testId = _milestone$testId === void 0 ? 'MILESTONE' : _milestone$testId,
        id = milestone.id,
        description = milestone.description,
        isCompleted = milestone.isCompleted,
        title = milestone.title,
        onClick = milestone.onClick;
      var hasInnerDescription = milestoneTrackerUtils.hasInnerDescription(milestone);
      var isFirst = index === 0;
      var isLast = index + 1 === milestones.length;
      return /*#__PURE__*/React.createElement(StyledMilestoneContainer, _extends({}, rest, getTestAttributes(testId), {
        key: id
      }), !isFirst && /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(StyledGraphicContainer, {
        size: size
      }, /*#__PURE__*/React.createElement(StyledRoad, _extends({}, getTestAttributes("".concat(testId, "_UPPER_ROAD")), {
        isCompleted: isCompleted,
        showRoads: showRoads
      })))), /*#__PURE__*/React.createElement(StyledRow, {
        onClick: onClick
      }, /*#__PURE__*/React.createElement(StyledBulletContainer, {
        hasInnerDescription: hasInnerDescription,
        size: size
      }, !isFirst && /*#__PURE__*/React.createElement(StyledRoad, _extends({}, getTestAttributes("".concat(testId, "_UPPER_BULLET_ROAD")), {
        isCompleted: isCompleted,
        showRoads: showRoads
      })), /*#__PURE__*/React.createElement(StyledBullet, _extends({}, getTestAttributes("".concat(testId, "_BULLET")), {
        isCompleted: isCompleted,
        size: size
      }), milestoneTrackerUtils.getMilestoneContent(milestone)), !isLast && /*#__PURE__*/React.createElement(StyledRoad, _extends({}, getTestAttributes("".concat(testId, "_BULLET_ROAD")), {
        isCompleted: isCompleted,
        showRoads: showRoads
      }))), /*#__PURE__*/React.createElement(StyledTitle, _extends({}, getTestAttributes("".concat(testId, "_TITLE")), {
        isCompleted: isCompleted
      }), title)), /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(StyledGraphicContainer, {
        size: size
      }, !isLast && /*#__PURE__*/React.createElement(StyledRoad, _extends({}, getTestAttributes("".concat(testId, "_ROAD")), {
        isCompleted: isCompleted,
        showRoads: showRoads
      }))), /*#__PURE__*/React.createElement(StyledDescription, getTestAttributes("".concat(testId, "_DESCRIPTION")), !hasInnerDescription && description)));
    });
  };
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(StyledMilestoneTrackerContainer, null, renderMilestones()));
};
MilestoneTracker.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.shape({
    testId: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.node,
    isCompleted: PropTypes.bool,
    icon: PropTypes.node
  })),
  size: PropTypes.number,
  theme: PropTypes.object,
  showRoads: PropTypes.bool
};
MilestoneTracker.defaultProps = {
  milestones: [],
  size: 48,
  showRoads: true
};
export default withTheme(MilestoneTracker, 'milestoneTracker');
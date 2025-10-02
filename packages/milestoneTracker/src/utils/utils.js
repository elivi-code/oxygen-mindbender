/**
 * Utils for the milestone tracker
 */
const service = {};

/**
 * Determines if a milestone has inner description
 *
 * @param {Object} milestone - milestone object
 *
 * @return {Boolean}
 */
service.hasInnerDescription = milestone => {
  const { description, icon, title } = milestone;

  return Boolean(description) && !icon && !title;
};

/**
 * Gets content to be rendered inside a milestone
 *
 * @param {Object} milestone - milestone object
 *
 * @return {String|JSX|Boolean}
 */
service.getMilestoneContent = milestone => {
  if (milestone.icon) {
    return milestone.icon;
  }

  if (service.hasInnerDescription(milestone)) {
    return milestone.description;
  }

  return false;
};

export default service;

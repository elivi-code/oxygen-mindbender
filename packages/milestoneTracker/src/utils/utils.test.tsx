import milestoneTrackerUtils from './utils';

describe('milestoneTrackerUtils', () => {
  let testSpecificMocks;

  beforeEach(() => {
    testSpecificMocks = {};
  });

  describe('hasInnerDescription', () => {
    beforeEach(() => {
      testSpecificMocks.milestone = {
        description: 'mockedDescription',
        icon: null,
        title: null,
      };
    });

    it('should return true if the milestone has description, but no icon or title', () => {
      expect(
        milestoneTrackerUtils.hasInnerDescription(testSpecificMocks.milestone),
      ).toBe(true);
    });

    it('should return false if the milestone has no description', () => {
      testSpecificMocks.milestone.description = null;
      expect(
        milestoneTrackerUtils.hasInnerDescription(testSpecificMocks.milestone),
      ).toBe(false);
    });

    it('should return false if the milestone has an icon', () => {
      testSpecificMocks.milestone.icon = 'mockedIcon';
      expect(
        milestoneTrackerUtils.hasInnerDescription(testSpecificMocks.milestone),
      ).toBe(false);
    });

    it('should return false if the milestone has a title', () => {
      testSpecificMocks.milestone.title = 'mockedTitle';
      expect(
        milestoneTrackerUtils.hasInnerDescription(testSpecificMocks.milestone),
      ).toBe(false);
    });
  });

  describe('getMilestoneContent', () => {
    beforeEach(() => {
      jest
        .spyOn(milestoneTrackerUtils, 'hasInnerDescription')
        .mockReturnValue(false);
      testSpecificMocks.milestone = {
        description: 'mockedDescription',
        icon: 'mockedIcon',
      };
    });

    afterEach(() => {
      milestoneTrackerUtils.hasInnerDescription.mockRestore();
    });

    it('should return milestone icon if there is an icon', () => {
      expect(
        milestoneTrackerUtils.getMilestoneContent(testSpecificMocks.milestone),
      ).toEqual(testSpecificMocks.milestone.icon);
    });

    it('should call hasInnerDescription with milestone object if there is no icon', () => {
      testSpecificMocks.milestone.icon = null;
      milestoneTrackerUtils.getMilestoneContent(testSpecificMocks.milestone);
      expect(milestoneTrackerUtils.hasInnerDescription).toHaveBeenCalledWith(
        testSpecificMocks.milestone,
      );
    });

    it('should return the description if the milestone has no icon and inner description', () => {
      testSpecificMocks.milestone.icon = null;
      milestoneTrackerUtils.hasInnerDescription.mockReturnValueOnce(true);
      expect(
        milestoneTrackerUtils.getMilestoneContent(testSpecificMocks.milestone),
      ).toEqual(testSpecificMocks.milestone.description);
    });

    it('should return false if the milestone has no icon and no inner description', () => {
      testSpecificMocks.milestone.icon = null;
      expect(
        milestoneTrackerUtils.getMilestoneContent(testSpecificMocks.milestone),
      ).toBe(false);
    });
  });
});

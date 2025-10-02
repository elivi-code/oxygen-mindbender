import React from 'react';
import pick from 'lodash.pick';
import { MenuItem } from '../Menu/MenuItem';
import { SubMenuItem } from '../Menu/SubMenuItem';
const createSubMenuItem = (subItem, index, testId) => {
    return (React.createElement(SubMenuItem, { key: index, testId: testId, ...pick(subItem, [
            'label',
            'isActive',
            'onTrigger',
            'link',
            'hasBadge',
            'badgeChildren',
            'badgeAriaLabel',
        ]) }));
};
export const createMenuItem = (mainItem, index, testId, position) => {
    const hasBadgeOnSubItems = mainItem.subItems?.some(subItem => subItem.hasBadge);
    return (React.createElement(MenuItem, { key: index, testId: testId, position: position, ...pick(mainItem, [
            'label',
            'icon',
            'isActive',
            'onTrigger',
            'link',
            'badgeChildren',
            'badgeAriaLabel',
        ]), hasBadge: hasBadgeOnSubItems || mainItem.hasBadge }, mainItem.subItems?.map((item, idx) => createSubMenuItem(item, idx, testId))));
};

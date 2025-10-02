import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  GearIcon,
  ChannelsIcon,
  DocumentFileIcon,
  UserGroupsLineIcon,
  MergeIcon,
  EvaluateIcon,
  LockIcon,
  UsersIcon,
  PhoneIcon,
  RingGroupIcon,
  ArchiveIcon,
  FeedbackIcon,
  FaqIcon,
} from '@8x8/oxygen-icon';

import { SidebarItemProps } from '@8x8/oxygen-sidebar-menu';

export interface ItemProps extends SidebarItemProps {
  link?: string;
  subItems?: ItemProps[];
}

export const getRoutes = (items: ItemProps[]) => {
  return items
    .flatMap(item => (item.subItems ? [item, ...item.subItems] : item))
    .map(item => item.link)
    .filter(Boolean);
};

const enhanceSubitemsWith = (root: string, suffix?: string) => {
  return [
    {
      label: `Channel one with longer text ${suffix ? ` ${suffix}` : ''}`,
      link: `${root}/channel_one${suffix ? `_${suffix}` : ''}`,
    },
    {
      label: `Channel two${suffix ? ` ${suffix}` : ''}`,
      link: `${root}/channel_two${suffix ? `_${suffix}` : ''}`,
    },
    {
      label: `Channel three${suffix ? ` ${suffix}` : ''}`,
      link: `${root}/channel_three${suffix ? `_${suffix}` : ''}`,
    },
  ];
};

const repeat = (times: number, item: ItemProps): ItemProps[] => {
  const arr = Array(times)
    .fill(item)
    .map((i, idx) => ({
      label: i.label + idx,
      link: i.link + idx,
      icon: i.icon,
    }));

  return arr;
};

export const items: ItemProps[] = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    link: '/home',
  },
  {
    label: 'Setup',
    icon: <GearIcon />,
    link: '/setup',
  },
  {
    label: 'Channels with longer text',
    icon: <ChannelsIcon />,
    link: '/channels',
    subItems: enhanceSubitemsWith('/channels'),
  },
  {
    label: 'short',
    icon: <ChannelsIcon />,
    link: '/short',
    subItems: enhanceSubitemsWith('/short'),
  },
  {
    label: 'Channels',
    icon: <DocumentFileIcon />,
    link: '/routing_scripts',
  },
  {
    label: 'Queues',
    icon: <UserGroupsLineIcon />,
    link: '/queues',
  },
  {
    label: 'Agents & Supervisors',
    icon: <UsersIcon />,
    link: '/agents_and_supervisors',
  },
  {
    label: 'Agent groups',
    icon: <RingGroupIcon />,
    link: '/agent_groups',
  },
  {
    label: 'Integration & CRM',
    icon: <MergeIcon />,
    link: '/integration_and_crm',
  },
  {
    label: 'Billing',
    icon: <EvaluateIcon />,
    link: '/billing',
  },
  {
    label: 'Security',
    icon: <LockIcon />,
    link: '/security',
  },
  ...repeat(10, {
    label: 'Phone System',
    icon: <PhoneIcon />,
    link: '/phone-system',
  }),
  // footer items
  {
    label: 'Audit log events',
    icon: <ArchiveIcon />,
    link: '/audit-log-events',
    isFooter: true,
  },
  {
    label: 'Send feedback',
    icon: <FeedbackIcon />,
    isFooter: true,
  },
  {
    label: 'Help',
    icon: <FaqIcon />,
    link: '/help',
    isFooter: true,
  },
];

export const useSidebar = ({
  action,
  initialRoute,
  badgeOnMenuLinks,
  badgeChildren,
  badgeAriaLabel,
}: {
  action: any;
  initialRoute: string;
  badgeOnMenuLinks?: string;
  badgeChildren?: string;
  badgeAriaLabel?: string;
}) => {
  const [currentRoute, setCurrentRoute] = useState('');
  const badgeOnMenuLinksArray = (badgeOnMenuLinks || '')
    .split(',')
    .map(link => link.trim());

  useEffect(() => {
    if (initialRoute) {
      setCurrentRoute(initialRoute);
    }
  }, [initialRoute]);

  // update storybook action when the route changes
  useEffect(() => {
    action(currentRoute);
  }, [action, currentRoute]);

  const createOnTrigger = (item: ItemProps) => () => {
    if (item.link) {
      setCurrentRoute(item.link);
    }
    action('onTrigger')(item);
  };

  // set onTrigger, isActive for items
  const sidebarItems: SidebarItemProps[] = items.map(item => {
    const { label, icon, isFooter, subItems, link } = item;
    const hasBadge = link && badgeOnMenuLinksArray.includes(link);

    return {
      label,
      link,
      icon,
      isFooter,
      hasBadge,
      badgeChildren,
      badgeAriaLabel,
      subItems: subItems?.map(subItem => ({
        ...subItem,
        onTrigger: createOnTrigger(subItem),
        isActive: subItem.link === currentRoute,
        hasBadge: subItem.link && badgeOnMenuLinksArray.includes(subItem.link),
        badgeChildren,
        badgeAriaLabel,
      })),
      onTrigger: createOnTrigger(item),
      isActive: item.link === currentRoute,
    };
  });

  console.log('sidebarItems', sidebarItems);

  return { sidebarItems, setCurrentRoute };
};

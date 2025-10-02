import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import Avatar from './Avatar';
import { StyledAvatarStackButton, StyledAvatarStackDiv, } from '../styled/StyledAvatarStack';
const noOp = () => { };
const avatarProps = {
    hasBorder: true,
    onClick: null,
    onEdit: noOp,
    showEditOverlay: false,
    size: 'xsmall',
    style: {
        marginLeft: '-16px',
        zIndex: 1,
    },
    userStatus: null,
};
const formatExtraCountLabel = (number) => {
    if (number > 99) {
        return '9 9 +';
    }
    return ['+'].concat(String(number).split('')).join(' ');
};
const AvatarStack = ({ avatars, children, maxAvatars = 4, onClick, testId = 'AVATAR_STACK', theme = {}, ...rest }) => {
    // if "avatars" are provided as a prop, all children are ignored and
    // the Avatar components are created from the provided data
    const validItems = avatars ||
        React.Children.toArray(children)
            .filter(React.isValidElement)
            .filter(({ type }) => type === Avatar);
    // count to show more than max. remove 1 extra item since that space is taken up by the overflow item
    const extraCount = validItems.length - maxAvatars + 1;
    // if extra count is shown
    const hasExtra = extraCount - 1 > 0;
    // if extra count is shown, remove extra children
    const itemToRender = hasExtra
        ? validItems.slice(0, maxAvatars - 1)
        : validItems;
    // if a click event is registered allow the element to be focused
    const stackProps = onClick ? { onClick } : { as: 'div' };
    const StyledContainer = onClick
        ? StyledAvatarStackButton
        : StyledAvatarStackDiv;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(StyledContainer, { ...stackProps, ...getTestAttributes(testId), ...rest },
            itemToRender.map((item, index) => {
                const props = {
                    ...avatarProps,
                    ...(index === 0 && {
                        style: {
                            marginLeft: '0',
                        },
                    }),
                    key: index,
                };
                if (avatars) {
                    // eslint-disable-next-line react/jsx-key
                    return React.createElement(Avatar, { ...item, ...props });
                }
                if (React.isValidElement(item)) {
                    return React.cloneElement(item, props);
                }
                return null;
            }),
            hasExtra ? (React.createElement(Avatar, { name: formatExtraCountLabel(extraCount), key: "extra", maxInitials: 3, ...avatarProps, theme: {
                    avatarBackgroundColor: theme.counterBackground,
                    initialsColor: theme.counterColor,
                } })) : null)));
};
export default withTheme(AvatarStack, 'avatarStack');

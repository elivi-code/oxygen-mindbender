import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';
import { AlertBannerContainer } from '../styled/AlertBannerContainer';
import { AlertBannerWrapper } from '../styled/AlertBannerWrapper';
import { ContentWrapper } from '../styled/ContentWrapper';
import { ContainerStyle } from '../styled/ContainerStyle';
import { Text } from '../styled/Text';
import { Icon } from '../styled/Icon';
const AlertBanner = ({ children, actionText, actionCallback, theme, testId, ...rest }) => (React.createElement(ThemeProvider, { theme: theme },
    React.createElement(ContainerStyle, null),
    React.createElement(AlertBannerContainer, { ...rest, ...getTestAttributes(testId) },
        React.createElement(AlertBannerWrapper, { className: "alert-banner-wrapper" },
            React.createElement(ContentWrapper, null,
                React.createElement(Icon, { color: theme.iconColor, size: 20, "aria-label": "!" }),
                React.createElement(Text, null, children)),
            actionText && actionCallback && (React.createElement(Button, { variant: "secondary", size: "small", onClick: actionCallback, className: "alert-banner-button", testId: `${testId}_button` }, actionText))))));
AlertBanner.propTypes = {
    children: PropTypes.node.isRequired,
    actionText: PropTypes.string,
    actionCallback: PropTypes.func,
    theme: PropTypes.object,
    testId: PropTypes.string,
};
AlertBanner.defaultProps = {
    actionText: undefined,
    actionCallback: undefined,
    theme: {},
    testId: 'alertBanner',
};
export default withTheme(AlertBanner, 'alertBanner');

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import Button from '@8x8/oxygen-button';

import type { AlertBannerProps } from '../types';

import { AlertBannerContainer } from '../styled/AlertBannerContainer';
import { AlertBannerWrapper } from '../styled/AlertBannerWrapper';
import { ContentWrapper } from '../styled/ContentWrapper';
import { ContainerStyle } from '../styled/ContainerStyle';
import { Text } from '../styled/Text';
import { Icon } from '../styled/Icon';

const AlertBanner: React.FunctionComponent<AlertBannerProps> = ({
  children,
  actionText,
  actionCallback,
  theme,
  testId,
  ...rest
}) => (
  <ThemeProvider theme={theme}>
    <ContainerStyle />
    <AlertBannerContainer {...rest} {...getTestAttributes(testId)}>
      <AlertBannerWrapper className="alert-banner-wrapper">
        <ContentWrapper>
          <Icon color={theme.iconColor} size={20} aria-label="!" />
          <Text>{children}</Text>
        </ContentWrapper>
        {actionText && actionCallback && (
          <Button
            variant="secondary"
            size="small"
            onClick={actionCallback}
            className="alert-banner-button"
            testId={`${testId}_button`}
          >
            {actionText}
          </Button>
        )}
      </AlertBannerWrapper>
    </AlertBannerContainer>
  </ThemeProvider>
);

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

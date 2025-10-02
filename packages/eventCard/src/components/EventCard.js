// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { withTheme, getTestAttributes } from '@8x8/oxygen-config';

import { AvatarStack } from '@8x8/oxygen-avatar';
import {
  AvatarWrapper,
  IconContainer,
  Text,
  TextOverflow,
  Title,
} from '../styled/Content';
import { Layout, Wrapper } from '../styled/Layout';

const EventCard = ({
  icon: Icon,
  avatars,
  title,
  text,
  theme,
  testId,
  ...rest
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper {...getTestAttributes(testId)} {...rest}>
        <Layout>
          <IconContainer {...getTestAttributes(`${testId}_ICON`)}>
            {Icon && <Icon size={20} color={theme.iconColor} />}
          </IconContainer>
          <Text>
            <TextOverflow>
              {title && (
                <Title {...getTestAttributes(`${testId}_TITLE`)}>{title}</Title>
              )}
              {title && text && <>&nbsp;•&nbsp;</>}
              {text && (
                <span {...getTestAttributes(`${testId}_TEXT`)}>{text}</span>
              )}
            </TextOverflow>
          </Text>
          {avatars && (
            <AvatarWrapper>
              <AvatarStack avatars={avatars} />
            </AvatarWrapper>
          )}
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
};

const typographyPropTypes = PropTypes.shape({
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  fontWeight: PropTypes.number,
  letterSpacing: PropTypes.string,
});

EventCard.propTypes = {
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
      isGroup: PropTypes.bool,
    }),
  ),
  icon: PropTypes.node,
  testId: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.shape({
    background: PropTypes.string,
    backgroundHover: PropTypes.string,
    borderColor: PropTypes.string,
    borderFocusColor: PropTypes.string,
    gap: PropTypes.string,
    iconBackground: PropTypes.string,
    iconColor: PropTypes.string,
    shadow: PropTypes.string,
    text: typographyPropTypes,
    textColor: PropTypes.string,
    title: typographyPropTypes,
    titleColor: PropTypes.string,
  }),
};
EventCard.defaultProps = {
  avatars: undefined,
  icon: undefined,
  testId: 'EVENT_CARD',
  text: undefined,
  theme: {},
  title: undefined,
};

export default withTheme(EventCard, 'eventCard');

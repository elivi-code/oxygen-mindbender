import styled from 'styled-components';
import { color, size, spacing } from '@8x8/oxygen-constants';
import { FaceSmileIcon } from '@8x8/oxygen-icon';
import { Header } from '@8x8/oxygen-card';

const StyledHeader = styled(Header)`
  margin: ${spacing.lg} 0 ${spacing.md};
`;

const IconSeparatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(FaceSmileIcon).attrs(() => ({
  color: color.steel700,
  'data-test-id': 'CARD_ICON',
}))`
  margin: 0 ${spacing.sm};
  height: ${size.medium};
`;

export { IconSeparatorWrapper, StyledHeader, StyledIcon };

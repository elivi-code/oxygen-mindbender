import React from 'react';

import { getTestAttributes } from '@8x8/oxygen-config';
import Tooltip, { orientation } from '@8x8/oxygen-tooltip';
import { InfoCircleIcon } from '@8x8/oxygen-icon';
import { LabelTheme, showOn } from '../types';
import IconButtonWrapper from '../styled/IconButtonWrapper';

interface Props {
  theme?: LabelTheme;
  testId?: string;
  infoBoxText: React.ReactNode;
  infoBoxShowOn?: keyof typeof showOn;
  infoBoxButtonLabel?: string;
}

type InternalProps = Props & {
  theme: LabelTheme;
};

export const Icon = (props: InternalProps) => {
  const propsWithDefault: InternalProps = {
    testId: 'LABEL',
    ...props,
  };
  const { theme, testId, infoBoxText, infoBoxShowOn, infoBoxButtonLabel } =
    propsWithDefault;

  const iconButtonProps = {
    ...(infoBoxButtonLabel && { 'aria-label': infoBoxButtonLabel }),
  };

  return (
    <Tooltip
      title={infoBoxText}
      orientation={orientation.top}
      showOn={infoBoxShowOn}
      includeWrapper={false}
    >
      <IconButtonWrapper {...iconButtonProps}>
        <InfoCircleIcon
          {...getTestAttributes(`${testId}_ICON`)}
          color={theme.iconColor}
          size={theme.iconSize}
        />
      </IconButtonWrapper>
    </Tooltip>
  );
};

export default Icon;

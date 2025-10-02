import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { useAddIconColor } from '../../../hooks/useAddIconColor';

const StyledIconContainer = styled.div`
  width: 32px;
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
`;

export const IconContainer = ({ icon }: { icon?: ReactElement }) => {
  const coloredIcon = useAddIconColor(icon);

  return <StyledIconContainer>{coloredIcon}</StyledIconContainer>;
};

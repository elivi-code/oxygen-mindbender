import React from 'react';
import styled from 'styled-components';
import { ArrowDownIcon, ArrowUpIcon } from '@8x8/oxygen-icon';
import { useAddIconColor } from '../../../hooks/useAddIconColor';

const StyledArrowContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
  padding: 6px;
`;

interface Props {
  /** true means arrow up is rendered; false means arrow down */
  isUp: boolean;
}

export const Arrow: React.FC<Props> = ({ isUp }) => {
  const coloredIcon = useAddIconColor(
    isUp ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />,
  );

  return <StyledArrowContainer>{coloredIcon}</StyledArrowContainer>;
};

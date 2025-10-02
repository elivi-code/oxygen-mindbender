import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';

const { novo } = themes;

export const AlertBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${novo.spacing04} ${novo.spacing05};
  gap: ${novo.spacing05};
`;

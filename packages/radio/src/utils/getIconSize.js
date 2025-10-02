import { css } from 'styled-components';

const getIconSize = ({ theme, hasLabel }) => css`
  height: ${theme.iconSize};
  min-height: ${theme.iconSize};
  width: ${theme.iconSize};
  min-width: ${theme.iconSize};
  margin-right: ${hasLabel && theme.iconSpacing};
`;

export default getIconSize;

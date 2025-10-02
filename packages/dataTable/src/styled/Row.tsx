import { DefaultTheme, ThemedStyledProps } from 'styled-components';

const getBaseStyles = (props: ThemedStyledProps<unknown, DefaultTheme>) => `
  /* position relative for the sticky columns */
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  background-color: ${props.theme.ui06};
  min-width: 100%;
`;

export { getBaseStyles };

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';


interface AppTheme {
    theme: string,
  }
const styled = {
  default: styledComponents.default,
  css: styledComponents.css,
  createGlobalStyle: styledComponents.createGlobalStyle,
  keyframes: styledComponents.keyframes,
  ThemeProvider: styledComponents.ThemeProvider
} as ThemedStyledComponentsModule<AppTheme>;

const { css, createGlobalStyle, keyframes, ThemeProvider } = styled;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled.default;
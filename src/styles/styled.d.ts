import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    PRIMARY_BOX_COLOR: string;
  }
}

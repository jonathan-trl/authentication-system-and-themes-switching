import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      borderButtonSwitchTheme: string,
      colorDefault: string,
      colorError: string,
      green: string,
      grayPrimary: string,
      textPrimary: string,
    }
  }
}
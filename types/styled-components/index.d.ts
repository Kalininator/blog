import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      plainText: string;
      navBg: string;
      navText: string;
      title: string;
      detailText: string;
    };
  }
}

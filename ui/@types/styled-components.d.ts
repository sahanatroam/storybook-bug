import { defaultTheme } from '@dxweb/theme';

type DxDefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DxDefaultTheme {}
}

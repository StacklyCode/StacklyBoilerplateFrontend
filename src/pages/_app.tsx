import type { AppProps } from 'next/app';

import { ThemeDark, ThemeLight } from 'themes';
import {
  CreateThemes,
  DefaultLayout,
  GlobalStyles,
  ThemeContext
} from '@stacklycore/ui';

const themes = {
  light: ThemeLight,
  dark: ThemeDark
};

export const ThemesWithMachine = CreateThemes(themes);

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeContext themes={ThemesWithMachine}>
      <DefaultLayout>
        <GlobalStyles />
        <Component {...pageProps} key={router.pathname} />
      </DefaultLayout>
    </ThemeContext>
  );
};

export default MyApp;

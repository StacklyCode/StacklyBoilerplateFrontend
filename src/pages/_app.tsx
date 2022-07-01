import { FC } from 'react';
import { AppPropsWithLayout } from 'next/app';
import { ThemeLight } from '@Src/themes/light';
import { ThemeDark } from '@Src/themes/dark';
import { ThemeContext, CreateThemes, GlobalStyles } from '@stacklycore/ui';
import LayoutContext from '@Src/layouts';

const themes = {
  light: ThemeLight,
  dark: ThemeDark
};

export const ThemesWithMachine = CreateThemes(themes);

const _App: FC<AppPropsWithLayout> = ({ Component, pageProps, router }) => {
  return (
    <ThemeContext themes={ThemesWithMachine}>
      <LayoutContext layout={Component.layout}>
        <GlobalStyles />
        <Component {...pageProps} key={router.pathname} />
      </LayoutContext>
    </ThemeContext>
  );
};

export default _App;

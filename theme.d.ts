/* eslint-disable @typescript-eslint/no-empty-interface */

import { IPalette } from '@stacklycore/ui';

declare module '@emotion/react' {
  export interface Theme extends IPalette {}
}

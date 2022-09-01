import { FC } from 'react';
import { DefaultLayout } from '@stacklycore/ui';
import ContextAuth from 'hooks/contextAuth';

type Props = {
  role?: string | string[];
};

const Default: FC<Props> = ({ children }) => (
  <ContextAuth>
    <DefaultLayout>{children}</DefaultLayout>
  </ContextAuth>
);
export default Default;

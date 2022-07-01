import { FC } from 'react';
import { DefaultLayout } from '@stacklycore/ui';
import AuthContext from '@Src/hooks/authContext';

type Props = {
  role?: string | string[];
};

const Default: FC<Props> = ({ children }) => (
  <AuthContext>
    <DefaultLayout>{children}</DefaultLayout>
  </AuthContext>
);
export default Default;

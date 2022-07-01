import { FC, useMemo } from 'react';
import DEFAULT from './DEFAULT';

export const AllLayouts = {
  default: DEFAULT
};

export type LayoutType = {
  layout?: keyof typeof AllLayouts;
  role?: string | string[];
};

const LayoutContext: FC<LayoutType> = (props) => {
  const { layout, children, role } = props;
  const GetLayout = useMemo(() => AllLayouts[layout || 'default'], [layout]);
  return <GetLayout role={role}>{children}</GetLayout>;
};

export default LayoutContext;

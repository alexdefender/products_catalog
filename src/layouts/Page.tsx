import { ReactNode, FC, JSX } from 'react';

import { MAIN_CONTENT_ID } from '@constants';

type PageProps = {
  children: ReactNode;
};

const Page: FC<PageProps> = ({ children }): JSX.Element => <main id={MAIN_CONTENT_ID}>{children}</main>;

export default Page;

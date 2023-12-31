import { Fragment, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Brands from '../brands/brands';
import Carousels from '../carousels';
import Header from '../header';
import Meta from '../UI/meta';

type LayoutProvider = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const DefaultLayout = ({
  title = '',
  description = '',
  children,
}: LayoutProvider) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <Fragment>
      <Meta title={title} description={description} />
      <Header />
      {isHome && <Carousels />}
      <main id='main' className='py-3'>
        {children}
      </main>
      {isHome && <Brands />}
    </Fragment>
  );
};

export default DefaultLayout;

import Head from 'next/head';
import { useEffect } from 'react';
import Products from '../components/pages/Home/Products/Products';
import { useAppDispatch } from '../store/hooks';
import { getProducts } from '../store/products';
import { wrapper } from '../store/store';

// FIXME унифицировать title
const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <section>
      <Head>
        <title>Online shop | Home</title>
      </Head>
      <Products title='New In' />
    </section>
  )
};

export default HomePage;

HomePage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getProducts());
    }
);
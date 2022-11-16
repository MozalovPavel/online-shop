import Head from 'next/head';
import Products from '../components/pages/Home/Products/Products';
import { getProducts } from '../store/products';
import { wrapper } from '../store/store';
import styles from '../styles/pages/HomePage.module.css';

// FIXME унифицировать title
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online shop</title>
      </Head>
      <section className={styles.products}>
        <Products title='New In' />
      </section>
    </div>
  )
};

export default HomePage;

HomePage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getProducts());
    }
);
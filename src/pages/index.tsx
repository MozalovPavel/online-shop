import Head from 'next/head';
import ProductsList from '../components/ProductsList/ProductsList';
import { getProducts } from '../store/products';
import { wrapper } from '../store/store';
import styles from '../styles/pages/Home.module.css';

// FIXME унифицировать title
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online shop</title>
      </Head>
      <section className={styles.products}>
        <ProductsList title='New In' />
      </section>
    </div>
  )
};

export default Home;

Home.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getProducts());
    }
);
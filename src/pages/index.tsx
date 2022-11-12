import Head from 'next/head';
import ProductsList from '../components/ProductsList';
import styles from '../styles/pages/Home.module.css';

// FIXME унифицировать title
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online shop</title>
        <meta name='description' content='Online shop' />
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
      </Head>
      <section className={styles.products}>
        <ProductsList title='New In' />
      </section>
    </div>
  )
};

export default Home;
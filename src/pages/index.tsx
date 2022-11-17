import Head from "next/head";
import Products from "../components/pages/Home/Products/Products";
import { getProducts } from "../store/products";
import { wrapper } from "../store/store";

const HomePage = () => (
  <section>
    <Head>
      <title>Online shop | Home</title>
    </Head>
    <Products title="New In" />
  </section>
);

export default HomePage;

HomePage.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getProducts());
    }
);
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { productApi } from '../../api/ProductApi';
import Caption from '../../components/Caption';
import { IProduct, ProductSize } from '../../data/Product';
import Image from 'next/image';
import styles from '../../styles/pages/Product.module.css';
import ProductSizesSelector from '../../components/ProductSizes';
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addOrderToCart } from '../../store/cart';

interface IProductProps {
  product: IProduct;
}

const Product = (props: IProductProps) => {
  const { product: { id, name, description, image, special, sizes } } = props;

  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const handleChangeSize = (size: ProductSize) => {
    setCurrentSize(currentSize);
  };

  const dispatch = useAppDispatch();

  const onAddButtonClick = () => {
    dispatch(addOrderToCart({id, size: currentSize}));
  };

  return (
    <div>
      <Head>
        <title>Online shop | {name}</title>
      </Head>
      <section>
        <Caption>{name}</Caption>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image
              className={styles.image}
              src={image}
              alt={name}
              width={424}
              height={694}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.description}>
              {description}
            </div>
            <div className={styles.special}>
              {special}
            </div>
            <div>
              <ProductSizesSelector initialSize={currentSize} sizes={sizes} onChange={handleChangeSize} />
            </div>

            <button onClick={onAddButtonClick}>Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Product;

interface IProductPageParams extends ParsedUrlQuery {
  productId: string;
}

export const getServerSideProps: GetServerSideProps<IProductProps, IProductPageParams> = async ({ params }) => {
  const { productId } = params!;
  const { data: product } = await productApi.getProduct(productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product }
  };
};

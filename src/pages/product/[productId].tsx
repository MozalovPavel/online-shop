import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { productApi } from '../../api/ProductApi';
import Caption from '../../components/common/Caption/Caption';
import { IProduct, ProductSize } from '../../data/Product';
import Image from 'next/image';
import styles from '../../styles/pages/ProductPage.module.css';
import { memo, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addOrder } from '../../store/orders';
import ProductSizesSelector from '../../components/pages/Product/ProductSizesSelector/ProductSizesSelector';
import { ProductOrderPipe } from '../../data/ProductOrder/ProductOrderPipe';
import { Button } from '../../components/controls/Button/Button';

interface IProductProps {
  product: IProduct;
}

const IMAGE_WIDTH = 330;
const IMAGE_HEIGHT = 540;

const Product = (props: IProductProps) => {
  const { product } = props;
  const { name, description, image, special, sizes } = product;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleChangeSize = (size: ProductSize) => {
    setSelectedSize(size);
  };

  const dispatch = useAppDispatch();

  const onAddButtonClick = () => {
    dispatch(addOrder(ProductOrderPipe.fromProduct(product, selectedSize)));
  };

  return (
    <div>
      <Head>
        <title>Online shop | {name}</title>
      </Head>
      <section>
        <Caption>{name}</Caption>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={image}
            alt={name}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
          <div className={styles.infoContainer}>
            <div className={styles.description}>
              {description}
            </div>
            <div className={styles.special}>
              {special}
            </div>
            <div className={styles.sizeSelector}>
              <ProductSizesSelector value={selectedSize} sizes={sizes} onChange={handleChangeSize} />
            </div>
            <div className={styles.addButton}>
              <Button onClick={onAddButtonClick}>Add to cart</Button>
            </div>
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

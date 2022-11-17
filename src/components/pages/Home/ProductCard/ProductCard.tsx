import Image from 'next/image';
import styles from './ProductCard.module.css';
import { IProduct } from '../../../../data/Product';
import Link from 'next/link';
import { PagesRoutesHelper } from '../../../../data/Routes';

interface IProductCardProps {
    product: IProduct;
}

const IMAGE_WIDTH = 424;
const IMAGE_HEIGHT = 694;

const ProductCard = (props: IProductCardProps) => {
    const { product } = props;
    const { special, price, sizes, name } = product

    return (
        <article className={styles.root}>
            <Link href={PagesRoutesHelper.getProductRoute(product.id)}>
                <Image
                    className={styles.image}
                    src={product.image}
                    alt={name}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                />
                <span className={styles.title}>{name}</span>
            </Link>
            <span className={styles.size}>{sizes.join(", ")}</span>
            <span className={styles.prices}>
                <span className={styles.old}>{price}</span>
                <span className={styles.new}>{special}</span>
            </span>
        </article>
    );
};

export default ProductCard;
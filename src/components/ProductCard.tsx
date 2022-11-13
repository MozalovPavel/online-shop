import Image from 'next/image';
import styles from '../styles/components/ProductCard.module.css';
import { IProduct } from '../data/product/Product';

// FIXME переместить

interface IProductCardProps {
    product: IProduct;
}

// FIXME вынести высоты

const ProductCard = (props: IProductCardProps) => {
    const {product} = props;
    const {special, price, sizes, name} = product
    return (
        <article className={styles.root}>
            <Image 
                className={styles.image}
                src={product.image} 
                alt={name}
                width={424}
                height={694}
            />
            <span className={styles.title}>{name}</span>
            <span className={styles.size}>{sizes.join(", ")}</span>
            <span className={styles.prices}>
                <span className={styles.old}>{price}</span>
                <span className={styles.new}>{special}</span>
            </span>
        </article>
    );
};

export default ProductCard;
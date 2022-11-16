import Image from 'next/image';
import styles from './ProductCard.module.css';
import { IProduct } from '../../../../data/Product';
import Link from 'next/link';

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
            <Link href={`/product/${product.id}`}>
                <Image 
                    className={styles.image}
                    src={product.image} 
                    alt={name}
                    width={424}
                    height={694}
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
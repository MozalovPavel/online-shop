import Image from 'next/image';
import styles from '../styles/components/ProductCard.module.css';

import testImage from '../../public/test-image.png';
import { IProduct } from '../data/product/Product';

// FIXME переместить

interface IProductCardProps {
    product: IProduct;
}

// FIXME вынести высоты

const ProductCard = (props: IProductCardProps) => {
    const {product} = props;
    const {newPrice, oldPrice, sizes, title} = product
    return (
        <article className={styles.root}>
            <Image 
                className={styles.image}
                src={testImage} 
                alt={"card alternative"}
            />
            <span className={styles.title}>{title}</span>
            <span className={styles.size}>{sizes.join(", ")}</span>
            <span className={styles.prices}>
                <span className={styles.old}>${oldPrice}</span>
                <span className={styles.new}>${newPrice}</span>
            </span>
        </article>
    );
};

export default ProductCard;
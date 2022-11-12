import Image from 'next/image';
import styles from '../styles/components/ProductCard.module.css';

import testImage from '../../public/test-image.png';

// FIXME переместить

interface IProductCardProps {

}

// FIXME вынести высоты

const ProductCard = (props: IProductCardProps) => {
    // const {} = props;
    return (
        <article className={styles.root}>
            <Image 
                className={styles.image}
                src={testImage} 
                width={298} 
                height={487} 
                alt={"card alternative"}
            />
            <span className={styles.title}>Kirsten Sequin Open Back Long Sleeve Dress in Blue</span>
            <span className={styles.size}>Small, Medium</span>
            <span className={styles.prices}>
                <span className={styles.old}>
                    $80.00
                </span>
                <span className={styles.new}>
                    $80.00
                </span>
            </span>
        </article>
    );
};

export default ProductCard;
import Caption from "./Caption";
import ProductCard, { ProductCardSizes } from "./ProductCard";
import styles from '../styles/components/ProductsList.module.css';

interface IProductsListProps {
    title: string;
}

const products = [
    {
        title: "Long Sleeve Dress in Blue",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 1
    },
    {
        title: "Kirsten Sequin Open Back Long Sleeve Dress in Blue",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 2
    },
    {
        title: "Kirsten Sequin Open Back Long",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 3
    },
    {
        title: "Kirsten Sequin Open Back Long Sleeve Dress in Blue dasd asd asd asd asd asd asd ",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 4
    },
    {
        title: "Kirsten Sequin Open Back Long Sleeve Dress in Blue",
        sizes: [ProductCardSizes.Small, ProductCardSizes.Medium],
        oldPrice: 99,
        newPrice: 80,
        id: 5
    },
];

const ProductsList = ({title}: IProductsListProps) => {
    return (
        <article>
            <Caption>{title}</Caption>
            <div className={styles.productsContainer}>
                {products.map(product => (
                    <div className={styles.cardContainer}>
                        <ProductCard key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </article>
    );
};

export default ProductsList;
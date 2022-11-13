import Caption from "./Caption";
import ProductCard from "./ProductCard";
import styles from '../styles/components/ProductsList.module.css';
import { getProducts, useProducts } from "../store/products";
import { wrapper } from "../store/store";
import Pagination from "./Pagination/Pagination";
import { useAppDispatch } from "../store/hooks";

interface IProductsListProps {
    title: string;
}

const CARDS_COUNT_ON_PAGE = 8;

const ProductsList = ({ title }: IProductsListProps) => {
    const { data, pending } = useProducts();
    const { items: products = [], page = 1, totalPages = 0 } = data || {};

    const dispatch = useAppDispatch();
    const onPageChange = (newPage: number) => {
        dispatch(getProducts(newPage));
    };

    return (
        <article>
            <Caption>{title}</Caption>
            <div className={styles.productsContainer}>
                {products.map(product => (
                    <div key={product.id} className={styles.cardContainer}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={page}
                pageSize={CARDS_COUNT_ON_PAGE}
                isLoading={pending}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </article>
    );
};

export default ProductsList;

ProductsList.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(getProducts());
        }
);
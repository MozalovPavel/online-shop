import Caption from "../../../common/Caption/Caption";
import ProductCard from "../ProductCard/ProductCard";
import styles from './Products.module.css';
import { getProducts, useProducts } from "../../../../store/products";
import { wrapper } from "../../../../store/store";
import Pagination from "../../../controls/Pagination/Pagination";
import { useAppDispatch } from "../../../../store/hooks";

interface IProductsProps {
    title: string;
}

const Products = ({ title }: IProductsProps) => {
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
                isLoading={pending}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </article>
    );
};

export default Products;

Products.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
        async () => {
            await dispatch(getProducts());
        }
);
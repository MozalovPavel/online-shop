import Caption from "./Caption";

interface IProductsListProps {
    title: string;
}

const ProductsList = ({title}: IProductsListProps) => {
    return (
        <article>
            <Caption>{title}</Caption>
        </article>
    );
};

export default ProductsList;
import { ChangeEventHandler } from "react";
import { IProduct, ProductSize } from "../data/Product";
import styles from '../styles/components/ProductCard.module.css';

interface IProductSizesSelectorProps {
    sizes: ProductSize[];
    initialSize: ProductSize;
    onChange: (size: ProductSize) => void;
}

const ProductSizesSelector = (props: IProductSizesSelectorProps) => {
    const { sizes, onChange, initialSize } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as ProductSize);
    };

    return (
        <div className={styles.root}>
            Size

            {sizes.map(size => (
                <input
                    key={size}
                    type="radio"
                    name="sizes"
                    value={size}
                    defaultValue={initialSize}
                    onChange={handleChange}
                />
            ))}

        </div>
    );
};

export default ProductSizesSelector;

import { ProductSize } from "../../../../data/Product";
import styles from "./ProductSizesSelector.module.css";

interface IProductSizesSelectorProps {
    sizes: ProductSize[];
    value: ProductSize;
    onChange: (size: ProductSize) => void;
}

// FIXME обернуть мемо хуками большие поддеревья
const ProductSizesSelector = (props: IProductSizesSelectorProps) => {
    const { sizes, onChange, value } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as ProductSize);
    };

    return (
        <div>
            <span className={styles.title}>Size</span>

            <div className={styles.sizesContainer}>
                {sizes.map(size => (
                    <label key={size} className={styles.sizeItem}>
                        <input
                            key={size}
                            type="radio"
                            name="sizes"
                            value={size}
                            checked={size === value}
                            onChange={handleChange}
                            className={styles.input}
                        />
                        <span className={styles.sizeName}>
                            {size}
                        </span>
                    </label>
                ))}
            </div>

        </div>
    );
};

export default ProductSizesSelector;

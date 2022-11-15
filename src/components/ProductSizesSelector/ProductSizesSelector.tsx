import { ProductSize } from "../../data/Product";

interface IProductSizesSelectorProps {
    sizes: ProductSize[];
    value: ProductSize;
    onChange: (size: ProductSize) => void;
}

const ProductSizesSelector = (props: IProductSizesSelectorProps) => {
    const { sizes, onChange, value } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as ProductSize);
    };

    return (
        <div>
            Size

            {sizes.map(size => (
                <input
                    key={size}
                    type="radio"
                    name="sizes"
                    value={value}
                    onChange={handleChange}
                />
            ))}

        </div>
    );
};

export default ProductSizesSelector;

import { IProductOrder } from "../../../../data/ProductOrder/ProductOrder";
import { useAppDispatch } from "../../../../store/hooks";
import { removeOrder } from "../../../../store/orders";
import styles from './CartOrderRow.module.css';

interface ICartOrderRowProps {
    order: IProductOrder;
}

const CartOrderRow = (props: ICartOrderRowProps) => {
    const {order: {name, size, specialInCents, orderId}} = props;

    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(removeOrder(orderId));
    };

    return (
        <div className={styles.root}>
            <span className={styles.name}>{name}</span>
            <span className={styles.size}>{size}</span>
            <span className={styles.specialInCents}>${specialInCents/100}</span>
            <span className={styles.removeButton} onClick={handleRemove}>X</span>
        </div>
    );
};

export default CartOrderRow;
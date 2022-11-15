import { IProductOrder } from "../../data/ProductOrder/ProductOrder";
import { useAppDispatch } from "../../store/hooks";
import { removeOrder } from "../../store/orders";
import styles from './OrderRow.module.css';

interface IOrderRowProps {
    order: IProductOrder;
}

const OrderRow = (props: IOrderRowProps) => {
    const {order: {name, size, specialInCents, orderId}} = props;

    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(removeOrder(orderId));
    };

    return (
        <div className={styles.root}>
            <span className={styles.name}>{name}</span>
            <span className={styles.size}>{size}</span>
            <span className={styles.specialInCents}>${specialInCents/10}</span>
            <span className={styles.removeButton} onClick={handleRemove}>X</span>
        </div>
    );
};

export default OrderRow;
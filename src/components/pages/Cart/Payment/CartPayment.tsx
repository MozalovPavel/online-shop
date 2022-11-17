import { useMemo } from "react";
import { ProductOrderPipe } from "../../../../data/ProductOrder/ProductOrderPipe";
import { createOrder, useCheckoutState } from "../../../../store/checkout";
import { useAppDispatch } from "../../../../store/hooks";
import { cleanOrders } from "../../../../store/orders";
import { useOrders } from "../../../../store/orders/hooks";
import { Button } from "../../../controls/Button/Button";
import styles from "./CartPayment.module.css";

const CartPayment = () => {
    const orders = useOrders()
    const { pending } = useCheckoutState();

    const totalAmount = useMemo(() => (
        orders.reduce((total, order) => total + order.specialInCents, 0) / 100
    ), [orders]);

    const dispatch = useAppDispatch();

    const handleOrder = async () => {
        const ordersForPlace = orders.map(ProductOrderPipe.toCheckoutOrders);
        const orderId = await dispatch(createOrder(ordersForPlace)).unwrap();

        alert(`Order code is ${orderId}`);
        dispatch(cleanOrders());
    };

    return (
        <div className={styles.root}>
            <span className={styles.totalAmount}>Total - ${totalAmount}</span>
            <Button
                disabled={pending}
                className={styles.orderButton}
                onClick={handleOrder}
            >
                Checkout
            </Button>
        </div>
    );
};

export default CartPayment;
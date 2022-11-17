import Head from "next/head";
import Caption from "../../components/common/Caption/Caption";
import CartPayment from "../../components/pages/Cart/Payment/CartPayment";
import CartOrderRow from "../../components/pages/Cart/OrderRow/CartOrderRow";
import { useOrders } from "../../store/orders/hooks";
import styles from "../../styles/pages/CartPage.module.css";

const CartPage = () => {
  const orders = useOrders();

  const isEmpty = !orders.length;

  return (
    <section>
      <Head>
        <title>Online shop | Cart</title>
      </Head>
      <Caption>My order</Caption>
      <div className={styles.root}>
        {!isEmpty
          ? (
            <div className={styles.container}>
              <div className={styles.positionsList}>
                {orders.map((order) => <CartOrderRow key={order.orderId} order={order} />)}
              </div>
              <div className={styles.payment}>
                <CartPayment />
              </div>
            </div>
          )
          : "Cart is empty"
        }
      </div>
    </section>
  )
};

export default CartPage;
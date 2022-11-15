import Head from 'next/head';
import Caption from '../../components/Caption/Caption';
import OrderRow from '../../components/OrderRow/OrderRow';
import { useOrders } from '../../store/orders/hooks';
import styles from '../../styles/pages/Orders.module.css';

const Orders = () => {
  const orders = useOrders();

  const isEmpty = !orders.length;

  return (
    <section>
      <Head>
        <title>Online shop | Orders</title>
      </Head>
      <Caption>Orders</Caption>
      <div className={styles.root}>
        {isEmpty && "Cart is empty"}
        {!isEmpty && (
          orders.map((order) => <OrderRow key={order.orderId} order={order} />)
        )}
      </div>
    </section>
  )
};

export default Orders;
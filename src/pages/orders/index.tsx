import Head from 'next/head';
import Caption from '../../components/Caption/Caption';
import OrderRow from '../../components/OrderRow/OrderRow';
import { ProductOrderPipe } from '../../data/ProductOrder/ProductOrderPipe';
import { createOrder } from '../../store/checkout';
import { useAppDispatch } from '../../store/hooks';
import { cleanOrders } from '../../store/orders';
import { useOrders } from '../../store/orders/hooks';
import styles from '../../styles/pages/Orders.module.css';

const Orders = () => {
  const orders = useOrders();

  const isEmpty = !orders.length;

  const totalAmount = orders.reduce((total, order) => total + order.specialInCents, 0) / 100;

  const dispatch = useAppDispatch();

  const handleOrder = async () => {
    const ordersForPlace = orders.map(ProductOrderPipe.toOrders);
    const orderId = await dispatch(createOrder(ordersForPlace)).unwrap();
    console.log({orderId});
    
    alert(`Order code is ${orderId}`);
    
    dispatch(cleanOrders());
  };

  return (
    <section>
      <Head>
        <title>Online shop | Orders</title>
      </Head>
      <Caption>Orders</Caption>
      <div className={styles.root}>
        {!isEmpty 
          ? (
            <>
              {orders.map((order) => <OrderRow key={order.orderId} order={order} />)}
              <span>${totalAmount}</span>
              <button onClick={handleOrder}>To order</button>
            </>
          ) 
          : "Cart is empty"
        }
      </div>
    </section>
  )
};

export default Orders;
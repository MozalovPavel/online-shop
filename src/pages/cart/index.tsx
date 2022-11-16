import Head from 'next/head';
import Caption from '../../components/Caption/Caption';
import CartPayment from '../../components/pages/Cart/CartPayment/CartPayment';
import CartOrderRow from '../../components/pages/Cart/OrderRow/CartOrderRow';
import { ProductOrderPipe } from '../../data/ProductOrder/ProductOrderPipe';
import { createOrder } from '../../store/checkout';
import { useAppDispatch } from '../../store/hooks';
import { cleanOrders } from '../../store/orders';
import { useOrders } from '../../store/orders/hooks';
import styles from '../../styles/pages/CartPage.module.css';

const CartPage = () => {
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
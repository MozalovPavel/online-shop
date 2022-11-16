import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import commonStyles from '../../styles/CommonLayout.module.css';
import { useRouter } from 'next/router'

import logo from '../../../public/logo.svg';
import Cart from '../Cart/Cart';
import { useOrders } from '../../store/orders/hooks';

// FIXME вынести роуты в хелпер

const Header = () => {
	const orders = useOrders();
	const router  = useRouter();

	const goToOrders = () => {
		router.push("/cart");
	};

	return (
		<header className={`${styles.navbar} ${commonStyles.leftRightlayoutPaddings}`}>
			<Link href="/">
				<Image
					className={styles.logo}
					src={logo}
					alt="Lucy in the sky inc"
					width={143}
					height={30}
					priority
				/>
			</Link>
			<div className={styles.cart}>
				<Cart ordersCount={orders.length} onClick={goToOrders} />
			</div>
		</header>
	);
};

export default Header;
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import styles from './Header.module.css';
import commonStyles from '../../../styles/CommonLayout.module.css';
import logo from '../../../../public/logo.svg';
import Cart from '../Cart/Cart';
import { useOrders } from '../../../store/orders/hooks';
import { PagesRoutes } from '../../../data/Routes';

const IMAGE_WIDTH = 143;
const IMAGE_HEIGHT = 30;

const Header = () => {
	const orders = useOrders();
	const router = useRouter();

	const goToOrders = () => {
		router.push(PagesRoutes.Cart);
	};

	return (
		<header className={`${styles.navbar} ${commonStyles.leftRightlayoutPaddings}`}>
			<Link href={PagesRoutes.Root}>
				<Image
					className={styles.logo}
					src={logo}
					alt="Lucy in the sky inc"
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGHT}
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
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/Header.module.css';
import commonStyles from '../styles/CommonLayout.module.css';

import logo from '../../public/logo.svg';

const Header = () => (
	<header className={`${styles.navbar} ${commonStyles.layoutPaddings}`}>
		<Link href="/">
			<Image 
				className={styles.logo}
				src={logo} 
				alt="Lucy in the sky inc"
				width={143}
      			height={30} 
			/>
		</Link>
		<div className={styles.cart}>
			<span>🛒</span>
			<p>$0.00</p>
		</div>
	</header>
);
   
   export default Header;
import Image from "next/image";
import styles from "./Cart.module.css";

import cartImage from "../../../../public/icons/cart.svg";

interface ICartProps {
    ordersCount: number;
    onClick: () => void;
}

const Cart = (props: ICartProps) => {
    const { ordersCount, onClick } = props;
    return (
        <div className={styles.root} onClick={onClick}>
            <Image src={cartImage} width={24} height={24} alt="Cart" />
            {!!ordersCount && <span className={styles.ordersCount}>{ordersCount}</span>}
        </div>
    );
};

export default Cart;
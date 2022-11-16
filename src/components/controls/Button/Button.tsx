import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
    onClick: () => void;
    className?: string; 
}

export const Button = (props: PropsWithChildren<IButtonProps>) => {
    const {children, onClick, className} = props;

    return (
        <button className={classNames(styles.root, className)} onClick={onClick}>
            {children}
        </button>
    );
};
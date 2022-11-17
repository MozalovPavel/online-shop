import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
    className?: string;
    disabled?: boolean;
    onClick: () => void;
}

export const Button = (props: PropsWithChildren<IButtonProps>) => {
    const { children, onClick, className, disabled } = props;

    return (
        <button disabled={disabled} className={classNames(styles.root, className)} onClick={onClick}>
            {children}
        </button>
    );
};
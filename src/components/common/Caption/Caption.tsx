import { PropsWithChildren } from "react";
import styles from "./Caption.module.css";

const Caption = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div>
            <span className={styles.title}>{children}</span>
            <hr className={styles.line} />
        </div>
    );
};

export default Caption;
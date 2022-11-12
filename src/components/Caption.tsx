import { PropsWithChildren } from 'react';
import styles from '../styles/components/Caption.module.css';

const Caption = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div>
            <span className={styles.title}>{children}</span>
            <hr className={styles.line} />
        </div>
    );
};

export default Caption;
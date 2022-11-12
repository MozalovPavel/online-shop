import Header from './Header';
import {PropsWithChildren} from 'react';
import commonStyles from '../styles/CommonLayout.module.css';

const Layout = ({ children }: PropsWithChildren<{}>) => (
    <>
        <Header />
        <main className={commonStyles.layoutPaddings}>{children}</main>
    </>
);

export default Layout;
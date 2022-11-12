import Header from './Header';
import {PropsWithChildren} from 'react';
import commonStyles from '../styles/CommonLayout.module.css';

// FIXME ограничить сверху по ширине
const Layout = ({ children }: PropsWithChildren<{}>) => (
    <>
        <Header />
        <main className={commonStyles.layoutPaddings}>{children}</main>
    </>
);

export default Layout;
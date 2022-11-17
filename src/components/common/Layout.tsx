import Header from "./Header/Header";
import { PropsWithChildren } from "react";
import commonStyles from "../../styles/CommonLayout.module.css";
import classNames from "classnames";

const Layout = ({ children }: PropsWithChildren<{}>) => (
    <>
        <Header />
        <main className={classNames(commonStyles.main, commonStyles.leftRightlayoutPaddings)}>{children}</main>
    </>
);

export default Layout;
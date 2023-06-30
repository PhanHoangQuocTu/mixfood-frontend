import classNames from "classnames";
import { memo } from "react";

import styles from './Home.module.scss'
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import About from "./components/About";
import Menu from "./components/Menu";
import Rating from "./components/Rating";

function Home() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Banner />
            <BestSeller />
            <About />
            <Menu />
            <Rating />
        </div>
    );
}

export default memo(Home);
import classNames from "classnames";
import { memo } from "react";

import styles from './Home.module.scss'
import Banner from "./components/Banner";

function Home() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Banner />
        </div>
    );
}

export default memo(Home);
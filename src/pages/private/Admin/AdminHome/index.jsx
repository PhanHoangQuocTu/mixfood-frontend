import classNames from "classnames";
import styles from './AdminHome.module.scss'

function AdminHome() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            Admin Home
        </section>
    );
}

export default AdminHome;
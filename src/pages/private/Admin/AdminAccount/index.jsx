import classNames from "classnames";
import styles from './AdminAccount.module.scss'

function AdminAccount() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            Admin Account
        </section>
    );
}

export default AdminAccount;
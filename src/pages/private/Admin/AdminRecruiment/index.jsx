import classNames from "classnames";
import styles from './AdminRecruiment.module.scss'

function AdminRecruiment() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            Admin Recruiment
        </section>
    );
}

export default AdminRecruiment;
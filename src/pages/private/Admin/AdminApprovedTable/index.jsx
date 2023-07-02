import classNames from "classnames";
import styles from './AdminApprovedTable.module.scss'

function AdminApprovedTable() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            Admin Approved Table
        </section>
    );
}

export default AdminApprovedTable;
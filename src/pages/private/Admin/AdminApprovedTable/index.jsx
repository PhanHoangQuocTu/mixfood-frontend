import classNames from "classnames";
import styles from './AdminApprovedTable.module.scss'
import AdminTitle from "@/components/AdminTitle";

function AdminApprovedTable() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames('mt-[40px]')}>
                <AdminTitle title={'Bàn đã duyệt'} />
            </div>
        </section>
    );
}

export default AdminApprovedTable;
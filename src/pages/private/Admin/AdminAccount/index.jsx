import classNames from "classnames";
import styles from './AdminAccount.module.scss'
import AdminTitle from "@/components/AdminTitle";

function AdminAccount() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames('mt-[40px]')}>
                <AdminTitle title={'Tài khoản khách hàng'} />
            </div>
        </section>
    );
}

export default AdminAccount;
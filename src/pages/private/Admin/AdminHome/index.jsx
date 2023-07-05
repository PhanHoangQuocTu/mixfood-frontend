import classNames from "classnames";
import styles from './AdminHome.module.scss'
import AdminTitle from "@/components/AdminTitle";

function AdminHome() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames('mt-[40px]')}>
                <AdminTitle title={'Trang chủ'} />
            </div>
        </section>
    );
}

export default AdminHome;
import classNames from "classnames";
import styles from './AdminBooking.module.scss'
import AdminTitle from "@/components/AdminTitle";

function AdminBooking() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames('mt-[40px]')}>
                <AdminTitle title={'Đặt bàn'} />
            </div>
        </section>
    );
}

export default AdminBooking;
import classNames from "classnames";
import styles from './AdminBooking.module.scss'

function AdminBooking() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            Admin Booking
        </section>
    );
}

export default AdminBooking;
import classNames from "classnames";
import styles from './AdminReviews.module.scss'

function AdminReviews() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            Admin Reviews
        </section>
    );
}

export default AdminReviews;
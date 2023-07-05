import classNames from "classnames";
import styles from './AdminReviews.module.scss'
import AdminTitle from "@/components/AdminTitle";

function AdminReviews() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
            <div className={classNames('mt-[40px]')}>
                <AdminTitle title={'Đánh giá'} />
            </div>
        </section>
    );
}

export default AdminReviews;
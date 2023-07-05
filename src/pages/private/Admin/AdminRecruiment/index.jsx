import classNames from "classnames";
import styles from './AdminRecruiment.module.scss'
import AdminTitle from "@/components/AdminTitle";

function AdminRecruiment() {
    return (
        <section className={classNames(styles.wrapper, 'container', 'px-0')}>
           <div className={classNames('mt-[40px]')}>
                <AdminTitle title={'Tuyển dụng'} />
            </div>
        </section>
    );
}

export default AdminRecruiment;
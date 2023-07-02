import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.sidebar)}>
        <Link
          to={'/admin/home'}
          className={classNames(styles.item, { [styles.active]: pathname === '/admin/home' })}
        >
          Trang chủ
        </Link>
        <Link
          to={'/admin/account'}
          className={classNames(styles.item, { [styles.active]: pathname === '/admin/account' })}
        >
          Tài khoản
        </Link>
        <Link
          to={'/admin/booking'}
          className={classNames(styles.item, { [styles.active]: pathname === '/admin/booking' })}
        >
          Đặt bàn
        </Link>
        <Link
          to={'/admin/approved-tables'}
          className={classNames(styles.item, { [styles.active]: pathname === '/admin/approved-tables' })}
        >
          Bàn đã duyệt
        </Link>
        <Link
          to={'/admin/recruitment'}
          className={classNames(styles.item, { [styles.active]: pathname === '/admin/recruitment' })}
        >
          Tuyển dụng
        </Link>
        <Link
          to={'/admin/reviews'}
          className={classNames(styles.item, { [styles.active]: pathname === '/admin/reviews' })}
        >
          Đánh giá
        </Link>
      </div>
      <Link to={'/'} className={classNames(styles.item)}>
        Đăng xuất
      </Link>
    </div>
  );
}

export default memo(Sidebar);

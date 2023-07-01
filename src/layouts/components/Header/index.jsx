import classNames from 'classnames';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { Popper } from 'react-popper';

import logo from '@/img/Header/logo.png';

import styles from './Header.module.scss';

library.add(faUser, faEnvelope);

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [user, setUser] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

    const popperRef = useRef(null);

    useEffect(() => {
        const hasUserCookie = Cookies.get('mixfooduser');
        if (hasUserCookie) {
            setUser(hasUserCookie);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('mixfooduser');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleOutsideClick = (event) => {
        if (popperRef.current && !popperRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles.main, 'container', 'px-0', { [styles.expanded]: isExpanded === true })}>
                <div className={classNames(styles.hideBars)}>
                    <nav className="navbar">
                        <div className="container-fluid">
                            <Link className={classNames(styles.LogoText, 'mx-0')} to="/">
                                <img src={logo} alt="logo" className={classNames('d-inline-block', 'align-text-top', 'sm:w-[44px]', 'sm:h-[44px]', 'xs:w-[34px]', 'xs:h-[34px]')} />
                                Mix food
                            </Link>
                        </div>
                    </nav>
                    <button onClick={toggleExpanded} className={classNames(styles.hamburger)}>
                        <div className={classNames(styles.bar)}></div>
                        <div className={classNames(styles.bar)}></div>
                        <div className={classNames(styles.bar)}></div>
                    </button>
                </div>
                <div className={classNames(styles.navbar, { [styles.show]: isExpanded === true })}>
                    <div className={classNames(styles.listNavbar, { [styles.dropdown]: isExpanded === true })}>
                        <Link className={classNames(styles.navbarLink)} to="/">Trang chủ</Link>
                        <Link className={classNames(styles.navbarLink)} to="/book">Đặt bàn</Link>
                        <a href='https://shopeefood.vn/da-nang/mix-food-lau-nuong' className={classNames(styles.navbarLink)} >Đặt món</a>
                        {user === null &&
                            <Link className={classNames(styles.navbarLink)} to="/signin">Đăng nhập</Link>
                        }
                    </div>
                    <div className={classNames(styles.popperShow, { [styles.ppShowed]: showMenu === true })}>
                        {user && (
                            <button className={classNames(styles.userIcon)} onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faUser} className={classNames(styles.userIconMain)} />
                            </button>
                        )}
                        {user && showMenu && (
                            <Popper placement="bottom" referenceElement={popperRef.current}>
                                {({ ref, style, placement }) => (
                                    <div ref={ref} style={style} data-placement={placement} className={classNames(styles.userMenu)} onClick={handleOutsideClick}>
                                        <button>View Profile</button>
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </Popper>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

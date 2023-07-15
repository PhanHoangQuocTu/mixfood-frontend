import styles from './Menu.module.scss'
import { memo } from "react";
import classNames from "classnames";
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//img
import titleVector from '@/img/vectorTitle.png'
import menu0 from '@/img/Menu/0.png'
import menu1 from '@/img/Menu/1.png'
import menu2 from '@/img/Menu/2.png'
import menu3 from '@/img/Menu/3.png'
import menu4 from '@/img/Menu/4.png'
import menu5 from '@/img/Menu/5.png'
import menu6 from '@/img/Menu/6.png'
import menu7 from '@/img/Menu/7.png'
import menu8 from '@/img/Menu/8.png'
import menu9 from '@/img/Menu/9.png'
import menu10 from '@/img/Menu/10.png'
import menu11 from '@/img/Menu/11.png'
import menu12 from '@/img/Menu/12.png'
import menu13 from '@/img/Menu/13.png'
import menu14 from '@/img/Menu/14.png'


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuItem = [menu0, menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10, menu11, menu12, menu13, menu14]

const modulesSwiper = [Grid, Pagination, Navigation];
const breakpointsSwiper = {
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    576: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    992: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    1200: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
};

SwiperCore.use(modulesSwiper);
function Menu() {
    return (
        <section className={classNames(styles.wrapper)}>
            <div className={classNames(styles.menu, 'container', 'px-0')}>
                <div className={classNames(styles.title)}>
                    <span className={classNames(styles.titleText)}>
                        Thực đơn
                    </span>
                    <img src={titleVector} alt='vector' className={classNames(styles.vector)} />
                </div>
                <div className={classNames(styles.menuSwiper)}>
                    <Swiper
                    className='md:h-[100vh]'
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{delay: 4000}}
                        pagination={true}
                        modules={modulesSwiper}
                        breakpoints={breakpointsSwiper}
                    >
                        {menuItem.map((menu, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={menu} alt='menu' className={classNames(styles.menuImg)} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

        </section>
    );
}

export default memo(Menu);
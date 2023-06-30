import styles from './Rating.module.scss'
import { memo } from "react";
import classNames from "classnames";
import SwiperCore, { Navigation, Pagination, Grid, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//img
import titleVector from '@/img/vectorTitle.png'

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RatingCard from './components/RatingCard';

const rates = [
    {
        name: "Nguyen Van A",
        text: "Mix Food là một quán ăn Thái tuyệt vời ở Đà Nẵng! Đồ ăn tại đây thực sự ngon và đậm đà hương vị Thái Lan. Tôi rất ấn tượng với sự phục vụ chuyên nghiệp và không gian thoải mái của quán. Đây là địa điểm lý tưởng để thưởng thức các món ăn độc đáo từ Thái Lan.",
    },
    {
        name: "Le Van L",
        text: "Mix Food mang đến cho khách hàng một trải nghiệm ẩm thực Thái đáng nhớ. Nhân viên thân thiện và thực đơn phong phú với các món ăn đặc trưng từ Thái Lan. Tôi rất thích cách họ kết hợp hương vị và thực hiện các món ăn một cách tinh tế. Chắc chắn sẽ quay lại lần nữa!",
    },
    {
        name: "Ho Ngoc H",
        text: "Mix Food là một quán ăn Thái chất lượng cao tại Đà Nẵng. Tôi đã thử nhiều món ở đây và đều rất hài lòng với chất lượng và khẩu vị. Không chỉ đồ ăn ngon mà cả không gian và phục vụ đều rất tốt. Nếu bạn muốn thưởng thức ẩm thực Thái tại Đà Nẵng, Mix Food là lựa chọn hàng đầu"
    }
]


const modulesSwiper = [Grid, Pagination, Navigation, Autoplay];
const breakpointsSwiper = {
    320: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    576: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    768: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    992: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
    1200: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
};

SwiperCore.use(modulesSwiper);
function Rating() {
    return (
        <section className={classNames(styles.wrapper)}>
            <div className={classNames(styles.Rating, 'container', 'px-0')}>
                <div className={classNames(styles.title)}>
                    <span className={classNames(styles.titleText)}>
                        Đánh giá
                    </span>
                    <img src={titleVector} alt='vector' className={classNames(styles.vector)} />
                </div>
                <div className={classNames(styles.menuSwiper)}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={modulesSwiper}
                        breakpoints={breakpointsSwiper}
                        autoplay={{delay: 3000}}
                    >
                        {rates.map((rate, index) => {
                            return (
                                <SwiperSlide>
                                    <RatingCard
                                        name={rate.name}
                                        text={rate.text}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

        </section>
    );
}

export default memo(Rating);
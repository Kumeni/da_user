import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Images() {
    return (
        <div>
            <span>5</span>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={props.mosaic?style.imageMosaic:style.image}>
                        <img src="/images/wallE.png" alt="wallE" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={props.mosaic?style.imageMosaic:style.image}>
                        <img src="/images/wallE.png" alt="wallE" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={props.mosaic?style.imageMosaic:style.image}>
                        <img src="/images/wallE.png" alt="wallE" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={props.mosaic?style.imageMosaic:style.image}>
                        <img src="/images/wallE.png" alt="wallE" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Images
import React from "react";
import headerCSS from './../Header/Header.module.css'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay , Parallax} from "swiper/modules";

function Header() {
    return (
        <div className={headerCSS.header_wrapper} id="Home">
            <Swiper 
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className={headerCSS.swiper}
                autoplay={{
                    delay:2500,
                }}
                parallax={true}
                speed={1500}
                modules={[Autoplay , Parallax]}

            >
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Hotel and Restaurant</small>
                            <h2 data-swiper-parallax="-400">Relax Into Your <span>Dream </span> Escape, <br />
                                Wrapped in <span>Luxury</span>
                            </h2>
                            <p data-swiper-parallax="-600">Call Now<span>+1234567890</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Hotel and Restaurant</small>
                            <h2 data-swiper-parallax="-400">Where Your <span>Dream</span> Getaway Begins with <br />
                                <span>Elegance</span> and <span>Comfort</span>
                            </h2>
                            <p data-swiper-parallax="-600">Call Now<span>1234567890</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Hotel and Restaurant</small>
                            <h2 data-swiper-parallax="-400">Indulge in Your <span>Dream</span> Moments with <br />
                                <span>Unforgettable Memories</span>
                            </h2>
                            <p data-swiper-parallax="-600">Call Now<span>1234567890</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    
    )
}

export default Header
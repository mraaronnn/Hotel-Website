import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

import img1 from './../../assets/testi-01.jpg';
import img2 from './../../assets/testi-02.jpg';
import img3 from './../../assets/testi-03.jpg';
import img4 from './../../assets/testi-04.jpg';

function Testimonial() {
    return (
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className="section_Heading">Testimonials</small>
            <h2 className="section_Title">What Our Clients <span>Says</span></h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                breakpoints={{
                    0:{
                        slidesPerView:1
                    },
                    768:{
                        slidesPerView:2
                    }
                }}
                speed={1500}
                modules={[Autoplay]}
                className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>John Doe <span> Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis error et quasi! Exercitationem, sequi doloremque? Itaque dolorem nemo odit quibusdam quidem sint sunt harum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>John Doe <span> Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis error et quasi! Exercitationem, sequi doloremque? Itaque dolorem nemo odit quibusdam quidem sint sunt harum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>John Doe <span> Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis error et quasi! Exercitationem, sequi doloremque? Itaque dolorem nemo odit quibusdam quidem sint sunt harum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img4} alt="" />
                        <div className={testimonialCSS.content}>
                            <h3>John Doe <span> Manager</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis error et quasi! Exercitationem, sequi doloremque? Itaque dolorem nemo odit quibusdam quidem sint sunt harum.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
                        
        </div>
    )
}

export default Testimonial
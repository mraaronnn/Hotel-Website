import React from "react";
import amenitiesCSS from './../Amenities/Amenities.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import img1 from './../../assets/pool.png';
import img2 from './../../assets/gym.jpg';
import img3 from './../../assets/rest.jpg';

function Amenities() {
    return (
        <div className={`${amenitiesCSS.amenities_wrapper} section`}>
            <h2 className="section_Title"><span>Amenities:</span></h2>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                speed={5000}
                modules={[Autoplay]}
                className={amenitiesCSS.swiper}
            >
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img1} alt="Swimming Pool" />
                        <div className={amenitiesCSS.content}>
                            <h2>Swimming Pool</h2>
                            <p>Immerse yourself in tranquility at our stunning outdoor swimming pool, surrounded by breathtaking views and lush landscapes. Whether you’re taking a leisurely swim, basking in the sun, or enjoying a refreshing cocktail by the poolside, every moment is designed for relaxation. The serene atmosphere, coupled with personalized service, offers a truly luxurious escape.</p>
                            <button className="btn2">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img2} alt="Gym and Sports" />
                        <div className={amenitiesCSS.content}>
                            <h2>Gym and Sports</h2>
                            <p>Unleash your fitness potential in our gym, where luxury meets performance. Featuring top-of-the-line equipment, from cardio machines to free weights, and a dedicated space for yoga and pilates, every detail is designed for your ultimate comfort and training. Whether you’re maintaining your routine or exploring a new sport, our expert trainers are available to tailor your goals.</p>
                            <button className="btn2">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img3} alt="Resto and Cafe" />
                        <div className={amenitiesCSS.content}>
                            <h2>Resto and Cafe</h2>
                            <p>Savor the art of fine dining at our world-class restaurant, where culinary mastery meets innovation. With an ever-evolving menu inspired by global flavors, our chefs craft dishes using only the freshest, locally-sourced ingredients. For a more intimate experience, our café offers an inviting ambiance, serving expertly brewed coffee, gourmet pastries, and light bites.</p>
                            <button className="btn2">Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Amenities;

import React from "react";
import ReviewCSS from "./../Reviews/Review.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";



import img1 from "./../../assets/Review1.jpg";
import img2 from "./../../assets/Review2.jpg";
import img3 from "./../../assets/Review3.jpg";
import img4 from "./../../assets/Review4.jpg";
import img5 from "./../../assets/Review5.jpg";
import img6 from "./../../assets/Review6.jpg";

function Review() {
  return (
    <div className={`${ReviewCSS.Review_wrapper} section`} id="Review">
      <h2 className="section_Title">
        What Our Clients <span>Say</span>
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        speed={1500}
        modules={[Autoplay]}
        className={ReviewCSS.swiper}
      >
        {/* Review 1 */}
        <SwiperSlide>
          <div className={ReviewCSS.Review}>
            <img src={img1} alt="" />
            <div className={ReviewCSS.content}>
              <h3>
                John Doe{" "}
                <span className={ReviewCSS.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </span>
              </h3>
              <p>From the moment we arrived, we were treated to a world of elegance and comfort. The suite was tastefully appointed with plush furnishings and panoramic views, while every meal in the restaurant was a masterpiece.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Review 2 */}
        <SwiperSlide>
          <div className={ReviewCSS.Review}>
            <img src={img2} alt="" />
            <div className={ReviewCSS.content}>
              <h3>
                Jane Smith{" "}
                <span className={ReviewCSS.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </span>
              </h3>
              <p>The restaurant is a hidden gem of culinary brilliance. Each dish was beautifully plated and bursting with flavor, crafted with the freshest ingredients. The wine pairing was expertly curated, and the staff made us feel like royalty.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Review 3 */}
        <SwiperSlide>
          <div className={ReviewCSS.Review}>
            <img src={img3} alt="" />
            <div className={ReviewCSS.content}>
              <h3>
                Mark Wilson{" "}
                <span className={ReviewCSS.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </h3>
              <p>This hotel redefines luxury at every touchpoint—from the grand lobby to the serene spa. The attention to detail, from monogrammed pillows to turndown treats, made every moment indulgent. It felt more like a private estate than a hotel.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Review 4 */}
        <SwiperSlide>
          <div className={ReviewCSS.Review}>
            <img src={img4} alt="" />
            <div className={ReviewCSS.content}>
              <h3>
                Sarah Lee{" "}
                <span className={ReviewCSS.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </h3>
              <p>Nestled in an enchanting setting, this property offers peace, privacy, and personalized service. The rooms were a sanctuary of sophistication, and the cuisine was world-class. Every staff member was gracious and genuinely welcoming.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Review 5 */}
        <SwiperSlide>
          <div className={ReviewCSS.Review}>
            <img src={img5} alt="" />
            <div className={ReviewCSS.content}>
              <h3>
                Lois Griffin
                <span className={ReviewCSS.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </span>
              </h3>
              <p>We couldn’t have chosen a more perfect place to celebrate our anniversary. The candlelit dinner by the terrace, the rose petals in our suite, and the spa couple’s massage were all flawless. Every moment was curated with love and care.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Review 6 */}
        <SwiperSlide>
          <div className={ReviewCSS.Review}>
            <img src={img6} alt="" />
            <div className={ReviewCSS.content}>
              <h3>
                Aaron Domingo{" "}
                <span className={ReviewCSS.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </h3>
              <p>What sets this hotel apart is the rare balance between grandeur and genuine hospitality. The interiors are opulent yet inviting, and the restaurant offers a dining journey, not just a meal. It’s a place where luxury meets heart.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Review;

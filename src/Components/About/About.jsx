import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg from './../../assets/about-one.png'

function About () {
    return(
        <div className={`${aboutCSS.about_wrapper} section`} id="About">
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="" />
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section_Heading">The HotelBrand</small>
                <h2 className="section_Title"> Breathe, Relax, Indulge in Elegance</h2>
                <p>Escape to a sanctuary of comfort and sophistication. Our hotel offers a perfect blend of timeless elegance and modern luxury, where every detail is designed to inspire relaxation. Whether you're here for a romantic getaway, a business retreat, or a weekend of self-care, experience exceptional service, serene surroundings, and unforgettable moments.</p>
                <div className={aboutCSS.Cards}>
                    <div className={aboutCSS.Cards}>
                        <p>1,000+ <span>Daily Visits</span></p>
                        <p>300k <span>Visitor Visits</span></p>
                        <p>1-2 <span>Weekly Events</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
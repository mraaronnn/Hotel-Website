import React from "react";
import ServicesCSS from './../Services/Services.module.css'

function Services() {
    return(
        <div className={`${ServicesCSS.Service_wrapper} section`}>
            <h2 className="section_Title"> Our <span> Services</span>:</h2>

            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi and Parking</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Room Amenities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Bed Room and Pool</p>
                    <p>- TV and AC</p>
                    <p>- Room Service</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-goblet-line"></i>
                    <h3>Dining Options</h3>
                    <p>- Restaurant Cafe</p>
                    <p>- Bar and Lounge</p>
                    <p>- Outdoor Patio</p>
                    <p>- Chef's Table</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className="ri-restaurant-line"></i>
                    <h3>Special Features</h3>
                    <p>- Custom Rooms</p>
                    <p>- Leisure Area</p>
                    <p>- Gym and Fitness Center</p>
                </div>
            </div>
        </div>
    )
}

export default Services
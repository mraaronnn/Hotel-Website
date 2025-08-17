import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer() {
    return (
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>HotelBrand</h2>
                    <p>Escape to a sanctuary of comfort and sophistication. Our hotel offers a perfect blend of timeless elegance and modern luxury, where every detail is designed to inspire relaxation. Whether you're here for a romantic getaway, a business retreat, or a weekend of self-care, experience exceptional service, serene surroundings, and unforgettable moments.</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.FooterLinks2}>
                    <h3>Quick Links</h3>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Rooms</p>
                    <p>Gym</p>
                    <p>Restaurant</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.FooterLinks2}>
                    <h3>Branches</h3>
                    <p>Manila</p>
                    <p>Quezon City</p>
                    <p>Makati City</p>
                    <p>Pasay City</p>
                    <p>Cebu City</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.FooterLinks2}>
                    <h3>Contact</h3>
                    <p>Address : 123 Street - Manila , Philippines</p>
                    <p>Email : Example@gmail.com</p>
                    <p>Phone : 1234567890</p>
                </div>
            </div>
            <div className={footerCSS.footer_bottom}>
                <p> By: Aaron Domingo</p>
            </div>
        </footer>
    )
}

export default Footer
import React, { useRef, useEffect } from "react";
import navCSS from './../Nav/Nav.module.css';

function Nav() {
    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                navbar.current.classList.add(navCSS.navbarScroll);
            } else {
                navbar.current.classList.remove(navCSS.navbarScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#"><span>Hotel</span>Brand</a>
            </div>

            <ul ref={menu}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#Rooms">Rooms</a></li>
                <li><a href="#Review">Reviews</a></li>
            </ul>

            <div className={navCSS.Nav_btns}>
                <button>Book Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    );
}

export default Nav;

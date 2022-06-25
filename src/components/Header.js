import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {

        color: "#0a58ca"
    };

    let activeClassName = "underline";
    return (
        <>
            <header className="main-header-two clearfix">
                <div className="main-header-two__top">
                    <div className="container">
                        <div className="main-header-two__top-inner">
                            <div className="main-header-two__top-left">
                                {/*  <p class="main-header-two__top-left-text">We provide complete home renovation services.</p> */}
                            </div>
                            <div className="main-header-two__top-right">
                                <div className="main-header-two__top-social">
                                    <a href="#"><i className="fab fa-facebook-square" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-linkedin" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-two__middle">
                    <div className="container">
                        <div className="main-header-two__middle-inner clearfix">
                            <div className="main-header-two__shape-1" />
                            <div className="main-header-two__shape-2" />
                            <div className="main-header-two__shape-3" />
                            <div className="main-header-two__shape-4" />
                            <div className="main-header-two__shape-5" />
                            <div className="main-header-two__shape-6" />
                            <div className="main-header-two__shape-7" />
                            <div className="main-header-two__logo">
                                <a href="index.html"><img src="assets/images/resources/icare.png" alt className="mainlogoheader" /></a>
                            </div>
                            <div className="main-header-two__address">
                                <ul className="list-unstyled main-header-two__address-list">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone-call" />
                                        </div>
                                        <div className="content">
                                            <p>Call Anytime</p>
                                            <h5><a href="tel:91(03224) 255275">+91(03224) 255275</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-message" />
                                        </div>
                                        <div className="content">
                                            <p>Send Email</p>
                                            <h5><a href="mailto:icare_haldia@rediffmail.com">icare_haldia@rediffmail.com</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location" />
                                        </div>
                                        <div className="content">
                                            <p>Address</p>
                                            <h5>ICARE Complex, HIT Campus, Haldia</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two clearfix">
                    <div className="main-menu-two__wrapper clearfix">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner clearfix">
                                <div className="main-menu-two__wrapper-inner-bg" />
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__main-menu-box">

                                        <a href="#" className="mobile-nav__toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i className="fa fa-bars" /></a>

                                        <ul className="main-menu__list">
                                            <li className="current">
                                                <a href="index.html">Home </a>
                                            </li>
                                            <li>
                                                <a href="about-us.html">About Icare</a>
                                            </li>
                                            <li>
                                                <a href="colleges.html">Colleges</a>
                                            </li>
                                            <li>
                                                <a href="courses.html">Courses</a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Academics</a>
                                            </li>
                                            <li>
                                                <a href="admission.html">Admission</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__search-box">
                                        <a href="#" className="main-menu-two__search search-toggler icon-magnifying-glass" />
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <a href="contact.html" className="thm-btn main-menu-two__btn"> <i className="fa fa-arrow-right" /> Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>




                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                        </div>
                        <div class="dropdown mt-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="stricky-header stricked-menu main-menu main-menu-two">
                <div className="sticky-header__content" />{/* /.sticky-header__content */}
            </div>{/* /.stricky-header */}
        </>
    );
};

export default Header;
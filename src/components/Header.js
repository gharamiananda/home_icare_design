import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/resources/icare.png'

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
                                <Link to="/"><img src={logo} alt className="mainlogoheader" /></Link>
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
                                            <li >
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/">Home </NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/about">About </NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/collages">Colleges</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/courses">Courses</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/academics">Academics</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/admission">Admission</NavLink>
                                            </li>
                                            <li>
                                                <NavLink style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                } to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__search-box">
                                        <a href="#" className="main-menu-two__search search-toggler icon-magnifying-glass" />
                                    </div>
                                    <div className="main-menu-two__btn-box">
                                        <Link to="/contact" className="thm-btn main-menu-two__btn"> <i className="fa fa-arrow-right" /> Enquiry</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>






                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                    <div class="offcanvas-header">
                        <div class="logo-box">
                            <a href="index.html" aria-label="logo image"><img src="assets/images/resources/icare-white.png" width="143" alt="" /></a>
                        </div>

                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">


                        <div class="mobile-nav__container"><ul class="main-menu__list">
                            <li >
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/">Home </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/about">About </NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/collages">Colleges</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/courses">Courses</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/academics">Academics</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/admission">Admission</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        </div>

                        <ul class="mobile-nav__contact list-unstyled">
                            <li>
                                <i class="fa fa-envelope"></i>
                                <a href="mailto:needhelp@packageName__.com">needhelp@roofsie.com</a>
                            </li>
                            <li>
                                <i class="fa fa-phone-alt"></i>
                                <a href="tel:666-888-0000">666 888 0000</a>
                            </li>
                        </ul>

                        <div class="mobile-nav__top">
                            <div class="mobile-nav__social">
                                <a href="#" class="fab fa-twitter"></a>
                                <a href="#" class="fab fa-facebook-square"></a>
                                <a href="#" class="fab fa-pinterest-p"></a>
                                <a href="#" class="fab fa-instagram"></a>
                            </div>
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
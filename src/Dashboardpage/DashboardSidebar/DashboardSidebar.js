import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './DashboardSidebar.css'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


const DashboardSidebar = ({ children }) => {

    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            {/*wrapper*/}
            <div className="wrapper">
                {/*sidebar wrapper */}
                <div className="sidebar-wrapper" data-simplebar="true">
                    <div className="sidebar-header">
                        <div>
                            <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                        </div>
                        <div>
                            <h4 className="logo-text">ICare</h4>
                        </div>
                        <div className="toggle-icon ms-auto"><i className="bx bx-first-page" />
                        </div>
                    </div>
                    {/*navigation*/}
                    <ul className="metismenu" id="menu">

                        <li className="menu-label">Main</li>

                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="bx bx-cart-alt" />
                                </div>
                                <div className="menu-title">Homepage</div>
                            </a>
                            <ul>
                                <li> <Link to="/dashboard/add-banner"><i className="bx bx-right-arrow-alt" />Add Banner</Link>
                                </li>
                                <li> <Link to="/dashboard/add-feature"><i className="bx bx-right-arrow-alt" />Add Top Feature</Link>
                                </li>
                                <li> <Link to="/dashboard/add-testimonial"><i className="bx bx-right-arrow-alt" />Add Testimonial</Link>
                                </li>
                                <li> <Link to="/dashboard/add-certificate"><i className="bx bx-right-arrow-alt" />Add Certificate</Link>
                                </li>


                                <li> <Link to="/dashboard/add-about"><i className="bx bx-right-arrow-alt" />Add About</Link>
                                </li>
                                <li> <Link to="/dashboard/add-overview"><i className="bx bx-right-arrow-alt" />Add Overview</Link>
                                </li>
                                <li> <Link to="/dashboard/add-chooseus "><i className="bx bx-right-arrow-alt" />Add Why choose Us</Link>
                                </li>
                                <li> <Link to="/dashboard/add-collage"><i className="bx bx-right-arrow-alt" />Add Collage</Link>
                                </li>
                                <li> <Link to="/dashboard/add-course"><i className="bx bx-right-arrow-alt" />Add Courses</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="bx bx-gift" />
                                </div>
                                <div className="menu-title">About Icare</div>
                            </a>
                            <ul>
                                <li> <Link to="/dashboard/add-vision-mision"><i className="bx bx-right-arrow-alt" />Add Mission & Vision</Link>
                                </li>
                                <li> <a href="component-accordions.html"><i className="bx bx-right-arrow-alt" />Accordions</a>
                                </li>
                                <li> <a href="component-badges.html"><i className="bx bx-right-arrow-alt" />Badges</a>
                                </li>
                                <li> <a href="component-buttons.html"><i className="bx bx-right-arrow-alt" />Buttons</a>
                                </li>
                                <li> <a href="component-cards.html"><i className="bx bx-right-arrow-alt" />Cards</a>
                                </li>
                                <li> <a href="component-carousels.html"><i className="bx bx-right-arrow-alt" />Carousels</a>
                                </li>
                                <li> <a href="component-list-groups.html"><i className="bx bx-right-arrow-alt" />List Groups</a>
                                </li>
                                <li> <a href="component-media-object.html"><i className="bx bx-right-arrow-alt" />Media Objects</a>
                                </li>
                                <li> <a href="component-modals.html"><i className="bx bx-right-arrow-alt" />Modals</a>
                                </li>
                                <li> <a href="component-navs-tabs.html"><i className="bx bx-right-arrow-alt" />Navs &amp; Tabs</a>
                                </li>
                                <li> <a href="component-navbar.html"><i className="bx bx-right-arrow-alt" />Navbar</a>
                                </li>
                                <li> <a href="component-paginations.html"><i className="bx bx-right-arrow-alt" />Pagination</a>
                                </li>
                                <li> <a href="component-popovers-tooltips.html"><i className="bx bx-right-arrow-alt" />Popovers &amp; Tooltips</a>
                                </li>
                                <li> <a href="component-progress-bars.html"><i className="bx bx-right-arrow-alt" />Progress</a>
                                </li>
                                <li> <a href="component-spinners.html"><i className="bx bx-right-arrow-alt" />Spinners</a>
                                </li>
                                <li> <a href="component-notifications.html"><i className="bx bx-right-arrow-alt" />Notifications</a>
                                </li>
                                <li> <a href="component-avtars-chips.html"><i className="bx bx-right-arrow-alt" />Avatrs &amp; Chips</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="bx bx-command" />
                                </div>
                                <div className="menu-title">Collages</div>
                            </a>
                            <ul>
                                <li> <a href="content-grid-system.html"><i className="bx bx-right-arrow-alt" />Grid System</a>
                                </li>
                                <li> <a href="content-typography.html"><i className="bx bx-right-arrow-alt" />Typography</a>
                                </li>
                                <li> <a href="content-text-utilities.html"><i className="bx bx-right-arrow-alt" />Text Utilities</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"> <i className="bx bx-atom" />
                                </div>
                                <div className="menu-title">Courses</div>
                            </a>
                            <ul>
                                <li> <a href="icons-line-icons.html"><i className="bx bx-right-arrow-alt" />Line Icons</a>
                                </li>
                                <li> <a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" />Boxicons</a>
                                </li>
                                <li> <a href="icons-feather-icons.html"><i className="bx bx-right-arrow-alt" />Feather Icons</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"> <i className="bx bx-atom" />
                                </div>
                                <div className="menu-title">Academics</div>
                            </a>
                            <ul>
                                <li> <a href="icons-line-icons.html"><i className="bx bx-right-arrow-alt" />Line Icons</a>
                                </li>
                                <li> <a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" />Boxicons</a>
                                </li>
                                <li> <a href="icons-feather-icons.html"><i className="bx bx-right-arrow-alt" />Feather Icons</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"> <i className="bx bx-atom" />
                                </div>
                                <div className="menu-title">Admission</div>
                            </a>
                            <ul>
                                <li> <a href="icons-line-icons.html"><i className="bx bx-right-arrow-alt" />Line Icons</a>
                                </li>
                                <li> <a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" />Boxicons</a>
                                </li>
                                <li> <a href="icons-feather-icons.html"><i className="bx bx-right-arrow-alt" />Feather Icons</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"> <i className="bx bx-atom" />
                                </div>
                                <div className="menu-title">Contact Us</div>
                            </a>
                            <ul>
                                <li> <a href="icons-line-icons.html"><i className="bx bx-right-arrow-alt" />Line Icons</a>
                                </li>
                                <li> <a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" />Boxicons</a>
                                </li>
                                <li> <a href="icons-feather-icons.html"><i className="bx bx-right-arrow-alt" />Feather Icons</a>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <a href="https://themeforest.net/user/codervent" target="_blank">
                                <div className="parent-icon"><i className="bx bx-headphone" />
                                </div>
                                <div className="menu-title">Support</div>
                            </a>
                        </li>
                    </ul>
                    {/*end navigation*/}
                </div>
                {/*end sidebar wrapper */}
                {/*start header */}
                <header>
                    <div className="topbar d-flex align-items-center bg-dark shadow-none border-light-2 border-bottom">
                        <nav className="navbar navbar-expand">
                            <div className="mobile-toggle-menu text-white me-3"><i className="bx bx-menu" />
                            </div>
                            {/* <div className="top-menu-left d-none d-lg-block">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-emailbox.html"><i className="bx bx-envelope" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-chat-box.html"><i className="bx bx-message" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-fullcalender.html"><i className="bx bx-calendar" /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="app-to-do.html"><i className="bx bx-check-square" /></a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="search-bar flex-grow-1">
                                <div className="position-relative search-bar-box">
                                    {/* <form>
                                        <input type="text" className="form-control search-control" autofocus placeholder="Type to search..." /> <span className="position-absolute top-50 search-show translate-middle-y"><i className="bx bx-search" /></span>
                                        <span className="position-absolute top-50 search-close translate-middle-y"><i className="bx bx-x" /></span>
                                    </form> */}
                                </div>
                            </div>
                            <div className="top-menu ms-auto">
                                <ul className="navbar-nav align-items-center">
                                    <li className="nav-item mobile-search-icon">
                                        {/* <a className="nav-link text-white" href="javascript:;">	<i className="bx bx-search" />
                                        </a> */}
                                    </li>
                                    <li className="nav-item dropdown dropdown-large">
                                        {/* <a className="nav-link dropdown-toggle dropdown-toggle-nocaret text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">	<i className="bx bx-category" />
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div className="row row-cols-3 g-3 p-3">
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-cosmic text-white"><i className="bx bx-group" />
                                                    </div>
                                                    <div className="app-title">Teams</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-burning text-white"><i className="bx bx-atom" />
                                                    </div>
                                                    <div className="app-title">Projects</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-lush text-white"><i className="bx bx-shield" />
                                                    </div>
                                                    <div className="app-title">Tasks</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-kyoto text-dark"><i className="bx bx-notification" />
                                                    </div>
                                                    <div className="app-title">Feeds</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-blues text-dark"><i className="bx bx-file" />
                                                    </div>
                                                    <div className="app-title">Files</div>
                                                </div>
                                                <div className="col text-center">
                                                    <div className="app-box mx-auto bg-gradient-moonlit text-white"><i className="bx bx-filter-alt" />
                                                    </div>
                                                    <div className="app-title">Alerts</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-large">
                                        {/* <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">7</span>
                                            <i className="bx bx-bell" />
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:;">
                                                <div className="msg-header">
                                                    <p className="msg-header-title">Notifications</p>
                                                    <p className="msg-header-clear ms-auto">Marks all as read</p>
                                                </div>
                                            </a>
                                            <div className="header-notifications-list">
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-primary text-primary"><i className="bx bx-group" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Customers<span className="msg-time float-end">14 Sec
                                                                ago</span></h6>
                                                            <p className="msg-info">5 new user registered</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-danger text-danger"><i className="bx bx-cart-alt" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Orders <span className="msg-time float-end">2 min
                                                                ago</span></h6>
                                                            <p className="msg-info">You have recived new orders</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-success text-success"><i className="bx bx-file" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">24 PDF File<span className="msg-time float-end">19 min
                                                                ago</span></h6>
                                                            <p className="msg-info">The pdf files generated</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-warning text-warning"><i className="bx bx-send" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Time Response <span className="msg-time float-end">28 min
                                                                ago</span></h6>
                                                            <p className="msg-info">5.1 min avarage time response</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-info text-info"><i className="bx bx-home-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Product Approved <span className="msg-time float-end">2 hrs ago</span></h6>
                                                            <p className="msg-info">Your new product has approved</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-danger text-danger"><i className="bx bx-message-detail" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New Comments <span className="msg-time float-end">4 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">New customer comments recived</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-success text-success"><i className="bx bx-check-square" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Your item is shipped <span className="msg-time float-end">5 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">Successfully shipped your item</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-primary text-primary"><i className="bx bx-user-pin" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">New 24 authors<span className="msg-time float-end">1 day
                                                                ago</span></h6>
                                                            <p className="msg-info">24 new authors joined last week</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="notify bg-light-warning text-warning"><i className="bx bx-door-open" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Defense Alerts <span className="msg-time float-end">2 weeks
                                                                ago</span></h6>
                                                            <p className="msg-info">45% less alerts last 4 weeks</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="javascript:;">
                                                <div className="text-center msg-footer">View All Notifications</div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-large">
                                        {/* <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">8</span>
                                            <i className="bx bx-comment" />
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:;">
                                                <div className="msg-header">
                                                    <p className="msg-header-title">Messages</p>
                                                    <p className="msg-header-clear ms-auto">Marks all as read</p>
                                                </div>
                                            </a>
                                            <div className="header-message-list">
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-1.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Daisy Anderson <span className="msg-time float-end">5 sec
                                                                ago</span></h6>
                                                            <p className="msg-info">The standard chunk of lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-2.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Althea Cabardo <span className="msg-time float-end">14
                                                                sec ago</span></h6>
                                                            <p className="msg-info">Many desktop publishing packages</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-3.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Oscar Garner <span className="msg-time float-end">8 min
                                                                ago</span></h6>
                                                            <p className="msg-info">Various versions have evolved over</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-4.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Katherine Pechon <span className="msg-time float-end">15
                                                                min ago</span></h6>
                                                            <p className="msg-info">Making this the first true generator</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-5.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Amelia Doe <span className="msg-time float-end">22 min
                                                                ago</span></h6>
                                                            <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-6.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Cristina Jhons <span className="msg-time float-end">2 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">The passage is attributed to an unknown</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-7.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">James Caviness <span className="msg-time float-end">4 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">The point of using Lorem</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-8.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Peter Costanzo <span className="msg-time float-end">6 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">It was popularised in the 1960s</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-9.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">David Buckley <span className="msg-time float-end">2 hrs
                                                                ago</span></h6>
                                                            <p className="msg-info">Various versions have evolved over</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-10.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Thomas Wheeler <span className="msg-time float-end">2 days
                                                                ago</span></h6>
                                                            <p className="msg-info">If you are going to use a passage</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="javascript:;">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-online">
                                                            <img src="assets/images/avatars/avatar-11.png" className="msg-avatar" alt="user avatar" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h6 className="msg-name">Johnny Seitz <span className="msg-time float-end">5 days
                                                                ago</span></h6>
                                                            <p className="msg-info">All the Lorem Ipsum generators</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a href="javascript:;">
                                                <div className="text-center msg-footer">View All Messages</div>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-box dropdown border-light-2">
                                <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="assets-dashboard/images/avatars/avatar-2.png" className="user-img" alt="user avatar" />
                                    <div className="user-info ps-3">
                                        <p className="user-name mb-0 text-white">Pauline Seitz</p>
                                        <p className="designattion mb-0">Web Designer</p>
                                    </div>
                                </a>


                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-user" /><span>Profile</span></a>
                                    </li>
                                    {/* <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-cog" /><span>Settings</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-home-circle" /><span>Dashboard</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-dollar-circle" /><span>Earnings</span></a>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-download" /><span>Downloads</span></a>
                                    </li> */}
                                    <li>
                                        <div className="dropdown-divider mb-0" />
                                    </li>
                                    <li><button onClick={logout} className="dropdown-item" ><i className="bx bx-log-out-circle" /><span>Logout</span></button>
                                    </li>
                                </ul>














                            </div>
                        </nav>
                    </div>
                </header>
                {/*end header */}
                {/*start page wrapper */}
                <div className="page__wrapper__dashboard">
                    {children}
                </div>
                {/*end page wrapper */}
                {/*start overlay*/}
                <div className="search-overlay" />
                <div className="overlay toggle-icon" />
                {/*end overlay*/}
                {/*Start Back To Top Button*/} <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
                {/*End Back To Top Button*/}
                <footer className="page-footer">
                    <p className="mb-0">Copyright © 2021. All right reserved.</p>
                </footer>
            </div>
            {/*end wrapper*/}
            {/*start switcher*/}
            <div className="switcher-wrapper">
                <div className="switcher-btn"> <i className="bx bx-cog bx-spin" />
                </div>
                <div className="switcher-body">
                    <div className="d-flex align-items-center">
                        <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
                        <button type="button" className="btn-close ms-auto close-switcher" aria-label="Close" />
                    </div>
                    <hr />
                    <h6 className="mb-0">Theme Styles</h6>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="lightmode" defaultChecked />
                            <label className="form-check-label" htmlFor="lightmode">Light</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="darkmode" />
                            <label className="form-check-label" htmlFor="darkmode">Dark</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="semidark" />
                            <label className="form-check-label" htmlFor="semidark">Semi Dark</label>
                        </div>
                    </div>
                    <hr />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="minimaltheme" name="flexRadioDefault" />
                        <label className="form-check-label" htmlFor="minimaltheme">Minimal Theme</label>
                    </div>
                    <hr />
                    <h6 className="mb-0">Header Colors</h6>
                    <hr />
                    <div className="header-colors-indigators">
                        <div className="row row-cols-auto g-3">
                            <div className="col">
                                <div className="indigator headercolor1" id="headercolor1" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor2" id="headercolor2" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor3" id="headercolor3" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor4" id="headercolor4" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor5" id="headercolor5" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor6" id="headercolor6" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor7" id="headercolor7" />
                            </div>
                            <div className="col">
                                <div className="indigator headercolor8" id="headercolor8" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h6 className="mb-0">Sidebar Backgrounds</h6>
                    <hr />
                    <div className="header-colors-indigators">
                        <div className="row row-cols-auto g-3">
                            <div className="col">
                                <div className="indigator sidebarcolor1" id="sidebarcolor1" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor2" id="sidebarcolor2" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor3" id="sidebarcolor3" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor4" id="sidebarcolor4" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor5" id="sidebarcolor5" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor6" id="sidebarcolor6" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor7" id="sidebarcolor7" />
                            </div>
                            <div className="col">
                                <div className="indigator sidebarcolor8" id="sidebarcolor8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end switcher*/}
        </div>
    );
};

export default DashboardSidebar;
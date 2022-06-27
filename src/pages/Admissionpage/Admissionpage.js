import React from 'react';
import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';

const Admissionpage = () => {
    return (
        <>

            <Header />
            <div>
                {/*Page Header Start*/}
                <section className="page-header">
                    <div className="page-header-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/main1.jpg)' }}>
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><span>/</span></li>
                                <li>Admission</li>
                            </ul>
                            <h2>Our Admission</h2>
                        </div>
                    </div>
                </section>
                {/*Page Header End*/}
                <section className="about-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-two__left">
                                    <div className="section-title text-left">
                                        <div className="section-sub-title-box">
                                            <p className="section-sub-title">Admission</p>
                                            <div className="section-title-shape-1">
                                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                            </div>
                                        </div>
                                        <h2 className="section-title__title">We’re committed to education exellence</h2>
                                    </div>
                                    <ul className="list-unstyled about-three__point">
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check" />
                                            </div>
                                            <div className="text">
                                                <p>Admission process to be published soon.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa-check" />
                                            </div>
                                            <div className="text">
                                                <p>You can download our brochure and form for respective colleges</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-two__right">
                                    <div className="about-two__img-box wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                        <div className="about-two__img">
                                            <img src="assets/images/resources/admision.jpg" alt />
                                        </div>
                                        <div className="about-two__img-two">
                                            <img src="assets/images/resources/admision1.jpg" alt />
                                        </div>
                                        <div className="about-two__line">
                                            <img src="assets/images/shapes/about-two-line.png" alt />
                                        </div>
                                        <div className="about-two__shape-1" />
                                        <div className="about-two__practice-year">
                                            <div className="about-two__practice-year-inner">
                                                <div className="about-two__practice-year-shape">
                                                    <img src="assets/images/shapes/about-two-practice-year-shape.png" alt />
                                                </div>
                                                <div className="about-two__practice-year-content">
                                                    <h3>20</h3>
                                                    <p>Years of <br /> experience</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Testimonial />
            <Awards />
            <Footer />
        </>
    );
};

export default Admissionpage;
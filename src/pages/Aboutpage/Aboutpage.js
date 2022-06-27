import React from 'react';
import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeAbout from '../../components/HomeAbout';
import Testimonial from '../../components/Testimonial';

const Aboutpage = () => {
    return (
        <>
            <div>

                <Header />
                {/*Page Header Start*/}
                <section className="page-header">
                    <div className="page-header-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/main1.jpg)' }}>
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><span>/</span></li>
                                <li>About</li>
                            </ul>
                            <h2>About us</h2>
                        </div>
                    </div>
                </section>
                {/*Page Header End*/}
                {/*About One Start*/}
                <HomeAbout />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 vismison_outsection">
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">Mission</p>
                                    <div className="section-title-shape-1">
                                        <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                    </div>
                                </div>
                            </div>
                            <p className="icareinner_abouttext">
                                To establish and run institutions of higher education in engineering, technology, management, paramedical, medical and other professional courses with the aim of making the Haldia a center for education and training to enable the students to pursue careers of their choice and to obviate the need to travel long distances for fulfilling their aspirations and to enable them to meet the challenge of globalization by fully utilizing the facilities created by ICARE as a gateway to a bright future.
                            </p>
                            <ul className="mvlstarea">
                                <li>
                                    <span className="icon-confirmation" />
                                    To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                                </li>
                            </ul>
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">Vision</p>
                                    <div className="section-title-shape-1">
                                        <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                    </div>
                                </div>
                            </div>
                            <p className="icareinner_abouttext">
                                To be a leading organization for providing education in the fields of technology, management, medical, paramedical science etc., for the socio-economic development of the region creating centers of excellence in education so as to provide value based education of international standards to all segments of society and to stand by the weaker segments of society.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ===============mission & vision======================== */}


                <Testimonial />
                <Awards />
                <Footer />
            </div>

        </>
    );
};

export default Aboutpage;
import React, { useEffect, useState } from 'react';

import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import './OurCollage.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Collage = () => {
    const [collages, setCollages] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/collage_home')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, []);
    console.log(collages)

    return (
        <section className="services-carousel-page">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-sub-title-box">
                        <p className="section-sub-title">Our Colleges</p>
                        <div className="section-title-shape-1">
                            <img src="assets/images/shapes/section-title-shape-1.png" alt />
                        </div>
                    </div>
                </div>



                <div className=' banner_nav_fix px-4' >

                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay, Pagination, A11y]}
                        spaceBetween={50}


                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}

                    >
                        <SwiperSlide className="item">

                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/services/clg1.jpg" alt />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><i className="fas fa-university" /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className='item'>
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/services/clg2.jpg" alt />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><i className="fas fa-university" /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">ICARE Institute of Medical Science &amp; Research &amp; Dr.Bidhan Chandra Roy Hospital</a></h3>
                                    <p className="services-one__text clgdescription">IIMSR has started its journey from the Year 2011 for MBBS Course.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">

                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/services/clg1.jpg" alt />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><i className="fas fa-university" /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">Haldia Institute of Technology</a></h3>
                                    <p className="services-one__text clgdescription">HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/services/clg2.jpg" alt />
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__icon">
                                        <span><i className="fas fa-university" /></span>
                                    </div>
                                    <h3 className="services-one__title"><a href="#">ICARE Institute of Medical Science &amp; Research &amp; Dr.Bidhan Chandra Roy Hospital</a></h3>
                                    <p className="services-one__text clgdescription">IIMSR has started its journey from the Year 2011 for MBBS Course.</p>
                                    <div className="services-one__read-more">
                                        <a href="college-details.html">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>


            </div>
        </section>
    );
};

export default Collage;
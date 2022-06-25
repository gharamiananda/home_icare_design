import React, { useEffect, useState } from 'react';


import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonial_home')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    console.log(testimonial)
    return (
        <section className="testimonial-one">
            <div className="testimonial-one-shape" style={{ backgroundImage: 'url(assets/images/shapes/testimonial-one-shape-dark.png)' }} />
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-sub-title-box">
                        <p className="section-sub-title">testimonials</p>
                        <div className="section-title-shape-1">
                            <img src="assets/images/shapes/section-title-shape-1.png" alt />
                        </div>
                    </div>
                    <h2 className="section-title__title">What they’re talking <br /> about us</h2>
                </div>
                <div className=' banner_nav_fix pe-3'>
                    <Swiper
                        className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
                        // install Swiper modules
                        modules={[Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}


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
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}

                    >

                        <SwiperSlide className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/student.png" alt />
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-details">
                                        <h4 className="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p className="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p className="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div className="testimonial-one__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                            </div>



                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/student.png" alt />
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-details">
                                        <h4 className="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p className="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p className="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div className="testimonial-one__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                            </div>



                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/student.png" alt />
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-details">
                                        <h4 className="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p className="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p className="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div className="testimonial-one__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                            </div>



                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/student.png" alt />
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-details">
                                        <h4 className="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p className="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p className="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div className="testimonial-one__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                            </div>



                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img-box">
                                        <div className="testimonial-one__client-img">
                                            <img src="assets/images/testimonial/student.png" alt />
                                        </div>
                                    </div>
                                    <div className="testimonial-one__client-details">
                                        <h4 className="testimonial-one__client-name fedbacknamedesign">Priti Das</h4>
                                        <p className="testimonial-one__client-sub-title">Student</p>
                                    </div>
                                </div>
                                <p className="testimonial-one__text fedbackdescritiontext">5 stars for design quality, but also for prompt new customer service and great attention to details work.</p>
                                <div className="testimonial-one__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                            </div>



                        </SwiperSlide>





                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;
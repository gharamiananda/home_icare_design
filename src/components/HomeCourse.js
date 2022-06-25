import React from 'react';


import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import './OurCollage.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const HomeCourse = () => {
    return (
        <section className="project-one">
            <div className="project-one__top">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title">Courses Offered</p>
                            <div className="section-title-shape-1">
                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                            </div>
                        </div>
                        <h2 className="section-title__title">There are the following ten <br /> departments under faculties.</h2>
                    </div>
                </div>
            </div>


            <div className="project-one__bottom">

                <Swiper
                    className="project-one__carousel owl-carousel owl-theme thm-owl__carousel"
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
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}

                >

                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">






                                    <img src="assets/images/gallery/gallery-page-1.jpg" alt="gallery-img3-1.jpg" />






                                </div>
                                <div className="project-one__content">
                                    <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                    </h4>
                                </div>
                                <div className="project-one__link">
                                    <a className="img-popup" data-fancybox="gallery2" href="assets/images/gallery/gallery-page-1.jpg"><i className="fa fa-link" /></a>
                                </div>
                            </div>
                        </div>



                    </SwiperSlide>


                </Swiper>


            </div>
        </section>

    );
};

export default HomeCourse;
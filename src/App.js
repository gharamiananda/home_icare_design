import logo from './logo.svg';
import './App.css';
// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return (
    <>
      <div className="page-wrapper">
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
                        <h5>ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia</h5>
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
                      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="fa fa-bars" />
                      </a>
                      <a href="#" className="mobile-nav__toggler" ><i className="fa fa-bars" /></a>

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
        </header>
        <div className="stricky-header stricked-menu main-menu main-menu-two">
          <div className="sticky-header__content" />{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        {/*Main Slider Start*/}
        <section className="main-slider clearfix">



          <Swiper
            className="swiper-container thm-swiper__slider"
            // install Swiper modules
            modules={[Autoplay, Navigation, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/backgrounds/main1.jpg)' }} />
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">Our Progression</p>
                        <h2 className="main-slider__title">Prosper in this volatile market funding.</h2>
                        <p className="main-slider__text">Collaborate Consulting exists to find the place where to being  <br /> seemingly disparate interests meet.</p>
                        <div className="main-slider__btn-box">
                          <a href="colleges.html" className="thm-btn main-slider__btn"> <i className="fa fa-arrow-right" /> Discover more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/backgrounds/main2.jpg)' }} />
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">Our Progression</p>
                        <h2 className="main-slider__title">Prosper in this volatile market funding.</h2>
                        <p className="main-slider__text">Collaborate Consulting exists to find the place where to being  <br /> seemingly disparate interests meet.</p>
                        <div className="main-slider__btn-box">
                          <a href="colleges.html" className="thm-btn main-slider__btn"> <i className="fa fa-arrow-right" /> Discover more</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="image-layer" style={{ backgroundImage: 'url(assets/images/backgrounds/main1.jpg)' }} />
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="main-slider__content">
                        <p className="main-slider__sub-title">Our Progression</p>
                        <h2 className="main-slider__title">Prosper in this volatile market funding.</h2>
                        <p className="main-slider__text">Collaborate Consulting exists to find the place where to being  <br /> seemingly disparate interests meet.</p>
                        <div className="main-slider__btn-box">
                          <a href="colleges.html" className="thm-btn main-slider__btn"> <i className="fa fa-arrow-right" /> Discover more</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div></SwiperSlide>

            </div>
          </Swiper>

        </section>
        {/*Feature One Start*/}
        <section className="feature-one">
          <div className="container">
            <div className="feature-one__inner">
              <div className="feature-one__dot">
                <img src="assets/images/shapes/feature-one-dot.png" alt />
              </div>
              <div className="row">
                {/*Feature One Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                  <div className="feature-one__single">
                    <div className="feature-one__top">
                      <div className="feature-one__icon">
                        <span className="icon-roof-5"><i className="fas fa-rupee-sign uicondesign" /></span>
                      </div>
                      <div className="feature-one__title-box">
                        <h3 className="feature-one__title"><a href="about.html">Affordable <br /> Tuition</a></h3>
                      </div>
                    </div>
                    <div className="feature-one__single-inner">
                      <p className="feature-one__text">Highly competitive rates yet, located in heart of the Nation's Capital.</p>
                      <div className="feature-one__read-more">
                        <a href="about.html">Read More <i className="fa fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                  <div className="feature-one__single">
                    <div className="feature-one__top">
                      <div className="feature-one__icon">
                        <span className="icon-roof-5"><i className="fas fa-bullseye uicondesign1" /></span>
                      </div>
                      <div className="feature-one__title-box">
                        <h3 className="feature-one__title"><a href="team.html">Success <br /> Driven</a></h3>
                      </div>
                    </div>
                    <div className="feature-one__single-inner">
                      <p className="feature-one__text">The experiential learning ensures professional student success.</p>
                      <div className="feature-one__read-more">
                        <a href="team-details.html">Read More <i className="fa fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                  <div className="feature-one__single">
                    <div className="feature-one__top">
                      <div className="feature-one__icon">
                        <span className="icon-roof-5"><i className="fas fa-handshake uicondesign2" /></span>
                      </div>
                      <div className="feature-one__title-box">
                        <h3 className="feature-one__title"><a href="contact.html">Business <br /> Partners</a></h3>
                      </div>
                    </div>
                    <div className="feature-one__single-inner">
                      <p className="feature-one__text">Align with internationally-recognized businesses every step.</p>
                      <div className="feature-one__read-more">
                        <a href="contact.html">Read More <i className="fa fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Feature One Single End*/}
              </div>
            </div>
          </div>
        </section>
        {/*Feature One End*/}
        {/*About One Start*/}
        <section className="about-one">
          <div className="about-one__shape float-bob-x">
            <img src="assets/images/shapes/about-one-shape.png" alt />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="about-one__left">
                  <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-one__img">
                      <img src="assets/images/resources/iabout1.jpg" alt />
                    </div>
                    <div className="about-one__line">
                      <img src="assets/images/shapes/about-one-line.png" alt />
                    </div>
                    <div className="about-one__satisfied">
                      <div className="about-one__satisfied-inner">
                        <div className="about-one__satisfied-shape">
                          <img src="assets/images/shapes/about-one-satisfied-shape-1.png" alt />
                        </div>
                        <div className="about-one__satisfied-content">
                          <div className="about-one__satisfied-count-box">
                            <h3 className="odometer" data-count={98}>00</h3>
                            <span className="about-one__satisfied-percent">%</span>
                          </div>
                          <p className="about-one__satisfied-text">Satisfied Students</p>
                        </div>
                      </div>
                    </div>
                    <div className="about-one__big-text">icare</div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <div className="section-sub-title-box">
                      <p className="section-sub-title">About US</p>
                      <div className="section-title-shape-1">
                        <img src="assets/images/shapes/section-title-shape-1.png" alt />
                      </div>
                    </div>
                    <h2 className="section-title__title">Indian Center for Advance - ment of Research and Education, Haldia (ICARE)</h2>
                  </div>
                  <p className="about-one__text">set up in 1995, is a non-profit making voluntary organization. ICARE is solely dedicated to promote, establish, run and maintain educational institutions of excellence</p>
                  <p className="about-one__text">for development of infrastructural facilities at Haldia in the field of education to keep pace with the rapid industrial development in this region.</p>
                  <div className="yl-about-qoute">
                    <span>"A University needs to be a centre of excellence
                      for pursuit of knowledge."</span>
                    <div className="yl-quote-author yl-headline">
                      <h4><a href="#">Mr Lakshman Seth</a></h4>
                      <span>Chairman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About One End*/}
        {/*Why Choose Two Start*/}
        <section className="why-choose-two">
          <div className="why-choose-two-bg" style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-two-bg.jpg)' }} />
          <div className="container">
            <div className="section-title text-center">
              <div className="section-sub-title-box">
                <p className="section-sub-title">why choose us</p>
                <div className="section-title-shape-1">
                  <img src="assets/images/shapes/section-title-shape-1.png" alt />
                </div>
              </div>
              <h2 className="section-title__title reshead">Few reasons to choose <br /> our college</h2>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="why-choose-two__left">
                  <ul className="list-unstyled why-choose-two__list-one">
                    <li>
                      <div className="icon">
                        <span className><i className="fas fa-chalkboard-teacher newdesignwcu" /></span>
                      </div>
                      <div className="content">
                        <h4>Experienced Faculty</h4>
                        {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                      </div>
                    </li>
                    <li className="qedusection">
                      <div className="icon">
                        <span className><i className="fas fa-book newdesignwcu" /></span>
                      </div>
                      <div className="content">
                        <h4>Quality Education</h4>
                        {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="why-choose-two__middle">
                  <div className="why-choose-two__img-box">
                    <div className="why-choose-two__img-one">
                      <img src="assets/images/resources/why-choose-haldiacollege.jpg" alt />
                      {/* <div class="why-choose-two__img-two">
                    <img src="assets/images/resources/why-choose-haldiacollege.jpg" alt="">
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="why-choose-two__right">
                  <ul className="list-unstyled why-choose-two__list-two clearfix">
                    <li className="clearfix">
                      <div className="content">
                        <h4>22 Colleges</h4>
                        {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                      </div>
                      <div className="icon">
                        <span className><i className="fas fa-university newdesignwcu" /></span>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="content">
                        <h4>Job Guarantee</h4>
                        {/* <p>In a free hour when our power of choice is untrammelled and when nothing
                    prevents.</p>
                  <div class="why-choose-two__read-more">
                    <a href="about.html">Read More <i class="fa fa-arrow-right"></i> </a>
                  </div> */}
                      </div>
                      <div className="icon">
                        <span className><i className="fas fa-briefcase newdesignwcu" /></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Why Choose Two End*/}
        {/*COURSES Start*/}
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
            <div className="project-one__bottom-wrapper">
              <div className="project-one__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options="{
                  &quot;loop&quot;: true,
                  &quot;autoplay&quot;: true,
                  &quot;margin&quot;: 30,
                  &quot;nav&quot;: false,
                  &quot;dots&quot;: true,
                  &quot;smartSpeed&quot;: 500,
                  &quot;autoplayTimeout&quot;: 10000,
                  &quot;navText&quot;: [&quot;<span class=\&quot;fa fa-angle-left\&quot;></span>&quot;,&quot;<span class=\&quot;fa fa-angle-right\&quot;></span>&quot;],
                  &quot;responsive&quot;: {
                      &quot;0&quot;: {
                          &quot;items&quot;: 1
                      },
                      &quot;768&quot;: {
                          &quot;items&quot;: 2
                      },
                      &quot;992&quot;: {
                          &quot;items&quot;: 3
                      },
                      &quot;1200&quot;: {
                          &quot;items&quot;: 4
                      }
                  }
              }">

                {/*Project One Single Start*/}
                <div className="item">
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
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses2.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">MTech</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses2.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses3.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">BTech</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses3.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses2.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">B.B.A</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses2.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses1.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">B.Sc. in Nautical Science</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses1.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">LL.B</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses3.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">Diploma in Engineering</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses3.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses2.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">Nursing</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses2.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">B.Ed</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses2.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">MBBS</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses2.jpg" data-fancybox="gallery2"><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
                {/*Project One Single Start*/}
                <div className="item">
                  <div className="project-one__single">
                    <div className="project-one__img-box">
                      <div className="project-one__img">
                        <img src="assets/images/project/icare-courses3.jpg" alt />
                      </div>
                      <div className="project-one__content">
                        <h4 className="project-one__title"><a href="work-details.html">B.D.S</a>
                        </h4>
                      </div>
                      <div className="project-one__link">
                        <a className="img-popup" href="assets/images/project/icare-courses3.jpg" data-fancybox="gallery2" ><i className="fa fa-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project One Single End*/}
              </div>
            </div>
          </div>
        </section>
        {/*COURSES  End*/}
        {/*Overview Start*/}
        <section className="trust-company">
          <div className="trust-company-shape-1">
            <img src="assets/images/shapes/traust-company-shape-11.png" alt />
          </div>
          <div className="trust-company-shape-2" />
          <div className="trust-company-shape-3" />
          <div className="trust-company-shape-4" />
          <div className="trust-company-bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{ backgroundImage: 'url(assets/images/backgrounds/overview-back.jpg)' }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="trust-company__left">
                  <div className="trust-company__video-link">
                    <a href="#" className="video-popup">
                      <div className="trust-company__video-icon">
                        <span className="fa fa-play" />
                        <i className="ripple" />
                      </div>
                    </a>
                  </div>
                  <div className="section-sub-title-box newovrviewdesign">
                    <p className="section-sub-title">Overview</p>
                    <div className="section-title-shape-1">
                      <img src="assets/images/shapes/section-title-shape-1.png" alt />
                    </div>
                  </div>
                  <h2 className="trust-company__title">Welcome to the Icare Online Registration Portal.</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="trust-company__right">
                  <ul className="list-unstyled trust-compay__points">
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">IGNOU Study Centre @ ICARE</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">Career@ICARE</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">Campus Tour</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">Videos &amp; Audio</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">MNGO &amp; Social Welfare</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">Tenders</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">Research and Development Centre</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="text">
                        <p><a href="#" className="obrviewlnk">Central Tool Room &amp; Testing Laboratories</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Overview End*/}
        {/*Our College Start*/}
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





            <Swiper
              // install Swiper modules
              modules={[Autoplay, Pagination, A11y]}
              spaceBetween={40}
              slidesPerView={3}

              loop={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
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
        </section>
        {/*Our College End*/}
        {/*Testimonial One Start*/}
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
            <div className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options="{
              &quot;loop&quot;: true,
              &quot;autoplay&quot;: true,
              &quot;margin&quot;: 50,
              &quot;nav&quot;: false,
              &quot;dots&quot;: false,
              &quot;smartSpeed&quot;: 500,
              &quot;autoplayTimeout&quot;: 10000,
              &quot;navText&quot;: [&quot;<span class=\&quot;fa fa-angle-left\&quot;></span>&quot;,&quot;<span class=\&quot;fa fa-angle-right\&quot;></span>&quot;],
              &quot;responsive&quot;: {
                  &quot;0&quot;: {
                      &quot;items&quot;: 1
                  },
                  &quot;768&quot;: {
                      &quot;items&quot;: 2
                  },
                  &quot;992&quot;: {
                      &quot;items&quot;: 2
                  },
                  &quot;1200&quot;: {
                      &quot;items&quot;: 2
                  }
              }
          }">
              {/*Testimonial One Single Start*/}
              <div className="item">
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
              </div>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img-box">
                      <div className="testimonial-one__client-img">
                        <img src="assets/images/testimonial/bstudent.png" alt />
                      </div>
                    </div>
                    <div className="testimonial-one__client-details">
                      <h4 className="testimonial-one__client-name fedbacknamedesign">Subhadip Ghosh</h4>
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
              </div>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <div className="item">
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
              </div>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img-box">
                      <div className="testimonial-one__client-img">
                        <img src="assets/images/testimonial/bstudent.png" alt />
                      </div>
                    </div>
                    <div className="testimonial-one__client-details">
                      <h4 className="testimonial-one__client-name fedbacknamedesign">Subhadip Ghosh</h4>
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
              </div>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <div className="item">
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
              </div>
              {/*Testimonial One Single End*/}
              {/*Testimonial One Single Start*/}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img-box">
                      <div className="testimonial-one__client-img">
                        <img src="assets/images/testimonial/bstudent.png" alt />
                      </div>
                    </div>
                    <div className="testimonial-one__client-details">
                      <h4 className="testimonial-one__client-name fedbacknamedesign">Subhadip Ghosh</h4>
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
              </div>
              {/*Testimonial One Single End*/}
            </div>
          </div>
        </section>
        {/*Testimonial One End*/}
        {/*Awards Start*/}
        <section className="awards hiawardarea">
          <div className="container">
            <h4 className="awards__title">We’re certified and award winning college</h4>
            <div className="awards__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options="{
              &quot;loop&quot;: true,
              &quot;autoplay&quot;: true,
              &quot;margin&quot;: 30,
              &quot;nav&quot;: false,
              &quot;dots&quot;: false,
              &quot;smartSpeed&quot;: 500,
              &quot;autoplayTimeout&quot;: 10000,
              &quot;navText&quot;: [&quot;<span class=\&quot;fa fa-angle-left\&quot;></span>&quot;,&quot;<span class=\&quot;fa fa-angle-right\&quot;></span>&quot;],
              &quot;responsive&quot;: {
                  &quot;0&quot;: {
                      &quot;items&quot;: 2
                  },
                  &quot;768&quot;: {
                      &quot;items&quot;: 3
                  },
                  &quot;992&quot;: {
                      &quot;items&quot;: 3
                  },
                  &quot;1200&quot;: {
                      &quot;items&quot;: 4
                  }
              }
          }">
              {/*Awards Single Start*/}
              <div className="item">
                <div className="awards__single">
                  <div className="awards__img">
                    <img src="assets/images/resources/awards-1-1.jpg" alt />
                  </div>
                </div>
              </div>
              {/*Awards Single End*/}
              {/*Awards Single Start*/}
              <div className="item">
                <div className="awards__single">
                  <div className="awards__img">
                    <img src="assets/images/resources/awards-1-2.jpg" alt />
                  </div>
                </div>
              </div>
              {/*Awards Single End*/}
              {/*Awards Single Start*/}
              <div className="item">
                <div className="awards__single">
                  <div className="awards__img">
                    <img src="assets/images/resources/awards-1-3.jpg" alt />
                  </div>
                </div>
              </div>
              {/*Awards Single End*/}
              {/*Awards Single Start*/}
              <div className="item">
                <div className="awards__single">
                  <div className="awards__img">
                    <img src="assets/images/resources/awards-1-4.jpg" alt />
                  </div>
                </div>
              </div>
              {/*Awards Single End*/}
            </div>
          </div>
        </section>
        {/*Awards End*/}
        {/*Site Footer Start*/}







        <footer className="site-footer">
          {/* <div class="site-footer-img-1">
      <img src="assets/images/resources/site-footer-img-1.png" alt="">
    </div> */}
          <div className="site-footer-shape-1">
            <img src="assets/images/shapes/site-footer-shape-1.png" alt />
          </div>
          <div className="container">
            <div className="site-footer__top">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__about-text-box">
                      <p className="footer-widget__about-text">Indian Center for Advance - ment of Research and Education, Haldia (ICARE) set up in 1995, is a non-profit making voluntary organization</p>
                    </div>
                    <div className="site-footer__social">
                      <a href="#"><i className="fab fa-facebook" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="#"><i className="fab fa-linkedin" /></a>
                      <a href="#"><i className="fab fa-youtube" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget__column footer-widget__explore clearfix">
                    <h3 className="footer-widget__title">Useful Links</h3>
                    <ul className="footer-widget__explore-list list-unstyled clearfix">
                      <li><a href="about-us.html">About ICARE</a></li>
                      <li><a href="#">Colleges</a></li>
                      <li><a href="courses.html">Courses</a></li>
                      <li><a href="academics.html">Academics</a></li>
                      <li><a href="admission.html">Admission</a></li>
                      <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget__column footer-widget__newsletter clearfix">
                    <h3 className="footer-widget__title">Newsletter</h3>
                    <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in your inbox.</p>
                    <form className="footer-widget__newsletter-form">
                      <div className="footer-widget__newsletter-input-box">
                        <input type="email" placeholder="Enter Email Address" name="email" />
                        <button type="submit" className="footer-widget__newsletter-btn thm-btn"><i className="fa fa-arrow-right" />Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                  <div className="footer-widget__column footer-widget__contact">
                    <h3 className="footer-widget__title">Contact</h3>
                    <p className="footer-widget__contact-text">ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia</p>
                    <ul className="list-unstyled footer-widget__contact-list">
                      {/* <li>
                  <div class="icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="text">
                    <p><a href="mailto:icare@gmail.com ">icare@gmail.com</a></p>
                  </div>
                </li> */}
                      <li>
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="text">
                          <p><a href="tel:+91(03224) 255275">+91(03224) 255275</a></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-footer__bottom">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer__bottom-inner">
                    <p className="site-footer__bottom-text">© 2022 Copyright ICARE. All Rights Reserved || design &amp; developed by <a href="https://devantitsolutions.com/">DITS</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Site Footer End*/}
      </div > {/* /.page-wrapper */}



    </>
  );
}

export default App;

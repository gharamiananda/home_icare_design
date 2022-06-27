import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Contact = () => {
    return (

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
                            <li>Contact</li>
                        </ul>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*Contact Details Start*/}
            <section className="contact-details">
                <div className="container">
                    <ul className="list-unstyled contact-details__list">
                        <li>
                            <div className="contact-details__icon">
                                <span className="icon-telephone" />
                            </div>
                            <div className="contact-details__content">
                                <h4>
                                    <a href="#" className="contact-details__number-1 cntcttextcolor">+91(03224) 255275, 255662,
                                        255843, 255895</a>
                                </h4>
                            </div>
                        </li>
                        <li>
                            <div className="contact-details__icon">
                                <span className="icon-email" />
                            </div>
                            <div className="contact-details__content">
                                <h4>
                                    <a href="mailto:icare_haldia@rediffmail.com" className="contact-details__number-1 cntcttextcolor">icare_haldia@rediffmail.com </a>
                                    <a href="mailto:contactus@icare-haldia.org" className="contact-details__number-1 cntcttextcolor">contactus@icare-haldia.org </a>
                                    <a href="mailto:information@icare-haldia.org" className="contact-details__number-1 cntcttextcolor">information@icare-haldia.org </a>
                                </h4>
                            </div>
                        </li>
                        <li>
                            <div className="contact-details__icon">
                                <span className="icon-pin" />
                            </div>
                            <div className="contact-details__content">
                                <h4>ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia, Dist. Purba Medinipur, WEST BENGAL</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/*Contact Details End*/}
            {/*Contact Page Start*/}
            <section className="contact-page">
                <div className="contact-page-shape-1">
                    <img src="assets/images/shapes/contact-page-shape-1.png" alt />
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title">Contact with us</p>
                            <div className="section-title-shape-1">
                                <img src="assets/images/shapes/section-title-shape-1.png" alt />
                            </div>
                        </div>
                        <h2 className="section-title__title">Feel free to write our <br /> experts</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-page__form">
                                <form action="https://roofsie-html.vercel.app/main-html/assets/inc/sendemail.php" className="comment-one__form contact-form-validated" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Phone" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Address" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Comments" defaultValue={""} />
                                            </div>
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="thm-btn comment-form__btn"> <i className="fa fa-arrow-right" /> Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Contact Page End*/}

            <Footer />
        </div>


    );
};

export default Contact;
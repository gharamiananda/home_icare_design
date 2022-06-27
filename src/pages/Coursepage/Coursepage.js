import React from 'react';
import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeCourse from '../../components/HomeCourse';
import Testimonial from '../../components/Testimonial';

const Coursepage = () => {
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
                            <li>Courses</li>
                        </ul>
                        <h2>Our Courses</h2>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*COURSES Start*/}
            <HomeCourse/>
                {/*COURSES  End*/}


                <Testimonial />
                <Awards />
                <Footer />
        </div>
    );
};

export default Coursepage;
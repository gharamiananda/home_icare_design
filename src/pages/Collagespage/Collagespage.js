import React from 'react';
import Awards from '../../components/Awards';
import Collage from '../../components/Collage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';

const Collagespage = () => {
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
                            <li>Colleges</li>
                        </ul>
                        <h2>Our Colleges</h2>
                    </div>
                </div>
            </section>


            <Collage />
            <Testimonial />
            <Awards />
            <Footer />
        </div>
    );
};

export default Collagespage;
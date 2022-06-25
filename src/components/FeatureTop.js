import React, { useEffect, useState } from 'react';


const FeatureTop = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feature_home')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])
    return (
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
    );
};

export default FeatureTop;
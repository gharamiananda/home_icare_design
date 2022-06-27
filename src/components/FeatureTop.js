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


                        {
                            features.map(f =>
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-roof-5"><i className={f.fontLink} /></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                <h3 className="feature-one__title"><a href="about.html">{f.title}</a></h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            <p className="feature-one__text">{f.desc}...</p>
                                            <div className="feature-one__read-more">
                                                <a href={f.link}>Read More <i className="fa fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureTop;
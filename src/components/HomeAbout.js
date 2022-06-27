import React, { useEffect, useState } from 'react';


const HomeAbout = () => {
    const [about, setAbout] = useState([]);
    const [aboutFull, setAboutFull] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/about_home')
            .then(res => res.json())
            .then(data => setAbout(data));

    }, [])
    useEffect(() => {
        about.map(a => setAboutFull(a))
    }, [about])
    return (
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
                                    <img src={`http://localhost:5000/${aboutFull.image}`} alt />

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
                                                <h3 className="odometer" data-count={98}>{aboutFull.percentage}</h3>
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
                                <h2 className="section-title__title">{aboutFull.aboutTitle}</h2>
                            </div>
                            <p className="about-one__text">s{aboutFull.aboutDesc}</p>
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
    );
};

export default HomeAbout;
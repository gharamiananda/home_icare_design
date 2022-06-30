
import React, { useEffect, useState } from 'react';


const HomeOverview = () => {
    const [overview, setOverview] = useState([]);
    const [overviewData, setOverviewData] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/overview_home')
            .then(res => res.json())
            .then(data => setOverview(data))
    }, []);

    useEffect(() => {
        overview.map(a => setOverviewData(a))
    }, [overview]);





    return (
        <div className={(overviewData.status == '0') && 'd-none'}>
            <section className="trust-company">
                <div className="trust-company-shape-1">
                    <img src="assets/images/shapes/traust-company-shape-11.png" alt />
                </div>
                <div className="trust-company-shape-2" />
                <div className="trust-company-shape-3" />
                <div className="trust-company-shape-4" />
                <div className="trust-company-bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{ backgroundImage: `url(http://localhost:5000/${overviewData.image})` }} />
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
                                <h2 className="trust-company__title">{overviewData.mainTitle}</h2>
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
                                            <p><a href="#" className="obrviewlnk">{overviewData.subone}</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subTwo}</a></p>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subThree}</a></p>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subFour}</a></p>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subFive}</a></p>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subSix}</a></p>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subSeven}</a></p>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick" />
                                        </div>
                                        <div className="text">
                                            <p><a href="#" className="obrviewlnk">{overviewData.subEight}</a></p>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeOverview;
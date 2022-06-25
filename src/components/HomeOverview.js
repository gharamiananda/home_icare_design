
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
    );
};

export default HomeOverview;
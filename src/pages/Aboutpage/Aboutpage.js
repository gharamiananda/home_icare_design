import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeAbout from '../../components/HomeAbout';
import Testimonial from '../../components/Testimonial';

const Aboutpage = () => {
    const [toggle, setToggle] = useState(false);
    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/vission_home')
            .then(res => res.json())
            .then(data => setmission(data))
    }, [toggle]);

    useEffect(() => {
        mission.map(a => setmissionData(a))
    }, [mission])



    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);







    useEffect(() => {
        fetch('http://localhost:5000/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'About')

        setInnerBan(fib)
    }, [
        ibd
    ])


    return (
        <>
            <div>

                <Header />
                {/*Page Header Start*/}
                <section className="page-header">
                    <div className="page-header-bg" style={{ backgroundImage: `url(http://localhost:5000/${innerBan?.image})` }}>
                    </div>
                    <div className="container">
                        <div className="page-header__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="index.html">Home</a></li>
                                <li><span>/</span></li>
                                <li>About</li>
                            </ul>
                            <h2>{innerBan?.collageName}</h2>
                        </div>
                    </div>
                </section>
                <div className="pt-120">

                    <HomeAbout />
                </div>
                <div className={(missionData.status == '0') ? 'd-none' : 'container'}>

                    <div className="row">
                        <div className="col-lg-12 vismison_outsection">
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">{missionData.firstTitle}</p>
                                    <div className="section-title-shape-1">
                                        <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                    </div>
                                </div>
                            </div>
                            <p className="icareinner_abouttext">
                                {missionData.collageDesc}
                            </p>
                            <ul className="mvlstarea">
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subone}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subTwo}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subThree}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subFour}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subFive}
                                </li>
                                <li>
                                    <span className="icon-confirmation" />
                                    {missionData.subSix}
                                </li>
                            </ul>
                            <div className="section-title text-left">
                                <div className="section-sub-title-box">
                                    <p className="section-sub-title">{missionData.secondTitle}</p>
                                    <div className="section-title-shape-1">
                                        <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                    </div>
                                </div>
                            </div>
                            <p className="icareinner_abouttext">
                                {missionData.secondDesc}
                            </p>
                        </div>
                    </div>
                </div>
                {/* ===============mission & vision======================== */}


                <Testimonial />
                <Awards />
                <Footer />
            </div>

        </>
    );
};

export default Aboutpage;
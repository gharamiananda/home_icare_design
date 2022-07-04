import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Testimonial from '../../components/Testimonial';
import book1 from '../../images/shapes/section-title-shape-1.png'




const CollageDetailpage = () => {


    const { id } = useParams()

    const [mission, setmission] = useState([]);
    const [missionData, setmissionData] = useState({});

    const [innerBan, setInnerBan] = useState({});
    const [ibd, setibd] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inner_banner_get')
            .then(res => res.json())
            .then(data => setibd(data))
    }, []);


    useEffect(() => {
        const fib = ibd.find(ib => ib.page == 'Admission')

        setInnerBan(fib)
    }, [
        ibd
    ])

    useEffect(() => {
        fetch('http://localhost:5000/collage_details_about_get')
            .then(res => res.json())
            .then(data => setmission(data))
    }, []);

    useEffect(() => {
        const data = mission.find(m => m.collage.split(' ').join('-') === id);
        console.log(data)
        setmissionData(data)
    }, [mission, id]);


    console.log(missionData, mission, id)
    return (
        <>

            <Header />

            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: `url(http://localhost:5000/${innerBan?.image})` }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>College</li>
                        </ul>
                        <h2>{innerBan?.collageName}</h2>
                    </div>
                </div>
            </section>


            <section className="about-three about-four">
                <div className={(missionData?.status == '1') ? 'container' : 'd-none'}>
                    <div className="row">
                        <div className="col-xl-6 ">
                            <div className="about-three__left">
                                <div className="about-three__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-three__img">
                                        <img src={`http://localhost:5000/${missionData?.imageOne}`} alt />
                                    </div>
                                    <div className="about-three__img-two">
                                        <img src={`http://localhost:5000/${missionData?.imageTwo}`} alt />

                                    </div>
                                    <div className="about-three__border" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 h-100 ">
                            <div className="about-three__right">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">{missionData?.firstTitle}</p>
                                        <div className="section-title-shape-1">
                                            <img src={book1} alt />
                                        </div>
                                    </div>
                                </div>
                                <p className="icareinner_abouttext">
                                    ICARE Complex, HIT campus, P.O. Hatiberia-721657, Haldia., Dist. Purba Medinipur, West Bengal
                                </p>
                                <p className="icareinner_abouttext">
                                    HIT, established in the year 1995-96 is the first privately initiated (with Govt. aid) degree Engineering College in this State. It has emerged as the biggest private Engineering College in Eastern India.
                                </p>
                                <p className="icareinner_abouttext">
                                    {missionData?.subone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 clgfuldetails">
                            <p className="icareinner_abouttext">
                                {missionData?.subTwo}
                            </p>
                        </div>
                    </div>
                    <section className="about-two clgdtsoutsection">
                        <div className="container">
                            <h2 className="dcousehdng">The courses offered are</h2>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-two__left">
                                        <div className="section-title text-left">
                                            <div className="section-sub-title-box">
                                                <p className="section-sub-title">B. Tech</p>
                                                <div className="section-title-shape-1">
                                                    <img src="assets/images/shapes/section-title-shape-1.png" alt />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-unstyled about-three__point">
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Biotechnology</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Chemical Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Computer Science &amp; Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Electronics &amp; Communication Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Applied Electronics &amp; Instrumentation Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Electrical Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Information Technology</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Mechanical Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Production Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Instrumentation &amp; Control Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Civil Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext">Food Technology</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-two__right">
                                        <div className="about-two__img-box wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                                            <div className="about-two__img">
                                                <img src="assets/images/resources/hitclg.jpg" alt />
                                            </div>
                                            <div className="about-two__img-two">
                                                <img src="assets/images/resources/hitclg1.jpg" alt />
                                            </div>
                                            <div className="about-two__line">
                                                <img src="assets/images/shapes/about-two-line.png" alt />
                                            </div>
                                            <div className="about-two__shape-1" />
                                            {/* <div class="about-two__practice-year">
                                          <div class="about-two__practice-year-inner">
                                              <div class="about-two__practice-year-shape">
                                                  <img src="assets/images/shapes/about-two-practice-year-shape.png" alt="">
                                              </div>
                                              <div class="about-two__practice-year-content">
                                                  <h3>20</h3>
                                                  <p>Years of <br> practicing</p>
                                              </div>
                                          </div>
                                      </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clgdtsoutsection1">
                                <div className="col-xl-6">
                                    <div className="about-two__right">
                                        <div className="about-two__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                            <div className="about-two__img">
                                                <img src="assets/images/resources/hitclg.jpg" alt />
                                            </div>
                                            <div className="about-two__img-two">
                                                <img src="assets/images/resources/hitclg2.jpg" alt />
                                            </div>
                                            <div className="about-two__line">
                                                <img src="assets/images/shapes/about-two-line.png" alt />
                                            </div>
                                            <div className="about-two__shape-1" />
                                            {/* <div class="about-two__practice-year">
                                          <div class="about-two__practice-year-inner">
                                              <div class="about-two__practice-year-shape">
                                                  <img src="assets/images/shapes/about-two-practice-year-shape.png" alt="">
                                              </div>
                                              <div class="about-two__practice-year-content">
                                                  <h3>20</h3>
                                                  <p>Years of <br> practicing</p>
                                              </div>
                                          </div>
                                      </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-two__left">
                                        <div className="section-title text-left">
                                            <div className="section-sub-title-box">
                                                <p className="section-sub-title elsubtitlex">PG Programme</p>
                                                <div className="section-title-shape-1 elsubtitlex1">
                                                    <img src="assets/images/shapes/section-title-shape-1.png" alt className="elsubtitlex" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-unstyled about-three__point">
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext
                                                  ">MBA 2. MCA 3. M.Tech in Chemical Engineering</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext
                                                  ">M.Tech in Electronics &amp; Communication Engg.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext
                                                  ">M.Tech in Computer Science &amp; Engg.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fa fa-check" />
                                                </div>
                                                <div className="text">
                                                    <p className="clginnerdetailstext
                                                  ">M.Tech in Mechanical Engineering</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 clgaddress_outsection">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="clgdadres_dtoutsection">
                                        <div className="hex">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <p className="allclgdadress">
                                            ICARE Complex, HIT campus, P.O. Hatiberia-721657, Haldia., Dist. Purba Medinipur, West Bengal
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="clgdadres_dtoutsection">
                                        <div className="hex">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <p className="allclgdadress1">
                                            +91 (03224) 25900/252850/253062
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="clgdadres_dtoutsection">
                                        <div className="hex">
                                            <i className="fas fa-globe" />
                                        </div>
                                        <p className="allclgdadress2">
                                            www.hithaldia.in
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />
            <Awards />
            <Footer />

        </>
    );
};

export default CollageDetailpage;
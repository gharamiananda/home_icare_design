import React, { useEffect, useState } from 'react';

import Awards from '../../components/Awards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeCourse from '../../components/HomeCourse';
import Testimonial from '../../components/Testimonial';

const Coursepage = () => {





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

    return (
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
                            <li>Courses</li>
                        </ul>
                        <h2>{innerBan?.collageName}</h2>
                    </div>
                </div>
            </section>
            {/*Page Header End*/}
            {/*COURSES Start*/}
            <HomeCourse />
            {/*COURSES  End*/}


            <Testimonial />
            <Awards />
            <Footer />
        </div>
    );
};

export default Coursepage;
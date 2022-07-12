import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Tenders = () => {

    const [certi, setCeti] = useState([])
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/tender_get')
            .then(res => res.json())
            .then(data => setCeti(data));
    }, [toggle])
    return (
        <div>
            <Header></Header>

            <div className='text-center pt-120 ptb-120'>
                {
                    certi.map(c =>
                        c.status == '1' && <div> <img src={`http://localhost:5000/${c.picture}`} className='img-fluid' /></div>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Tenders;
import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Homepage/Home';
// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import AddCollage from './dashboardComponent/AddCollage';
import AddBanner from './dashboardComponent/AddBanner';



function App() {
  return (
    <>
      <div className="page-wrapper ">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="add-collage" element={<AddCollage />} />
            <Route path="add-banner" element={<AddBanner />} />
          </Route>

        </Routes>














      </div >



    </>
  );
}

export default App;

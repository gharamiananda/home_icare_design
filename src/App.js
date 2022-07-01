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
import AddFeature from './dashboardComponent/AddFeature';
import AddAbouts from './dashboardComponent/AddAbout';
import AddOverView from './dashboardComponent/AddOverView';
import AddWhyChooseUs from './dashboardComponent/AddWhyChooseUs';
import AddTestimonial from './dashboardComponent/AddTestimonial';
import AddReward from './dashboardComponent/AddReward';
import AddCourse from './dashboardComponent/AddCourse';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Collagespage from './pages/Collagespage/Collagespage';
import Coursepage from './pages/Coursepage/Coursepage';
import Contact from './pages/Contact/Contact';
import Admissionpage from './pages/Admissionpage/Admissionpage';
import Academicpage from './pages/Academicpage/Academicpage';
import Register from './Authentication/Register';
import RequireAuth from './Authentication/RequireAuth';
import Login from './Authentication/Login';
import BannerDetails from './dashboardComponent/BannerDetails';
import AddVision from './dashboardComponent/AddVision';
import FeatureDetails from './pages/Detailspages/FeatureDetails';
import CourseDetails from './pages/Detailspages/CourseDetails';
import ColllageDetails from './pages/Detailspages/ColllageDetails';
import TestimonialDetail from './pages/Detailspages/TestimonialDetail';
import AddMissionAbout from './dashboardComponent/AddMissionAbout';
import AddPGPROGRAMMES from './dashboardComponent/AddPGPROGRAMMES';
import AddFINANCIALAIDS from './dashboardComponent/AddFINANCIALAIDS';
import AddUGPROGRAMMES from './dashboardComponent/AddUGPROGRAMMES';
import PgDetail from './pages/Detailspages/PgDetail';
import UgDetail from './pages/Detailspages/UgDetail';
import FinanDetail from './pages/Detailspages/FinanDetail';
import LoginN from './Authentication/LoginN';
import SendPasswordReset from './Authentication/SendPasswordReset';
import ContactForm from './dashboardComponent/ContactForm';
import NewsLetter from './dashboardComponent/NewsLetter';
import AddInnerBanner from './dashboardComponent/AddInnerBanner';



function App() {
  return (
    <>
      <div className="page-wrapper ">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={
            <RequireAuth>

              <Dashboard />
            </RequireAuth>
          } >
            <Route path="add-collage" element={<AddCollage />} />
            <Route path="add-collage/:collage" element={<ColllageDetails />} />
            <Route path="add-banner" element={<AddBanner />} />
            <Route path="add-banner/:banner" element={< BannerDetails />} />
            <Route path="add-feature" element={<AddFeature />} />
            <Route path="add-feature/:feature" element={<FeatureDetails />} />
            <Route path="add-about" element={<AddAbouts />} />
            <Route path="add-overview" element={<AddOverView />} />
            <Route path="add-chooseus" element={<AddWhyChooseUs />} />
            <Route path="add-testimonial" element={<AddTestimonial />} />
            <Route path="add-testimonial/:testimonial" element={<TestimonialDetail />} />
            <Route path="add-feature" element={<AddFeature />} />
            <Route path="add-certificate" element={<AddReward />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="add-course/:course" element={<CourseDetails />} />
            <Route path="add-vision-mision" element={<AddVision />} />
            <Route path="add-vision-page" element={<AddMissionAbout />} />
            <Route path="add-pg-programes" element={<AddPGPROGRAMMES />} />
            <Route path="add-pg-programes/:pg" element={<PgDetail />} />
            <Route path="add-financial-programes" element={<AddFINANCIALAIDS />} />
            <Route path="add-financial-programes/:finan" element={<FinanDetail />} />
            <Route path="add-ug-programes" element={<AddUGPROGRAMMES />} />
            <Route path="add-ug-programes/:ug" element={<UgDetail />} />
            <Route path="contact-form" element={<ContactForm />} />
            <Route path="news-letter" element={<NewsLetter />} />
            <Route path="add-inner-banner" element={<AddInnerBanner />} />

          </Route>



          <Route path="/about" element={<Aboutpage />} />
          <Route path="/collages" element={<Collagespage />} />
          <Route path="/courses" element={<Coursepage />} />

          <Route path="/admission" element={<Admissionpage />} />
          <Route path="/academics" element={<Academicpage />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<LoginN />} />
          <Route path="/forget-password" element={<SendPasswordReset />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>














      </div >



    </>
  );
}

export default App;

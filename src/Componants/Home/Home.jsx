
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar'
import carImg from "../../assets/imges/landing-page/car 2 1.png"
import styleHome from "./Home.module.css"
import CarList from '../CarList/CarList';    
import Work from '../Work/Work';
import ChoseUs from '../ChoseUs/ChoseUs';
import Testimonial from '../Testimonial/Testimonial';
import Download from '../Download/Download';
import Footer from '../Footer/Footer';

export default function Home() {


  return (
    <>

    
    <div className={`min-vh-100   ${styleHome.homeBG}`}>
    <Navbar/>
    <div className={ `${styleHome.homeContainer}`}>
    <div className={`${styleHome.content}`}>
    <h1>Find, book and <br /> rent a car <span className='text-primary'>Easily</span></h1>
    <p>Get a car wherever and whenever you need it <br /> with your IOS and Android device.</p>
    </div>
    <div className={`${styleHome.image}`}>
    <img src={carImg} alt="Your Image" />
    </div>
    </div>
    </div>
    <CarList/>
    <Work/>
    <ChoseUs/>
    <Testimonial/>
    <Download/>
    <Footer/>



   

    </>
  );
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import StyleWork from "./Stylework.module.css"
import locImg from "../../assets/imges/landing-page/location.png"
import carImg from "../../assets/imges/landing-page/car-icon.png"
import JagImg from "../../assets/imges/landing-page/jaguar.png"
import nisImg from "../../assets/imges/landing-page/nissan.png"
import volfImg from "../../assets/imges/landing-page/volvo.png"
import audImg from "../../assets/imges/landing-page/audi.png"


export default function Work() {
  return (
    <>
    <div className="container my-5 text-center">
    <p className={`text-center p-2 ${StyleWork.tittle}`}>HOW IT WORK</p>
    <h1 className='py-3 my-3 text-center'>Most popular cars rental deals</h1>
    <div className="container w-75">
    <div className="row py-4 my-5">
        <div className="col-md-4">
            <div className="">
                <img src={locImg} alt="" />
                <h4>Choose location</h4>
                <p>Choose your and <br /> find your best car</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
                <img src={carImg} alt="" />
                <h4>Pick-up date</h4>
                <p>Select your pick up date and <br /> time to book your car</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
                <img src={locImg}  alt="" />
                <h3>Book your car</h3>
                <p>Book your car and we will <br /> deliver it directly to you</p>
            </div>
        </div>
    </div>
    </div>

    <div className="row">
        <div className="col-md-3">
            <img src={JagImg} alt="" />
        </div>
        <div className="col-md-3">
            <img src={volfImg} alt="" />
        </div>
        <div className="col-md-3">
            <img src={nisImg} alt="" />
        </div>
        <div className="col-md-3">
            <img src={audImg} alt="" />
        </div>
    </div>
    </div>
   
    
    
    
    
    
    
    
    </>
  )
}

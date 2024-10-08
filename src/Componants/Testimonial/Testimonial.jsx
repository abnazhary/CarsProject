// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./style.module.css"
import rectangleimg from "../../assets/imges/landing-page/Rectangle 8 (1).png"
import starimg from "../../assets/imges/card/star.png"
import girlimg from "../../assets/imges/landing-page/girl.png"

export default function Testimonial() {
  return (
    <>
    <div className={`container-fluid ${style.bg}`}>
    <div className="container  my-5 py-5">
        <div className={`tittle text-center`}>
        <p className={`p-2 my-2 ${style.tittle}`}>TEST IMONIALS</p>
        <h1>Most popular cars rental deals</h1>
        </div>

        <div className="row my-5 py-3">
            <div className="col-md-6 ">
                <div className="bg-body shadow border p-3">
                <div className="row">
                    <div className="col-md-6 ">
                        <img src={rectangleimg} className='w-100' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>5.5 <span className='fw-light pt-4'>stars</span></h2>
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <p>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                        <h6>Charlie Johnson</h6>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="bg-body shadow border p-3">
                <div className="row">
                    <div className="col-md-6 ">
                        <img src={girlimg} className='w-75' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>5.5 <span className='fw-light pt-4'>stars</span></h2>
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <img src={starimg} alt="" />
                        <p>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                        <h6>Charlie Johnson</h6>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import logofot from "../../assets/imges/footer/logo-footer.png"
import locfot from "../../assets/imges/footer/location.png"
import callfot from "../../assets/imges/footer/call.png"
import smsfot from "../../assets/imges/footer/sms.png"
import facefot from "../../assets/imges/footer/facebook.png"
import instafot from "../../assets/imges/footer/instagram.png"
import youtfot from "../../assets/imges/footer/youtube.png"
import style from "./style.module.css"

export default function Footer() {
  return (
    <>
    <div className={`container-fluid py-4 ${style.bg}`}>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-4">
            <div className="">
              <img src={logofot} className='m-auto' alt="" />
              <div className="d-flex align-items-center my-3">
              <img src={locfot} alt="" />
              <p className='pt-3'>25566 Hc 1, Glenallen,<br />
              Alaska, 99588, USA</p>
              </div>
              <div className="d-flex align-items-center my-3">
              <img src={callfot} alt="" />
              <p className='pt-2'>+603 4784 273 12</p>
              </div>
              <div className="d-flex align-items-center my-3">
              <img src={smsfot} alt="" />
              <p className='pt-2'>rentcars@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h4 className='mb-3'>Our Product</h4>
            <p>career</p>
            <p>car</p>
            <p>package</p>
            <p>features</p>
          </div>

          <div className="col-md-4">
            <h4 className='mb-3'>Follow us </h4>
            <img src={facefot}  className='mx-2 '  alt="" />
            <img src={instafot} className='mx-2 '  alt="" />
            <img src={youtfot}  className='mx-2 ' alt="" />
          </div>

          <div className="border border-bottom"></div>
          <p className='p-3'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </div>
    
    
    
    
    
    </>
  )
}

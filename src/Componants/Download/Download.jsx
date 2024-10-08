// eslint-disable-next-line no-unused-vars
import React from 'react'
// import style from "./style.module.css"
import android from "../../assets/imges/landing-page/andriod.png"
import ios from "../../assets/imges/landing-page/ios.png"
import iphone from "../../assets/imges/landing-page/iPhone-14.png"

export default function Download() {
  return (
    <>
    <div className="container">
        <div className="row gx-5">
            <div className="col-md-6">
                <div className="cap">
                    <h1>Download Rentcars App for <span className='text-primary'>FREE</span></h1>
                    <p>For faster, easier booking and exclusive deals.</p>
                    <img className='mx-3' src={android} alt="" />
                    <img src={ios} alt="" />
                    <form action="" className='d-flex flex-column w-50 '>
                        <input className='my-2 bg-primary-subtle border rounded-2 p-2' type="text" placeholder='Name' />
                        <input className='my-2 bg-primary-subtle border rounded-2 p-2' type="text" placeholder='Phone Number' />
                        <input className='my-2 bg-primary-subtle border rounded-2 p-2' type="email" placeholder='Email' />
                        <button className='btn btn-primary w-50 m-auto'>send message</button>
                    </form>
                    
                </div>
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-end mt-5 pt-5">
                <img src={iphone} className='w-50' alt="" />
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

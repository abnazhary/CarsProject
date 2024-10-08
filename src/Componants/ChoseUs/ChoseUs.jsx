// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./Style.module.css"
import audiImg from "../../assets/imges/landing-page/Audi 1.png"
import user from "../../assets/imges/landing-page/user.png"
import message from "../../assets/imges/landing-page/message.png"
import chat from "../../assets/imges/landing-page/chat.png"

export default function ChoseUs() {
  return (
    <>
    <div className={`container-fluid my-5 py-5 ${style.chooseSec}`}>
        <div className="row my-5">
            <div className="col-md-6">
                <div className="img">
                    <img src={audiImg} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="cap">
                <p className={`p-2 ${style.tittle}`}>WHY CHOOSE US</p>
                <h3>We offer the best experience with our rental deals</h3>
                    
                        <div className="col-md-6 my-2 py-2 d-flex align-items-center justify-content-center">
                            <div className="img">
                            <img src={user} alt="" />
                            </div>
                            <div className="cap mx-3">
                                <h6>Best price guaranteed</h6>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 py-2 d-flex align-items-center justify-content-center">
                            <div className="img">
                            <img src={user} alt="" />
                            </div>
                            <div className="cap mx-3">
                                <h6>24 hour car delivery</h6>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 py-2 d-flex align-items-center justify-content-center">
                            <div className="img">
                            <img src={message} alt="" />
                            </div>
                            <div className="cap mx-3">
                                <h6>Best price guaranteed</h6>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 py-2 d-flex align-items-center justify-content-center">
                            <div className="img">
                            <img src={chat} alt="" />
                            </div>
                            <div className="cap mx-3">
                                <h6>24/7 technical support</h6>
                            </div>
                        </div>
                    
                
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

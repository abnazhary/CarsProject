// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../assets/imges/nav/logo.png'
import style from "./Style.module.css"

export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-body py-4">
      <div className="container">

        <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className={`nav-link text-black mx-3 ${style.navLink}`} href="/">Become a renter</a>
            </li>
            <li className="nav-item">
            <a className={`nav-link text-black mx-3 ${style.navLink}`} href="/">Rental deals</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-black mx-3 ${style.navLink}`} href="/">How it work</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-black mx-3 ${style.navLink}`} href="/">Why chooes us</a>
            </li>
          </ul>


          <div className="d-flex">
            <button className="btn btn-transparent me-2">Sign in</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  
    </>
  )
}

import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import img1 from "../../assets/imges/card/car1.png";
import img2 from "../../assets/imges/card/car2.png";
import img3 from "../../assets/imges/card/car3.png";
import img4 from "../../assets/imges/landing-page/Audi 1.png";
import imgStar from "../../assets/imges/card/star.png";
import user from "../../assets/imges/card/user.png";
import frame from "../../assets/imges/card/Frame.png";
import Air from "../../assets/imges/card/d8wxke_2_.png";
import styleCar from "./CarList.module.css";

export default function CarList() {
  let [cars, setCars] = useState([]);
  const images = [img1, img2, img3, img4];

  let getCars = async () => {
    try {
      let response = await axios.get("https://freetestapi.com/api/v1/cars?limit=4");
      setCars(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="container mt-4">
      <p className={`text-center p-2 ${styleCar.tittle}`}>POPULAR RENTAL DEALS</p>
      <h1 className='py-3 my-3 text-center'>Most popular cars rental deals</h1>
      <div className="row">
        {cars.map((car, index) => (
          <div className="col-md-3" key={car.id}>
            <div className={`card mb-4 ${styleCar.card}`}>
              <div className="">
                <img src={images[index]} className={`w-100 card-img-top ${styleCar['card-img-top']}`} alt={car.name} />
              </div>
              <div className={`card-body ${styleCar['card-body']}`}>
                <h5 className="card-title">{car.make}</h5>
                <div className="row">
                  <div className="col-12 d-flex align-items-center">
                    <img src={imgStar} alt="" />
                    <h6 className='my-1'>4.6 <span className='text-light text-body'>reviews</span></h6>
                  </div>
                  <div className="col-6 text-center d-flex align-items-center justify-content-around">
                    <img src={user} alt="" />
                    <p className='my-1'>2 passengers</p>
                  </div>
                  <div className="col-6 text-center d-flex align-items-center justify-content-around">
                    <img src={Air} alt="" />
                    <p className='my-1'>Aircondition</p>
                  </div>
                  <div className="col-6 text-center d-flex align-items-center">
                    <i className="fa-solid fa-calendar-days"></i>
                    <p className='my-1 px-1'>{car.year}</p>
                  </div>
                  <div className="col-6 text-center  d-flex align-items-center justify-content-around">
                    <img src={frame} alt="" />
                    <p className='my-1'>Automatic</p>
                  </div>
                  <div className="col-12 border-bottom"></div>

                  <div className="col-6 text-center  d-flex align-items-center justify-content-between">
                    
                    <p className=''>price</p>
                    <h6>${car.price}</h6>
                  </div>

                  <div className="col-12 d-flex align-items-center justify-content-around">
                    <button className={`btn btn-primary mt-3 ${styleCar.btn}`}>
                      View Details <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

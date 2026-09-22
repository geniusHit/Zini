import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import logo from  '../assets/Pictures/chattogram-bangladesh-april-24-2023-260nw-2292992631.webp'
import product1 from '../assets/Pictures/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
import product2 from '../assets/Pictures/81jAcDybJPL._AC_SY200_.jpg'
import product3 from '../assets/Pictures/WF1-186-116._SY116_CB636048992_.jpg'
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>

      <div className='d-flex justify-content-center p-4' style={{gap:"50px"}}>
        <div className="card" style={{width: "18rem"}}>
          <img src={logo} className="card-img-top" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">Manage About</h5>
            <p className="card-text">EComm in India has partnered with several NGOs across the country to donate hygiene aid kits, personal protective equipment kits and groceries in support of healthcare workers and communities most affected by COVID-19.</p>
            <a href="#" className="btn btn-primary">Continue</a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={product1} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={product2} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={product3} className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
          <div className="card-body">
            <h5 className="card-title">Add Products</h5>
            <p className="card-text">Products like Mobile, Tv, Books, Groceries, Fashion, Shoes can be uploaded from here.</p>
            <NavLink to="/addproducts"><a href="#" className="btn btn-primary">Continue</a></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
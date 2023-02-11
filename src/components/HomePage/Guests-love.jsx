import React, { useState } from "react";
import { Link } from "react-router-dom";

function GuestsLoveComponent() {
   
  return (
    <div className="guests-love container mt-4 mb-4">
      <h1 style={{padding: '20px 0', fontSize: '2.5rem', fontWeight: 700}}>Homes guests love</h1>
      <div className="row">
        <div className="guests-love-item col-4"> 
            <Link to={'/hotel-detail'}>
              <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-noi.jpg" alt="" />
              <div className="guests-love-item-information">
                <a style={{fontSize: '1vw', fontWeight: 700}} href="#">HANOI ROYAL PALACE HOTEL 2</a>
                <h6 className="guests-love-item-information-address">Ha Noi</h6>
                <p className="guests-love-item-information-price">Starting from $150</p>
              </div>
            </Link>
        </div>

        <div className="guests-love-item col-4"> 
            <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-noi.jpg" alt="" />
            <div className="guests-love-item-information">
              <a style={{fontSize: '1vw', fontWeight: 700}} href="#">HANOI ROYAL PALACE HOTEL 2</a>
              <h6 className="guests-love-item-information-address">Ha Noi</h6>
              <p className="guests-love-item-information-price">Starting from $150</p>
            </div>
        </div>

        <div className="guests-love-item col-4"> 
            <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-noi.jpg" alt="" />
            <div className="guests-love-item-information">
              <a style={{fontSize: '1vw', fontWeight: 700}} href="#">HANOI ROYAL PALACE HOTEL 2</a>
              <h6 className="guests-love-item-information-address">Ha Noi</h6>
              <p className="guests-love-item-information-price">Starting from $150</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default GuestsLoveComponent;
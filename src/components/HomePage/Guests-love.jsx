import React from "react";
import { Link } from "react-router-dom";

function GuestsLoveComponent(props) {
  return (
    <div className="guests-love container mt-4 mb-4">
      <h1 style={{padding: '20px 0', fontSize: '2.5rem', fontWeight: 700}}>Homes guests love</h1>
      <div className="row">
          {
            props.hotels !== undefined && props.hotels.slice(0,4).map((obj) => {
                return (
                  <div className="guests-love-item col-4">
                    <Link to={`/hotel-detail/${obj._id}`}>
                      <img src={obj.photos[0]} alt="" />
                      <div className="guests-love-item-information">
                        <a style={{fontSize: '1vw', fontWeight: 700}} href="#">{obj.name}</a>
                        <h6 className="guests-love-item-information-address">{obj.city}</h6>
                        <p className="guests-love-item-information-price">Starting from ${obj.price}</p>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
      </div>
    </div>
  );
}

export default GuestsLoveComponent;
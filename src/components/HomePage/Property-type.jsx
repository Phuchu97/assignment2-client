import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHotels } from "../../FetchApi";

function PropertyTypeComponent() {
  const [cityFill, setCityFill] = useState({
    hotel: 0,
    apartment: 0,
    resort: 0,
    villa: 0,
    cabin: 0
  });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  function handleFilterHotels(hotels) {
    console.log(hotels);
    if(hotels.length > 0 && hotels) {
      let hotel = hotels.filter(obj => obj.type === 'Hotel').length;
      let apartment = hotels.filter(obj => obj.type === 'Apartments').length;
      let resort = hotels.filter(obj => obj.type === 'Resort').length;
      let villa = hotels.filter(obj => obj.type === 'Villa').length;
      let cabin = hotels.filter(obj => obj.type === 'Cabin').length;
      setCityFill({
        hotel: hotel,
        apartment: apartment,
        resort: resort,
        villa: villa,
        cabin: cabin
      })
    }
  }
  useEffect(() => {
    getHotels((data) => {
      handleFilterHotels(data);
    })
  }, []);
  return (
    <div className="type container mt-4">
      <div className="type-content" style={{marginRight: '-8px'}}>
        <div className="mb-4" style={{padding: '10px 0'}}>
          <h1>Browse by property type</h1>
        </div>
        <Slider {...settings}>
          <div className="type-item"> 
                <img src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" alt="" />
                <div className="type-item-information">
                  <h6 className="type-item-information-name">Hotel</h6>
                  <p className="type-item-information-count">{cityFill.hotel} Hotel</p>
                </div>
          </div>

          <div className="type-item"> 
                <img src="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1" alt="" />
                <div className="type-item-information">
                  <h6 className="type-item-information-name">Apartments</h6>
                  <p className="type-item-information-count">{cityFill.apartment} apartments</p>
                </div>
          </div>

          <div className="type-item"> 
                <img src="https://media.cntraveller.com/photos/6329d7a9095c8653a1a72d06/3:2/w_3000,h_2000,c_limit/Conrad-Tulum-Riviera-Maya-sept22-pr2.jpg" alt="" />
                <div className="type-item-information">
                  <h6 className="type-item-information-name">Resorts</h6>
                  <p className="type-item-information-count">{cityFill.resort} resorts</p>
                </div>
          </div>

          <div className="type-item"> 
                <img src="https://assets.architecturaldigest.in/photos/62f4d46616c88215b7e80d3b/16:9/w_1615,h_908,c_limit/Step%20into%205%20of%20the%20most%20beautiful%20villas%20in%20Bengaluru.jpg" alt="" />
                <div className="type-item-information">
                  <h6 className="type-item-information-name">Villas</h6>
                  <p className="type-item-information-count">{cityFill.villa} villas</p>
                </div>
          </div>

          <div className="type-item"> 
                <img src="https://www.roamingtheusa.com/wp-content/uploads/2021/04/rustic-luxury-cabin-near-san-marcos-texas-1024x768.jpg" alt="" />
                <div className="type-item-information">
                  <h6 className="type-item-information-name">Cabins</h6>
                  <p className="type-item-information-count">{cityFill.cabin} cabins</p>
                </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PropertyTypeComponent;
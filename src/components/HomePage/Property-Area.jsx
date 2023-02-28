import React, { useState, useEffect } from "react";
import { getHotels } from "../../FetchApi";

function PropertyAreaComponent() {
  const [cityFill, setCityFill] = useState({
    hanoi: 0,
    danang: 0,
    hcm: 0
  });

  function handleFilterHotels(hotels) {
    if(hotels.length > 0 && hotels) {
      let getHanoi = hotels.filter(obj => obj.city === 'Ha Noi').length;
      let getDanang = hotels.filter(obj => obj.city === 'Da nang').length;
      let getHcm = hotels.filter(obj => obj.city === 'Ho Chi Minh').length;
      setCityFill({
        hanoi: getHanoi,
        danang: getDanang,
        hcm: getHcm
      })
    }
  }
  useEffect(() => {
    getHotels((data) => {
      handleFilterHotels(data);
    })
  }, []);

  return (
    <div className="container area">
      <div className="row">
        <div className="area-item col-4"> 
            <img src="https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-noi.jpg" alt="" />
            <div className="area-item-information">
              <h6 className="area-item-information-name">Ha Noi</h6>
              <p className="area-item-information-count-property">{cityFill.hanoi} Properties</p>
            </div>
        </div>
        
        <div className="area-item col-4"> 
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg" alt="" />
            <div className="area-item-information">
              <h6 className="area-item-information-name">Da nang</h6>
              <p className="area-item-information-count-property">{cityFill.danang} Properties</p>
            </div>
        </div>

        <div className="area-item col-4"> 
            <img src="https://media.vneconomy.vn/w800/images/upload/2022/07/13/dang-ky-bao-ho-nhan-hieu-tai-thanh-pho-ho-chi-minh.jpg" alt="" />
            <div className="area-item-information">
              <h6 className="area-item-information-name">Ho Chi Minh</h6>
              <p className="area-item-information-count-property">{cityFill.hcm} Properties</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyAreaComponent;
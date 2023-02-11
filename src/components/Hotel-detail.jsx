import React, { useState } from "react";
import '../css/hotel-detail.css'
import { useNavigate } from "react-router-dom";

function HotelDetailComponent() {
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(
        {
            name: 'Alagon Saigon Hotel & Spa',
            address: '147 Triều khúc - Sài gòn',
            excellent: 'Excellent-location - 640m from center',
            marketing: 'Book a stay over $400 at this property and get a free airport taxi',
            images: [
                'https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-noi.jpg',
                'https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg',
                'https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1',
                'https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1',
                'https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1',
                'https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1'
            ],
            price: 350,
            count_night: 1,
            description: 'It was our last stop for our South East Asia trip this year after Cambodia and Hanoi, Ho Chi Minh city was an amazingly modern city to my surprise! Upon arrival to the hotel, the lobby area was already out of my expectations with more than necessary marbles everywhere! It was a little "Over the top" for some folks perhaps but they really tried to imitate Las Vegas style hotels such as the Wynn...'
        }
    )

    const moveToBooking = () => {
        navigate('/booking')
    }
   
  return (
    <div className="hotel-detail container mt-4">
        <div className="hotel-detail-header">
            <h1 className="hotel-name">{hotel.name}</h1>
            <div className="hotel-address">
                <div className="hotel-address-icon"><i class="fa-solid fa-location-dot"></i></div>
                <p className="hotel-address-content">{hotel.address}</p>
            </div>
            <p className="hotel-excellent">{hotel.excellent}</p>
            <p className="hotel-marketing">{hotel.marketing}</p>
        </div>
        <ul className="hotel-list-img row">
            {
                hotel.images.map((url) => {
                    return(
                        <li className="hotel-list-img-item col-4">
                            <img src={`${url}`} alt="hotel-detail" />
                        </li>
                    )
                })
            }
        </ul>
        <div className="hotel-detail-footer row">
            <div className="hotel-detail-footer-left col-8">
                <h1 className="footer-left-name">{hotel.name}</h1>
                <p className="footer-description">{hotel.description}</p>
            </div>

            <div className="hotel-detail-footer-right col-4">
                <div className="footer-right-content" style={{height: '100%',alignSelf: 'center'}}>
                    <div className="footer-right-information">
                        <h1 className="footer-right-price">
                            ${hotel.price } 
                        </h1>
                        <h1 className="footer-right-count-night">
                            {'( '+hotel.count_night+' nights )'}
                        </h1>
                    </div>

                    <div className="footer-right-button">
                        <button onClick={moveToBooking} className="btn btn-primary">Reserve of Book now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HotelDetailComponent;
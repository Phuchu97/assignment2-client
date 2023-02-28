import React, { useEffect, useState } from "react";
import '../css/hotel-detail.css'
import { useNavigate, useParams, Link } from "react-router-dom";
import { getHotelDetail } from "../FetchApi";

function HotelDetailComponent() {
    const {id} = useParams();
    const [hotel, setHotel] = useState(
        {
            name: '',
            address: '',
            featured: '',
            marketing: '',
            photos: [],
            price: 0,
            count_night: 1,
            description: ''
        }
    )

    const hanldeGetDetail = (data) => {
        if(data.statusCode === 200) {
            setHotel(data.hotel)
        }
    }

    useEffect(() => {
        getHotelDetail(hanldeGetDetail, {id: id})
    }, [])
   
  return (
    <div className="hotel-detail container mt-4">
        <div className="hotel-detail-header">
            <h1 className="hotel-name">{hotel.name}</h1>
            <div className="hotel-address">
                <div className="hotel-address-icon"><i class="fa-solid fa-location-dot"></i></div>
                <p className="hotel-address-content">{hotel.address}</p>
            </div>
            <p className="hotel-excellent">{hotel.featured}</p>
            <p className="hotel-marketing">{hotel.marketing}</p>
        </div>
        <ul className="hotel-list-img row">
            {
                hotel.photos.map((url) => {
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
                <p className="footer-description">{hotel.title}</p>
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
                        <Link to={`/${hotel._id}/booking`}>
                            <button className="btn btn-primary">Reserve of Book now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HotelDetailComponent;
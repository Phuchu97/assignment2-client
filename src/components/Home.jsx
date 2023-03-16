import React, { useEffect, useState } from "react";
import { useParams, Routes, Route, useNavigate } from "react-router-dom";
import LoginComponent from "./Login";
import HomePageComponent from "./HomePage/HomePage";
import HotelDetailComponent from "./Hotel-detail";
import BookingFormComponent from "./booking-form";
import TransactionComponent from "./Transaction";

function HomeComponent() {
  const navigate = useNavigate()
  useEffect(() => {
    const checkToken = localStorage.getItem('token');
    if(!checkToken) {
      alert('You must to login!');
      navigate('/')
    }
  },[])
  return (
    <div className="home">
        <Routes>
          <Route path="/" element={<LoginComponent/>} />
          <Route path="/home-page" element={<HomePageComponent/>} />
          <Route path="/hotel-detail/:id" element={<HotelDetailComponent/>} />
          <Route path="/:id/booking" element={<BookingFormComponent/>} />
          <Route path="/transaction" element={<TransactionComponent/>} />
        </Routes>
    </div>
  );
}

export default HomeComponent;
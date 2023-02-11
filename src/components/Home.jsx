import React, { useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import LoginComponent from "./Login";
import HomePageComponent from "./HomePage/HomePage";
import HotelDetailComponent from "./Hotel-detail";
import BookingFormComponent from "./booking-form";
import TransactionComponent from "./Transaction";

function HomeComponent() {
   
  return (
    <div className="home">
        <Routes>
          <Route path="/" element={<LoginComponent/>} />
          <Route path="/home-page" element={<HomePageComponent/>} />
          <Route path="/hotel-detail" element={<HotelDetailComponent/>} />
          <Route path="/booking" element={<BookingFormComponent/>} />
          <Route path="/transaction" element={<TransactionComponent/>} />
        </Routes>
    </div>
  );
}

export default HomeComponent;
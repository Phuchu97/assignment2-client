import React, { useState } from "react";
import '../css/transaction.css'
import { Table  } from "react-bootstrap";
import { Link } from "react-router-dom";

function TransactionComponent() {

    // Payment method : 0-Credit Card, 1-Cash
    // Status: 0-Booked, 1-Checkin, 2-Checkout
   const[data, setData] = useState([
    {
        id: 0,
        name: 'Alagon Saigon Hotel & Spa',
        rooms: [101,201],
        start_date: '01/10/2022',
        end_date: '03/10/2022',
        price: 2100,
        payment_method: 0,
        status: 0
    },
    {
        id: 0,
        name: 'Alagon Saigon Hotel & Spa',
        rooms: [101,201],
        start_date: '01/10/2022',
        end_date: '03/10/2022',
        price: 2100,
        payment_method: 1,
        status: 1
    },
    {
        id: 0,
        name: 'Alagon Saigon Hotel & Spa',
        rooms: [101,201],
        start_date: '01/10/2022',
        end_date: '03/10/2022',
        price: 2100,
        payment_method: 1,
        status: 2
    }
   ])
   
  return (
    <div className="hotel-detail container mt-4 mb-4">
        <div className="transaction-hearder">
            <div className="header-above">
                <h1 className="transaction-title">Transaction</h1>
                <div className="transaction-btn">
                    <button className="btn btn-primary btn-home">Home page</button>
                    <button className="btn btn-danger btn-logout">Logout</button>
                </div>
            </div>

            <div className="header-down">
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-bed"></i></span> Stays
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-plane"></i></span> Flights
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-car"></i></span> Car rentals
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-bed"></i></span> Attractions
                </button>
                <button className="header-down-item btn">
                    <span className="header-down-item-icon"><i class="fa-solid fa-taxi"></i></span> Airport taxis
                </button>
            </div>
        </div>

        <div className="transaction-content">
            <div className="transaction-table">
                <h2 className="transaction-table-title">Your transaction</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th style={{minWidth: '170px'}}>Hotel</th>
                        <th>Room</th>
                        <th style={{minWidth: '120px'}}>Date</th>
                        <th>Price</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((obj) => {
                                return(
                                    <tr>
                                        <td>#</td>
                                        <td>{obj.name}</td>
                                        <td>{obj.rooms.map((room)=>{return(<span>{room},</span>)})}</td>
                                        <td>{obj.start_date+' - '+obj.end_date}</td>
                                        <td>${obj.price}</td>
                                        <td>{obj.payment_method===0? 'Credit card' : 'Cash'}</td>
                                        <td>
                                            <button style={{fontSize: '0.8em'}} className={obj.status===0? 'btn btn-danger' : `${obj.status===1? 'btn btn-success' : 'btn btn-primary'}`}>
                                                {obj.status===0? 'Booked' : `${obj.status===1? 'Checkin' : 'Checkout'}`}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>

        <div className="transaction-footer">

        </div>
    </div>
  );
}

export default TransactionComponent;